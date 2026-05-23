import React from 'react'
import { FeatureCardStyled, FeatureCardHeaderStyled } from './styles'
import { Eyebrow, Text } from '../Typography'
import type { FeatureCardProps } from './types'

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  eyebrow,
  eyebrowTone = 'primary',
  children,
  ...other
}) => {
  return (
    <FeatureCardStyled {...other}>
      <FeatureCardHeaderStyled>
        {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      </FeatureCardHeaderStyled>
      {children}
      <FeatureCardHeaderStyled>
        <Text size="md" weight={600} align="center">
          {title}
        </Text>
        <Text size="sm" tone="muted" align="center">
          {description}
        </Text>
      </FeatureCardHeaderStyled>
    </FeatureCardStyled>
  )
}
