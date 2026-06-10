import { FadeIn } from '@/components/ui/FadeIn'

export function ContatoInfo() {
  return (
    <section className="bg-cream py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                Onde estamos
              </p>
              <h2 className="font-serif text-4xl font-normal text-navy leading-tight mb-6">
                Sede em São Paulo
              </h2>
              <p className="text-base text-gray leading-relaxed mb-8">
                Estamos localizados na Avenida Paulista, no coração financeiro e
                empresarial de São Paulo. Fácil acesso por metrô, com estacionamento
                próximo para clientes.
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-navy">
                  Av. Paulista, 1.000 — cj. 101
                </p>
                <p className="text-sm text-navy">
                  Bela Vista — São Paulo, SP — CEP 01310-100
                </p>
                <p className="text-sm text-gray">
                  Metrô Trianon-Masp (Linha 2 — Verde) — 3 min a pé
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video bg-navy/10 rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0974533587246!2d-46.65429492378619!3d-23.56513836145558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Monteiro Advogados"
                />
              </div>
              <p className="text-xs text-gray uppercase tracking-widest text-center">
                Av. Paulista, 1.000 — São Paulo, SP
              </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}