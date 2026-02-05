"use client"

import { Calendar, Users, Award, MapPin } from "lucide-react"

export function EditionHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image - Add your group photo here */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fma-group-2025.jpg"  // Change to your actual image path
          alt="Participants du Feynman Moroccan Adventure 2025" 
          className="w-full h-full object-cover"
        />
        {/* Light overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/10 to-white/90" />
      </div>

      {/* Keep your original animated blobs but with lower opacity */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-light animate-fade-in-up">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold">Édition Inaugurale 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
            Feynman Moroccan Adventure{" "}
            <span className="text-4xl md:text-6xl block mt-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              Première Édition
            </span>
          </h1>

          {/* Description - UPDATED WITH VERIFIED DETAILS */}
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Du 14 au 20 juillet 2025, au Lycée Mohammed VI d'Excellence à Benguérir, des lycéens passionnés ont vécu la première édition du Feynman Moroccan Adventure (FMA) – un camp de physique immersive organisé par Math&Maroc.
          </p>

          {/* Info Cards - Updated location */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-2.5 px-5 py-3 glass-light rounded-xl backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium">14-20 Juillet 2025</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 glass-light rounded-xl backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-cyan-600" />
              <span className="font-medium">Lycée Mohammed VI, Benguérir</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 glass-light rounded-xl backdrop-blur-sm">
              <Users className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">Participants Sélectionnés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}