import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'primary' | 'amber' | 'emerald' | 'rose' | 'neutral'
  children?: ReactNode
}
