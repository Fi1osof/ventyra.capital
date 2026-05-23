import type { HTMLAttributes, ReactNode } from 'react'

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  size?: number
  tone?: 'primary' | 'amber' | 'emerald' | 'rose' | 'muted' | 'default'
  background?: boolean
}
