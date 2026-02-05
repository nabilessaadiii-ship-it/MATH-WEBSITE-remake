"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Quels sont les critères d'éligibilité pour FMA ?",
      answer:
        "FMA est ouvert aux élèves de Tronc Commun et 1ère année Baccalauréat de tous les lycées du Maroc. Vous devez avoir un bon niveau en mathématiques et physique, et surtout une grande passion pour les sciences.",
    },
    {
      question: "Est-ce que FMA est gratuit ?",
      answer:
        "Oui, FMA est entièrement gratuit ! L'hébergement, les repas, les cours, et toutes les activités sont pris en charge. Vous devez seulement vous organiser pour le transport aller-retour vers Benguerir.",
    },
    {
      question: "Comment se préparer au test de sélection ?",
      answer:
        "Consultez notre syllabus détaillé sur cette page qui liste tous les sujets couverts. Nous recommandons de réviser vos cours de physique et mathématiques du lycée et de pratiquer avec les anciens tests disponibles en téléchargement.",
    },
    {
      question: "Combien de participants sont sélectionnés ?",
      answer:
        "Nous sélectionnons 48 participants chaque année parmi plusieurs centaines de candidatures. Le processus est compétitif mais nous valorisons autant la motivation que les résultats académiques.",
    },
    {
      question: "Faut-il déjà avoir un niveau universitaire en physique ?",
      answer:
        "Non ! FMA est conçu pour des lycéens. Les cours sont adaptés à votre niveau et construisent progressivement sur vos connaissances actuelles pour vous amener plus loin. La curiosité et la motivation sont plus importantes que le niveau initial.",
    },
    {
      question: "Peut-on participer plusieurs années de suite ?",
      answer:
        "Si vous êtes sélectionné en Tronc Commun, vous pouvez candidater à nouveau en 1ère Bac. Cependant, pour donner sa chance au plus grand nombre, nous privilégions les nouveaux participants si la sélection est serrée.",
    },
    {
      question: "Où se déroule FMA ?",
      answer:
        "FMA se déroule au Lycée d'Excellence Mohammed VI à Benguerir, dans la région de Marrakech-Safi. Le campus dispose d'installations modernes incluant des laboratoires, des salles de classe équipées et un hébergement confortable.",
    },
    {
      question: "Quelle est la durée du programme ?",
      answer:
        "Le programme FMA dure une semaine intensive (7 jours) durant les vacances d'été. C'est une expérience immersive où vous vivez sur le campus et participez à toutes les activités du matin au soir.",
    },
    {
      question: "Quel est le niveau de difficulté des cours ?",
      answer:
        "Les cours sont exigeants mais accessibles. Ils vont au-delà du programme du lycée sans pour autant nécessiter des prérequis universitaires. L'objectif est de vous challenger tout en vous donnant les outils pour réussir grâce à un encadrement personnalisé.",
    },
    {
      question: "Y a-t-il des expériences pratiques ?",
      answer:
        "Absolument ! FMA met l'accent sur le côté expérimental de la physique. Vous aurez accès à des laboratoires pour faire des expériences en mécanique, thermodynamique, électronique, et utiliserez des outils de simulation numérique.",
    },
    {
      question: "Qui sont les enseignants et conférenciers ?",
      answer:
        "Vous serez encadrés par des doctorants, chercheurs et professeurs universitaires marocains reconnus, notamment de l'UM6P et d'universités partenaires. Nous invitons également des chercheurs internationaux pour des conférences inspirantes.",
    },
    {
      question: "Comment se passe l'hébergement ?",
      answer:
        "L'hébergement se fait sur le campus du Lycée Mohammed VI en chambres partagées. Les repas sont fournis (petit-déjeuner, déjeuner et dîner) et il y a des espaces communs pour étudier et socialiser avec les autres participants.",
    },
    {
      question: "Que faire si je ne suis pas sélectionné ?",
      answer:
        "Si vous n'êtes pas sélectionné, ne vous découragez pas ! Vous pouvez candidater à nouveau l'année suivante si vous êtes toujours éligible. Nous recommandons de continuer à approfondir vos connaissances en physique et de participer à d'autres activités scientifiques.",
    },
    {
      question: "Y a-t-il un certificat de participation ?",
      answer:
        "Oui, tous les participants qui complètent le programme reçoivent un certificat de participation officiel de FMA, signé par l'équipe organisatrice de Math&Maroc et nos partenaires institutionnels.",
    },
    {
      question: "Comment puis-je contacter l'équipe FMA ?",
      answer:
        "Vous pouvez nous contacter par email à l'adresse indiquée sur notre site, ou nous suivre sur nos réseaux sociaux (Instagram, Facebook, LinkedIn) pour poser vos questions et rester informé des actualités FMA.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Questions Fréquentes</h2>
          <p className="text-lg text-muted-foreground">
            Vous avez des questions sur FMA ? Voici les réponses aux interrogations les plus courantes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-light rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
