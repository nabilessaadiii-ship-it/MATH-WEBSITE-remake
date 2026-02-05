"use client"

import { Instagram } from "lucide-react"

export function MediaCoverage() {
  const socialPosts = [
    {
      account: "@mathmaroc",
      image: "/images/498919422-18071561114477696-7377811035061315933-n.jpg",
      caption: "48 jeunes lycéens marocains ont participé à la première édition de FMA 2025 !",
      likes: "788",
      url: "https://www.instagram.com/mathmaroc/",
    },
    {
      account: "@mathmaroc",
      image: "/images/519898947-18071561039477696-5181012918862788516-n.jpg",
      caption: "Cours de thermodynamique avec nos participants.",
      likes: "654",
      url: "https://www.instagram.com/mathmaroc/",
    },
    {
      account: "@mathmaroc",
      image: "/images/520796267-18071561078477696-833809233401744959-n.jpg",
      caption: "Conférence avec Youssef Moulane, astrophysicien à l'UM6P.",
      likes: "892",
      url: "https://www.instagram.com/mathmaroc/",
    },
  ]

  return (
    <section className="py-8 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">On en parle</h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Suivez-nous sur Instagram pour découvrir les moments forts de FMA
          </p>
        </div>

        {/* Compact Instagram grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {socialPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="p-3 flex items-center gap-2 border-b">
                <Instagram className="w-5 h-5 text-pink-600" />
                <p className="font-semibold text-sm text-gray-900">{post.account}</p>
              </div>
              <img src={post.image || "/placeholder.svg"} alt="" className="w-full aspect-square object-cover" />
              <div className="p-3">
                <p className="text-sm text-gray-700 line-clamp-2 mb-2">{post.caption}</p>
                <span className="text-xs font-semibold text-gray-600">{post.likes} J'aime</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="https://www.instagram.com/mathmaroc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Suivez-nous sur Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
