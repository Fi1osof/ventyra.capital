import type { HTMLAttributes, ReactNode } from 'react'

export type FeatureCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  description: string
  eyebrow?: string
  eyebrowTone?: 'primary' | 'amber' | 'emerald' | 'rose'
  children?: ReactNode
}
