import styled, { css } from 'styled-components'

export const IconStyled = styled.span<{
  $size: number
  $tone: 'primary' | 'amber' | 'emerald' | 'rose' | 'muted' | 'default'
  $background: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  ${({ $background, $size }) =>
    $background &&
    css`
      width: ${$size + 20}px;
      height: ${$size + 20}px;
      border-radius: 10px;
    `}

  ${({ theme, $tone, $background }) => {
    const colorMap = {
      primary: theme.colors.primary,
      amber: theme.colors.accentAmber,
      emerald: theme.colors.accentEmerald,
      rose: theme.colors.accentRose,
      muted: theme.colors.textMuted,
      default: theme.colors.text,
    }
    const bgMap = {
      primary: theme.colors.primarySoft,
      amber: theme.colors.accentAmberSoft,
      emerald: theme.colors.accentEmeraldSoft,
      rose: theme.colors.accentRoseSoft,
      muted: theme.colors.surface,
      default: theme.colors.surface,
    }
    return css`
      color: ${colorMap[$tone]};
      ${$background &&
      css`
        background: ${bgMap[$tone]};
      `}
    `
  }}
`
