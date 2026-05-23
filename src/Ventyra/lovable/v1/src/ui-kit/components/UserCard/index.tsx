import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import {
  UserCardStyled,
  UserCardHeaderStyled,
  UserCardAvatarStyled,
  UserCardNameBlockStyled,
  UserCardNameStyled,
  UserCardRoleStyled,
  UserCardDescStyled,
  UserCardTagsStyled,
  UserCardFooterStyled,
  UserCardLinkStyled,
} from './styles'
import { Tag } from '../Tag'
import type { UserCardProps } from './types'

export const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  avatarSrc,
  description,
  tags,
  meta,
  profileHref = '#',
  ...other
}) => {
  return (
    <UserCardStyled {...other}>
      <UserCardHeaderStyled>
        <UserCardAvatarStyled src={avatarSrc} alt={name} />
        <UserCardNameBlockStyled>
          <UserCardNameStyled>{name}</UserCardNameStyled>
          <UserCardRoleStyled>{role}</UserCardRoleStyled>
        </UserCardNameBlockStyled>
      </UserCardHeaderStyled>
      <UserCardDescStyled>{description}</UserCardDescStyled>
      <UserCardTagsStyled>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </UserCardTagsStyled>
      <UserCardFooterStyled>
        <span>{meta}</span>
        <UserCardLinkStyled href={profileHref}>
          View profile <FiArrowRight size={12} />
        </UserCardLinkStyled>
      </UserCardFooterStyled>
    </UserCardStyled>
  )
}
