import { FadeIn } from '@/components/ui/FadeIn'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy pt-[calc(var(--header-height)+96px)] pb-[96px]">
      <div className="max-w-[80rem] mx-auto px-6">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
            {eyebrow}
          </p>
          <div className="flex items-start gap-6">
            <div className="w-px h-16 bg-gold mt-1 shrink-0" />
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-normal text-white leading-tight mb-6 max-w-[48rem]">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base text-white/60 leading-relaxed max-w-[38rem]">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}