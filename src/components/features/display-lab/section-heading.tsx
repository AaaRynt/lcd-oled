// src/components/features/display-lab/section-heading.tsx
type TSectionHeadingProps = {
  kicker?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, description, align = 'left' }: TSectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {kicker ? <p className="mb-3 text-sm font-semibold text-cyan-300">{kicker}</p> : null}
      <h2 className="text-3xl font-semibold text-zinc-50 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-zinc-400">{description}</p> : null}
    </div>
  )
}
