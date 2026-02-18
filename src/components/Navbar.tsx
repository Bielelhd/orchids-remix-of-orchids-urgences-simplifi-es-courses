"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(91,33,182,0.08),0_8px_40px_rgba(91,33,182,0.08)]"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-purple-500 to-orange-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
              <Link href="/" className="flex items-center group">
                <div className="relative w-[52px] h-[52px] group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="Urgences Simplifiées"
                    width={52}
                    height={52}
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
              </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-purple-700 bg-purple-50/80"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/80"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-600" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/formations"
                className="btn-shimmer group relative inline-flex items-center gap-2 px-5 py-[10px] rounded-xl bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-900/25 hover:shadow-purple-700/35 hover:-translate-y-px"
              >
                <Zap className="w-3.5 h-3.5 text-orange-300" />
                Accéder aux formations
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                open ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`absolute transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <X className="w-5 h-5" />
              </span>
              <span className={`absolute transition-all duration-200 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                <Menu className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-purple-50 bg-white/98 backdrop-blur-xl px-4 py-4 space-y-1 shadow-xl shadow-purple-900/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-3" />}
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/formations"
                onClick={() => setOpen(false)}
                className="btn-shimmer flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-700 to-violet-600 text-white shadow-lg shadow-purple-900/20"
              >
                <Zap className="w-3.5 h-3.5 text-orange-300" />
                Accéder aux formations
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
