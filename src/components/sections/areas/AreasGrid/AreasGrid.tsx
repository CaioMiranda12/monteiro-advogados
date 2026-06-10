import Link from 'next/link'
import { areas } from '@/content/areas'
import { FadeIn } from '@/components/ui/FadeIn'

export function AreasGrid() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <FadeIn direction="up">
          <div className="max-w-[48rem] mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Especialidades
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6">
              Atuação especializada em cada frente jurídica
            </h2>
            <p className="text-base text-gray leading-relaxed">
              Cada área do escritório é conduzida por profissionais com formação específica
              e histórico comprovado. Assessoramos nossos clientes com profundidade técnica
              e visão estratégica, do planejamento preventivo à resolução de conflitos.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {areas.map((area, i) => (
            <FadeIn key={area.slug} direction="up" delay={i * 0.08}>
              <Link
                href={`/areas/${area.slug}`}
                className="group bg-white p-8 flex flex-col gap-4 hover:bg-cream transition-colors duration-300 h-full"
              >
                <div className="w-8 h-px bg-gold" />

                <h3 className="font-serif text-xl font-normal text-navy">
                  {area.title}
                </h3>

                <p className="text-sm text-gray leading-relaxed flex-1">
                  {area.summary}
                </p>

                <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2 mt-2">
                  Ver área
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}