import React from 'react'
import { SectionStyled } from './styles'
import type { SectionProps } from './types'

export const Section: React.FC<SectionProps> = ({
  children,
  tone = 'default',
  paddingY = 'default',
  ...other
}) => {
  return (
    <SectionStyled $tone={tone} $paddingY={paddingY} {...other}>
      {children}
    </SectionStyled>
  )
}
