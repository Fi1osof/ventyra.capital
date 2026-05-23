import React from 'react'
import { HeadingStyled, TextStyled, EyebrowStyled } from './styles'
import type { HeadingProps, TextProps, EyebrowProps } from './types'

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  size = 'lg',
  align = 'left',
  children,
  ...other
}) => {
  return (
    <HeadingStyled as={as} $size={size} $align={align} {...other}>
      {children}
    </HeadingStyled>
  )
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  tone = 'default',
  align = 'left',
  weight = 400,
  children,
  ...other
}) => {
  return (
    <TextStyled
      $size={size}
      $tone={tone}
      $align={align}
      $weight={weight}
      {...other}
    >
      {children}
    </TextStyled>
  )
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  tone = 'primary',
  children,
  ...other
}) => {
  return (
    <EyebrowStyled $tone={tone} {...other}>
      {children}
    </EyebrowStyled>
  )
}
