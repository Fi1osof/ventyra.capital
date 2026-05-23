import styled from 'styled-components'

export const NewsletterFormStyled = styled.form`
  display: flex;
  gap: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px 4px 4px 14px;
  align-items: center;
  width: 100%;
  max-width: 340px;
`

export const NewsletterInputStyled = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  padding: 8px 0;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

export const NewsletterSubmitStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: 0;
  cursor: pointer;
  transition: background 0.15s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`
