import { FadeIn } from '@/components/ui/FadeIn'

const valores = [
  {
    titulo: 'Missão',
    descricao:
      'Proteger os interesses dos nossos clientes com rigor técnico, agilidade e transparência, oferecendo soluções jurídicas que gerem segurança e resultados concretos.',
  },
  {
    titulo: 'Visão',
    descricao:
      'Ser reconhecido como referência em assessoria jurídica de alto padrão em São Paulo, pelo impacto positivo que geramos na vida dos nossos clientes.',
  },
  {
    titulo: 'Valores',
    descricao:
      'Ética irrestrita. Excelência técnica. Relacionamento de longo prazo. Comunicação direta. Responsabilidade com cada causa que assumimos.',
  },
]

export function SobreValores() {
  return (
    <section className="bg-cream py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <FadeIn direction="up">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Princípios
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight">
              O que nos guia
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {valores.map((item, i) => (
            <FadeIn key={item.titulo} direction="up" delay={i * 0.1}>
              <div className="bg-cream p-10 flex flex-col gap-4 h-full">
                <div className="w-8 h-px bg-gold" />
                <h3 className="font-serif text-2xl font-normal text-navy">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}