"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#destaques", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#cases", label: "Cases" },
  { href: "#projetos", label: "Projetos" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#"); // hash da seção ativa
  const menuRef = useRef<HTMLDivElement>(null);

  // sombra ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight de link ativo com IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // A11y do menu: fecha com Esc, trava scroll do body
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkCls = (href: string) =>
    [
      "text-sm transition",
      active === href ? "text-fg" : "text-muted hover:text-fg",
    ].join(" ");

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full border-b border-white/10 bg-bg/60 backdrop-blur-md",
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.35)]" : "",
      ].join(" ")}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2"
          aria-label="Yamaji Studio — ir para o topo"
        >
          <Image
            src="/images/logo-yamaji-aqua.png"
            alt="Yamaji Studio"
            width={36}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegação principal"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className={navLinkCls(l.href)}>
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary ml-2 text-sm">
            Fale conosco
          </a>
        </nav>

        {/* Mobile nav toggle */}
        <button
          type="button"
          className="md:hidden text-muted hover:text-fg"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden border-t border-white/10 bg-bg/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="container flex flex-col gap-4 py-6"
            aria-label="Navegação móvel"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={navLinkCls(l.href)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn btn-primary justify-center text-sm"
              onClick={() => setOpen(false)}
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
