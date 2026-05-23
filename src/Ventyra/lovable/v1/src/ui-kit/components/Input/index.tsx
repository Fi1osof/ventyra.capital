import React from 'react'
import { InputStyled } from './styles'
import type { InputProps } from './types'

export const Input: React.FC<InputProps> = ({ invalid, ...other }) => {
  return <InputStyled $invalid={invalid} {...other} />
}
