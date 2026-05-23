import styled from 'styled-components'

export const PageHeroStyled = styled.div`
  padding: 64px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 760px;
`

export const ThesisGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ThesisCardStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ThesisIconStyled = styled.div<{ $bg: string; $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StageTableStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
`

export const StageRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.5fr;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
  &[data-head='true'] {
    background: ${({ theme }) => theme.colors.surface};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.textSubtle};
    font-weight: 600;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`

export const PrinciplesGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PrincipleStyled = styled.div`
  display: flex;
  gap: 16px;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  h3 {
    margin: 0 0 6px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.55;
  }
`

export const PrincipleNumberStyled = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-variant-numeric: tabular-nums;
  min-width: 48px;
`

export const SectionHeadStyled = styled.div`
  max-width: 680px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`

export const AntiThesisStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 28px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const AntiColStyled = styled.div<{ $tone: 'yes' | 'no' }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h3 {
    margin: 0;
    font-size: 16px;
    color: ${({ theme, $tone }) =>
      $tone === 'yes' ? theme.colors.success : theme.colors.accentRose};
  }
  ul {
    margin: 0;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 14px;
    line-height: 1.7;
  }
`
