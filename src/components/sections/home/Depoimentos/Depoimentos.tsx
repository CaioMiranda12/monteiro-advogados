const depoimentos = [
  {
    id: 1,
    nome: 'Carlos Eduardo Ramos',
    cargo: 'CEO — Ramos Construções',
    texto: 'O Monteiro Advogados conduziu a reestruturação societária da nossa empresa com precisão e agilidade. A equipe antecipou riscos que não tínhamos considerado e entregou uma solução muito além do esperado.',
  },
  {
    id: 2,
    nome: 'Fernanda Lopes',
    cargo: 'Diretora Financeira — Grupo Lopes',
    texto: 'Trabalhamos com o escritório há mais de oito anos em questões tributárias complexas. A confiança que temos na equipe é resultado de anos de entregas consistentes e comunicação sempre transparente.',
  },
  {
    id: 3,
    nome: 'Marcelo Augusto Neves',
    cargo: 'Empresário',
    texto: 'Fui indicado pelo meu sócio e não poderia estar mais satisfeito. O Dr. Ricardo conduziu meu processo com atenção e clareza em cada etapa. Recomendo sem hesitar.',
  },
]

export function Depoimentos() {
  return (
    <section className="bg-cream py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            O que dizem nossos clientes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight max-w-[32rem]">
            Depoimentos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {depoimentos.map((item) => (
            <DepoimentoCard key={item.id} depoimento={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

function DepoimentoCard({
  depoimento,
}: {
  depoimento: typeof depoimentos[number]
}) {
  return (
    <div className="bg-cream p-8 md:p-10 flex flex-col gap-6">

      <span className="font-serif text-5xl text-gold/40 leading-none select-none">
        "
      </span>

      <p className="text-base text-gray leading-relaxed flex-1 -mt-4">
        {depoimento.texto}
      </p>

      <div className="flex flex-col gap-1 pt-4 border-t border-border">
        <span className="font-serif text-base font-normal text-navy">
          {depoimento.nome}
        </span>
        <span className="text-xs uppercase tracking-widest text-gold">
          {depoimento.cargo}
        </span>
      </div>

    </div>
  )
}