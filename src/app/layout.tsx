import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Monteiro & Advogados — Assessoria Jurídica de Alto Padrão',
    template: '%s | Monteiro & Advogados',
  },
  description: 'Escritório de advocacia especializado em direito empresarial, trabalhista e civil. Atendimento personalizado em São Paulo.',
  openGraph: {
    siteName: 'Monteiro & Advogados',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="font-sans text-navy bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}