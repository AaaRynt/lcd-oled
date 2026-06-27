// src/components/features/display-lab/faq-section.tsx
import { ChevronDown } from 'lucide-react'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { faqItems } from './data'
import { SectionHeading } from './section-heading'

function focusFaqButton(index: number) {
  document.getElementById(`faq-button-${index}`)?.focus()
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = faqItems.length - 1
    const nextIndex = index === lastIndex ? 0 : index + 1
    const previousIndex = index === 0 ? lastIndex : index - 1

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusFaqButton(nextIndex)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusFaqButton(previousIndex)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      focusFaqButton(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      focusFaqButton(lastIndex)
    }
  }

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title="关于屏幕技术的几个常见误区" />
      <div className="mt-10 divide-y divide-white/8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/75">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <article key={item.question}>
              <h3>
                <button aria-controls={`faq-panel-${index}`} aria-expanded={isOpen} className="focus-visible:outline-inset flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-zinc-50 transition hover:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" id={`faq-button-${index}`} onClick={() => setOpenIndex(isOpen ? null : index)} onKeyDown={(event) => handleKeyDown(event, index)} type="button">
                  <span>{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </h3>
              {isOpen ? (
                <div aria-labelledby={`faq-button-${index}`} id={`faq-panel-${index}`} role="region">
                  <p className="px-5 pb-6 text-sm leading-7 text-zinc-300">{item.answer}</p>
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}
