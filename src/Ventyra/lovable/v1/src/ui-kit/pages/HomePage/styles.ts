import styled from 'styled-components'

export const HeroSectionStyled = styled.section`
  padding: 56px 0 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 80px 0 64px;
  }
`

export const HeroGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.05fr 1fr;
    gap: 64px;
  }
`

export const HeroEyebrowStyled = styled.div`
  margin-bottom: 20px;
`

export const HeroTitleStyled = styled.h1`
  font-size: 36px;
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 48px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 56px;
  }
`

export const HeroSubtitleStyled = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0 28px;
  max-width: 520px;
  line-height: 1.6;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 17px;
  }
`

export const HeroCtaRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`

export const HeroBadgesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 28px;
`

export const HeroBadgeStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`

export const HeroBadgeIconStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
`

export const HeroVisualWrapStyled = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 24px;
  min-height: 420px;
  overflow: hidden;
`

export const HeroFloatingCardStyled = styled.div<{
  $top?: string
  $left?: string
  $right?: string
  $bottom?: string
}>`
  position: absolute;
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 14px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  width: 200px;
  font-size: 12px;
`

export const SectionHeadingStyled = styled.div`
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

export const FeaturesGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const TwoWaysGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TwoWaysCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.1fr 1fr;
    align-items: start;
  }
`

export const TwoWaysCheckListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TwoWaysIconStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`

export const PictureSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.6fr;
    gap: 48px;
  }
`

export const PictureFrameStyled = styled.div`
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primaryDark};
  padding: 14px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

export const PictureFrameInnerStyled = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: #fff;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const CommunityGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TrustRowStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TrustItemStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`

export const TrustTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: 14px;
  }
`

export const BrowseAllStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
  }
`
