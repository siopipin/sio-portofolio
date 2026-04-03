const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const DASHBOARD_QUERY = `
  query Dashboard($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      login
      name
      avatarUrl
      url
      followers { totalCount }
      following { totalCount }
      repositories(ownerAffiliations: OWNER, first: 1) {
        totalCount
      }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

function mondayStartUTC(d) {
  const x = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
  );
  const dow = x.getUTCDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  x.setUTCDate(x.getUTCDate() + diff);
  x.setUTCHours(0, 0, 0, 0);
  return x;
}

function parseDayDate(s) {
  const [y, m, day] = s.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, day));
}

function dayInRange(dateStr, start, end) {
  const t = parseDayDate(dateStr).getTime();
  return t >= start.getTime() && t <= end.getTime();
}

function computeDerivedStats(weeks, totalContributions, from, to) {
  const days = [];
  for (const w of weeks || []) {
    for (const d of w.contributionDays || []) {
      days.push(d);
    }
  }

  const now = new Date();
  const mon = mondayStartUTC(now);
  const sun = new Date(mon);
  sun.setUTCDate(sun.getUTCDate() + 6);
  sun.setUTCHours(23, 59, 59, 999);

  let thisWeek = 0;
  for (const d of days) {
    if (dayInRange(d.date, mon, sun)) {
      thisWeek += d.contributionCount || 0;
    }
  }

  let best = { date: null, count: 0 };
  for (const d of days) {
    const c = d.contributionCount || 0;
    if (c > best.count) {
      best = { date: d.date, count: c };
    }
  }

  const spanDays = Math.max(
    1,
    Math.ceil((to.getTime() - from.getTime()) / 86400000)
  );
  const dailyAverage =
    Math.round((totalContributions / spanDays) * 10) / 10;

  return { days, thisWeek, bestDay: best, dailyAverage, spanDays };
}

/**
 * Data GitHub untuk dashboard (server-only). Butuh GITHUB_TOKEN + GITHUB_USERNAME.
 */
export async function getGithubDashboardData() {
  const token = process.env.GITHUB_TOKEN;
  const login = (process.env.GITHUB_USERNAME || "").trim();

  if (!token || !login) {
    return {
      ok: false,
      error: "missing_env",
      message:
        "Set GITHUB_TOKEN dan GITHUB_USERNAME di environment (server-only).",
    };
  }

  const to = new Date();
  const from = new Date(to);
  from.setUTCFullYear(from.getUTCFullYear() - 1);

  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: DASHBOARD_QUERY,
      variables: {
        login,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();

  if (!res.ok) {
    return {
      ok: false,
      error: "http",
      message: `GitHub HTTP ${res.status}`,
    };
  }

  if (json.errors?.length) {
    return {
      ok: false,
      error: "graphql",
      message: json.errors.map((e) => e.message).join("; "),
    };
  }

  const user = json.data?.user;
  if (!user) {
    return {
      ok: false,
      error: "not_found",
      message: `Pengguna "${login}" tidak ditemukan.`,
    };
  }

  const cal = user.contributionsCollection?.contributionCalendar;
  const weeks = cal?.weeks || [];
  const totalContributions = cal?.totalContributions ?? 0;

  const derived = computeDerivedStats(weeks, totalContributions, from, to);

  return {
    ok: true,
    login: user.login,
    name: user.name,
    avatarUrl: user.avatarUrl,
    profileUrl: user.url,
    followers: user.followers?.totalCount ?? 0,
    following: user.following?.totalCount ?? 0,
    repositoryCount: user.repositories?.totalCount ?? 0,
    totalContributions,
    thisWeekContributions: derived.thisWeek,
    bestDay: derived.bestDay,
    dailyAverage: derived.dailyAverage,
    rangeDays: derived.spanDays,
    weeks,
  };
}

export const CONTRIBUTION_LEVEL_CLASS = {
  NONE: "bg-slate-800/80 ring-1 ring-slate-700/80 dark:bg-slate-800 dark:ring-slate-600",
  FIRST_QUARTILE:
    "bg-emerald-900/90 ring-1 ring-emerald-800/50 dark:bg-emerald-900/80",
  SECOND_QUARTILE:
    "bg-emerald-700/90 ring-1 ring-emerald-600/50 dark:bg-emerald-700",
  THIRD_QUARTILE:
    "bg-emerald-500/95 ring-1 ring-emerald-400/40 dark:bg-emerald-500",
  FOURTH_QUARTILE:
    "bg-emerald-400 ring-1 ring-emerald-300/50 dark:bg-emerald-300",
};
