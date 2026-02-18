"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  BookOpen,
  Zap,
  Users,
  Target,
  ChevronDown,
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Clock,
  Award,
  FileText,
  TrendingUp,
  AlertCircle,
  Sparkles,
  Play,
  BadgeCheck,
  Brain,
  Activity,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Dr. Amira K.",
    role: "Médecin Généraliste",
    location: "Alger",
    content:
      "Grâce à cette formation, j'ai pu gérer ma première acidocétose diabétique avec confiance. Les algorithmes pratiques sont exactement ce dont j'avais besoin.",
    stars: 5,
    avatar: "AK",
    color: "from-violet-600 to-purple-700",
  },
  {
    name: "Karim B.",
    role: "Étudiant en Médecine",
    location: "Constantine",
    content:
      "Les cas cliniques réels et les protocoles adaptés à l'Algérie font toute la différence. Je me sens enfin prêt pour mes gardes aux urgences.",
    stars: 5,
    avatar: "KB",
    color: "from-purple-600 to-indigo-700",
  },
  {
    name: "Dr. Nadia M.",
    role: "Résidente en Médecine Interne",
    location: "Oran",
    content:
      "La formation sur les 30 conduites pratiques est une référence incontournable. Je la recommande à tous les jeunes médecins.",
    stars: 5,
    avatar: "NM",
    color: "from-orange-500 to-red-600",
  },
];

const faqs = [
  {
    q: "À qui s'adressent ces formations ?",
    a: "Nos formations sont conçues pour les médecins nouvellement recrutés, les étudiants en médecine, les généralistes, les urgentistes et les résidents qui souhaitent maîtriser les urgences médicales courantes.",
  },
  {
    q: "Les formations sont-elles adaptées à la pratique en Algérie ?",
    a: "Absolument. Tous les protocoles, médicaments et dosages sont basés sur les ressources disponibles dans les hôpitaux algériens. Pas de théorie inapplicable.",
  },
  {
    q: "Pendant combien de temps ai-je accès aux formations ?",
    a: "Vous bénéficiez d'un accès à vie à votre formation après achat. Vous pouvez la revoir autant de fois que nécessaire.",
  },
  {
    q: "Comment accéder aux formations après l'achat ?",
    a: "Immédiatement après votre paiement, vous recevez un lien d'accès par email. Aucun délai d'attente.",
  },
  {
    q: "Est-ce que les formations incluent des cas cliniques réels ?",
    a: "Oui. Chaque module intègre des cas cliniques tirés de la pratique aux urgences pour ancrer l'apprentissage dans le réel.",
  },
];

const problems = [
  {
    icon: AlertCircle,
    title: "Formation théorique insuffisante",
    desc: "Les études donnent une base théorique, mais peu de formation sur les décisions rapides en situation critique.",
    num: "01",
  },
  {
    icon: Target,
    title: "Protocoles inadaptés à l'Algérie",
    desc: "La plupart des ressources sont étrangères et ne tiennent pas compte des médicaments disponibles dans nos hôpitaux.",
    num: "02",
  },
  {
    icon: Clock,
    title: "Panique lors des premiers gardes",
    desc: "Sans algorithmes clairs, chaque seconde de prise en charge devient hésitante et risquée pour le patient.",
    num: "03",
  },
  {
    icon: TrendingUp,
    title: "Manque de confiance clinique",
    desc: "L'incertitude sur les dosages et prescriptions crée un stress intense qui nuit à la qualité des soins.",
    num: "04",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "100% Pratique",
    desc: "Chaque module se termine par des algorithmes directement applicables en salle d'urgence. Zéro théorie inutile.",
    accent: "purple",
  },
  {
    icon: Stethoscope,
    title: "Adapté à l'Algérie",
    desc: "Médicaments, dosages et protocoles basés sur les ressources réellement disponibles dans nos hôpitaux.",
    accent: "orange",
  },
  {
    icon: Brain,
    title: "Cas cliniques réels",
    desc: "Apprenez à travers des situations réelles vécues aux urgences pour ancrer définitivement vos connaissances.",
    accent: "purple",
  },
  {
    icon: FileText,
    title: "Ordonnances types",
    desc: "Prescriptions prêtes à l'emploi pour les pathologies les plus courantes. Plus d'hésitation en prescrivant.",
    accent: "orange",
  },
  {
    icon: Activity,
    title: "Confiance clinique",
    desc: "Développez un raisonnement clinique structuré pour agir avec assurance face à n'importe quelle urgence.",
    accent: "purple",
  },
  {
    icon: Users,
    title: "Communauté active",
    desc: "Rejoignez des centaines de médecins dans notre communauté Telegram pour partager et progresser ensemble.",
    accent: "orange",
  },
];

