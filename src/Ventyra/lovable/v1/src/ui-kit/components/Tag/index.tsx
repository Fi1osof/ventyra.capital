import React from 'react'
import { TagStyled } from './styles'
import type { TagProps } from './types'

export const Tag: React.FC<TagProps> = ({ children, ...other }) => {
  return <TagStyled {...other}>{children}</TagStyled>
}
