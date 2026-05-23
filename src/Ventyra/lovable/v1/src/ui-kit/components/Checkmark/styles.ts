import styled from 'styled-components'

export const CheckmarkStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 1.5;
`

export const CheckmarkIconStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.accentEmerald};
`
