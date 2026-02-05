import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/images/fma-logo.png" alt="FMA Logo" width={64} height={64} className="w-16 h-16" />
              <div>
                <div className="font-bold text-xl">Feynman Moroccan Adventure</div>
                <div className="text-sm text-muted-foreground">Excellence Scientifique</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Un camp d'été intensif en physique pour former les leaders scientifiques de demain. Une initiative de
              Math&Maroc pour promouvoir l'excellence scientifique au Maroc.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:fma@mathmaroc.org" className="hover:text-primary transition-colors">
                  fma@mathmaroc.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lycée Mohammed VI, Ben Guerir, Maroc</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-5">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Navigation Rapide</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/programmes"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Programmes Scientifiques
                </a>
              </li>
              <li>
                <a
                  href="/edition-precedente"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Édition 2025
                </a>
              </li>
              <li>
                <a
                  href="/experience"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  L'Expérience
                </a>
              </li>
              <li>
                <a
                  href="/candidature"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Candidature 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Rejoignez-nous</h3>
            <p className="text-sm text-muted-foreground">Suivez nos actualités et événements</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/mathemaroc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary hover:to-primary flex items-center justify-center hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/mathmaroc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-pink-500 hover:to-purple-600 flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@mathmaroc1396"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-red-600 hover:to-red-700 flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/MathsMaroc2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Une initiative de</p>
              <a
                href="https://mathmaroc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group"
              >
                Math&Maroc
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Feynman Moroccan Adventure. Tous droits réservés.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
              <span className="text-border">|</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
