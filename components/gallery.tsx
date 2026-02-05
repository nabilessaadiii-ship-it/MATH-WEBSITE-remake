"use client"

import React, { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import gsap from "gsap"

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  const sectionRef = useRef<HTMLElement>(null)
  const mainImageRef = useRef<HTMLImageElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  const images = [
    {
      url: "/images/498919422-18071561114477696-7377811035061315933-n.jpg",
      alt: "Photo de groupe FMA 2025 - Tous les participants",
    },
    {
      url: "/images/519898947-18071561039477696-5181012918862788516-n.jpg",
      alt: "Cours de physique - Salle de classe",
    },
    {
      url: "/images/520796267-18071561078477696-833809233401744959-n.jpg",
      alt: "Conférence - Exploring life beyond Earth",
    },
    {
      url: "/images/520147570-18071561030477696-6069777892842373702-n.jpg",
      alt: "Présentation Math&Maroc",
    },
    {
      url: "/images/521352896-18071561057477696-3889472538603712929-n.jpg",
      alt: "Cours de physique avec équipes au tableau",
    },
    {
      url: "/images/518853453-18071561021477696-1864809094579073644-n.jpg",
      alt: "Témoignage de participantes",
    },
    {
      url: "/images/519682849-18071561087477696-6280352850368943885-n.jpg",
      alt: "Conférence scientifique",
    },
    {
      url: "/images/518700235-18071560994477696-3984464004709011507-n.jpg",
      alt: "Arrivée des participants avec valises",
    },
    {
      url: "/images/519925616-18071561003477696-5987040142600534729-n.jpg",
      alt: "Photo de groupe - Départ",
    },
  ]

  // Initial animation on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate main image
            gsap.fromTo(
              entry.target,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            )
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const mainImage = sectionRef.current?.querySelector(".main-gallery-image")
    if (mainImage) observer.observe(mainImage)

    return () => observer.disconnect()
  }, [])

  // Animate image transition
  const animateTransition = (newIndex: number, direction: 'next' | 'prev' = 'next') => {
    if (animationRef.current) {
      animationRef.current.kill()
    }

    const oldImage = mainImageRef.current
    if (!oldImage) return

    // Clear any ongoing animations
    gsap.killTweensOf(oldImage)

    // Set initial state based on direction
    const fromX = direction === 'next' ? 60 : -60
    const toX = direction === 'next' ? -60 : 60

    // Animate out current image
    animationRef.current = gsap.to(oldImage, {
      x: toX,
      opacity: 0,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Update image source
        setActiveIndex(newIndex)
        
        // Reset position and animate in
        gsap.set(oldImage, { x: fromX, opacity: 0, scale: 1 })
        
        gsap.to(oldImage, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.05
        })
      }
    })
  }

  // Autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        const nextIndex = (activeIndex + 1) % images.length
        animateTransition(nextIndex, 'next')
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, activeIndex])

  const nextImage = () => {
    setIsAutoPlaying(false)
    const nextIndex = (activeIndex + 1) % images.length
    animateTransition(nextIndex, 'next')
  }

  const prevImage = () => {
    setIsAutoPlaying(false)
    const prevIndex = (activeIndex - 1 + images.length) % images.length
    animateTransition(prevIndex, 'prev')
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextImage()
    } else if (distance < -minSwipeDistance) {
      prevImage()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === " ") {
        e.preventDefault()
        setIsAutoPlaying((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Cleanup animations on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      gsap.killTweensOf(mainImageRef.current)
    }
  }, [])

  return (
    <section className="py-12 md:py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Galerie <span className="text-accent">Photos</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'ambiance et les moments forts des éditions précédentes de FMA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="main-gallery-image relative aspect-[16/9] rounded-2xl overflow-hidden glass-light group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-full">
              <img
                ref={mainImageRef}
                src={images[activeIndex].url || "/placeholder.svg"}
                alt={images[activeIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full glass-strong hover:glass hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-80 md:opacity-0 group-hover:opacity-100"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full glass-strong hover:glass hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-80 md:opacity-0 group-hover:opacity-100"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full glass-strong hover:glass hover:scale-110 transition-all duration-300 flex items-center justify-center opacity-80 md:opacity-0 group-hover:opacity-100"
              aria-label={isAutoPlaying ? "Pause" : "Play"}
            >
              {isAutoPlaying ? (
                <Pause className="w-3 h-3 md:w-4 md:h-4" />
              ) : (
                <Play className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
              )}
            </button>

            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-full glass-strong backdrop-blur-md">
                <span className="text-xs font-medium">
                  {activeIndex + 1} / {images.length}
                </span>
              </div>
              
              <div className="flex gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      const direction = index > activeIndex ? 'next' : 'prev'
                      animateTransition(index, direction)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}