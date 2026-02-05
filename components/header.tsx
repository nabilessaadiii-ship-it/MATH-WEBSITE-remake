"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-strong py-3 shadow-lg shadow-primary/5" : "glass py-4"}`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/images/fma-logo.png"
              alt="FMA - Feynman Moroccan Adventure Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-lg leading-tight">Feynman Moroccan Adventure</div>
            <div className="text-xs text-muted-foreground">Excellence Scientifique</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Accueil
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/programmes" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Programmes
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/experience" className="text-sm font-medium hover:text-primary transition-colors relative group">
            L'Expérience
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/edition-precedente"
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Édition 2025
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/candidature" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Candidature 2026
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Button
            size="sm"
            className="relative group overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            asChild
          >
            <Link href="/candidature">
              <span className="relative z-10">Candidater</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-border/50 mt-3">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/programmes"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programmes
            </Link>
            <Link
              href="/experience"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              L'Expérience
            </Link>
            <Link
              href="/edition-precedente"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Édition 2025
            </Link>
            <Link
              href="/candidature"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Candidature 2026
            </Link>
            <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent" asChild>
              <Link href="/candidature">Candidater</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
