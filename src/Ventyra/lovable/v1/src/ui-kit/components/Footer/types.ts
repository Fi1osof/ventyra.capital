import type { HTMLAttributes, ReactNode } from 'react'

export type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

export type FooterProps = HTMLAttributes<HTMLElement> & {
  columns: FooterColumn[]
  socials?: { icon: ReactNode; href: string; label: string }[]
  description?: string
  newsletter?: ReactNode
}
