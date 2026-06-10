import Link from 'next/link'
import Image from 'next/image'
import { equipe } from '@/content/equipe'

export function EquipeResumo() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            Quem nos representa
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight max-w-[32rem]">
              Nossa Equipe
            </h2>
            <Link
              href="/equipe"
              className="text-sm font-medium text-gray hover:text-navy border-b border-border hover:border-navy transition-colors pb-0.5 self-start md:self-auto"
            >
              Conheça toda a equipe
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipe.map((advogado) => (
            <AdvogadoCard key={advogado.slug} advogado={advogado} />
          ))}
        </div>

      </div>
    </section>
  )
}

function AdvogadoCard({ advogado }: { advogado: typeof equipe[number] }) {
  return (
    <Link
      href={`/equipe#${advogado.slug}`}
      className="group flex flex-col"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6">
        <Image
          src={advogado.foto}
          alt={advogado.nome}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="w-8 h-px bg-gold mb-3" />
        <h3 className="font-serif text-xl font-normal text-navy">
          {advogado.nome}
        </h3>
        <p className="text-sm font-medium text-gold uppercase tracking-widest">
          {advogado.cargo}
        </p>
        <p className="text-xs text-gray mt-1">
          {advogado.oab}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
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
    </Link>
  )
}