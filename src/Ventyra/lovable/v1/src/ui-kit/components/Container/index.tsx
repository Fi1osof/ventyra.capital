import React from 'react'
import { ContainerStyled } from './styles'
import type { ContainerProps } from './types'

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  ...other
}) => {
  return (
    <ContainerStyled $size={size} {...other}>
      {children}
    </ContainerStyled>
  )
}
