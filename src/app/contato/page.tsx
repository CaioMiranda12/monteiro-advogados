import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/sobre/PageHero'
import { ContatoForm } from '@/components/sections/contato/ContatoForm'
import { ContatoInfo } from '@/components/sections/contato/ContatoInfo'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com o Monteiro Advogados. Agende uma consulta inicial e fale diretamente com um dos nossos sócios.',
}

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Entre em contato"
        title="Fale com quem vai cuidar do seu caso"
        subtitle="Atendimento direto pelos sócios desde o primeiro contato. Sem intermediários, sem respostas genéricas."
      />
      <ContatoForm />
      <ContatoInfo />
    </>
  )
}