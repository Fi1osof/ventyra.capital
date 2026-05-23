import styled, { css } from 'styled-components'

export const SectionStyled = styled.section<{
  $tone: 'default' | 'surface'
  $paddingY: 'default' | 'large' | 'small'
}>`
  width: 100%;
  background: ${({ theme, $tone }) =>
    $tone === 'surface' ? theme.colors.surface : theme.colors.bg};
  ${({ $paddingY }) =>
    $paddingY === 'small'
      ? css`
          padding: 40px 0;
        `
      : $paddingY === 'large'
        ? css`
            padding: 80px 0;
          `
        : css`
            padding: 64px 0;
          `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ $paddingY }) =>
      $paddingY === 'small'
        ? css`
            padding: 56px 0;
          `
        : $paddingY === 'large'
          ? css`
              padding: 120px 0;
            `
          : css`
              padding: 96px 0;
            `}
  }
`
