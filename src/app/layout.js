import { Inter } from "next/font/google";
import Script from "next/script";
import "highlight.js/styles/atom-one-dark.css";
import "./globals.css";

const UMAMI_WEBSITE_ID = "9127bbd1-e384-461d-b56a-c5a6a3afc20f";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Sio Jurnalis Pipin - Portofolio",
    template: "%s | Sio Jurnalis Pipin"
  },
  description:
    "Portfolio Sio Jurnalis Pipin – Dosen IT, programmer fullstack, dan penulis buku. Lihat proyek web & mobile untuk kampus, klinik, pemerintah, startup, serta buku-buku literasi digital, startup, Big Data, jaringan komputer, dan pembelajaran mesin.",
  keywords: [
    "Sio Jurnalis Pipin",
    "SioPipin",
    "portfolio",
    "web portfolio",
    "dosen IT",
    "programmer",
    "programmer medan",
    "jasa buat aplikasi",
    "jasa programming web",
    "buat web murah medan",
    "web developer",
    "mobile developer",
    "fullstack developer",
    "Flutter",
    "Next.js",
    "Express.js",
    "Firebase",
    "sistem informasi akademik",
    "aplikasi klinik",
    "startup digital",
    "literasi digital",
    "Big Data",
    "jaringan komputer",
    "pembelajaran mesin",
    "buku teknologi informasi",
  ],
  authors: [{ name: "Sio Jurnalis Pipin", url: "https://siopipin.my.id" }],
  creator: "Sio Jurnalis Pipin",
  publisher: "Sio Jurnalis Pipin",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://siopipin.my.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sio Jurnalis Pipin - Dosen IT, Fullstack Developer, Penulis",
    description:
      "Portfolio proyek web & mobile, aplikasi kampus, klinik, pemerintah, startup, serta buku-buku literasi digital dan teknologi.",
    url: 'https://siopipin.my.id',
    siteName: 'Portfolio Sio Jurnalis Pipin',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Sio Jurnalis Pipin',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sio Jurnalis Pipin - Dosen IT & Fullstack Developer",
    description:
      "Proyek web & mobile, aplikasi kampus & klinik, serta buku literasi digital, startup, Big Data, jaringan komputer, dan pembelajaran mesin.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Script
          src="https://cloud.umami.is/script.js"
          strategy="lazyOnload"
          data-website-id={UMAMI_WEBSITE_ID}
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {children}
        </div>
      </body>
    </html>
  );
}
