"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
    }> = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(66, 99, 235, 0.4)"
        ctx.fill()

        particles.forEach((p2, j) => {
          if (i === j) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(66, 99, 235, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-30" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-light relative overflow-hidden group animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-600 relative z-10" />
            <span className="text-sm font-semibold relative z-10">L'Excellence Scientifique au Cœur de l'Été</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
            Un pont entre le lycée et la{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              recherche mondiale
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            FMA réunit chaque été les lycéens les plus passionnés du Maroc pour une immersion intensive dans la physique
            moderne, encadrée par des étudiants des plus grandes écoles internationales.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-2.5 px-5 py-3 glass-light rounded-xl hover:glass transition-all duration-300 group">
              <Calendar className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Été 2026</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 glass-light rounded-xl hover:glass transition-all duration-300 group">
              <MapPin className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Lieu à annoncer</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 glass-light rounded-xl hover:glass transition-all duration-300 group">
              <Users className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Tronc Commun & 1ère Bac</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up [animation-delay:400ms]">
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300"
              asChild
            >
              <Link href="/experience">
                <span className="mr-2">Découvrir l'Expérience</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 glass-light hover:glass transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/candidature">Préparer l'édition 2026</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
