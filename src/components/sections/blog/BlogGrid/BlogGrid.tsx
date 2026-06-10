import Link from 'next/link'
import { artigos } from '@/content/blog'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Artigo } from '@/types/artigo'

export function BlogGrid() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {artigos.map((artigo, i) => (
            <FadeIn key={artigo.slug} direction="up" delay={i * 0.08}>
              <ArtigoCard artigo={artigo} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}

function ArtigoCard({ artigo }: { artigo: Artigo }) {
  return (
    <Link
      href={`/blog/${artigo.slug}`}
      className="group bg-white p-8 flex flex-col gap-4 hover:bg-cream transition-colors duration-300 h-full"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {artigo.categoria}
        </span>
        <span className="text-xs text-gray">
          {artigo.tempoLeitura}
        </span>
      </div>

      <div className="w-8 h-px bg-gold" />

      <h3 className="font-serif text-xl font-normal text-navy leading-snug flex-1">
        {artigo.titulo}
      </h3>

      <p className="text-sm text-gray leading-relaxed">
        {artigo.resumo}
      </p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-navy font-medium">{artigo.autor}</span>
          <span className="text-xs text-gray">{artigo.data}</span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2">
          Ler
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}