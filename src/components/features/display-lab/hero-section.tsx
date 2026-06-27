// src/components/features/display-lab/hero-section.tsx
import { ArrowDown, Gauge } from 'lucide-react'
import { heroFacts } from './data'
import { DisplayDemo } from './display-demo'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="display-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="absolute top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/12 blur-3xl" aria-hidden="true" />
      <div className="absolute top-28 right-0 h-80 w-80 rounded-full bg-fuchsia-500/12 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1200px] min-w-0 gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="fade-in-up flex min-w-0 flex-col justify-center">
          <p className="mb-5 text-sm font-semibold text-cyan-300">DISPLAY TECHNOLOGY GUIDE</p>
          <h1 className="max-w-3xl text-3xl leading-tight font-semibold text-zinc-50 sm:text-4xl md:text-6xl">
            <span className="block">LCD 与 OLED，</span>
            <span className="block">差别不只在黑色更黑</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">它们使用完全不同的发光方式，也因此在对比度、亮度、响应速度、功耗、寿命和价格方面表现不同。没有绝对更好的屏幕，只有更适合具体设备和使用方式的方案。</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#comparison" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              查看核心差异
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#recommendation" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/7 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-fuchsia-300/50 hover:bg-fuchsia-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300">
              <Gauge className="h-4 w-4" aria-hidden="true" />
              帮我选择
            </a>
          </div>
        </div>
        <div className="fade-in-up min-w-0 [animation-delay:120ms]">
          <DisplayDemo />
        </div>
      </div>
      <div className="relative mx-auto max-w-[1200px] px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          {heroFacts.map((fact) => (
            <article key={fact.title} className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur">
              <h2 className="text-sm font-semibold text-zinc-50">{fact.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{fact.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
