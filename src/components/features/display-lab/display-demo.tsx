// src/components/features/display-lab/display-demo.tsx
import { useState } from 'react'
import type { TDisplayTechnology } from './types'

type TScreenSceneProps = {
  variant: TDisplayTechnology
}

const windowBlocks = ['left-[11%] top-[48%] h-[9%] w-[8%]', 'left-[22%] top-[39%] h-[13%] w-[7%]', 'left-[35%] top-[54%] h-[10%] w-[10%]', 'right-[33%] top-[42%] h-[12%] w-[8%]', 'right-[17%] top-[51%] h-[9%] w-[9%]']

const textRows = ['w-9/12', 'w-7/12', 'w-10/12']

function ScreenScene({ variant }: TScreenSceneProps) {
  const isLcd = variant === 'lcd'
  const skyClass = isLcd ? 'bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(180deg,#172033_0%,#111827_58%,#1e293b_100%)]' : 'bg-[radial-gradient(circle_at_50%_18%,rgba(217,70,239,0.16),transparent_30%),linear-gradient(180deg,#020205_0%,#000_62%,#05010a_100%)]'
  const windowClass = isLcd ? 'bg-cyan-200/80 shadow-[0_0_18px_rgba(103,232,249,0.28)]' : 'bg-fuchsia-200 shadow-[0_0_26px_rgba(232,121,249,0.68)]'

  return (
    <div className={`absolute inset-0 overflow-hidden ${skyClass}`} aria-hidden="true">
      <div className={`absolute inset-0 ${isLcd ? 'bg-[radial-gradient(circle_at_50%_105%,rgba(125,211,252,0.18),transparent_55%)]' : 'bg-[radial-gradient(circle_at_50%_105%,rgba(217,70,239,0.13),transparent_55%)]'}`} />
      <div className={`absolute top-[14%] right-[18%] h-14 w-14 rounded-full ${isLcd ? 'bg-cyan-100/75 shadow-[0_0_28px_rgba(186,230,253,0.35)]' : 'bg-zinc-50 shadow-[0_0_32px_rgba(255,255,255,0.72)]'}`} />
      <div className="absolute right-0 bottom-0 left-0 h-[45%] bg-black/45" />
      <div className="absolute bottom-[16%] left-[8%] h-[36%] w-[22%] rounded-t-md bg-zinc-950/55 ring-1 ring-white/8" />
      <div className="absolute bottom-[16%] left-[34%] h-[48%] w-[18%] rounded-t-md bg-zinc-950/65 ring-1 ring-white/8" />
      <div className="absolute right-[10%] bottom-[16%] h-[40%] w-[27%] rounded-t-md bg-zinc-950/60 ring-1 ring-white/8" />
      {windowBlocks.map((block) => (
        <div key={block} className={`absolute rounded-sm ${block} ${windowClass}`} />
      ))}
      <div className="absolute right-[10%] bottom-[9%] left-[10%] rounded-xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className={isLcd ? 'h-2.5 w-2.5 rounded-full bg-cyan-300' : 'h-2.5 w-2.5 rounded-full bg-fuchsia-300'} />
          <span className="h-2 w-28 rounded-full bg-white/35" />
        </div>
        <div className="space-y-2">
          {textRows.map((row) => (
            <span key={row} className={`block h-2 rounded-full bg-white/18 ${row}`} />
          ))}
        </div>
      </div>
      {isLcd ? <div className="absolute inset-0 bg-cyan-100/6 shadow-[inset_0_0_70px_rgba(125,211,252,0.22)]" /> : null}
    </div>
  )
}

export function DisplayDemo() {
  const [position, setPosition] = useState(50)
  const updatePosition = (nextPosition: number) => setPosition(Math.min(88, Math.max(12, nextPosition)))

  return (
    <div className="rounded-4xl border border-white/10 bg-white/6 p-3 shadow-2xl shadow-black/40">
      <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-zinc-950">
        <div className="relative aspect-4/3 min-h-57.5 sm:min-h-90">
          <ScreenScene variant="oled" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <ScreenScene variant="lcd" />
          </div>

          <input
            aria-label="拖动以比较 LCD 与 OLED 的显示效果"
            aria-valuetext={`LCD 区域 ${position}%，OLED 区域 ${100 - position}%`}
            className="peer absolute inset-x-3 top-4 bottom-16 z-30 w-[calc(100%-1.5rem)] cursor-ew-resize appearance-none bg-transparent opacity-0 focus-visible:outline-none"
            max={88}
            min={12}
            onChange={(event) => updatePosition(Number(event.target.value))}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
                event.preventDefault()
                updatePosition(position + 2)
              }

              if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
                event.preventDefault()
                updatePosition(position - 2)
              }

              if (event.key === 'Home') {
                event.preventDefault()
                updatePosition(12)
              }

              if (event.key === 'End') {
                event.preventDefault()
                updatePosition(88)
              }
            }}
            type="range"
            value={position}
          />

          <div className="pointer-events-none absolute inset-y-5 z-20 w-px bg-white/70" style={{ left: `${position}%` }} />
          <div className="pointer-events-none absolute top-1/2 z-20 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-zinc-950/90 shadow-xl shadow-black/40 transition peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300" style={{ left: `${position}%` }}>
            <span className="h-5 w-px rounded-full bg-zinc-400" />
            <span className="absolute h-px w-5 rounded-full bg-zinc-400" />
          </div>

          <div className="pointer-events-none absolute top-4 left-4 z-20 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">LCD</div>
          <div className="pointer-events-none absolute top-4 right-4 z-20 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-sm font-medium text-fuchsia-100">OLED</div>
        </div>
        <div className="grid gap-2 border-t border-white/10 bg-zinc-950/85 p-4 text-sm text-zinc-300 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
            LCD：背光始终存在
          </div>
          <div className="flex items-center gap-2 sm:justify-end">
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,0.8)]" />
            OLED：像素独立发光
          </div>
        </div>
      </div>
    </div>
  )
}
