import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'

export function AreasContato() {
  return (
    <section className="bg-navy py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <div className="max-w-[48rem]">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Fale conosco
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
              Não encontrou o que precisava?
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-10">
              Além das áreas listadas, atuamos em demandas específicas mediante avaliação
              prévia. Entre em contato para uma consulta inicial sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-gold text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gold-dark transition-colors duration-200"
              >
                Falar com um advogado
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/20 text-white text-sm font-semibold px-8 py-4 rounded-sm hover:border-white/50 hover:bg-white/5 transition-colors duration-200"
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