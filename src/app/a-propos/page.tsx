import Link from "next/link";
import {
  Stethoscope,
  Target,
  Eye,
  Heart,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Pratique avant tout",
    desc: "Nous croyons que la médecine d'urgence s'apprend par la pratique, pas par la théorie. Chaque contenu est conçu pour être directement applicable.",
  },
  {
    icon: Heart,
    title: "Adapté à notre réalité",
    desc: "Nous refusons d'enseigner des protocoles qui ne peuvent pas être appliqués dans nos hôpitaux. Tout est basé sur les ressources disponibles en Algérie.",
  },
  {
    icon: Award,
    title: "Excellence clinique",
    desc: "Notre objectif est de former des médecins capables d'agir avec compétence et confiance, même dans les situations les plus difficiles.",
  },
  {
    icon: Users,
    title: "Communauté médicale",
    desc: "Nous construisons une communauté de médecins et étudiants qui se soutiennent mutuellement dans leur développement professionnel.",
  },
];

const stats = [
  { value: "+500", label: "Médecins & étudiants formés" },
  { value: "2", label: "Formations spécialisées" },
  { value: "37+", label: "Conduites pratiques couvertes" },
  { value: "100%", label: "Adapté à l'Algérie" },
];

export default function AProposPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="brand-gradient py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            À Propos d&apos;
            <span className="text-orange-300">Urgences Simplifiées</span>
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Une plateforme fondée par un médecin urgentiste algérien pour
            combler le fossé entre la formation académique et la réalité
            hospitalière.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl brand-gradient flex items-center justify-center shadow-2xl shadow-purple-200">
                  <div className="text-center text-white">
                    <Stethoscope className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-bold">Médecin</p>
                    <p className="text-purple-200">Urgentiste</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-5 py-3 rounded-2xl shadow-lg text-sm font-bold">
                  Algérien & Praticien
                </div>
              </div>
            </div>

            <div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                Votre formateur
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">
                Un urgentiste qui connaît
                <span className="text-gradient"> votre réalité</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Notre formateur est un médecin urgentiste expérimenté ayant
                  exercé dans plusieurs services d&apos;urgence algériens. Il a
                  vécu de l&apos;intérieur les défis des jeunes médecins : les nuits
                  de garde seul, les patients critiques sans supervision, les
                  hésitations sur les dosages.
                </p>
                <p>
                  Convaincu que la formation médicale classique ne prépare pas
                  suffisamment à la réalité des urgences, il a créé
                  &ldquo;Urgences Simplifiées&rdquo; pour transmettre ce qu&apos;il a appris
                  sur le terrain de manière structurée et immédiatement
                  utilisable.
                </p>
                <p>
                  Son approche : simplifier sans vulgariser, pratiquer sans
                  théoriser à l&apos;excès, et toujours garder en tête les
                  contraintes et réalités de l&apos;hôpital algérien.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Urgentiste certifié",
                  "Formateur expérimenté",
                  "Protocoles Algeria-first",
                  "Pédagogie pratique",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Simplifier la médecine d&apos;urgence pour chaque médecin et étudiant
                algérien. Transformer les protocoles complexes en outils
                pratiques, clairs et immédiatement applicables.
              </p>
              <ul className="space-y-2">
                {[
                  "Rendre les urgences accessibles à tous",
                  "Éliminer la panique lors des premiers gardes",
                  "Fournir des outils pratiques et localisés",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-orange-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl brand-gradient-orange flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Une médecine d&apos;urgence pratique, adaptée à la réalité algérienne,
                enseignée par des praticiens locaux pour des praticiens locaux.
                Nous aspirons à devenir la référence incontournable de la
                formation médicale continue en Algérie.
              </p>
              <ul className="space-y-2">
                {[
                  "Formation médicale continue de qualité",
                  "Adaptée à la réalité hospitalière algérienne",
                  "Accessible depuis n'importe où",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              Ce en quoi nous croyons
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Nos valeurs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl brand-gradient flex items-center justify-center shadow-md">
                  <val.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-10 h-10 text-purple-400 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Des centaines de médecins et étudiants ont déjà transformé leur
            pratique avec nos formations. À votre tour.
          </p>
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all shadow-xl text-base"
          >
            Découvrir les formations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
