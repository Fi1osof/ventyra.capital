import styled, { css } from 'styled-components'

export const ContainerStyled = styled.div<{ $size?: 'default' | 'narrow' }>`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  ${({ $size }) =>
    $size === 'narrow' &&
    css`
      max-width: 920px;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 32px;
  }
`
