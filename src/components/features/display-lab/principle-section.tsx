// src/components/features/display-lab/principle-section.tsx
import { Grid2x2 as Grid2X2, Layers2 as Layers3, Lightbulb, PanelTop, Sparkles, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { principleCards } from './data'
import { SectionHeading } from './section-heading'
import type { TDisplayTechnology, TPrincipleIconKey } from './types'

const principleIconMap: Record<TPrincipleIconKey, LucideIcon> = {
  lightbulb: Lightbulb,
  layers: Layers3,
  panel: PanelTop,
  sparkles: Sparkles,
  grid: Grid2X2,
  zap: Zap,
}

type TPixelDiagramProps = {
  technology: TDisplayTechnology
}

function PixelDiagram({ technology }: TPixelDiagramProps) {
  if (technology === 'lcd') {
    return (
      <div className="rounded-2xl border border-cyan-300/18 bg-cyan-300/7 p-4">
        <div className="mb-4 h-8 rounded-xl bg-cyan-200/30 shadow-[0_0_28px_rgba(125,211,252,0.28)]" />
        <div className="mb-4 grid grid-cols-6 gap-1 rounded-xl bg-zinc-950/70 p-2">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} className={index % 3 === 0 ? 'h-5 rounded-sm bg-red-400/75' : index % 3 === 1 ? 'h-5 rounded-sm bg-green-400/75' : 'h-5 rounded-sm bg-blue-400/75'} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs text-cyan-100/80">
          <span>背光层</span>
          <span>液晶层</span>
          <span>RGB 滤光层</span>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-fuchsia-300/18 bg-fuchsia-300/7 p-4">
      <div className="grid grid-cols-8 gap-2 rounded-xl bg-black p-3">
        {Array.from({ length: 32 }).map((_, index) => (
          <span key={index} className={index % 4 === 0 ? 'h-5 rounded-full bg-red-400 shadow-[0_0_15px_rgba(248,113,113,0.75)]' : index % 4 === 1 ? 'h-5 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.75)]' : index % 4 === 2 ? 'h-5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.75)]' : 'h-5 rounded-full bg-zinc-900'} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-fuchsia-100/80">
        <span>独立 R</span>
        <span>独立 G</span>
        <span>独立 B</span>
      </div>
    </div>
  )
}

export function PrincipleSection() {
  return (
    <section id="principle" className="mx-auto max-w-300 px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title="两种屏幕，是两套完全不同的发光逻辑" />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {principleCards.map((card) => {
          const isLcd = card.technology === 'lcd'
          return (
            <article key={card.technology} className={`rounded-3xl border p-6 ${isLcd ? 'border-cyan-300/18 bg-cyan-300/6' : 'border-fuchsia-300/18 bg-fuchsia-300/6'}`}>
              <div className="mb-6 flex items-center gap-3">
                {card.icons.map((icon) => {
                  const Icon = principleIconMap[icon]
                  return (
                    <span key={icon} className={`grid h-10 w-10 place-items-center rounded-xl border ${isLcd ? 'border-cyan-300/25 bg-cyan-300/10 text-cyan-200' : 'border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-200'}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )
                })}
              </div>
              <h3 className="text-2xl font-semibold text-zinc-50">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{card.body}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {card.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs text-zinc-200">{step}</span>
                    {index < card.flow.length - 1 ? <span className="text-zinc-600">→</span> : null}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <PixelDiagram technology={card.technology} />
              </div>
              <ul className="mt-6 space-y-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-zinc-300">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${isLcd ? 'bg-cyan-300' : 'bg-fuchsia-300'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
