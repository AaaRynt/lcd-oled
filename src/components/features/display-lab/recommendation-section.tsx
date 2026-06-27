// src/components/features/display-lab/recommendation-section.tsx
import { CheckCircle2, Gauge, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import { recommendationQuestions } from './data'
import { SectionHeading } from './section-heading'
import type { TRecommendationValue } from './types'

type TRecommendationAnswers = Record<(typeof recommendationQuestions)[number]['id'], TRecommendationValue | null>

type TRecommendationResult = {
  title: string
  body: string
  tone: 'lcd' | 'oled' | 'balanced'
}

function createEmptyAnswers(): TRecommendationAnswers {
  return recommendationQuestions.reduce<TRecommendationAnswers>((answers, question) => {
    answers[question.id] = null
    return answers
  }, {})
}

function getRecommendationResult(answers: TRecommendationAnswers): TRecommendationResult {
  let lcdScore = 0
  let oledScore = 0

  if (answers.static === 'yes') {
    lcdScore += 2
  } else {
    oledScore += 1
  }

  if (answers.black === 'yes') {
    oledScore += 2
  } else {
    lcdScore += 1
  }

  if (answers.bright === 'yes') {
    lcdScore += 1
  } else {
    oledScore += 1
  }

  if (answers.price === 'yes') {
    oledScore += 1
  } else {
    lcdScore += 1
  }

  if (lcdScore - oledScore >= 2) {
    return {
      title: '偏向 LCD',
      body: '你可能更适合 LCD。你的使用方式更看重长时间静态显示、稳定亮度或成本控制。不过，具体购买时仍应比较面板类型、分辨率、色彩和调光方式。',
      tone: 'lcd',
    }
  }

  if (oledScore - lcdScore >= 2) {
    return {
      title: '偏向 OLED',
      body: '你可能更适合 OLED。你更看重暗场画质、像素响应速度和轻薄形态。不过，长期固定界面、调光方式和实际亮度仍值得关注。',
      tone: 'oled',
    }
  }

  return {
    title: '结果接近',
    body: '你的需求没有明显偏向。此时具体产品的调校、亮度、刷新率、分辨率和价格，可能比 LCD 或 OLED 的技术标签更重要。',
    tone: 'balanced',
  }
}

export function RecommendationSection() {
  const [answers, setAnswers] = useState<TRecommendationAnswers>(() => createEmptyAnswers())
  const isComplete = recommendationQuestions.every((question) => answers[question.id] !== null)
  const answeredCount = recommendationQuestions.filter((question) => answers[question.id] !== null).length
  const result = useMemo(() => (isComplete ? getRecommendationResult(answers) : null), [answers, isComplete])

  function setAnswer(questionId: string, value: TRecommendationValue) {
    setAnswers((current) => ({ ...current, [questionId]: value }))
  }

  function resetAnswers() {
    setAnswers(createEmptyAnswers())
  }

  const resultClass = result?.tone === 'lcd' ? 'border-cyan-300/20 bg-cyan-300/8' : result?.tone === 'oled' ? 'border-fuchsia-300/20 bg-fuchsia-300/8' : 'border-white/10 bg-white/6'

  return (
    <section id="recommendation" className="border-y border-white/8 bg-white/[0.025]">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title="你可能更适合哪一种？" description="回答四个问题后，页面会给出倾向性建议。结果不会替代具体产品对比。" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Gauge className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm text-zinc-300">
                  已回答 {answeredCount} / {recommendationQuestions.length}
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300" onClick={resetAnswers} type="button">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                重新选择
              </button>
            </div>

            <div className="space-y-4">
              {recommendationQuestions.map((question, index) => (
                <article key={question.id} className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-medium text-zinc-100">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="flex shrink-0 gap-2">
                      {(['yes', 'no'] as const).map((value) => {
                        const isActive = answers[question.id] === value
                        return (
                          <button key={value} aria-label={`${question.question}${value === 'yes' ? ' 是' : ' 否'}`} aria-pressed={isActive} className={`min-w-16 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${isActive ? 'bg-zinc-50 text-zinc-950' : 'border border-white/10 bg-zinc-950/70 text-zinc-300 hover:border-white/20 hover:bg-white/8 hover:text-zinc-50'}`} onClick={() => setAnswer(question.id, value)} type="button">
                            {value === 'yes' ? '是' : '否'}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className={`rounded-[1.5rem] border p-6 ${resultClass}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-zinc-950/60 text-zinc-100">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-zinc-50">{result ? result.title : '等待你的选择'}</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-zinc-300">{result ? result.body : '先回答左侧问题。每一道题都可以随时修改，完成后会显示一段非绝对化的购买倾向建议。'}</p>
            {result ? (
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300" onClick={resetAnswers} type="button">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                重新选择
              </button>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  )
}
