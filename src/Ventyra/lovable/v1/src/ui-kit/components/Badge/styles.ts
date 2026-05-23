import styled, { css } from 'styled-components'

export const BadgeStyled = styled.span<{
  $tone: 'primary' | 'amber' | 'emerald' | 'rose' | 'neutral'
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 12px;
  font-weight: 600;
  ${({ $tone, theme }) => {
    const map = {
      primary: [theme.colors.primary, theme.colors.primarySoft],
      amber: [theme.colors.accentAmber, theme.colors.accentAmberSoft],
      emerald: [theme.colors.accentEmerald, theme.colors.accentEmeraldSoft],
      rose: [theme.colors.accentRose, theme.colors.accentRoseSoft],
      neutral: [theme.colors.textMuted, theme.colors.surface],
    } as const
    const [color, bg] = map[$tone]
    return css`
      color: ${color};
      background: ${bg};
    `
  }}
`
