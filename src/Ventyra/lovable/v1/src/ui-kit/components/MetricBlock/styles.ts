import styled from 'styled-components'

export const MetricBlockStyled = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 180px;
`

export const MetricHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const MetricValueStyled = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

export const MetricDeltaStyled = styled.span<{
  $tone: 'positive' | 'negative'
}>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme, $tone }) =>
    $tone === 'positive'
      ? theme.colors.accentEmerald
      : theme.colors.accentRose};
`
