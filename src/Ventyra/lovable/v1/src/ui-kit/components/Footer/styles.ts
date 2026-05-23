import Link from 'next/link'
import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 56px 0 32px;
`

export const FooterGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.4fr repeat(2, 1fr) 1.2fr;
  }
`

export const FooterBrandStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;
`

export const FooterDescStyled = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
`

export const FooterSocialsStyled = styled.div`
  display: flex;
  gap: 8px;
`

export const FooterColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FooterColumnTitleStyled = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`

export const FooterLinkStyled = styled(Link)`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color 0.15s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const FooterNewsletterColStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FooterBottomStyled = styled.div`
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const FooterLegalLinksStyled = styled.div`
  display: flex;
  gap: 16px;
`
