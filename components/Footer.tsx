import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="font-display text-xl font-bold text-fg">
              Yamaji<span className="text-accent">Studio</span>
            </div>
            <p className="mt-3 text-sm text-muted max-w-xs">
              Design estratégico, sites profissionais e SEO que convertem.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <div className="text-sm font-semibold text-fg">Serviços</div>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>Branding</li>
              <li>Web design &amp; Dev</li>
              <li>SEO &amp; Conteúdo</li>
            </ul>
          </div>

          {/* Contato + Instagram */}
          <div>
            <div className="text-sm font-semibold text-fg">Contato</div>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>
                <a
                  className="hover:text-accent transition-colors"
                  href="mailto:yamaji.studio@gmail.com"
                >
                  yamaji.studio@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent transition-colors"
                  href="https://wa.me/5571992258349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 71 99225-8349
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                  href="https://instagram.com/yamajistudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} /> @yamajistudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Yamaji Studio — Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
