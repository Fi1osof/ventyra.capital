import styled, { css } from 'styled-components'
import type { ButtonVariant, ButtonSize } from './types'

export const ButtonStyled = styled.button<{
  $variant: ButtonVariant
  $size: ButtonSize
  $fullWidth: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.05s ease;
  white-space: nowrap;
  text-decoration: none;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: 8px 14px;
          font-size: 13px;
        `
      case 'lg':
        return css`
          padding: 14px 22px;
          font-size: 16px;
        `
      default:
        return css`
          padding: 11px 18px;
          font-size: 14px;
        `
    }
  }}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.white};
          color: ${theme.colors.text};
          border-color: ${theme.colors.border};
          &:hover {
            border-color: ${theme.colors.borderStrong};
            background: ${theme.colors.surface};
          }
        `
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primarySoft};
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
          background: ${theme.colors.primary};
          color: #fff;
          &:hover {
            background: ${theme.colors.primaryHover};
          }
        `
    }
  }}
`

export const ButtonIconStyled = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 0;
`
