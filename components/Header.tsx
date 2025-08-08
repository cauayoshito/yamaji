"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-white">
          Yamaji Studio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-muted">
          <Link href="/work" className="hover:text-white transition">
            Projetos
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Sobre
          </Link>
          <a
            href="https://wa.me/5571987194367?text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20site%20com%20a%20Yamaji%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black font-medium px-4 py-2 rounded hover:opacity-90 transition flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Fale conosco
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white backdrop-blur-sm border-t border-white/10 px-6 py-4">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/work" onClick={() => setMenuOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/5571992258349?text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20site%20com%20a%20Yamaji%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-black font-medium px-4 py-2 rounded hover:opacity-90 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
