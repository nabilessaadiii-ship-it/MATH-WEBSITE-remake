"use client"

import { useState } from "react"

export function PolaroidGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const photos = [
    {
      url: "/images/498919422-18071561114477696-7377811035061315933-n.jpg",
    },
    {
      url: "/images/521352896-18071561057477696-3889472538603712929-n.jpg",
    },
    {
      url: "/images/518853453-18071561021477696-1864809094579073644-n.jpg",
    },
    {
      url: "/images/519925616-18071561003477696-5987040142600534729-n.jpg",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="transition-all duration-300 cursor-pointer"
            style={{
              transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={`FMA Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
