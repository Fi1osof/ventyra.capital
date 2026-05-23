import React from 'react'
import { BadgeStyled } from './styles'
import type { BadgeProps } from './types'

export const Badge: React.FC<BadgeProps> = ({
  tone = 'primary',
  children,
  ...other
}) => {
  return (
    <BadgeStyled $tone={tone} {...other}>
      {children}
    </BadgeStyled>
  )
}
