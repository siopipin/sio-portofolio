/** Default website id (same as tracking script `data-website-id`). */
export const UMAMI_DEFAULT_WEBSITE_ID =
  "9127bbd1-e384-461d-b56a-c5a6a3afc20f";

/**
 * Fetches Umami Cloud stats (server-only). Requires UMAMI_API_KEY.
 * @see https://docs.umami.is/docs/cloud/api-key
 */
export async function getUmamiDashboardData() {
  const apiKey = process.env.UMAMI_API_KEY;
  const websiteId =
    process.env.UMAMI_WEBSITE_ID || UMAMI_DEFAULT_WEBSITE_ID;
  const base = (
    process.env.UMAMI_API_CLIENT_ENDPOINT || "https://api.umami.is/v1"
  ).replace(/\/$/, "");

  if (!apiKey) {
    return { configured: false, websiteId };
  }

  const endAt = Date.now();
  const startAt = endAt - 30 * 24 * 60 * 60 * 1000;

  const headers = {
    Accept: "application/json",
    "x-umami-api-key": apiKey,
  };

  const statsUrl = `${base}/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`;
  const activeUrl = `${base}/websites/${websiteId}/active`;

  const [statsRes, activeRes] = await Promise.all([
    fetch(statsUrl, { headers, next: { revalidate: 300 } }),
    fetch(activeUrl, { headers, next: { revalidate: 60 } }),
  ]);

  if (!statsRes.ok) {
    const body = await statsRes.text();
    return {
      configured: true,
      websiteId,
      error: `stats:${statsRes.status}`,
      errorDetail: body.slice(0, 200),
    };
  }

  const stats = await statsRes.json();
  let active = null;
  if (activeRes.ok) {
    active = await activeRes.json();
  } else {
    active = { visitors: null, error: activeRes.status };
  }

  return {
    configured: true,
    websiteId,
    stats,
    active,
    rangeLabel: "30 hari terakhir",
  };
}
