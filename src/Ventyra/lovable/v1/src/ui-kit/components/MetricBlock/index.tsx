import React from 'react'
import {
  MetricBlockStyled,
  MetricHeaderStyled,
  MetricValueStyled,
  MetricDeltaStyled,
} from './styles'
import type { MetricBlockProps } from './types'

export const MetricBlock: React.FC<MetricBlockProps> = ({
  label,
  value,
  delta,
  deltaTone = 'positive',
  ...other
}) => {
  return (
    <MetricBlockStyled {...other}>
      <MetricHeaderStyled>
        <span>{label}</span>
        {delta && (
          <MetricDeltaStyled $tone={deltaTone}>{delta}</MetricDeltaStyled>
        )}
      </MetricHeaderStyled>
      <MetricValueStyled>{value}</MetricValueStyled>
    </MetricBlockStyled>
  )
}
