import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Nathan Dantas - Transforme seu Sorriso | Odontologia de Excelência",
  description: "Especialista em odontologia geral, restaurações, clareamento dental e facetas. Transforme sua vida com tratamentos modernos e atendimento humanizado. Agende sua consulta!",
  keywords: "dentista, odontologia, restaurações, clareamento dental, facetas resina, limpeza dental, extrações, raspagem periodontal, Aracaju, Dr. Nathan Dantas",
  authors: [{ name: "Dr. Nathan Dantas" }],
  creator: "Dr. Nathan Dantas",
  publisher: "Clínica Odontológica Dr. Nathan Dantas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drnathandantas.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Nathan Dantas - Transforme seu Sorriso",
    description: "Especialista em odontologia geral, restaurações, clareamento dental e facetas. Transforme sua vida com tratamentos modernos e atendimento humanizado.",
    url: 'https://drnathandantas.com.br',
    siteName: 'Dr. Nathan Dantas',
    images: [
      {
        url: '/midia/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nathan Dantas - Consultório Odontológico',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Nathan Dantas - Transforme seu Sorriso",
    description: "Especialista em odontologia geral, restaurações, clareamento dental e facetas. Transforme sua vida com tratamentos modernos e atendimento humanizado.",
    images: ['/midia/banner.jpg'],
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
  icons: {
    icon: [
      { url: '/logo.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/logo.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/logo.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.ico" />
        <meta name="theme-color" content="#2F80ED" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dr. Nathan Dantas" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2F80ED" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}