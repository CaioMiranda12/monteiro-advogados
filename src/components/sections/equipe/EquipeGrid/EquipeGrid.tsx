import Image from 'next/image'
import { equipe } from '@/content/equipe'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Advogado } from '@/types/advogado'

export function EquipeGrid() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <FadeIn direction="up">
          <div className="max-w-[48rem] mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Os profissionais
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6">
              Experiência e dedicação em cada caso
            </h2>
            <p className="text-base text-gray leading-relaxed">
              Nossa equipe é formada por advogados com formação sólida, especialização
              nas suas respectivas áreas e histórico comprovado de resultados. Cada cliente
              é atendido diretamente pelos sócios, sem intermediários.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-px bg-border">
          {equipe.map((advogado, i) => (
            <FadeIn key={advogado.slug} direction="up" delay={i * 0.08}>
              <AdvogadoPerfil advogado={advogado} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}

function AdvogadoPerfil({ advogado }: { advogado: Advogado }) {
  return (
    <div
      id={advogado.slug}
      className="bg-white grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 p-10"
    >
      <div className="flex flex-col gap-6">
        <div className="relative w-full aspect-[3/4] max-w-[280px] overflow-hidden rounded-sm">
          <Image
            src={advogado.foto}
            alt={advogado.nome}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray uppercase tracking-widest">
            {advogado.oab}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {advogado.especialidades.map((esp) => (
              <span
                key={esp}
                className="text-xs text-gray border border-border px-3 py-1 rounded-sm"
              >
                {esp}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:pt-2">
        <div>
          <div className="w-8 h-px bg-gold mb-4" />
          <h3 className="font-serif text-3xl font-normal text-navy mb-1">
            {advogado.nome}
          </h3>
          <p className="text-sm font-medium text-gold uppercase tracking-widest">
            {advogado.cargo}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {advogado.bio.split('\n\n').map((paragrafo, i) => (
            <p key={i} className="text-base text-gray leading-relaxed">
              {paragrafo}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}