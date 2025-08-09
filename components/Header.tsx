"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import HoverCard from "@/components/HoverCard";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "backdrop-blur bg-black/40 border-b border-white/10" : ""
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* h-14 no mobile para dar mais presença à logo */}
      <div className="container flex items-center justify-between h-14 md:h-16 px-4 md:px-0">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
          {/* logo maior no mobile (w-9/h-9) e ainda maior no desktop */}
          <span className="relative inline-grid place-content-center h-9 w-9 md:h-10 md:w-10 rounded-lg">
            <Image
              src="/images/logo-yamaji-aqua.png"
              alt="Yamaji Studio"
              width={40}
              height={40}
              priority
              className="h-8 w-8 md:h-9 md:w-9"
            />
            {/* glow sutil */}
            <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-[0_0_18px_2px_var(--accent)]" />
          </span>
          {/* esconde o texto da marca no mobile para manter header limpo */}
          <span className="hidden sm:inline font-semibold text-white">
            Yamaji Studio
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/work" className="hover:text-white transition">
            Projetos
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-white transition"
              aria-expanded={servicesOpen}
            >
              Serviços <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-64"
                >
                  <HoverCard className="p-2">
                    <ul className="text-sm">
                      <li>
                        <a
                          href="#web"
                          className="block px-3 py-2 rounded hover:bg-white/5"
                        >
                          Websites & Performance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#branding"
                          className="block px-3 py-2 rounded hover:bg-white/5"
                        >
                          Branding & Identidade
                        </a>
                      </li>
                      <li>
                        <a
                          href="#seo"
                          className="block px-3 py-2 rounded hover:bg-white/5"
                        >
                          SEO & Conteúdo
                        </a>
                      </li>
                    </ul>
                  </HoverCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-white transition">
            Sobre
          </Link>

          <a
            href="https://wa.me/5571987194367?text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20site%20com%20a%20Yamaji%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent)] text-black font-medium px-4 py-2 rounded hover:opacity-90 transition flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Fale conosco
          </a>
        </nav>

        {/* BOTÃO MENU (alvo 44px) */}
        <button
          className="md:hidden text-white grid place-content-center h-11 w-11 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-black/90 text-white backdrop-blur-sm border-t border-white/10 px-6 py-4"
          >
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/work" onClick={() => setMenuOpen(false)}>
                  Projetos
                </Link>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer list-none flex items-center justify-between">
                    <span>Serviços</span> <ChevronDown className="w-4 h-4" />
                  </summary>
                  <ul className="mt-2 ml-3 space-y-2 text-muted">
                    <li>
                      <a href="#web" onClick={() => setMenuOpen(false)}>
                        Websites & Performance
                      </a>
                    </li>
                    <li>
                      <a href="#branding" onClick={() => setMenuOpen(false)}>
                        Branding & Identidade
                      </a>
                    </li>
                    <li>
                      <a href="#seo" onClick={() => setMenuOpen(false)}>
                        SEO & Conteúdo
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  Sobre
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5571987194367?text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20site%20com%20a%20Yamaji%20Studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[var(--accent)] text-black font-medium px-4 py-2 rounded hover:opacity-90 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fale conosco
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
