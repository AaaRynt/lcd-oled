// src/components/features/display-lab/types.ts
export type TDisplayTechnology = 'lcd' | 'oled'

export type TNavItem = {
  label: string
  href: string
}

export type TFact = {
  title: string
  body: string
}

export type TPrincipleIconKey = 'lightbulb' | 'layers' | 'panel' | 'sparkles' | 'grid' | 'zap'

export type TPrincipleCard = {
  technology: TDisplayTechnology
  title: string
  body: string
  flow: readonly string[]
  features: readonly string[]
  icons: readonly TPrincipleIconKey[]
}

export type TComparisonItem = {
  item: string
  lcd: string
  oled: string
}

export type TDimensionId = 'movie' | 'game' | 'work' | 'outdoor' | 'long-term'

export type TDimensionOption = {
  id: TDimensionId
  label: string
  lcd: string
  oled: string
  note: string
  lcdStrength: string
  oledStrength: string
}

export type TScenarioIconKey = 'code' | 'film' | 'gamepad' | 'sun'

export type TScenarioCard = {
  title: string
  tendency: string
  body: string
  tags: readonly string[]
  icon: TScenarioIconKey
  accent: TDisplayTechnology | 'neutral'
}

export type TRecommendationQuestion = {
  id: string
  question: string
}

export type TRecommendationValue = 'yes' | 'no'

export type TFaqItem = {
  question: string
  answer: string
}

export type TSummaryTag = {
  title: string
  body: string
}
