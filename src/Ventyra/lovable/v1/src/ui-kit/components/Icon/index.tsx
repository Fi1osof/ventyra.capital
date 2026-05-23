import React from 'react'
import { IconStyled } from './styles'
import type { IconProps } from './types'

export const Icon: React.FC<IconProps> = ({
  children,
  size = 18,
  tone = 'default',
  background = false,
  ...other
}) => {
  return (
    <IconStyled $size={size} $tone={tone} $background={background} {...other}>
      {children}
    </IconStyled>
  )
}
