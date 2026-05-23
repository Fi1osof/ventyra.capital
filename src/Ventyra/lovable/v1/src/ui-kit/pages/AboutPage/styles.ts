import styled from 'styled-components'

export const PageHeroStyled = styled.div`
  padding: 64px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 820px;
`

export const ManifestoStyled = styled.div`
  font-size: 22px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  letter-spacing: -0.01em;
  max-width: 760px;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: 24px 0;
`

export const StatsRowStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 32px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const StatStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  padding-left: 16px;
  strong {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const ValuesGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ValueCardStyled = styled.div`
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  h3 {
    font-size: 18px;
    margin: 0 0 8px;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`

export const ValueLabelStyled = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  margin-bottom: 12px;
`

export const TeamGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TeamCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TeamAvatarStyled = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
`

export const TeamNameStyled = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
`

export const TeamRoleStyled = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const SectionHeadStyled = styled.div`
  max-width: 680px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`

export const TimelineStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
`

export const TimelineItemStyled = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
  h4 {
    margin: 0 0 4px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.55;
  }
`
