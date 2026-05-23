import React from 'react'
import { HeaderStyled, HeaderInnerStyled } from './styles'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { BurgerMenu } from '../BurgerMenu'
import type { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ items, actions, ...other }) => {
  return (
    <HeaderStyled {...other}>
      <Container>
        <HeaderInnerStyled>
          <Logo />
          <BurgerMenu items={items} actions={actions} />
        </HeaderInnerStyled>
      </Container>
    </HeaderStyled>
  )
}