/* ─── FAQ Item ──────────────────────────────────────────────── */
function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-purple-200 bg-gradient-to-br from-purple-50/60 to-white shadow-md shadow-purple-100/50"
          : "border-gray-100 bg-white hover:border-purple-100 hover:shadow-sm"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span
            className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
              open ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-400"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`font-semibold text-sm leading-snug ${open ? "text-purple-900" : "text-gray-800"}`}>
            {faq.q}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
            open ? "rotate-180 text-purple-600" : "text-gray-300"
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-7 pb-6 text-sm text-gray-600 leading-relaxed pl-[4.25rem]">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative hero-bg min-h-[92vh] flex flex-col justify-center overflow-hidden">
        {/* Layered orbs */}
        <div className="orb w-[700px] h-[700px] bg-violet-700/20 -top-48 -left-48" />
        <div className="orb w-[500px] h-[500px] bg-purple-600/15 -bottom-24 -right-24" />
        <div className="orb w-[350px] h-[350px] bg-orange-600/10 top-1/2 right-1/4 -translate-y-1/2" />

        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-100" />

        {/* Subtle noise */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 w-full">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow */}
            <div className="flex justify-center mb-8">
              <div className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition-all cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-white/75 text-xs font-semibold tracking-[0.1em] uppercase">
                  Formations 100% pratiques · Adaptées à l&apos;Algérie
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-black text-white leading-[1.04] tracking-[-0.02em] mb-6">
              Maîtrisez les urgences
              <br />
              médicales avec des
              <br />
              <span className="text-gradient">protocoles clairs.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              Soyez prêt(e) à agir efficacement aux urgences dès votre premier jour —
              des protocoles adaptés à la réalité hospitalière algérienne.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/formations"
                className="btn-shimmer group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-[15px] transition-all duration-300 shadow-2xl shadow-orange-900/40 hover:shadow-orange-500/40 hover:-translate-y-1"
              >
                <Sparkles className="w-4 h-4 text-white/80" />
                Découvrir les formations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/formations"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/8 hover:bg-white/12 border border-white/12 hover:border-white/20 text-white font-semibold text-[15px] transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-3.5 h-3.5 text-white/60" />
                Voir le programme
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {[
                { icon: ShieldCheck, label: "Paiement sécurisé" },
                { icon: CheckCircle2, label: "Accès immédiat" },
                { icon: BookOpen, label: "Accès à vie" },
                { icon: Users, label: "+500 médecins formés" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/35 text-xs font-medium">
                  <Icon className="w-3.5 h-3.5 text-emerald-400/80" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 100L1440 100L1440 50C1380 75 1300 25 1200 45C1100 65 1020 15 920 38C820 61 740 20 640 42C540 64 440 18 340 40C240 62 140 28 60 48L0 60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════ STATS ═════════════════════════════ */}
      <section className="py-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {[
              { value: "+500", label: "Médecins formés", sub: "Algérie & diaspora", color: "text-purple-700" },
              { value: "2", label: "Formations phares", sub: "100% pratiques", color: "text-violet-600" },
              { value: "37+", label: "Modules cliniques", sub: "Protocoles détaillés", color: "text-purple-700" },
              { value: "100%", label: "Adapté à l'Algérie", sub: "Médicaments locaux", color: "text-orange-600" },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-1.5 py-10 px-4 bg-white text-center group">
                <span className={`text-[clamp(2rem,4vw,2.8rem)] font-black tracking-tight ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-[13px] font-bold text-gray-800">{stat.label}</span>
                <span className="text-[11px] text-gray-400 font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ PROBLEM ═══════════════════════════ */}
      <section className="py-28 px-4 section-bg-alt relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-4">Le problème</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-gray-900 leading-tight tracking-tight mt-3">
              Pourquoi les jeunes médecins
              <br />
              <span className="text-gradient-dark">se sentent dépassés aux urgences</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {problems.map((item, i) => (
              <div
                key={i}
                className="group relative flex gap-5 p-7 rounded-2xl bg-white border border-red-50 hover:border-red-100 shadow-sm hover:shadow-md hover:shadow-red-50/60 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-red-200 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-[15px] leading-snug">{item.title}</h3>
                    <span className="text-[11px] font-bold text-red-200 flex-shrink-0 mt-0.5">{item.num}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ DIFFERENTIATORS ═══════════════════════ */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-4">La solution</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-gray-900 leading-tight tracking-tight mt-3">
              Ce qui rend cette formation
              <br />
              <span className="text-gradient-dark">fondamentalement différente</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="card-elevated group p-7 rounded-2xl cursor-default"
              >
                <div
                  className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    item.accent === "purple"
                      ? "bg-purple-50 border border-purple-100"
                      : "bg-orange-50 border border-orange-100"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      item.accent === "purple" ? "text-purple-700" : "text-orange-600"
                    }`}
                  />
                  {/* Glow */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10 ${
                    item.accent === "purple" ? "bg-purple-300/40" : "bg-orange-300/40"
                  }`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2.5 text-[15px]">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ COURSES ═════════════════════════════ */}
      <section className="py-28 px-4 section-bg-alt relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-4">Nos formations</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-gray-900 leading-tight tracking-tight mt-3">
              Deux programmes{" "}
              <span className="text-gradient-dark">phares</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7 items-stretch">
            {/* ── Course 1 */}
            <div className="group flex flex-col rounded-3xl overflow-hidden shadow-xl shadow-purple-100/50 hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-500 hover:-translate-y-1.5 border border-purple-100/60">
              <div className="relative brand-gradient-rich p-9 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 border border-white/8" />
                <div className="absolute -bottom-12 -left-6 w-28 h-28 rounded-full bg-white/3" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-300/60">
                      Formation 01
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <FlaskConical className="w-[18px] h-[18px] text-white/90" />
                    </div>
                  </div>
                  <h3 className="text-[1.35rem] font-extrabold text-white leading-tight mb-3 tracking-tight">
                    Urgences Métaboliques
                  </h3>
                  <p className="text-purple-200/70 text-sm leading-relaxed">
                    Maîtrisez les urgences métaboliques les plus critiques avec des algorithmes décisionnels clairs et des dosages précis.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white flex-1 flex flex-col">
                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    "Dysnatrémie & Dyskaliémie",
                    "Dyscalcémie",
                    "Acidocétose diabétique",
                    "Syndrome d'hyperglycémie hyperosmolaire",
                    "Hypoglycémie",
                    "Insuffisance Rénale Aiguë (IRA)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <BadgeCheck className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/formations#metaboliques"
                  className="btn-shimmer group/btn flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-purple-900/20 hover:shadow-purple-700/30"
                >
                  Voir la formation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ── Course 2 */}
            <div className="group flex flex-col rounded-3xl overflow-hidden shadow-xl shadow-orange-100/50 hover:shadow-2xl hover:shadow-orange-200/60 transition-all duration-500 hover:-translate-y-1.5 border border-orange-100/60">
              <div className="relative brand-gradient-orange p-9 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 border border-white/8" />
                <div className="absolute -bottom-12 -left-6 w-28 h-28 rounded-full bg-white/3" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200/60">
                      Formation 02
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <HeartPulse className="w-[18px] h-[18px] text-white/90" />
                    </div>
                  </div>
                  <h3 className="text-[1.35rem] font-extrabold text-white leading-tight mb-3 tracking-tight">
                    30 Conduites Pratiques
                  </h3>
                  <p className="text-orange-100/70 text-sm leading-relaxed">
                    30 conduites 100% pratiques que l&apos;on rencontre quotidiennement aux urgences, avec ordonnances types incluses.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white flex-1 flex flex-col">
                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    "OAP & Embolie pulmonaire",
                    "Crise d'asthme & AVC ischémique/hémorragique",
                    "Intoxications & Envenimations scorpioniques",
                    "Anaphylaxie & Migraine",
                    "HNF, HBPM & accidents aux AVK",
                    "Ordonnances types prêtes à l'emploi",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <BadgeCheck className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/formations#conduites"
                  className="btn-shimmer group/btn flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-900/20 hover:shadow-orange-600/30"
                >
                  Voir la formation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/formations"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 hover:border-purple-300 text-gray-500 hover:text-purple-700 hover:bg-purple-50/50 font-semibold text-sm transition-all duration-200"
            >
              Voir toutes les formations
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ PROCESS ═════════════════════════════ */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-4">Comment ça marche</span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-gray-900 leading-tight tracking-tight mt-3">
              Opérationnel en{" "}
              <span className="text-gradient-dark">3 étapes</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200" />

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  icon: BookOpen,
                  title: "Choisissez votre formation",
                  desc: "Sélectionnez le programme qui correspond à vos besoins cliniques actuels.",
                  color: "purple",
                },
                {
                  step: "02",
                  icon: Zap,
                  title: "Accédez immédiatement",
                  desc: "Après paiement, accès instantané à tous les modules, algorithmes et cas cliniques.",
                  color: "violet",
                },
                {
                  step: "03",
                  icon: Award,
                  title: "Pratiquez avec confiance",
                  desc: "Appliquez les protocoles dès votre prochain garde avec une totale assurance.",
                  color: "orange",
                },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className={`relative w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${
                    s.color === "purple" ? "bg-gradient-to-br from-purple-600 to-violet-700 shadow-purple-900/25 group-hover:shadow-purple-700/40" :
                    s.color === "violet" ? "bg-gradient-to-br from-violet-600 to-indigo-700 shadow-violet-900/25 group-hover:shadow-violet-700/40" :
                    "bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-900/25 group-hover:shadow-orange-600/40"
                  }`}>
                    <s.icon className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-100 text-[10px] font-black text-gray-700 flex items-center justify-center shadow-sm">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <section className="py-28 px-4 relative overflow-hidden" style={{ background: "linear-gradient(170deg, #06010f 0%, #130435 40%, #0e0225 70%, #06010f 100%)" }}>
        {/* Orbs */}
        <div className="orb w-[600px] h-[400px] bg-purple-900/20 -top-20 left-1/2 -translate-x-1/2" />
        <div className="orb w-[300px] h-[300px] bg-orange-900/10 bottom-0 right-0" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-orange-400/80 mb-4">
              <span className="w-5 h-px bg-orange-500/50" />
              Témoignages
              <span className="w-5 h-px bg-orange-500/50" />
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight tracking-tight mt-1">
              Ce que disent nos{" "}
              <span className="text-gradient">médecins formés</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative flex flex-col p-7 rounded-3xl border border-white/6 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/12 transition-all duration-300 group"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-300/90 text-sm leading-relaxed flex-1 mb-7">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3.5 pt-5 border-t border-white/6">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-[11px] text-gray-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof line */}
          <div className="mt-12 text-center">
            <p className="text-white/25 text-sm">
              Rejoint par <span className="text-white/50 font-semibold">+500 médecins</span> en Algérie et dans les pays francophones
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ INSTRUCTOR ══════════════════════════ */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/60 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-purple-100 shadow-2xl shadow-purple-100/40">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/40" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-violet-500 to-orange-500" />

            <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center gap-12">
              {/* Visual */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative mx-auto">
                    <div className="w-36 h-36 rounded-[28px] overflow-hidden shadow-2xl shadow-purple-900/30 animate-float">
                      <Image src="/logo.png" alt="Urgences Simplifiées" width={144} height={144} className="object-cover w-full h-full" />
                    </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-900/30">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                    <BadgeCheck className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <span className="section-label mb-4">Votre formateur</span>
                <h3 className="text-2xl md:text-[1.8rem] font-extrabold text-gray-900 mt-4 mb-4 leading-tight tracking-tight">
                  Médecin Urgentiste
                  <br />
                  <span className="text-gradient-dark">Algérien Expérimenté</span>
                </h3>
                <p className="text-gray-500 leading-relaxed mb-7 max-w-lg text-[15px]">
                  Urgentiste expérimenté ayant exercé dans les services d&apos;urgence algériens,
                  notre formateur connaît parfaitement les défis auxquels font face les jeunes
                  médecins. Sa mission : simplifier la médecine d&apos;urgence et vous transmettre
                  les outils pratiques pour agir avec confiance dès le premier jour.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                  {[
                    "Urgentiste certifié",
                    "Expérience clinique DZ",
                    "Pédagogie axée protocoles",
                    "+500 médecins formés",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-purple-100 text-purple-700 text-xs font-semibold shadow-sm hover:border-purple-300 transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-purple-500" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ FAQ ═══════════════════════════════ */}
      <section className="py-28 px-4 section-bg-alt relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Questions fréquentes</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black text-gray-900 leading-tight tracking-tight mt-3">
              Vos questions,{" "}
              <span className="text-gradient-dark">nos réponses</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════ FINAL CTA ══════════════════════════════ */}
      <section className="py-32 px-4 relative overflow-hidden hero-bg">
        {/* Orbs */}
        <div className="orb w-[500px] h-[400px] bg-orange-700/12 top-1/2 left-1/4 -translate-y-1/2" />
        <div className="orb w-[400px] h-[400px] bg-violet-700/20 top-1/2 right-1/4 -translate-y-1/2" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/6 border border-white/10 mb-10">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-white/65 text-[11px] font-bold tracking-[0.1em] uppercase">
              Votre engagement clinique commence maintenant
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black text-white leading-[1.04] mb-5 tracking-[-0.02em]">
            Prêt(e) à transformer
            <br />
            <span className="text-gradient">votre pratique ?</span>
          </h2>
          <p className="text-white/45 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Rejoignez des centaines de médecins qui ont déjà développé
            leur confiance clinique avec nos formations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/formations"
              className="btn-shimmer group inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-base transition-all duration-300 shadow-2xl shadow-orange-900/40 hover:shadow-orange-500/50 hover:-translate-y-1"
            >
              <Sparkles className="w-4 h-4 text-white/80" />
              Accéder aux formations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/7 hover:bg-white/12 border border-white/12 hover:border-white/20 text-white font-semibold text-base transition-all duration-300 backdrop-blur-sm"
            >
              Nous contacter
            </Link>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: ShieldCheck, label: "Paiement 100% sécurisé" },
              { icon: CheckCircle2, label: "Accès à vie" },
              { icon: Zap, label: "Accès immédiat après paiement" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/30 text-xs font-medium">
                <Icon className="w-3.5 h-3.5 text-emerald-400/70" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
