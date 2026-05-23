import styled from 'styled-components'

export const InputStyled = styled.input<{ $invalid?: boolean }>`
  width: 100%;
  padding: 11px 14px;
  border: 1px solid
    ${({ theme, $invalid }) =>
      $invalid ? theme.colors.accentRose : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
`
