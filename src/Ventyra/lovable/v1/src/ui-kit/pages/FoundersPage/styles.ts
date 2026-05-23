import styled from 'styled-components'

export const PageHeroStyled = styled.div`
  padding: 64px 0 48px;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.2fr 1fr;
    gap: 64px;
  }
`

export const HeroCopyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const HeroPanelStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const HeroPanelRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  &:last-child {
    border-bottom: none;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const PillarsGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SectionHeadStyled = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ProcessListStyled = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  counter-reset: step;
`

export const ProcessStepStyled = styled.li`
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  counter-increment: step;
  &::before {
    content: counter(step, decimal-leading-zero);
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    font-variant-numeric: tabular-nums;
  }
`

export const ProcessBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.55;
  }
`

export const ProcessMetaStyled = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  white-space: nowrap;
`

export const FaqListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 760px;
  margin: 0 auto;
`

export const FaqItemStyled = styled.details`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  padding: 18px 22px;
  summary {
    cursor: pointer;
    list-style: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::-webkit-details-marker {
      display: none;
    }
    &::after {
      content: '+';
      font-size: 22px;
      color: ${({ theme }) => theme.colors.textSubtle};
      line-height: 1;
    }
  }
  &[open] summary::after {
    content: '−';
  }
  p {
    margin: 14px 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`

export const CtaSectionStyled = styled.div`
  text-align: center;
  padding: 48px 24px;
  background: linear-gradient(135deg, #4f46e5, #2d2f8f);
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.xl};
  h2 {
    color: #fff;
    margin: 0 0 12px;
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 24px;
  }
`
