import type { HTMLAttributes, ReactNode } from 'react'

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
  tone?: 'default' | 'surface'
  paddingY?: 'default' | 'large' | 'small'
}
