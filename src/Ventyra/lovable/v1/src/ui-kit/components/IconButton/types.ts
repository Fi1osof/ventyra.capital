import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'default' | 'solid' | 'ghost'
  size?: 'sm' | 'md'
  ariaLabel: string
}
