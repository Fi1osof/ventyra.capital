import Link from 'next/link'
import styled from 'styled-components'

export const PageHeroStyled = styled.div`
  padding: 64px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 760px;
`

export const TopicFilterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 0 32px;
`

export const TopicChipStyled = styled.button<{ $active?: boolean }>`
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primarySoft : theme.colors.white};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};
  font-size: 13px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const FeaturedStyled = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.1fr 1fr;
  }
`

export const FeaturedCoverStyled = styled.div<{ $bg: string }>`
  min-height: 260px;
  background: ${(p) => p.$bg};
  position: relative;
`

export const FeaturedBodyStyled = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`

export const FeaturedMetaStyled = styled.div`
  display: flex;
  gap: 14px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`

export const ArticlesGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 48px 0 64px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ArticleCardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const ArticleCoverStyled = styled.div<{ $bg: string }>`
  height: 160px;
  background: ${(p) => p.$bg};
`

export const ArticleBodyStyled = styled.div`
  padding: 18px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ArticleMetaStyled = styled.div`
  display: flex;
  gap: 12px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`

export const ArticleTitleStyled = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.35;
`

export const ArticleExcerptStyled = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.55;
`

export const ArticleAuthorStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const NewsletterBoxStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 680px;
  margin: 0 auto;
`
