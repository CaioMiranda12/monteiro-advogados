'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'

type FormState = {
  nome: string
  email: string
  telefone: string
  area: string
  mensagem: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const areasOptions = [
  'Direito Empresarial',
  'Direito Trabalhista',
  'Direito Civil',
  'Direito de Família',
  'Direito Tributário',
  'Direito Imobiliário',
  'Outro',
]

const initialState: FormState = {
  nome: '',
  email: '',
  telefone: '',
  area: '',
  mensagem: '',
}

export function ContatoForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // Simulação de envio — substituir por integração real (Resend, Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus('sent')
  }

  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <FadeIn direction="right">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                  Formulário de contato
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy leading-tight mb-4">
                  Conte-nos sobre o seu caso
                </h2>
                <p className="text-base text-gray leading-relaxed">
                  Preencha o formulário e entraremos em contato em até um dia útil.
                  Todas as informações são tratadas com total sigilo.
                </p>
              </div>

              {status === 'sent' ? (
                <div className="border border-border p-8 flex flex-col gap-3">
                  <div className="w-8 h-px bg-gold" />
                  <p className="font-serif text-xl text-navy">
                    Mensagem recebida
                  </p>
                  <p className="text-sm text-gray leading-relaxed">
                    Agradecemos o contato. Um dos nossos advogados retornará
                    em breve pelo canal de sua preferência.
                  </p>
                  <button
                    onClick={() => { setForm(initialState); setStatus('idle') }}
                    className="text-xs font-semibold uppercase tracking-widest text-gold mt-2 self-start hover:text-gold-dark transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nome" className="text-xs uppercase tracking-widest text-gray">
                        Nome completo *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        className="border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-gray/50 focus:outline-none focus:border-navy transition-colors rounded-sm"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="telefone" className="text-xs uppercase tracking-widest text-gray">
                        Telefone *
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={form.telefone}
                        onChange={handleChange}
                        className="border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-gray/50 focus:outline-none focus:border-navy transition-colors rounded-sm"
                        placeholder="(11) 90000-0000"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-gray/50 focus:outline-none focus:border-navy transition-colors rounded-sm"
                      placeholder="seu@email.com.br"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="area" className="text-xs uppercase tracking-widest text-gray">
                      Área de interesse
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      className="border border-border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy transition-colors rounded-sm appearance-none cursor-pointer"
                    >
                      <option value="">Selecione uma área</option>
                      {areasOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="mensagem" className="text-xs uppercase tracking-widest text-gray">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={handleChange}
                      className="border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-gray/50 focus:outline-none focus:border-navy transition-colors rounded-sm resize-none"
                      placeholder="Descreva brevemente o seu caso ou dúvida..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center bg-navy text-gold text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed self-start"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex flex-col gap-10 lg:pt-[88px]">

              <div className="flex flex-col gap-px bg-border">
                {[
                  {
                    label: 'Telefone',
                    content: (
                      <a href="tel:+551140002000" className="text-sm text-navy hover:text-gold transition-colors">
                        (11) 4000-2000
                      </a>
                    ),
                  },
                  {
                    label: 'WhatsApp',
                    content: (
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-navy hover:text-gold transition-colors"
                      >
                        (11) 94000-2000
                      </a>
                    ),
                  },
                  {
                    label: 'E-mail',
                    content: (
                      <a href="mailto:contato@monteiroadvogados.com.br" className="text-sm text-navy hover:text-gold transition-colors">
                        contato@monteiroadvogados.com.br
                      </a>
                    ),
                  },
                  {
                    label: 'Endereço',
                    content: (
                      <span className="text-sm text-navy">
                        Av. Paulista, 1.000 — cj. 101<br />
                        Bela Vista — São Paulo, SP<br />
                        CEP 01310-100
                      </span>
                    ),
                  },
                  {
                    label: 'Horário de atendimento',
                    content: (
                      <span className="text-sm text-navy">
                        Segunda a sexta, das 09h às 18h
                      </span>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-white px-6 py-5 flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-gray">
                      {item.label}
                    </span>
                    {item.content}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-widest text-gray">
                  Atendimento imediato
                </p>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-navy/30 text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:border-navy hover:bg-navy/5 transition-colors duration-200"
                >
                  Chamar no WhatsApp
                </a>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}