import Link from 'next/link'
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

export const ProfileHeroStyled = styled.section`
  padding: 24px 0 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 32px 0 16px;
  }
`

export const CoverStyled = styled.div`
  position: relative;
  height: 180px;
  border-radius: ${({ theme }) => theme.radii.xl};
  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.18),
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(245, 158, 11, 0.22),
      transparent 55%
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primaryDark},
      ${({ theme }) => theme.colors.primary}
    );
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 220px;
  }
`

export const ProfileHeadStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: end;
  margin-top: -64px;
  padding: 0 4px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto 1fr auto;
    gap: 28px;
    margin-top: -56px;
  }
`

export const AvatarLargeStyled = styled.img`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

export const NameBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 8px;
`

export const NameStyled = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 38px;
  }
`

export const VerifiedDotStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
`

export const RoleStyled = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`

export const MetaRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
`

export const BadgeRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`

export const HeroActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 8px;
`

export const StatsRowStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 32px 0 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TwoColStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.6fr 1fr;
    gap: 40px;
  }
`

export const SectionHeadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
  max-width: 720px;
`

export const BioCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-size: 15px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0;
  }
`

export const SidebarCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const SidebarRowStyled = styled.div`
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
  span:last-child,
  a {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const TagsWrapStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

export const PortfolioGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const PortfolioCardStyled = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`

export const PortfolioHeadStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const PortfolioLogoStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
`

export const PortfolioBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  strong {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const PortfolioMetaStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ActivityListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ActivityItemStyled = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`

export const ActivityIconStyled = styled.div<{
  $tone?: 'primary' | 'amber' | 'emerald' | 'rose'
}>`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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

export const ActivityBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  time {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.textSubtle};
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`

export const NetworkGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
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
    padding: 52px 32px;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;
    color: #fff;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 34px;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.85);
    max-width: 540px;
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
