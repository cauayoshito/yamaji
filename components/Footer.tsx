export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted">
        <div>
          <p className="font-medium text-fg">Yamaji Studio</p>
          <p className="mt-2">Design estratégico, sites profissionais e SEO.</p>
          <span className="badge mt-3">Aberto a novos projetos</span>
        </div>
        <div>
          <p className="font-medium text-fg">Serviços</p>
          <ul className="mt-2 space-y-1">
            <li>Branding</li>
            <li>Web design & dev</li>
            <li>SEO & Conteúdo</li>
          </ul>
        </div>
        <div id="contato">
          <p className="font-medium text-fg">Contato</p>
          <p className="mt-2">yamaji.studio@gmail.com</p>
          <p>+55 71 9 9225-8349</p>
        </div>
      </div>
    </footer>
  );
}
