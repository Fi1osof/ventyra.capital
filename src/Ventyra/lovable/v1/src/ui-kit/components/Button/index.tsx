import React from 'react'
import { ButtonStyled, ButtonIconStyled } from './styles'
import type { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconRight,
  iconLeft,
  fullWidth = false,
  children,
  type = 'button',
  ...other
}) => {
  return (
    <ButtonStyled
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      type={type}
      {...other}
    >
      {iconLeft && <ButtonIconStyled>{iconLeft}</ButtonIconStyled>}
      {children}
      {iconRight && <ButtonIconStyled>{iconRight}</ButtonIconStyled>}
    </ButtonStyled>
  )
}
