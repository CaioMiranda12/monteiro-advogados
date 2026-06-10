import Link from 'next/link'
import Image from 'next/image'

const diferenciais = [
  {
    titulo: 'Experiência comprovada',
    descricao: 'Mais de 20 anos de atuação em casos complexos nas principais esferas do direito.',
  },
  {
    titulo: 'Atendimento personalizado',
    descricao: 'Cada cliente recebe atenção direta dos sócios, sem intermediários.',
  },
  {
    titulo: 'Ética e transparência',
    descricao: 'Comunicação clara sobre estratégias, prazos e honorários desde o primeiro contato.',
  },
  {
    titulo: 'Resultados consistentes',
    descricao: 'Histórico sólido de êxito em negociações, acordos e disputas judiciais.',
  },
]

export function SobreResumo() {
  return (
    <section className="bg-cream py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="flex flex-col gap-8">

            <div className="relative w-full aspect-[3/4] max-w-[420px] overflow-hidden rounded-sm">
              <Image
                src="/images/team/socio-principal.png"
                alt="Dr. Ricardo Monteiro, sócio fundador do Monteiro Advogados"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-6 py-4">
                <p className="font-serif text-lg font-normal text-white">
                  Dr. Ricardo Monteiro
                </p>
                <p className="text-xs text-gold uppercase tracking-widest mt-1">
                  Sócio Fundador — OAB/SP 123.456
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                Sobre o escritório
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6">
                Tradição jurídica aliada à visão moderna
              </h2>
              <p className="text-base text-gray leading-relaxed mb-4">
                Fundado em 2003, o Monteiro Advogados nasceu com o propósito de oferecer
                assessoria jurídica de alto padrão para empresas e pessoas físicas que
                exigem mais do que soluções genéricas.
              </p>
              <p className="text-base text-gray leading-relaxed mb-10">
                Nossa atuação é pautada pela construção de relações duradouras com nossos
                clientes, pelo profundo conhecimento técnico e pela capacidade de antecipar
                riscos antes que se tornem problemas.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center bg-navy text-gold text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200"
              >
                Conheça o escritório
              </Link>
            </div>

          </div>

          <div className="flex flex-col gap-16 lg:pt-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {diferenciais.map((item) => (
                <div
                  key={item.titulo}
                  className="bg-cream p-8 flex flex-col gap-3"
                >
                  <div className="w-8 h-px bg-gold" />
                  <h3 className="font-serif text-lg font-normal text-navy">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}