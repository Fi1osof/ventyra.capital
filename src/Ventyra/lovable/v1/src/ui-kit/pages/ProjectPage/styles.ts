import styled from 'styled-components'

export const BreadcrumbStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 24px 0 0;
  a {
    color: ${({ theme }) => theme.colors.textMuted};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  span[aria-hidden] {
    opacity: 0.5;
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`

export const ProjectHeroStyled = styled.section`
  padding: 32px 0 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 48px 0 32px;
  }
`

export const ProjectHeroGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.2fr 1fr;
    gap: 56px;
  }
`

export const HeroBadgeRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`

export const HeroTitleStyled = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 44px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 52px;
  }
`

export const HeroLeadStyled = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0 28px;
  max-width: 560px;
`

export const HeroMetaStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 24px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const HeroMetaItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span:first-child {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.textSubtle};
    font-weight: 600;
  }
  span:last-child {
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const HeroCtaRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const HeroVisualStyled = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primaryDark};
  padding: 14px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`

export const FloatingStatStyled = styled.div<{
  $bottom?: string
  $right?: string
  $top?: string
  $left?: string
}>`
  position: absolute;
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 12px 14px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-width: 160px;
`

export const SectionHeadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
  max-width: 720px;
`

export const MetricsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const NarrativeGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const NarrativeCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const NarrativeIconStyled = styled.div<{
  $tone?: 'primary' | 'amber' | 'emerald' | 'rose'
}>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, $tone }) =>
    $tone === 'amber'
      ? theme.colors.accentAmberSoft
      : $tone === 'emerald'
        ? theme.colors.accentEmeraldSoft
        : $tone === 'rose'
          ? theme.colors.accentRoseSoft
          : theme.colors.primarySoft};
  color: ${({ theme, $tone }) =>
    $tone === 'amber'
      ? theme.colors.accentAmber
      : $tone === 'emerald'
        ? theme.colors.accentEmerald
        : $tone === 'rose'
          ? theme.colors.accentRose
          : theme.colors.primary};
`

export const TractionSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.2fr;
    gap: 48px;
  }
`

export const TimelineStyled = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`

export const TimelineItemStyled = styled.li`
  position: relative;
  padding-left: 38px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
  time {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
  strong {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.5;
    margin: 0;
  }
`

export const TeamGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const InvestorsRowStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const InvestorChipStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const CtaPanelStyled = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primary}
  );
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  color: #fff;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 56px 32px;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;
    color: #fff;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 36px;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    max-width: 560px;
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
  }
`

export const CtaButtonsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 8px;
`
