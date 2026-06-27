// src/components/features/display-lab/scenario-section.tsx
import { Code as Code2, Film, Gamepad2, Sun } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { dimensionOptions, scenarioCards } from './data'
import { SectionHeading } from './section-heading'
import type { TDimensionId, TScenarioIconKey } from './types'

const scenarioIconMap: Record<TScenarioIconKey, LucideIcon> = {
  code: Code2,
  film: Film,
  gamepad: Gamepad2,
  sun: Sun,
}

function focusDimensionTab(id: TDimensionId) {
  document.getElementById(`dimension-tab-${id}`)?.focus()
}

export function ScenarioSection() {
  const [activeId, setActiveId] = useState<TDimensionId>('movie')
  const activeIndex = dimensionOptions.findIndex((option) => option.id === activeId)
  const activeOption = dimensionOptions[activeIndex] ?? dimensionOptions[0]

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = dimensionOptions.length - 1
    const nextIndex = index === lastIndex ? 0 : index + 1
    const previousIndex = index === 0 ? lastIndex : index - 1

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setActiveId(dimensionOptions[nextIndex].id)
      focusDimensionTab(dimensionOptions[nextIndex].id)
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setActiveId(dimensionOptions[previousIndex].id)
      focusDimensionTab(dimensionOptions[previousIndex].id)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setActiveId(dimensionOptions[0].id)
      focusDimensionTab(dimensionOptions[0].id)
    }

    if (event.key === 'End') {
      event.preventDefault()
      setActiveId(dimensionOptions[lastIndex].id)
      focusDimensionTab(dimensionOptions[lastIndex].id)
    }
  }

  return (
    <section id="scenarios" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title="不同场景下，优势会重新排序" description="选择维度后，可以看到 LCD 与 OLED 在该使用方式中的相对取舍。这里不使用虚假的精确分数，只呈现常见体验倾向。" />

      <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 sm:p-6">
        <div role="tablist" aria-label="使用场景维度" className="flex flex-wrap gap-2">
          {dimensionOptions.map((option, index) => {
            const isActive = option.id === activeOption.id
            return (
              <button key={option.id} aria-controls={`dimension-panel-${option.id}`} aria-selected={isActive} className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${isActive ? 'bg-zinc-50 text-zinc-950' : 'border border-white/10 bg-zinc-950/60 text-zinc-300 hover:border-white/20 hover:bg-white/8 hover:text-zinc-50'}`} id={`dimension-tab-${option.id}`} onClick={() => setActiveId(option.id)} onKeyDown={(event) => handleTabKeyDown(event, index)} role="tab" tabIndex={isActive ? 0 : -1} type="button">
                {option.label}
              </button>
            )
          })}
        </div>

        <div aria-labelledby={`dimension-tab-${activeOption.id}`} className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr_0.9fr]" id={`dimension-panel-${activeOption.id}`} role="tabpanel">
          <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/7 p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-cyan-100">LCD</h3>
              <span className="text-xs text-cyan-100/70">相对表现</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-zinc-950/80">
              <div className="h-full rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.55)]" style={{ width: activeOption.lcdStrength }} />
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{activeOption.lcd}</p>
          </div>
          <div className="rounded-2xl border border-fuchsia-300/15 bg-fuchsia-300/7 p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-fuchsia-100">OLED</h3>
              <span className="text-xs text-fuchsia-100/70">相对表现</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-zinc-950/80">
              <div className="h-full rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(232,121,249,0.55)]" style={{ width: activeOption.oledStrength }} />
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{activeOption.oled}</p>
          </div>
          <aside className="rounded-2xl border border-amber-200/15 bg-amber-200/8 p-5">
            <p className="text-sm font-semibold text-amber-100">需要注意</p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{activeOption.note}</p>
          </aside>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading title="根据你真正使用屏幕的方式来选择" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {scenarioCards.map((card) => {
            const Icon = scenarioIconMap[card.icon]
            const accentClass = card.accent === 'lcd' ? 'border-cyan-300/18 bg-cyan-300/7 text-cyan-200' : card.accent === 'oled' ? 'border-fuchsia-300/18 bg-fuchsia-300/7 text-fuchsia-200' : 'border-white/10 bg-white/6 text-zinc-200'
            return (
              <article key={card.title} className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-6 transition hover:border-white/18 hover:bg-white/[0.045]">
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${accentClass}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-zinc-300">推荐倾向：{card.tendency}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-50">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{card.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
