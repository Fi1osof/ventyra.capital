import type { HTMLAttributes, ReactNode } from 'react'

export type StepItem = {
  icon: ReactNode
  label: string
}

export type StepsRowProps = HTMLAttributes<HTMLDivElement> & {
  steps: StepItem[]
  tone?: 'primary' | 'amber' | 'emerald'
}
