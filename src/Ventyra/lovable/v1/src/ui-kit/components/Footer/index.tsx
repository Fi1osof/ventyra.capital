import React from 'react'
import { Container } from '../Container'
import { Logo } from '../Logo'

import {
  FooterStyled,
  FooterGridStyled,
  FooterBrandStyled,
  FooterDescStyled,
  FooterSocialsStyled,
  FooterColumnStyled,
  FooterColumnTitleStyled,
  FooterLinkStyled,
  FooterNewsletterColStyled,
  FooterBottomStyled,
  FooterLegalLinksStyled,
} from './styles'
import type { FooterProps } from './types'

export const Footer: React.FC<FooterProps> = ({
  columns,
  socials,
  description,
  newsletter,
  ...other
}) => {
  return (
    <FooterStyled {...other}>
      <Container>
        <FooterGridStyled>
          <FooterBrandStyled>
            <Logo />
            {description && <FooterDescStyled>{description}</FooterDescStyled>}
            {socials && (
              <FooterSocialsStyled>
                {socials.map((s) => (
                  <FooterLinkStyled
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    style={{
                      width: 32,
                      height: 32,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--fb, #E5E7EE)',
                      borderRadius: 8,
                    }}
                  >
                    {s.icon}
                  </FooterLinkStyled>
                ))}
              </FooterSocialsStyled>
            )}
          </FooterBrandStyled>

          {columns.map((col) => (
            <FooterColumnStyled key={col.title}>
              <FooterColumnTitleStyled>{col.title}</FooterColumnTitleStyled>
              {col.links.map((link) => (
                <FooterLinkStyled key={link.label} href={link.href}>
                  {link.label}
                </FooterLinkStyled>
              ))}
            </FooterColumnStyled>
          ))}

          {newsletter && (
            <FooterNewsletterColStyled>
              <FooterColumnTitleStyled>
                Stay in the loop
              </FooterColumnTitleStyled>
              <FooterDescStyled>
                Quarterly notes on our portfolio, theses and openings.
              </FooterDescStyled>
              {newsletter}
            </FooterNewsletterColStyled>
          )}
        </FooterGridStyled>

        <FooterBottomStyled>
          <span>
            © {new Date().getFullYear()} Ventyra Capital. All rights reserved.
          </span>
          <FooterLegalLinksStyled>
            <FooterLinkStyled href="#privacy">Privacy Policy</FooterLinkStyled>
            <FooterLinkStyled href="#terms">Terms of Service</FooterLinkStyled>
          </FooterLegalLinksStyled>
        </FooterBottomStyled>
      </Container>
    </FooterStyled>
  )
}
