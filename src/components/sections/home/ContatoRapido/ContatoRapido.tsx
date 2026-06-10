import Link from 'next/link'

export function ContatoRapido() {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Fale com um advogado
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-6">
              Seu problema jurídico merece atenção especializada
            </h2>
            <p className="text-base text-gray leading-relaxed max-w-[36rem]">
              Entre em contato e agende uma consulta inicial. Nossa equipe
              analisará o seu caso com atenção e apresentará as melhores
              estratégias disponíveis.
            </p>
          </div>

          <div className="flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-navy text-gold text-sm font-semibold px-8 py-5 rounded-sm hover:bg-navy-mid transition-colors duration-200"
              >
                Agendar Consulta
              </Link>
              <a
                href="https://wa.me/5511940002000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-navy/30 text-navy text-sm font-medium px-8 py-5 rounded-sm hover:border-navy hover:bg-navy/5 transition-colors duration-200"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mt-4">
              <div className="bg-white px-6 py-6 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-gray">
                  Telefone
                </span>
                <a
                  href="tel:+551140002000"
                  className="text-sm text-navy hover:text-gold transition-colors"
                >
                  (11) 4000-2000
                </a>
              </div>
              <div className="bg-white px-6 py-6 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-gray">
                  E-mail
                </span>
                <a
                  href="mailto:contato@monteiroadvogados.com.br"
                  className="text-sm text-navy hover:text-gold transition-colors"
                >
                  contato@monteiro
                  <br />
                  advogados.com.br
                </a>
              </div>
              <div className="bg-white px-6 py-6 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-gray">
                  Horário
                </span>
                <span className="text-sm text-navy">
                  Seg — Sex
                  <br />
                  09h às 18h
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}