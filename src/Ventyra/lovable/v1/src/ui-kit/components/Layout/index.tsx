import React from 'react'
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Button } from '../Button'
import { NewsletterInput } from '../NewsletterInput'

import { LayoutStyled, LayoutMainStyled } from './styles'
import type { LayoutProps } from './types'
import { useAppContext } from 'src/components/AppContext'
import { UserLink } from 'src/components/Link/User'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'

const NAV_ITEMS = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Founders', href: '/founders' },
  { label: 'How we invest', href: '/how-we-invest' },
  { label: 'About', href: '/about' },
  // { label: 'Insights', href: '/insights' },
]

const FOOTER_SOCIALS = [
  { icon: <FaTwitter size={14} />, href: '#twitter', label: 'Twitter' },
  { icon: <FaLinkedinIn size={14} />, href: '#linkedin', label: 'LinkedIn' },
  { icon: <FaGithub size={14} />, href: '#github', label: 'GitHub' },
]

const FOOTER_COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Founders', href: '/founders' },
      { label: 'How we invest', href: '/how-we-invest' },
      // { label: 'Insights', href: '/insights' },
    ],
  },
  // {
  //   title: 'Resources',
  //   links: [
  //     { label: 'Documentation', href: '#docs' },
  //     { label: 'Blog', href: '/insights' },
  //     { label: 'Help Center', href: '#help' },
  //     { label: 'Guides', href: '#guides' },
  //   ],
  // },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Vision', href: '#vision' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
]

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user: currentUser, openLoginForm } = useAppContext()

  const onClickApply = useOpenChatWithMessage()

  const headerActions = (
    <>
      <Button
        variant="primary"
        size="sm"
        // as={Link} href="/projects/create"
        onClick={onClickApply}
        value={`I want help understanding and shaping a project idea.

Please guide me through the process, ask questions, identify missing pieces, and help evaluate the project's potential.`}
      >
        Apply for funding
      </Button>
      {currentUser ? (
        <UserLink user={currentUser} showName={false} />
      ) : (
        <Button variant="ghost" size="sm" onClick={openLoginForm}>
          Log in
        </Button>
      )}
    </>
  )

  return (
    <LayoutStyled>
      <Header items={NAV_ITEMS} actions={headerActions} />
      <LayoutMainStyled>{children}</LayoutMainStyled>
      <Footer
        columns={FOOTER_COLUMNS}
        socials={FOOTER_SOCIALS}
        description="Ventyra Capital backs founders building category-defining ventures with capital, AI-driven research and operator expertise."
        newsletter={<NewsletterInput placeholder="you@company.com" />}
      />
    </LayoutStyled>
  )
}

export const LovableLayout = Layout
