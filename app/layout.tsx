import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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
    icon: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      html>
  )
}
