import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/sobre/PageHero'
import { SobreHistoria } from '@/components/sections/sobre/SobreHistoria'
import { SobreValores } from '@/components/sections/sobre/SobreValores'
import { SobreEquipeCTA } from '@/components/sections/sobre/SobreEquipeCTA'

export const metadata: Metadata = {
  title: 'Sobre o Escritório',
  description:
    'Conheça a história, os valores e os profissionais do Monteiro Advogados. Mais de 20 anos de assessoria jurídica de alto padrão em São Paulo.',
}

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Monteiro Advogados"
        title="Um escritório construído sobre confiança e resultados"
        subtitle="Desde 2003, assessoramos empresas e pessoas físicas com rigor técnico, atenção personalizada e compromisso com cada causa que assumimos."
      />
      <SobreHistoria />
      <SobreValores />
      <SobreEquipeCTA />
    </>
  )
}