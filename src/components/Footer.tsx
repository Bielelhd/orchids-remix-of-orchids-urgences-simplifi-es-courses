import Link from "next/link";
import Image from "next/image";
import { Mail, Send, ArrowRight, HeartPulse, Shield, BookOpen } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(170deg, #06010f 0%, #100328 50%, #06010f 100%)" }}>
      {/* Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-900/8 blur-[80px] rounded-full pointer-events-none" />

      {/* Top accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── CTA Banner */}
        <div className="py-12 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-lg tracking-tight mb-1">
                Prêt(e) à maîtriser les urgences ?
              </p>
              <p className="text-gray-500 text-sm">
                Rejoignez +500 médecins formés en Algérie et dans les pays francophones.
              </p>
            </div>
            <Link
              href="/formations"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white text-sm font-semibold transition-all duration-300 shadow-xl shadow-purple-900/30 hover:-translate-y-px whitespace-nowrap"
            >
              Voir les formations
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 border-b border-white/5">

          {/* Brand col */}
          <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-[42px] h-[42px] rounded-[14px] overflow-hidden group-hover:scale-105 transition-transform duration-200">
                  <Image src="/logo.png" alt="Urgences Simplifiées" width={42} height={42} className="object-cover w-full h-full" />
                </div>
              <div className="flex flex-col leading-none gap-[1px]">
                <span className="font-extrabold text-[15px] text-white tracking-tight">Urgences</span>
                <span className="font-extrabold text-[15px] text-purple-400 tracking-tight">Simplifiées</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[300px] mb-6">
              Formations pratiques en médecine d&apos;urgence pour les médecins et étudiants en Algérie et dans les pays francophones.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Shield, label: "Paiement sécurisé" },
                { icon: BookOpen, label: "Accès à vie" },
                { icon: HeartPulse, label: "Protocoles DZ" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/4 border border-white/6 text-[11px] font-medium text-gray-500">
                  <Icon className="w-3 h-3 text-purple-400/70" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-600 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/formations", label: "Formations" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-4 h-px bg-gray-700 group-hover:bg-purple-500 group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-600 mb-5">
              Nous rejoindre
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@urgences-simplifiees.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center flex-shrink-0 group-hover:border-purple-700/40 group-hover:bg-purple-900/20 transition-all">
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-[0.08em] font-semibold mb-0.5">Email</p>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    contact@urgences-simplifiees.com
                  </span>
                </div>
              </a>

              <a
                href="https://t.me/urgences_simplifiees"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center flex-shrink-0 group-hover:border-sky-700/40 group-hover:bg-sky-900/20 transition-all">
                  <Send className="w-4 h-4 text-gray-500 group-hover:text-sky-400 transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-[0.08em] font-semibold mb-0.5">Telegram</p>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    Communauté Urgences Simplifiées
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[12px] text-gray-700">
          <p>© {year} Urgences Simplifiées. Tous droits réservés.</p>
          <p>Formations médicales en ligne · Algérie &amp; Pays Francophones</p>
        </div>
      </div>
    </footer>
  );
}
