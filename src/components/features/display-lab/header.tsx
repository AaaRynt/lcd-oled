// src/components/features/display-lab/header.tsx
import { Monitor } from 'lucide-react'
import { navItems } from './data'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="rounded-md text-lg font-semibold text-zinc-50 transition-colors hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Display Lab
          </a>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-zinc-200">
            <Monitor className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span>LCD vs OLED</span>
          </div>
        </div>
        <nav aria-label="主要导航" className="flex flex-wrap items-center gap-2 sm:gap-3 md:justify-end">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
