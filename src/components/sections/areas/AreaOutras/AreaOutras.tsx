import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Area } from '@/content/areas'

interface AreaOutrasProps {
  areas: Area[]
}

export function AreaOutras({ areas }: AreaOutrasProps) {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Outras especialidades
          </p>
          <h2 className="font-serif text-4xl font-normal text-navy leading-tight mb-16">
            Explore demais áreas
          </h2>
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