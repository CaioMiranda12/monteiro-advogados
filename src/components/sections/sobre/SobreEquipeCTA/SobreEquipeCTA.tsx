import Link from 'next/link'
import Image from 'next/image'
import { equipe } from '@/content/equipe'
import { FadeIn } from '@/components/ui/FadeIn'

export function SobreEquipeCTA() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                Equipe
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight">
                Quem está ao seu lado
              </h2>
            </div>
            <Link
              href="/equipe"
              className="inline-flex items-center justify-center border border-navy/30 text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:border-navy hover:bg-navy/5 transition-colors duration-200 shrink-0"
            >
              Ver equipe completa
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
          {equipe.map((advogado, i) => (
            <FadeIn key={advogado.slug} direction="up" delay={i * 0.1}>
              <div className="bg-white">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={advogado.foto}
                    alt={advogado.nome}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="w-8 h-px bg-gold" />
                  <p className="font-serif text-lg font-normal text-navy">
                    {advogado.nome}
                  </p>
                  <p className="text-xs text-gold uppercase tracking-widest">
                    {advogado.cargo}
                  </p>
                  <p className="text-xs text-gray mt-1">
                    OAB/SP {advogado.oab}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}