import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Artigo } from '@/types/artigo'

interface BlogArtigoProps {
  artigo: Artigo
  relacionados: Artigo[]
}

export function BlogArtigo({ artigo, relacionados }: BlogArtigoProps) {
  const paragrafos = artigo.conteudo.split('\n\n')

  return (
    <>
      <section className="bg-navy pt-[calc(var(--header-height)+96px)] pb-[96px]">
        <div className="max-w-[80rem] mx-auto px-6">
          <FadeIn direction="up">
            <div className="max-w-[48rem]">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                {artigo.categoria}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                {artigo.titulo}
              </h1>
              <div className="flex items-center gap-4 text-xs text-white/50 uppercase tracking-widest">
                <span>{artigo.autor}</span>
                <span className="w-px h-3 bg-white/20" />
                <span>{artigo.data}</span>
                <span className="w-px h-3 bg-white/20" />
                <span>{artigo.tempoLeitura} de leitura</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-[96px]">
        <div className="max-w-[80rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">

            <FadeIn direction="right">
              <article className="flex flex-col gap-5 max-w-[48rem]">
                {paragrafos.map((bloco, i) => {
                  if (bloco.startsWith('## ')) {
                    return (
                      <h2 key={i} className="font-serif text-2xl font-normal text-navy mt-4">
                        {bloco.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (bloco.startsWith('**') && bloco.endsWith('**')) {
                    return (
                      <p key={i} className="text-sm font-semibold text-navy uppercase tracking-widest">
                        {bloco.replace(/\*\*/g, '')}
                      </p>
                    )
                  }
                  return (
                    <p key={i} className="text-base text-gray leading-relaxed">
                      {bloco}
                    </p>
                  )
                })}
              </article>
            </FadeIn>

            <FadeIn direction="left">
              <aside className="flex flex-col gap-8 lg:sticky lg:top-[calc(var(--header-height)+32px)]">

                <div className="border border-border p-6 flex flex-col gap-3">
                  <div className="w-8 h-px bg-gold" />
                  <p className="font-serif text-lg text-navy">{artigo.autor}</p>
                  <p className="text-xs text-gold uppercase tracking-widest">{artigo.cargo}</p>
                </div>

                <div className="border border-border p-6 flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray">
                    Precisa de assessoria?
                  </p>
                  <p className="text-sm text-gray leading-relaxed">
                    Entre em contato para uma consulta inicial sobre o seu caso.
                  </p>
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center bg-navy text-gold text-xs font-semibold px-6 py-3 rounded-sm hover:bg-navy-mid transition-colors duration-200"
                  >
                    Falar com um advogado
                  </Link>
                </div>

              </aside>
            </FadeIn>

          </div>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="bg-cream py-[96px]">
          <div className="max-w-[80rem] mx-auto px-6">
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                Continue lendo
              </p>
              <h2 className="font-serif text-3xl font-normal text-navy leading-tight mb-16">
                Outros artigos
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {relacionados.map((rel, i) => (
                <FadeIn key={rel.slug} direction="up" delay={i * 0.08}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="group bg-cream p-8 flex flex-col gap-4 hover:bg-white transition-colors duration-300 h-full"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {rel.categoria}
                    </span>
                    <div className="w-8 h-px bg-gold" />
                    <h3 className="font-serif text-xl font-normal text-navy leading-snug flex-1">
                      {rel.titulo}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2 mt-2">
                      Ler artigo
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}