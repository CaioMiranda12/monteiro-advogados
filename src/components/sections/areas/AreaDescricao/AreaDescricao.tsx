import { FadeIn } from '@/components/ui/FadeIn'

interface AreaDescricaoProps {
  descricao: string
}

export function AreaDescricao({ descricao }: AreaDescricaoProps) {
  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <div className="max-w-[48rem]">
            {descricao.split('\n\n').map((paragrafo, i) => (
              <p key={i} className="text-base text-gray leading-relaxed mb-4 last:mb-0">
                {paragrafo}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}