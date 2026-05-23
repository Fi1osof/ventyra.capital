import Link from 'next/link'
import styled, { css } from 'styled-components'

export const NavLinkStyled = styled(Link)<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text : theme.colors.textMuted};
  padding: 8px 0;
  transition: color 0.15s ease;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.text};
      font-weight: 600;
    `}
`
