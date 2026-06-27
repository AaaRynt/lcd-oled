// src/components/features/display-lab/comparison-section.tsx
import { comparisonItems } from './data'
import { SectionHeading } from './section-heading'

export function ComparisonSection() {
  return (
    <section id="comparison" className="border-y border-white/8 bg-white/2.5">
      <div className="mx-auto max-w-300 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title="真正影响体验的，不只是画质" description="以下结论描述的是两类技术的常见特征。具体表现仍会受到面板型号、调校方式、亮度策略和设备设计影响。" />

        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-white/10 md:block">
          <table className="w-full border-collapse bg-zinc-950/70 text-left">
            <caption className="sr-only">LCD 与 OLED 核心差异对比</caption>
            <thead className="bg-white/7 text-sm text-zinc-200">
              <tr>
                <th scope="col" className="w-[18%] px-5 py-4 font-semibold">
                  对比项目
                </th>
                <th scope="col" className="w-[41%] px-5 py-4 font-semibold text-cyan-100">
                  LCD
                </th>
                <th scope="col" className="w-[41%] px-5 py-4 font-semibold text-fuchsia-100">
                  OLED
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/8">
              {comparisonItems.map((row) => (
                <tr key={row.item} className="transition-colors hover:bg-white/[0.035]">
                  <th scope="row" className="px-5 py-4 align-top text-sm font-semibold text-zinc-100">
                    {row.item}
                  </th>
                  <td className="px-5 py-4 align-top text-sm leading-6 text-zinc-300">{row.lcd}</td>
                  <td className="px-5 py-4 align-top text-sm leading-6 text-zinc-300">{row.oled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-3 md:hidden">
          {comparisonItems.map((row) => (
            <article key={row.item} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
              <h3 className="text-base font-semibold text-zinc-50">{row.item}</h3>
              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/7 p-3">
                  <p className="text-xs font-semibold text-cyan-200">LCD</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{row.lcd}</p>
                </div>
                <div className="rounded-xl border border-fuchsia-300/15 bg-fuchsia-300/7 p-3">
                  <p className="text-xs font-semibold text-fuchsia-200">OLED</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{row.oled}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
