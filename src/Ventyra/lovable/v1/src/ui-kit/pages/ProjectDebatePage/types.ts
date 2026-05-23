export type ArgumentType =
  | 'claim'
  | 'objection'
  | 'rebuttal'
  | 'support'
  | 'evidence'
  | 'question'
export type ArgumentStatus = 'open' | 'contested' | 'resolved' | 'withdrawn'
export type NodeKind = 'claim' | 'assumption' | 'metric' | 'decision' | 'risk'
export type ViewScope = 'all' | 'mine' | 'global'

export type DebateParticipant = {
  id: string
  name: string
  role: string
  avatarSrc: string
  isFounder?: boolean
  isMe?: boolean
}

export type DebateArgument = {
  id: string
  type: ArgumentType
  statement: string
  authorId: string
  createdAt: string
  status?: ArgumentStatus
  evidence?: { label: string; source: string }[]
  children?: DebateArgument[]
}

export type GraphNode = {
  id: string
  kind: NodeKind
  title: string
  summary: string
  confidence: number // 0..1
  openObjections: number
  threadCount: number
}

export type DebateThread = {
  id: string
  nodeId: string
  scope: 'public' | 'private'
  participantIds: string[]
  updatedAt: string
  root: DebateArgument
}

export type ProjectDebatePageProps = Record<string, never>
