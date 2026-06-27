// src/components/features/display-lab/summary-section.tsx
import { summaryTags } from './data'

export function SummarySection() {
  return (
    <section className="mx-auto max-w-300 px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-zinc-900/80 p-6 sm:p-10">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-cyan-500/12 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <h2 className="max-w-3xl text-3xl font-semibold text-zinc-50 md:text-4xl">面板技术决定上限，具体产品决定体验</h2>
          <p className="mt-5 max-w-4xl text-sm leading-8 text-zinc-300 md:text-base">OLED 的核心优势是像素级发光，LCD 的核心优势是成熟、稳定和广泛的产品选择。购买屏幕时，不应只问哪一种技术更先进，而应先明确自己观看什么内容、使用多长时间，以及愿意承担怎样的价格和使用限制。</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {summaryTags.map((tag) => (
              <div key={tag.title} className="rounded-2xl border border-white/10 bg-zinc-950/55 p-4">
                <h3 className="text-sm font-semibold text-zinc-100">{tag.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{tag.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
