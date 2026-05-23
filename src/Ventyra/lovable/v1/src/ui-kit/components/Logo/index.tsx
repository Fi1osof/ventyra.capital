import React from 'react'
import { LogoStyled, LogoMarkStyled } from './styles'
import type { LogoProps } from './types'

export const Logo: React.FC<LogoProps> = ({ href = '/', ...other }) => {
  return (
    <LogoStyled href={href} {...other}>
      <LogoMarkStyled aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 5l8 14 8-14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </LogoMarkStyled>
      <span>Ventyra Capital</span>
    </LogoStyled>
  )
}
