import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { artigos } from '@/content/blog'
import { BlogArtigo } from '@/components/sections/blog/BlogArtigo'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const artigo = artigos.find((a) => a.slug === slug)
  return {
    title: artigo?.titulo,
    description: artigo?.resumo,
  }
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params
  const artigo = artigos.find((a) => a.slug === slug)

  if (!artigo) return notFound()

  const relacionados = artigos.filter((a) => a.slug !== slug)

  return <BlogArtigo artigo={artigo} relacionados={relacionados} />
}