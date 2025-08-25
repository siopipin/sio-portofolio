 import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "SioWeb - Portfolio Personal",
    template: "%s | SioWeb"
  },
  description: "Portfolio personal SioWeb - Dosen IT, Programmer, dan Penulis. Temukan karya-karya pengembangan aplikasi, artikel, dan publikasi akademik.",
  keywords: ["portfolio", "dosen IT", "programmer", "web developer", "mobile developer", "fullstack developer", "artikel", "publikasi"],
  authors: [{ name: "SioWeb" }],
  creator: "SioWeb",
  publisher: "SioWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sioweb.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SioWeb - Portfolio Personal",
    description: "Portfolio personal SioWeb - Dosen IT, Programmer, dan Penulis",
    url: 'https://sioweb.vercel.app',
    siteName: 'SioWeb Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SioWeb Portfolio',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SioWeb - Portfolio Personal",
    description: "Portfolio personal SioWeb - Dosen IT, Programmer, dan Penulis",
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
    <html lang="id">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {children}
        </div>
      </body>
    </html>
  );
}
