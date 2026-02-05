"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { useEffect, useState } from "react"

export function SocialSidebar() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollBottom = scrollTop + windowHeight

      // Start fading when 200px from bottom
      const fadeStart = documentHeight - windowHeight - 200
      const fadeEnd = documentHeight - windowHeight

      if (scrollTop > fadeStart) {
        const fadeProgress = (scrollTop - fadeStart) / (fadeEnd - fadeStart)
        setOpacity(Math.max(0, 1 - fadeProgress))
      } else {
        setOpacity(1)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  // </CHANGE>

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="flex flex-col gap-3 p-3 rounded-full glass-strong backdrop-blur-xl shadow-xl border border-white/20">
        <a
          href="https://www.linkedin.com/company/mathemaroc/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#334155] hover:bg-[#0077B5] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.instagram.com/mathmaroc/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#334155] hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.youtube.com/@mathmaroc1396"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#334155] hover:bg-[#FF0000] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.facebook.com/MathsMaroc2"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#334155] hover:bg-[#1877F2] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  )
}
