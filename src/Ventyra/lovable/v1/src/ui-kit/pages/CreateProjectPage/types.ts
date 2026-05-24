import type { IconType } from 'react-icons'

import * as icons from 'react-icons/fa6'

type IconName = keyof typeof icons

// export type CreateProjectStage = 'intro' | 'interview' | 'review'

export enum CreateProjectSection {
  Intro = 'intro',
  Interview = 'interview',
  Review = 'review',
}

export type ChatRole = 'ai' | 'user'

export type ChatMessage = {
  id: string
  role: ChatRole
  text: string
  /** which property this message filled, if any */
  filledFields?: PropertyId[]
}

export type PropertyId =
  // Identity
  | 'name'
  | 'oneLiner'
  | 'stage'
  // Problem
  | 'problemStatement'
  | 'whoHasProblem'
  | 'painSeverity'
  | 'existingAlternatives'
  // Solution
  | 'solutionDescription'
  | 'coreMechanism'
  | 'uniqueAdvantage'
  // Audience & Market
  | 'idealCustomer'
  | 'marketSize'
  | 'whyNow'
  // Business Model
  | 'monetization'
  | 'pricingLogic'
  | 'costStructure'
  // Distribution
  | 'customerAcquisition'
  | 'growthStrategy'
  // Validation
  | 'existingProof'
  | 'metrics'
  | 'userFeedback'
  // Risks
  | 'mainRisks'
  | 'biggestUnknown'
  | 'dependencies'
  // Team
  | 'founderBackground'
  | 'teamComposition'
  // Investment
  | 'whatIsNeeded'
  | 'useOfFunds'
  | 'desiredOutcome'

export type SectionId =
  | 'identity'
  | 'problem'
  | 'solution'
  | 'market'
  | 'businessModel'
  | 'distribution'
  | 'validation'
  | 'risks'
  | 'team'
  | 'investment'

export type PropertySchema = {
  id: PropertyId
  section: SectionId
  label: string
  required: boolean
  // icon: IconType
  icon: IconName | undefined
  /** AI question example */
  question: string
  /** What a real answer looks like (used as placeholder & in tooltips) */
  exampleAnswer: string
}

export type SectionSchema = {
  id: SectionId
  label: string
  icon: IconType
}

/** Float in [-1, +1]. 0 = neutral/unknown. >0 = positive signal, <0 = red flag. */
export type SignalScore = number

export type PropertyValue = {
  /** Extracted natural-language value (may be null if not collected yet) */
  value: string | null
  /** Signal score from -1 (kills the deal) to +1 (strongly positive). 0 = neutral. */
  score: SignalScore
}

export type CollectedState = Partial<Record<PropertyId, PropertyValue>>

export type SidebarPreview = 'live' | 'empty' | 'filled'

export type CreateProjectPageProps = Record<string, never>
