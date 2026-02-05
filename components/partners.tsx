"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

function PartnerLogo({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="partner-logo"
      onError={() => setImgSrc('/images/fma-logo.png')}
      loading="lazy"
    />
  )
}

export function Partners() {
  const partners = [
    { name: "Math & Maroc", logo: "/mathmaroc.jpg", url: "https://mathmaroc.org" },
    { name: "UM6P", logo: "/um6p-university-logo.jpg", url: "https://www.um6p.ma" },
    {
      name: "OCP Foundation",
      logo: "/ocp-foundation-logo-green.jpg",
      url: "https://www.ocpgroup.ma",
    },
    {
      name: "CDG Capital",
      logo: "/cdg-morocco-logo.jpg",
      url: "https://www.cdg.ma",
    },
    { name: "Lycée Mohammed VI d'Excellence", logo: "/lycee-mohammed-vi-logo.jpg", url: "https://www.lyceexcellence.ma" },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const tweenRef = useRef<any>(null)

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return
    const ctx = gsap.context(() => {
      // Calculate width of one cycle (we duplicate the list)
      const totalWidth = trackRef.current!.scrollWidth
      const oneCycle = totalWidth / 2

      // Use pixel translation with modifiers to keep values gapless
      const t = gsap.to(trackRef.current, {
        x: `-=${oneCycle}`,
        ease: "none",
        duration: 20, // faster speed (lower = faster)
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            // x comes as something like "-1234px" — convert to number
            const n = parseFloat(x)
            // keep in range using modulo; return as px via unitize
            return String(n % (-oneCycle))
          }),
        },
      })

      // make the animation start halfway to avoid visible jump on mount
      t.totalTime(t.duration() / 2)

      tweenRef.current = t
    }, containerRef)

    return () => ctx.revert()
  }, [])

  function onContainerEnter() {
    const t = tweenRef.current
    if (t) {
      // Smoothly slow to a stop (timeScale -> 0) over 700ms
      gsap.to(t, { timeScale: 0.001, duration: 0.7, ease: "power2.out" })
    }
  }

  function onContainerLeave() {
    const t = tweenRef.current
    if (t) {
      // Smoothly restore speed (timeScale -> 1)
      gsap.to(t, { timeScale: 1, duration: 0.8, ease: "power2.out" })
    }
  }

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="section-title">Nos Partenaires</h2>
        <p className="section-subtitle">Ils soutiennent notre vision d'excellence scientifique</p>

        <div className="partners-divider"></div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-container">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="partner-logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<div class="logo-fallback">${partner.name}</div>`
                    }
                  }}
                />
              </div>
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
