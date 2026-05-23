import type { HTMLAttributes } from 'react'

export type UserCardProps = HTMLAttributes<HTMLDivElement> & {
  name: string
  role: string
  avatarSrc: string
  description: string
  tags: string[]
  meta: string
  profileHref?: string
}
