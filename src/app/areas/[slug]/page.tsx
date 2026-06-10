import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { areas } from '@/content/areas'
import { PageHero } from '@/components/sections/sobre/PageHero'
import { AreaDescricao } from '@/components/sections/areas/AreaDescricao'
import { AreaServicos } from '@/components/sections/areas/AreaServicos'
import { AreaOutras } from '@/components/sections/areas/AreaOutras'
import { AreasContato } from '@/components/sections/areas/AreasContato'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  return {
    title: area?.title,
    description: area?.summary,
  }
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)

  if (!area) notFound()

  const outras = areas.filter((a) => a.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow="Áreas de atuação"
        title={area.title}
        subtitle={area.summary}
      />
      <AreaDescricao descricao={area.description} />
      <AreaServicos servicos={area.services} />
      <AreaOutras areas={outras} />
      <AreasContato />
    </>
  )
}