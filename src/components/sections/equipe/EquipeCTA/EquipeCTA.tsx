import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'

export function EquipeCTA() {
  return (
    <section className="bg-cream py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <div className="max-w-[48rem]">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Agende uma consulta
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6">
              Fale diretamente com quem vai cuidar do seu caso
            </h2>
            <p className="text-base text-gray leading-relaxed mb-10">
              No Monteiro Advogados, você não fala com assistentes ou estagiários.
              Desde o primeiro contato, você é atendido por um dos nossos sócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-navy text-gold text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200"
              >
                Entrar em contato
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-navy/30 text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:border-navy hover:bg-navy/5 transition-colors duration-200"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}