import { FadeIn } from "@/components/ui/FadeIn"

const numeros = [
  {
    valor: '20+',
    label: 'Anos de experiência',
  },
  {
    valor: '1.200+',
    label: 'Casos concluídos',
  },
  {
    valor: '98%',
    label: 'Índice de satisfação',
  },
  {
    valor: '300+',
    label: 'Clientes ativos',
  },
]

export function Numeros() {
  return (
    <section className="bg-navy py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {numeros.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.1} direction="none">
              <div
                className="bg-navy px-8 py-12 flex flex-col items-center text-center gap-3"
              >
                <span className="font-serif text-5xl md:text-6xl font-normal text-gold">
                  {item.valor}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  {item.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}