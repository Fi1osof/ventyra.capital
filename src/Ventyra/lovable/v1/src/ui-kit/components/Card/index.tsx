import React from 'react'
import { CardStyled } from './styles'
import type { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  bordered = true,
  surface = 'white',
  ...other
}) => {
  return (
    <CardStyled
      $padding={padding}
      $bordered={bordered}
      $surface={surface}
      {...other}
    >
      {children}
    </CardStyled>
  )
}
