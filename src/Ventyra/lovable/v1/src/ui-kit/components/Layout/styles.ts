import styled from 'styled-components'

export const LayoutStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg};
`

export const LayoutMainStyled = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
`
