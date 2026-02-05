"use client"

import React, { useState } from "react"
import { 
  ChevronRight, 
  X,
  Sparkles
} from "lucide-react"

// --- 1. MATHMAROC BRAND PALETTE ---
// Colors extracted from mathmaroc.org
const BRAND = {
  primary: "#1A365D",     // Main dark blue from header/navigation
  secondary: "#2D3748",   // Secondary dark blue/gray
  accent: "#3182CE",      // Bright blue from buttons/links
  highlight: "#ED8936",   // Orange accent
  light: "#E2E8F0",       // Light gray/blue
  background: "#F7FAFC",  // Background color
}

// --- 2. DATA (Mapped to Tree Positions & Brand Colors) ---
const activities = [
  // CENTER / TRUNK (Top Center)
  {
    id: 1,
    name: "Jeux d'orientation",
    image: "/images/521001115-18071757908477696-735194368012064748-n.jpg",
    category: "Outdoor",
    color: BRAND.accent, 
    x: 50, y: 35, 
    description: "Une aventure en plein air mêlant stratégie et découverte de la nature."
  },
  
  // LEFT BRANCH (Sports/Mind)
  {
    id: 2,
    name: "Échecs",
    image: "/images/520169470-18071757917477696-6018952444217003160-n.jpg",
    category: "Mind",
    color: BRAND.highlight, // Strategy fits the Orange/Energy theme
    x: 20, y: 45,
    description: "Tournoi stratégique pour tester la concentration et l'anticipation."
  },
  {
    id: 5,
    name: "Football",
    image: "/images/520534937-18071757926477696-4556892528190531699-n.jpg",
    category: "Sports",
    color: BRAND.primary, // Team spirit fits the Blue/Trust theme
    x: 10, y: 65,
    description: "Compétition amicale favorisant l'esprit d'équipe et le fair-play."
  },
  
  // RIGHT BRANCH (Social/Sports)
  {
    id: 3,
    name: "Basketball",
    image: "/images/520444949-18071757956477696-2157671818632774722-n.jpg",
    category: "Sports",
    color: BRAND.highlight, // Dynamic sports
    x: 80, y: 45,
    description: "Matchs intenses pour les amateurs de rythme et de précision."
  },
  {
    id: 8,
    name: "Soirées",
    image: "/images/520243532-18071757827477696-2645579793405752349-n.jpg",
    category: "Social",
    color: BRAND.accent, // Social events fit Blue accent
    x: 90, y: 65,
    description: "Moments de partage et de célébration pour souder la communauté."
  },

  // INNER BRANCHES (Education/Maths)
  {
    id: 4,
    name: "Cours de Maths",
    image: "/images/520154829-18071757836477696-2444839537058006247-n.jpg",
    category: "Learning",
    color: BRAND.primary, // Core academic mission
    x: 35, y: 25,
    description: "Sessions d'apprentissage intensives pour exceller."
  },
  {
    id: 6,
    name: "Présentations",
    image: "/images/520216942-18071757899477696-7191972336651948252-n.jpg",
    category: "Learning",
    color: BRAND.primary,
    x: 65, y: 25,
    description: "Partage de connaissances et développement des soft skills."
  },
  {
    id: 7,
    name: "Tutorat",
    image: "/images/503669713-18071757854477696-1835870696177046381-n.jpg",
    category: "Learning",
    color: BRAND.accent, // Support and exchange
    x: 50, y: 15,
    description: "Accompagnement personnalisé pour la réussite de chacun."
  },
]

