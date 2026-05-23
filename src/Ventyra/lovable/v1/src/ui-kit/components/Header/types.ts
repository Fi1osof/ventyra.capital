import type { HTMLAttributes, ReactNode } from 'react'
import type { BurgerMenuItem } from '../BurgerMenu/types'

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  items: BurgerMenuItem[]
  actions?: ReactNode
}
