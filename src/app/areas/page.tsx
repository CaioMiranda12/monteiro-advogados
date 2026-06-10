import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/sobre/PageHero'
import { AreasGrid } from '@/components/sections/areas/AreasGrid'
import { AreasContato } from '@/components/sections/areas/AreasContato'

export const metadata: Metadata = {
  title: 'Áreas de Atuação',
  description:
    'Conheça as áreas de atuação do Monteiro Advogados: direito empresarial, trabalhista, civil, de família, tributário e imobiliário.',
}

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de atuação"
        title="Soluções jurídicas para cada necessidade"
        subtitle="Atuamos em seis frentes do direito com equipes especializadas, cobrindo desde o planejamento preventivo até a resolução de litígios complexos."
      />
      <AreasGrid />
      <AreasContato />
    </>
  )
}