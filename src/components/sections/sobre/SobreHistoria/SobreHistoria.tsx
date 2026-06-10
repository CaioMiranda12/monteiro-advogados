import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

export function SobreHistoria() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <FadeIn direction="right">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                  Nossa história
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6">
                  Duas décadas construindo relações de confiança
                </h2>
              </div>

              <p className="text-base text-gray leading-relaxed">
                O Monteiro Advogados foi fundado em 2003 por Ricardo Monteiro com um propósito
                claro: oferecer assessoria jurídica de alto padrão para empresas e pessoas físicas
                que exigem mais do que soluções genéricas. O que começou como uma banca
                boutique especializada em direito empresarial cresceu para uma estrutura completa,
                sem jamais abrir mão da atenção personalizada que marcou sua origem.
              </p>

              <p className="text-base text-gray leading-relaxed">
                Ao longo de mais de vinte anos, construímos um histórico consistente de êxito em
                negociações, acordos extrajudiciais e disputas judiciais complexas. Cada caso
                tratado como único. Cada cliente atendido diretamente pelos sócios.
              </p>

              <p className="text-base text-gray leading-relaxed">
                Em 2012, Dra. Ana Paula Monteiro ingressou como sócia, ampliando a atuação do
                escritório para as áreas de direito de família e direito tributário. Em 2018,
                Dr. Felipe Carvalho se juntou à equipe como advogado sênior, reforçando a área
                trabalhista e imobiliária.
              </p>

              <div className="grid grid-cols-2 gap-px bg-border mt-4">
                {[
                  { valor: '2003', label: 'Ano de fundação' },
                  { valor: '20+', label: 'Anos de experiência' },
                  { valor: '1.200+', label: 'Casos concluídos' },
                  { valor: '98%', label: 'Índice de satisfação' },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-6 flex flex-col gap-1">
                    <span className="font-serif text-3xl font-normal text-navy">
                      {item.valor}
                    </span>
                    <span className="text-xs text-gray uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex flex-col gap-6 lg:pt-12">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/escritorio.png"
                  alt="Escritório Monteiro Advogados"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-gray uppercase tracking-widest text-center">
                Sede do escritório — São Paulo, SP
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}