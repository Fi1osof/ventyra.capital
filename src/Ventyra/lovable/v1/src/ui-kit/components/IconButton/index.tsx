import React from 'react'
import { IconButtonStyled } from './styles'
import type { IconButtonProps } from './types'

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  ariaLabel,
  type = 'button',
  ...other
}) => {
  return (
    <IconButtonStyled
      $variant={variant}
      $size={size}
      type={type}
      aria-label={ariaLabel}
      {...other}
    >
      {children}
    </IconButtonStyled>
  )
}
