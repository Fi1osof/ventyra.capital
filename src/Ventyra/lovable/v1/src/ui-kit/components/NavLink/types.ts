import type { AnchorHTMLAttributes, ReactNode } from 'react'

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  children?: ReactNode
  href: string
}
