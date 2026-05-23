import React from 'react'
import { NavLinkStyled } from './styles'
import type { NavLinkProps } from './types'

export const NavLink: React.FC<NavLinkProps> = ({
  active = false,
  children,
  ...other
}) => {
  return (
    <NavLinkStyled $active={active} {...other}>
      {children}
    </NavLinkStyled>
  )
}
