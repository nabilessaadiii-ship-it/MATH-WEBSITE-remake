import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FMA | Feynman Moroccan Adventure - Camp de Physique",
  description:
    "Camp d'été intensif en physique pour lycéens marocains. 6 jours d'immersion scientifique au Lycée Mohammed VI, Benguerir. Cours, ateliers et conférences avec des experts internationaux.",
  generator: "v0.app",
  keywords: ["physique", "camp d'été", "lycéens", "Maroc", "sciences", "éducation", "Math&Maroc", "FMA", "Feynman"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/icon-light-32x32.png" />
        <link rel="icon" href="/icon-light-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
