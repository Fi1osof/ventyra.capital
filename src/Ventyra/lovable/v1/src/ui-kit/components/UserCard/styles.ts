import Link from 'next/link'
import styled from 'styled-components'

export const UserCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const UserCardHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const UserCardAvatarStyled = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.surface};
`

export const UserCardNameBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserCardNameStyled = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
`

export const UserCardRoleStyled = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const UserCardDescStyled = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`

export const UserCardTagsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const UserCardFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const UserCardLinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`
