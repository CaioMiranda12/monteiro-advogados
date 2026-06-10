import Link from 'next/link'

const areas = [
  { label: 'Direito Empresarial', href: '/areas/direito-empresarial' },
  { label: 'Direito Trabalhista', href: '/areas/direito-trabalhista' },
  { label: 'Direito Civil', href: '/areas/direito-civil' },
  { label: 'Direito de Família', href: '/areas/direito-de-familia' },
  { label: 'Direito Tributário', href: '/areas/direito-tributario' },
]

const links = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="md:col-span-2">
          <p className="font-serif text-2xl font-medium text-white mb-4">
            Monteiro <span className="text-gold">&</span> Advogados
          </p>
          <p className="text-sm leading-relaxed max-w-sm">
            Assessoria jurídica de alto padrão para empresas e pessoas físicas.
            Comprometidos com resultados, pautados pela ética.
          </p>
          <div className="mt-6 flex flex-col gap-1 text-sm">
            <span>Av. Paulista, 1000 — Conjunto 101</span>
            <span>Bela Vista, São Paulo — SP</span>
            <a
              href="tel:+551140002000"
              className="mt-2 hover:text-gold transition-colors"
            >
              (11) 4000-2000
            </a>
            <a
              href="mailto:contato@monteiroadvogados.com.br"
              className="hover:text-gold transition-colors"
            >
              contato@monteiroadvogados.com.br
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
            Áreas de Atuação
          </p>
          <ul className="flex flex-col gap-3">
            {areas.map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
            Navegação
          </p>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} Monteiro & Advogados. Todos os direitos reservados.
          </span>
          <span>
            OAB/SP — Sociedade de Advogados
          </span>
        </div>
      </div>

    </footer>
  )
}