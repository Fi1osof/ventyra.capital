import styled from 'styled-components'

export const FeatureCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FeatureCardHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`
