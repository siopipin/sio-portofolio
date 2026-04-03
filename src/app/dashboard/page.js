import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  ExternalLink,
  Eye,
  Users,
  MousePointerClick,
  Clock,
  Activity,
  Calendar,
} from "lucide-react";
import { getUmamiDashboardData } from "@/lib/umami";
import { getGithubDashboardData } from "@/lib/github";
import GithubActivitySection from "@/components/dashboard/GithubActivitySection";

export const metadata = {
  title: "Dashboard",
  description:
    "Ringkasan analitik dan widget lain untuk portofolio (Umami, GitHub, dll.).",
};

function formatTotalTimeMs(ms) {
  if (ms == null || !Number.isFinite(ms) || ms <= 0) return "—";
  const sec = Math.floor(ms / 1000);
  if (sec < 60) return `${sec} dtk`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} mnt`;
  const h = Math.floor(min / 60);
  if (h < 48) return `${h} jam`;
  const d = Math.floor(h / 24);
  return `${d} hari`;
}

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/80">
      <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
        <Icon className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="mt-3 text-2xl font-semibold tabular-nums text-slate-900 dark:text-white">
        {value}
      </p>
      {sub ? (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</p>
      ) : null}
    </div>
  );
}

function UmamiSection({ data }) {
  if (!data.configured) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <BarChart3 className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          Umami Analytics
        </h3>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Pelacakan sudah aktif lewat script di situs. Untuk menampilkan angka
          di halaman ini, tambahkan{" "}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs dark:bg-slate-700">
            UMAMI_API_KEY
          </code>{" "}
          di environment (mis. Vercel → Settings → Environment Variables).
          Buat kunci di{" "}
          <a
            href="https://cloud.umami.is/"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Umami Cloud
          </a>{" "}
          → Settings → API keys.
        </p>
        <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
          Opsional:{" "}
          <code className="rounded bg-slate-200 px-1 py-0.5 dark:bg-slate-700">
            UMAMI_WEBSITE_ID
          </code>{" "}
          jika berbeda dari id di script pelacakan.
        </p>
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50/80 p-6 dark:border-red-900/50 dark:bg-red-950/30">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Umami — gagal memuat statistik
        </h3>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          {data.error}. Periksa API key dan id website.
        </p>
      </div>
    );
  }

  const { stats, active, rangeLabel } = data;
  const activeNow =
    active?.visitors != null ? String(active.visitors) : "—";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Umami Analytics
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Ringkasan {rangeLabel} (di-cache beberapa menit).
          </p>
        </div>
        <a
          href="https://cloud.umami.is/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700/80"
        >
          Buka Umami Cloud
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={Activity}
          label="Aktif (~5 menit)"
          value={activeNow}
          sub="Pengunjung unik terkini"
        />
        <StatCard
          icon={Eye}
          label="Pageviews"
          value={stats.pageviews?.toLocaleString("id-ID") ?? "—"}
        />
        <StatCard
          icon={Users}
          label="Pengunjung unik"
          value={stats.visitors?.toLocaleString("id-ID") ?? "—"}
        />
        <StatCard
          icon={MousePointerClick}
          label="Kunjungan (sesi)"
          value={stats.visits?.toLocaleString("id-ID") ?? "—"}
        />
        <StatCard
          icon={BarChart3}
          label="Bounce (kunjungan 1 halaman)"
          value={stats.bounces?.toLocaleString("id-ID") ?? "—"}
        />
        <StatCard
          icon={Clock}
          label="Total waktu di situs"
          value={formatTotalTimeMs(stats.totaltime)}
          sub="Agregat periode (bukan rata-rata per kunjungan)"
        />
      </div>
    </section>
  );
}

function PlaceholderSection({ icon: Icon, title, description }) {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 dark:border-slate-600 dark:bg-slate-900/40">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
        <Icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </section>
  );
}

export default async function DashboardPage() {
  const [umamiData, githubData] = await Promise.all([
    getUmamiDashboardData(),
    getGithubDashboardData(),
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="flex flex-wrap items-center gap-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            <LayoutDashboard className="h-9 w-9 text-blue-600 dark:text-blue-400" />
            Dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
            Pusat ringkasan untuk analitik dan integrasi lain. Bagian di bawah
            bisa ditambah bertahap (kalender GitHub, metrik lain, dll.).
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <UmamiSection data={umamiData} />
          <GithubActivitySection data={githubData} />
          <PlaceholderSection
            icon={Calendar}
            title="Kalender & agenda"
            description="Nanti: event atau milestone yang ingin ditampilkan di sini."
          />
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Kembali ke beranda
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
