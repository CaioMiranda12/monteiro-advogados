import Link from 'next/link'
import { areas } from '@/content/areas'

export function AreasDestaque() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            O que fazemos
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight max-w-[32rem]">
              Áreas de Atuação
            </h2>
            <Link
              href="/areas"
              className="text-sm font-medium text-gray hover:text-navy border-b border-border hover:border-navy transition-colors pb-0.5 self-start md:self-auto"
            >
              Ver todas as áreas
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>

      </div>
    </section>
  )
}

function AreaCard({ area }: { area: typeof areas[number] }) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className="group bg-white p-8 flex flex-col gap-4 hover:bg-cream transition-colors duration-300"
    >
      <div className="w-8 h-px bg-gold" />

      <h3 className="font-serif text-xl font-normal text-navy group-hover:text-navy transition-colors">
        {area.title}
      </h3>

      <p className="text-sm text-gray leading-relaxed flex-1">
        {area.summary}
      </p>

      <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2 mt-2">
        Saiba mais
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}