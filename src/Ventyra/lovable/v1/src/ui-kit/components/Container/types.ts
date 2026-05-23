import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  size?: 'default' | 'narrow'
}
