import styled, { css } from 'styled-components'

export const HeadingStyled = styled.h2<{
  $size: 'xl' | 'lg' | 'md' | 'sm'
  $align: 'left' | 'center'
}>`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-align: ${({ $align }) => $align};

  ${({ $size, theme }) => {
    switch ($size) {
      case 'xl':
        return css`
          font-size: 36px;
          @media (min-width: ${theme.breakpoints.md}) {
            font-size: 48px;
          }
          @media (min-width: ${theme.breakpoints.lg}) {
            font-size: 56px;
          }
        `
      case 'lg':
        return css`
          font-size: 28px;
          @media (min-width: ${theme.breakpoints.md}) {
            font-size: 36px;
          }
          @media (min-width: ${theme.breakpoints.lg}) {
            font-size: 40px;
          }
        `
      case 'md':
        return css`
          font-size: 22px;
          @media (min-width: ${theme.breakpoints.md}) {
            font-size: 26px;
          }
        `
      case 'sm':
        return css`
          font-size: 18px;
        `
    }
  }}
`

export const TextStyled = styled.p<{
  $size: 'lg' | 'md' | 'sm' | 'xs'
  $tone: 'default' | 'muted' | 'subtle'
  $align: 'left' | 'center'
  $weight: 400 | 500 | 600 | 700
}>`
  color: ${({ theme, $tone }) =>
    $tone === 'muted'
      ? theme.colors.textMuted
      : $tone === 'subtle'
        ? theme.colors.textSubtle
        : theme.colors.text};
  text-align: ${({ $align }) => $align};
  font-weight: ${({ $weight }) => $weight};
  line-height: 1.6;
  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return css`
          font-size: 18px;
        `
      case 'md':
        return css`
          font-size: 16px;
        `
      case 'sm':
        return css`
          font-size: 14px;
        `
      case 'xs':
        return css`
          font-size: 12px;
        `
    }
  }}
`

export const EyebrowStyled = styled.span<{
  $tone: 'primary' | 'amber' | 'emerald' | 'rose'
}>`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme, $tone }) =>
    $tone === 'amber'
      ? theme.colors.accentAmber
      : $tone === 'emerald'
        ? theme.colors.accentEmerald
        : $tone === 'rose'
          ? theme.colors.accentRose
          : theme.colors.primary};
`
