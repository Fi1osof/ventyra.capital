import styled, { css } from 'styled-components'

export const IconButtonStyled = styled.button<{
  $variant: 'default' | 'solid' | 'ghost'
  $size: 'sm' | 'md'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
  ${({ $size }) =>
    $size === 'sm'
      ? css`
          width: 32px;
          height: 32px;
        `
      : css`
          width: 40px;
          height: 40px;
        `}
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'solid':
        return css`
          background: ${theme.colors.primary};
          color: #fff;
          &:hover {
            background: ${theme.colors.primaryHover};
          }
        `
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          &:hover {
            background: ${theme.colors.surface};
          }
        `
      default:
        return css`
          background: ${theme.colors.white};
          color: ${theme.colors.text};
          border-color: ${theme.colors.border};
          &:hover {
            border-color: ${theme.colors.borderStrong};
            background: ${theme.colors.surface};
          }
        `
    }
  }}
`
