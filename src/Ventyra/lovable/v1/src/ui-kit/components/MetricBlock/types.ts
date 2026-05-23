import type { HTMLAttributes } from 'react'

export type MetricBlockProps = HTMLAttributes<HTMLDivElement> & {
  label: string
  value: string
  delta?: string
  deltaTone?: 'positive' | 'negative'
}
