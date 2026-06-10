import { FadeIn } from '@/components/ui/FadeIn'

interface AreaServicosProps {
  servicos: string[]
}

export function AreaServicos({ servicos }: AreaServicosProps) {
  return (
    <section className="bg-cream py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            O que cobrimos
          </p>
          <h2 className="font-serif text-4xl font-normal text-navy leading-tight mb-16">
            Serviços desta área
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {servicos.map((servico, i) => (
            <FadeIn key={servico} direction="up" delay={i * 0.06}>
              <div className="bg-cream p-8 flex flex-col gap-3">
                <div className="w-8 h-px bg-gold" />
                <p className="text-sm text-navy leading-relaxed">
                  {servico}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}