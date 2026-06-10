import { FadeIn } from '@/components/ui/FadeIn'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-navy overflow-hidden pt-20"
      style={{ minHeight: 'calc(100vh - var(--header-height) * 0)', paddingTop: 'var(--header-height)' }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-hidden="true"
      />

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-20" aria-hidden="true" />

      <div className="relative z-20 w-full max-w-[80rem] mx-auto px-6 flex items-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-[48rem]">

          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Advocacia de Alto Padrão
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Soluções jurídicas com{' '}
              <span className="text-gold font-medium">
                precisão e comprometimento
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-white/70 leading-relaxed w-full max-w-[36rem] mb-10">
              Assessoria jurídica completa para empresas e pessoas físicas.
              Mais de 20 anos defendendo os interesses dos nossos clientes
              com ética, estratégia e excelência.
            </p>

          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-gold text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gold-dark transition-colors duration-200"
              >
                Agendar Consulta
              </Link>
              <Link
                href="/areas"
                className="inline-flex items-center justify-center border border-white/30 text-white text-sm font-medium px-8 py-4 rounded-sm hover:border-white/60 hover:bg-white/5 transition-colors duration-200"
              >
                Nossas Áreas de Atuação
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

    </section>
  )
}