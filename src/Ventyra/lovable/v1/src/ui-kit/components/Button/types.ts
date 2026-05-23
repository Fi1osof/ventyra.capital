import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledTarget } from 'styled-components/dist/types'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  iconRight?: ReactNode
  iconLeft?: ReactNode
  fullWidth?: boolean
  children?: ReactNode
  as?: StyledTarget<'web'>
  href?: string
}
