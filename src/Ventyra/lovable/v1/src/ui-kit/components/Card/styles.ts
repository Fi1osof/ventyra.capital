import styled, { css } from 'styled-components'

export const CardStyled = styled.div<{
  $padding: 'sm' | 'md' | 'lg'
  $bordered: boolean
  $surface: 'white' | 'soft'
}>`
  background: ${({ theme, $surface }) =>
    $surface === 'soft' ? theme.colors.surface : theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  ${({ $bordered, theme }) =>
    $bordered &&
    css`
      border: 1px solid ${theme.colors.border};
    `}
  ${({ $padding }) =>
    $padding === 'sm'
      ? css`
          padding: 16px;
        `
      : $padding === 'lg'
        ? css`
            padding: 32px;
          `
        : css`
            padding: 24px;
          `}
`
