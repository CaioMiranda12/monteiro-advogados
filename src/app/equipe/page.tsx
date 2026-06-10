import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/sobre/PageHero'
import { EquipeGrid } from '@/components/sections/equipe/EquipeGrid'
import { EquipeCTA } from '@/components/sections/equipe/EquipeCTA'

export const metadata: Metadata = {
  title: 'Nossa Equipe',
  description:
    'Conheça os advogados do Monteiro Advogados. Profissionais especializados com mais de 20 anos de experiência em direito empresarial, trabalhista, civil e mais.',
}

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa equipe"
        title="Profissionais comprometidos com cada causa"
        subtitle="Uma equipe pequena por escolha. Cada advogado foi selecionado pela excelência técnica e pelo compromisso com resultados reais para os clientes."
      />
      <EquipeGrid />
      <EquipeCTA />
    </>
  )
}