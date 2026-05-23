import type { HTMLAttributes, ReactNode } from 'react'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  padding?: 'sm' | 'md' | 'lg'
  bordered?: boolean
  surface?: 'white' | 'soft'
}
