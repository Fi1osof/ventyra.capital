import styled, { css } from 'styled-components'

export const StepsRowStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  align-items: start;
  position: relative;
`

export const StepItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  position: relative;

  &:not(:last-child)::after {
    content: '>';
    position: absolute;
    right: -8px;
    top: 16px;
    color: ${({ theme }) => theme.colors.textSubtle};
    font-size: 14px;
    font-weight: 600;
  }
`

export const StepIconStyled = styled.div<{
  $tone: 'primary' | 'amber' | 'emerald'
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ $tone, theme }) => {
    const map = {
      primary: [theme.colors.primary, theme.colors.primarySoft],
      amber: [theme.colors.accentAmber, theme.colors.accentAmberSoft],
      emerald: [theme.colors.accentEmerald, theme.colors.accentEmeraldSoft],
    } as const
    const [color, bg] = map[$tone]
    return css`
      color: ${color};
      background: ${bg};
    `
  }}
`

export const StepLabelStyled = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 80px;
  line-height: 1.3;
`
