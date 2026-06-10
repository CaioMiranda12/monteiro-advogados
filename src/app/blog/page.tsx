import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/sobre/PageHero'
import { BlogGrid } from '@/components/sections/blog/BlogGrid'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos jurídicos do Monteiro Advogados sobre direito empresarial, trabalhista, de família, tributário e imobiliário.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Conhecimento jurídico aplicado"
        subtitle="Artigos escritos pelos nossos advogados sobre temas relevantes para empresas e pessoas físicas."
      />
      <BlogGrid />
    </>
  )
}