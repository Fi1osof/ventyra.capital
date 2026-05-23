import React from 'react'
import {
  StepsRowStyled,
  StepItemStyled,
  StepIconStyled,
  StepLabelStyled,
} from './styles'
import type { StepsRowProps } from './types'

export const StepsRow: React.FC<StepsRowProps> = ({
  steps,
  tone = 'primary',
  ...other
}) => {
  return (
    <StepsRowStyled {...other}>
      {steps.map((step, idx) => (
        <StepItemStyled
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
        >
          <StepIconStyled $tone={tone}>{step.icon}</StepIconStyled>
          <StepLabelStyled>{step.label}</StepLabelStyled>
        </StepItemStyled>
      ))}
    </StepsRowStyled>
  )
}
