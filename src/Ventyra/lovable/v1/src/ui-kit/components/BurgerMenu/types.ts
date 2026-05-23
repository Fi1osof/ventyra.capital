import type { HTMLAttributes, ReactNode } from 'react'

export type BurgerMenuItem = {
  label: string
  href: string
  active?: boolean
}

export type BurgerMenuProps = HTMLAttributes<HTMLDivElement> & {
  items: BurgerMenuItem[]
  actions?: ReactNode
}
