import Link from 'next/link'
import styled from 'styled-components'

export const LogoStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  text-decoration: none;
`

export const LogoMarkStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );
  color: #fff;
`
