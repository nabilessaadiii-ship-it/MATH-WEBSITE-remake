"use client"

import Image from "next/image"
import { useState } from "react"

const activities = [
  {
    id: 1,
    category: "Jeux d'Orientation",
    image: "/images/521001115-18071757908477696-735194368012064748-n.jpg",
  },
  {
    id: 2,
    category: "Échecs",
    image: "/images/520169470-18071757917477696-6018952444217003160-n.jpg",
  },
  {
    id: 3,
    category: "Basketball",
    image: "/images/520444949-18071757956477696-2157671818632774722-n.jpg",
  },
  {
    id: 4,
    category: "Cours de Mathématiques",
    image: "/images/520154829-18071757836477696-2444839537058006247-n.jpg",
  },
  {
    id: 5,
    category: "Football",
    image: "/images/520534937-18071757926477696-4556892528190531699-n.jpg",
  },
  {
    id: 6,
    category: "Orientation",
    image: "/images/520216942-18071757899477696-7191972336651948252-n.jpg",
  },
  {
    id: 7,
    category: "Tutorat",
    image: "/images/503669713-18071757854477696-1835870696177046381-n.jpg",
  },
  {
    id: 8,
    category: "Soirées",
    image: "/images/520243532-18071757827477696-2645579793405752349-n.jpg",
  },
]

export function Edition2025() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Édition 2025</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une aventure riche en activités académiques, sportives et sociales
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Tree Trunk */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-400 -translate-x-1/2 hidden md:block" />

          {/* Activities as branches with bubbles */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative">
            {activities.map((activity, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={activity.id}
                  className={`relative flex items-center gap-4 ${isLeft ? "md:flex-row-reverse md:pr-12" : "md:pl-12"}`}
                  onMouseEnter={() => setHoveredId(activity.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Branch line connecting to trunk */}
                  <div
                    className={`hidden md:block absolute top-1/2 ${
                      isLeft ? "right-0 left-1/2" : "left-0 right-1/2"
                    } h-0.5 bg-gray-300`}
                    style={{
                      background:
                        "repeating-linear-gradient(to right, #9ca3af 0, #9ca3af 8px, transparent 8px, transparent 16px)",
                    }}
                  />

                  {/* Circular Photo Bubble */}
                  <div
                    className={`relative transition-all duration-300 ${
                      hoveredId === activity.id ? "scale-110 z-10" : "scale-100"
                    }`}
                  >
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.category}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <div
                    className={`flex-1 transition-all duration-300 ${
                      hoveredId === activity.id ? "scale-105" : "scale-100"
                    }`}
                  >
                    <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-border">
                      <p className="text-sm md:text-base font-medium">{activity.category}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Activity Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-2xl font-bold">8+</p>
            <p className="text-sm text-muted-foreground">Activités</p>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-muted-foreground">Jours</p>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-muted-foreground">Engagement</p>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-2xl font-bold">200+</p>
            <p className="text-sm text-muted-foreground">Participants</p>
          </div>
        </div>
      </div>
    </section>
  )
}
