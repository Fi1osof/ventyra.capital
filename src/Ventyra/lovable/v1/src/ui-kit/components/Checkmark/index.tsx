import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { CheckmarkStyled, CheckmarkIconStyled } from './styles'
import type { CheckmarkProps } from './types'

export const Checkmark: React.FC<CheckmarkProps> = ({ children, ...other }) => {
  return (
    <CheckmarkStyled {...other}>
      <CheckmarkIconStyled>
        <FiCheck size={16} strokeWidth={2.5} />
      </CheckmarkIconStyled>
      <span>{children}</span>
    </CheckmarkStyled>
  )
}
