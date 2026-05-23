import type { HTMLAttributes, ReactNode } from 'react'

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'xl' | 'lg' | 'md' | 'sm'
  align?: 'left' | 'center'
  children?: ReactNode
}

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  tone?: 'default' | 'muted' | 'subtle'
  align?: 'left' | 'center'
  weight?: 400 | 500 | 600 | 700
  children?: ReactNode
}

export type EyebrowProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'primary' | 'amber' | 'emerald' | 'rose'
  children?: ReactNode
}