export function ActivitiesTree() {
  const [activeId, setActiveId] = useState<number | null>(null)
  
  // Find active activity
  const activeActivity = activities.find(a => a.id === activeId) || null

  return (
    <section className="min-h-[800px] py-16 px-4 font-sans relative overflow-hidden" style={{ backgroundColor: BRAND.background }}>
      
      {/* Background Texture (Subtle Paper effect) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A365D' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto relative z-10">
        
        {/* Title - Updated with FMA only */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.accent }}></div>
            <h2 className="text-sm font-bold tracking-widest uppercase" style={{ color: BRAND.primary }}>
              FMA : Feynmann Moroccan Adventure
            </h2>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.highlight }}></div>
          </div>
          
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 relative">
              <span className="relative z-10" style={{ color: BRAND.primary }}>
                L'Arbre des 
                <span className="inline-block ml-2" style={{ color: BRAND.highlight }}>Souvenirs</span>
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 opacity-30" style={{ backgroundColor: BRAND.accent }}></div>
            </h1>
            <div className="h-0.5 w-full mt-2 opacity-20" style={{ backgroundColor: BRAND.secondary }}></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* --- LEFT: THE ARTISTIC TREE (SVG) --- */}
          <div className="relative w-full max-w-[600px] aspect-[4/3] select-none">
            
            {/* 1. The Trunk & Branches Illustration - Updated colors */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax meet">
               {/* Roots Base */}
               <path d="M 160 290 Q 200 300 240 290" fill={BRAND.secondary} />
               
               {/* Main Trunk */}
               <path 
                 d="M 180 290 
                    C 170 240, 190 200, 200 150 
                    C 210 100, 230 240, 220 290 
                    Z" 
                 fill={BRAND.secondary}
               />

               {/* Branches (Thick Lines) */}
               <path d="M 195 180 Q 120 160 60 190" fill="none" stroke={BRAND.primary} strokeWidth="6" strokeLinecap="round" /> {/* Left */}
               <path d="M 205 180 Q 280 160 340 190" fill="none" stroke={BRAND.primary} strokeWidth="6" strokeLinecap="round" /> {/* Right */}
               <path d="M 200 150 Q 180 100 140 60" fill="none" stroke={BRAND.primary} strokeWidth="5" strokeLinecap="round" /> {/* Top Left */}
               <path d="M 200 150 Q 220 100 260 60" fill="none" stroke={BRAND.primary} strokeWidth="5" strokeLinecap="round" /> {/* Top Right */}
               <path d="M 200 150 L 200 50" fill="none" stroke={BRAND.primary} strokeWidth="4" strokeLinecap="round" /> {/* Top Center */}
            </svg>

            {/* 2. The Nodes (Framed Pictures) */}
            {activities.map((activity) => {
              const isActive = activeId === activity.id

              return (
                <button
                  key={activity.id}
                  onClick={() => setActiveId(activity.id)}
                  className={`
                    absolute -translate-x-1/2 -translate-y-1/2 
                    transition-all duration-500 ease-out group
                    ${isActive ? "scale-125 z-30" : "hover:scale-110 z-20 hover:rotate-2"}
                  `}
                  style={{ left: `${activity.x}%`, top: `${activity.y}%` }}
                >
                  {/* The Frame */}
                  <div 
                    className={`
                      relative w-16 h-16 md:w-20 md:h-20 bg-white p-1 shadow-xl 
                      ${isActive ? "ring-2" : "ring-0"}
                    `}
                    style={{ 
                      borderRadius: '2px', // Slightly more rectangular
                      border: `1px solid ${activity.color}`,
                      boxShadow: isActive 
                        ? `0 0 20px ${activity.color}40, 0 4px 12px rgba(0, 0, 0, 0.15)` 
                        : '0 6px 12px -2px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {/* The Image */}
                    <div className="w-full h-full overflow-hidden relative">
                      <img 
                        src={activity.image} 
                        alt={activity.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay on hover */}
                      <div className={`absolute inset-0 bg-black/10 transition-opacity ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>

                    {/* Hanging String visual */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8" style={{ backgroundColor: `${activity.color}80` }} />
                    <div 
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full shadow-sm" 
                      style={{ backgroundColor: activity.color }}
                    />
                  </div>

                  {/* Label Tag */}
                  <span 
                    className={`
                      absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 
                      text-[10px] font-bold shadow-sm rounded-sm
                      transition-all duration-300
                      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                    `}
                    style={{ 
                      backgroundColor: activity.color,
                      color: 'white'
                    }}
                  >
                    {activity.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* --- RIGHT: THE INFO PANEL (Hanging Frame Style) --- */}
          <div className="w-full max-w-sm px-4">
             <div 
               className="relative p-6 rounded-lg shadow-2xl transform rotate-1 transition-all duration-500 hover:rotate-0 border"
               style={{ 
                 backgroundColor: 'white',
                 borderColor: BRAND.light
               }}
             >
                
                {/* Decorative Tape */}
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 rotate-2 shadow-sm border backdrop-blur-sm opacity-90" 
                  style={{ 
                    backgroundColor: `${BRAND.highlight}40`,
                    borderColor: `${BRAND.highlight}30`
                  }}
                />

                {activeActivity ? (
                  <div className="flex flex-col h-full animate-in fade-in duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                        style={{ 
                          color: activeActivity.color,
                          backgroundColor: `${activeActivity.color}15`
                        }}
                      >
                        {activeActivity.category}
                      </span>
                      <button 
                        onClick={() => setActiveId(null)} 
                        className="hover:opacity-70 transition-opacity"
                        style={{ color: BRAND.secondary }}
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div 
                      className="aspect-video w-full rounded-md overflow-hidden mb-4 shadow-inner border relative group"
                      style={{ 
                        backgroundColor: BRAND.light,
                        borderColor: BRAND.light
                      }}
                    >
                       <img 
                         src={activeActivity.image} 
                         alt={activeActivity.name} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       />
                    </div>

                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: BRAND.primary }}
                    >
                      {activeActivity.name}
                    </h3>
                    
                    <div 
                      className="h-1 w-12 rounded-full mb-4" 
                      style={{ backgroundColor: activeActivity.color }} 
                    />

                    <p 
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: BRAND.secondary }}
                    >
                      {activeActivity.description}
                    </p>

                    <button 
                      className="mt-auto w-full py-3 text-white rounded font-medium shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 hover:shadow-lg"
                      style={{ 
                        backgroundColor: activeActivity.color,
                        boxShadow: `0 4px 6px ${activeActivity.color}40`
                      }}
                    >
                      Voir l'album complet <ChevronRight size={16} />
                    </button>
                  </div>
                ) : (
                  <div 
                    className="min-h-[300px] flex flex-col items-center justify-center text-center p-4 border-2 border-dashed rounded-lg"
                    style={{ 
                      borderColor: BRAND.light,
                      color: BRAND.secondary
                    }}
                  >
                    <Sparkles 
                      className="w-12 h-12 mb-3" 
                      style={{ color: BRAND.accent }} 
                    />
                    <p className="font-medium" style={{ color: BRAND.primary }}>Cliquez sur une photo</p>
                    <p className="text-xs mt-1" style={{ color: BRAND.secondary }}>pour découvrir le souvenir</p>
                  </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}