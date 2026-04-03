import { Fragment } from "react";
import {
  Github,
  ExternalLink,
  Users,
  UserPlus,
  FolderGit2,
  GitCommit,
  CalendarDays,
  TrendingUp,
  Award,
} from "lucide-react";
import { CONTRIBUTION_LEVEL_CLASS } from "@/lib/github";

/** Urutan sama seperti API GitHub: indeks 0 = Minggu … 6 = Sabtu */
const WEEKDAY_LABELS_ID = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

/**
 * Label bulan per kolom minggu: pakai Kamis minggu itu agar transisi bulan natural.
 */
function buildMonthLabels(weeks) {
  if (!weeks?.length) return [];
  return weeks.map((week, i) => {
    const days = week.contributionDays || [];
    const thu = days[4] || days[days.length - 1];
    if (!thu?.date) return "";
    const ym = thu.date.slice(0, 7);
    const prev = weeks[i - 1]?.contributionDays || [];
    const prevThu = prev[4] || prev[prev.length - 1];
    const prevYm = prevThu?.date?.slice(0, 7);
    if (i !== 0 && ym === prevYm) return "";
    const [y, m] = thu.date.split("-").map(Number);
    return new Date(y, m - 1, 15).toLocaleDateString("id-ID", {
      month: "short",
    });
  });
}

function GhStat({ icon: Icon, label, value, valueClass }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/60">
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <Icon className="h-4 w-4 shrink-0 text-slate-600 dark:text-slate-300" />
        <span className="text-xs font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
      <p
        className={
          valueClass ||
          "mt-2 text-xl font-semibold tabular-nums text-slate-900 dark:text-white"
        }
      >
        {value}
      </p>
    </div>
  );
}

function formatIdDate(ymd) {
  if (!ymd) return "—";
  const [y, m, d] = ymd.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GithubActivitySection({ data }) {
  if (!data.ok) {
    return (
      <section className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <Github className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          GitHub
        </h3>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          {data.message ||
            "Tambahkan GITHUB_TOKEN dan GITHUB_USERNAME di .env.local atau Vercel (variabel server, bukan NEXT_PUBLIC)."}
        </p>
      </section>
    );
  }

  const {
    login,
    name,
    avatarUrl,
    profileUrl,
    followers,
    following,
    repositoryCount,
    totalContributions,
    thisWeekContributions,
    bestDay,
    dailyAverage,
    rangeDays,
    weeks,
  } = data;

  const bestDayLabel =
    bestDay.count > 0
      ? `${formatIdDate(bestDay.date)} (${bestDay.count} kontribusi)`
      : "—";

  const monthLabels = buildMonthLabels(weeks || []);

  return (
    <section className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarUrl}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full border border-slate-200 dark:border-slate-600"
          />
          <div>
            <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <Github className="h-5 w-5 text-slate-800 dark:text-slate-100" />
              {name || login}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              @{login}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
              Kalender: ~{rangeDays} hari terakhir (di-cache ~1 jam).
            </p>
          </div>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700/80"
        >
          Profil GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <GhStat icon={Users} label="Pengikut" value={followers.toLocaleString("id-ID")} />
        <GhStat
          icon={UserPlus}
          label="Mengikuti"
          value={following.toLocaleString("id-ID")}
        />
        <GhStat
          icon={FolderGit2}
          label="Repositori"
          value={repositoryCount.toLocaleString("id-ID")}
        />
        <GhStat
          icon={GitCommit}
          label="Kontribusi (periode)"
          value={totalContributions.toLocaleString("id-ID")}
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <GhStat
          icon={CalendarDays}
          label="Minggu ini"
          value={thisWeekContributions.toLocaleString("id-ID")}
        />
        <GhStat
          icon={Award}
          label="Hari terbaik"
          value={bestDayLabel}
          valueClass="mt-2 text-sm font-semibold leading-snug text-slate-900 dark:text-white"
        />
        <GhStat
          icon={TrendingUp}
          label="Rata-rata harian"
          value={dailyAverage.toLocaleString("id-ID")}
        />
      </div>

      <div className="mt-8">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Kalender kontribusi
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-500">
            Kolom = minggu; baris = hari (Min–Sab, seperti di GitHub).
          </p>
        </div>
        <div className="w-full min-w-0">
          {(weeks || []).length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Belum ada data minggu untuk kalender.
            </p>
          ) : (
            <div
              className="grid w-full gap-x-1 gap-y-1 overflow-visible sm:gap-x-1.5 sm:gap-y-1.5"
              style={{
                gridTemplateColumns: `minmax(2rem, 2.75rem) repeat(${(weeks || []).length}, minmax(0, 1fr))`,
              }}
            >
              <div className="h-7 shrink-0" aria-hidden />
              {(weeks || []).map((_, wi) => (
                <div
                  key={`m-${wi}`}
                  className="relative z-0 flex h-7 items-end justify-start overflow-visible pb-0.5 pl-0.5"
                >
                  {monthLabels[wi] ? (
                    <span className="relative z-10 whitespace-nowrap text-[10px] font-medium leading-none text-slate-600 dark:text-slate-400 sm:text-xs">
                      {monthLabels[wi]}
                    </span>
                  ) : null}
                </div>
              ))}
              {WEEKDAY_LABELS_ID.map((dayLabel, row) => (
                <Fragment key={`dow-${row}`}>
                  <div
                    className="flex min-h-0 min-w-0 items-center justify-end pr-1 text-[10px] font-medium text-slate-500 dark:text-slate-400 sm:pr-1.5 sm:text-xs"
                    title={dayLabel}
                  >
                    {dayLabel}
                  </div>
                  {(weeks || []).map((week, wi) => {
                    const day = (week.contributionDays || [])[row];
                    if (!day) {
                      return (
                        <div
                          key={`${wi}-${row}`}
                          className="aspect-square w-full min-w-0 rounded-sm bg-transparent"
                        />
                      );
                    }
                    const level = day.contributionLevel || "NONE";
                    const cls =
                      CONTRIBUTION_LEVEL_CLASS[level] ||
                      CONTRIBUTION_LEVEL_CLASS.NONE;
                    const title = `${day.date}: ${day.contributionCount} kontribusi`;
                    return (
                      <div
                        key={day.date}
                        title={title}
                        className={`aspect-square w-full min-w-0 rounded-sm ${cls}`}
                      />
                    );
                  })}
                </Fragment>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>Lebih sedikit</span>
          <div className="flex gap-1">
            {[
              "NONE",
              "FIRST_QUARTILE",
              "SECOND_QUARTILE",
              "THIRD_QUARTILE",
              "FOURTH_QUARTILE",
            ].map((lvl) => (
              <div
                key={lvl}
                className={`h-3 w-3 rounded-sm ${CONTRIBUTION_LEVEL_CLASS[lvl]}`}
              />
            ))}
          </div>
          <span>Lebih banyak</span>
        </div>
      </div>
    </section>
  );
}
