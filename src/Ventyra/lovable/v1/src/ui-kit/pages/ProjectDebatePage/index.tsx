/* eslint-disable react/jsx-no-bind */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useMemo, useState } from 'react'
import {
  FiActivity,
  FiAlertOctagon,
  FiCornerDownRight,
  FiEye,
  FiEyeOff,
  FiGitBranch,
  FiGlobe,
  FiLock,
  FiMessageCircle,
  FiPaperclip,
  FiPlus,
  FiSend,
  FiUser,
  FiUsers,
} from 'react-icons/fi'

import { Container } from '../../components/Container'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'

import {
  PageStyled,
  BreadcrumbStyled,
  TopBarStyled,
  TopBarTitleBlockStyled,
  TopBarMetaRowStyled,
  ScopeSwitchStyled,
  ScopeButtonStyled,
  WorkspaceGridStyled,
  PanelStyled,
  PanelHeaderStyled,
  PanelBodyStyled,
  NodeKindBadgeStyled,
  NodeCardStyled,
  NodeTitleStyled,
  NodeMetaStyled,
  ConfidenceBarStyled,
  FocusedNodeStyled,
  FocusedHeadStyled,
  FocusedTitleStyled,
  FocusedSummaryStyled,
  FocusedStatsStyled,
  ThreadsListStyled,
  ThreadCardStyled,
  ThreadCardHeaderStyled,
  ParticipantsRowStyled,
  ScopePillStyled,
  ArgumentTreeStyled,
  ArgumentNodeStyled,
  ArgumentHeadStyled,
  ArgumentTypeChipStyled,
  ArgumentStatementStyled,
  EvidenceRowStyled,
  EvidenceChipStyled,
  ArgumentActionsStyled,
  ArgumentActionBtnStyled,
  ComposerStyled,
  ComposerTypeRowStyled,
  ComposerTypeBtnStyled,
  ComposerTextareaStyled,
  ComposerFooterStyled,
  ParticipantItemStyled,
  ParticipantInfoStyled,
  ParticipantTagStyled,
  UnresolvedListStyled,
  UnresolvedItemStyled,
  ScopeNoteStyled,
} from './styles'

import { NODES, THREADS, PARTICIPANTS } from './data'
import type {
  ArgumentType,
  DebateArgument,
  DebateThread,
  ProjectDebatePageProps,
  ViewScope,
} from './types'

const ARG_TYPES: { value: ArgumentType; label: string }[] = [
  { value: 'claim', label: 'Claim' },
  { value: 'objection', label: 'Objection' },
  { value: 'rebuttal', label: 'Rebuttal' },
  { value: 'support', label: 'Support' },
  { value: 'evidence', label: 'Evidence' },
  { value: 'question', label: 'Question' },
]

const findParticipant = (id: string) => PARTICIPANTS.find((p) => p.id === id)

const ArgumentNode: React.FC<{ arg: DebateArgument; depth: number }> = ({
  arg,
  depth,
}) => {
  const author = findParticipant(arg.authorId)
  return (
    <>
      <ArgumentNodeStyled $type={arg.type} $depth={depth}>
        <ArgumentHeadStyled>
          <ArgumentTypeChipStyled $type={arg.type}>
            {arg.type}
          </ArgumentTypeChipStyled>
          <strong>{author?.name ?? 'Unknown'}</strong>
          <span>· {author?.role}</span>
          <small>· {arg.createdAt}</small>
          {arg.status && arg.status !== 'open' && (
            <Badge
              tone={
                arg.status === 'resolved'
                  ? 'emerald'
                  : arg.status === 'contested'
                    ? 'rose'
                    : 'neutral'
              }
            >
              {arg.status}
            </Badge>
          )}
        </ArgumentHeadStyled>
        <ArgumentStatementStyled>{arg.statement}</ArgumentStatementStyled>
        {arg.evidence && arg.evidence.length > 0 && (
          <EvidenceRowStyled>
            {arg.evidence.map((e) => (
              <EvidenceChipStyled key={e.source} href={e.source}>
                <FiPaperclip size={11} /> {e.label}
              </EvidenceChipStyled>
            ))}
          </EvidenceRowStyled>
        )}
        <ArgumentActionsStyled>
          <ArgumentActionBtnStyled type="button">
            <FiCornerDownRight size={11} /> Reply
          </ArgumentActionBtnStyled>
          <ArgumentActionBtnStyled type="button">
            <FiAlertOctagon size={11} /> Object
          </ArgumentActionBtnStyled>
          <ArgumentActionBtnStyled type="button">
            <FiPaperclip size={11} /> Add evidence
          </ArgumentActionBtnStyled>
          <ArgumentActionBtnStyled type="button">
            <FiGitBranch size={11} /> Fork to private
          </ArgumentActionBtnStyled>
        </ArgumentActionsStyled>
      </ArgumentNodeStyled>
      {arg.children?.map((child) => (
        <ArgumentNode key={child.id} arg={child} depth={depth + 1} />
      ))}
    </>
  )
}

const ThreadView: React.FC<{ thread: DebateThread }> = ({ thread }) => {
  const participants = thread.participantIds
    .map((id) => findParticipant(id))
    .filter(Boolean)
  return (
    <ThreadCardStyled>
      <ThreadCardHeaderStyled>
        <div
          style={{
            display: 'inline-flex',
            gap: 10,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ScopePillStyled $scope={thread.scope}>
            {thread.scope === 'private' ? (
              <FiLock size={10} />
            ) : (
              <FiGlobe size={10} />
            )}{' '}
            {thread.scope}
          </ScopePillStyled>
          <ParticipantsRowStyled>
            {participants.map((p) => (
              <img
                key={p!.id}
                src={p!.avatarSrc}
                alt={p!.name}
                title={p!.name}
              />
            ))}
            <span style={{ marginLeft: 6, fontSize: 11 }}>
              {participants.length} participants
            </span>
          </ParticipantsRowStyled>
        </div>
        <span>Updated {thread.updatedAt}</span>
      </ThreadCardHeaderStyled>
      <ArgumentTreeStyled>
        <ArgumentNode arg={thread.root} depth={0} />
      </ArgumentTreeStyled>
    </ThreadCardStyled>
  )
}

export const ProjectDebatePage: React.FC<ProjectDebatePageProps> = () => {
  const [scope, setScope] = useState<ViewScope>('all')
  const [selectedNodeId, setSelectedNodeId] = useState<string>(NODES[0].id)
  const [composerType, setComposerType] = useState<ArgumentType>('objection')
  const [composerText, setComposerText] = useState<string>('')

  const focusedNode = NODES.find((n) => n.id === selectedNodeId)!

  const visibleThreads = useMemo(() => {
    const me = PARTICIPANTS.find((p) => p.isMe)
    return THREADS.filter((t) => t.nodeId === selectedNodeId).filter((t) => {
      if (scope === 'global') return t.scope === 'public'
      if (scope === 'mine') return me ? t.participantIds.includes(me.id) : false
      return true
    })
  }, [scope, selectedNodeId])

  const unresolved = useMemo(
    () =>
      NODES.filter((n) => n.openObjections > 0)
        .sort((a, b) => b.openObjections - a.openObjections)
        .slice(0, 5),
    [],
  )

  return (
    <PageStyled>
      <Container>
        <BreadcrumbStyled>
          <a href="/">Home</a>
          <span aria-hidden>/</span>
          <a href="/project">Smart Hotel</a>
          <span aria-hidden>/</span>
          <strong>Debate</strong>
        </BreadcrumbStyled>

        <TopBarStyled>
          <TopBarTitleBlockStyled>
            <h1>Smart Hotel — Investment debate</h1>
            <p>
              Structured argument graph over the project's claims, assumptions,
              metrics and decisions.
            </p>
            <TopBarMetaRowStyled>
              <span>
                <FiUsers size={13} /> <strong>{PARTICIPANTS.length}</strong>{' '}
                participants
              </span>
              <span>
                <FiMessageCircle size={13} /> <strong>{THREADS.length}</strong>{' '}
                threads
              </span>
              <span>
                <FiAlertOctagon size={13} />{' '}
                <strong>
                  {NODES.reduce((s, n) => s + n.openObjections, 0)}
                </strong>{' '}
                unresolved objections
              </span>
              <span>
                <FiActivity size={13} /> Last activity <strong>2h ago</strong>
              </span>
            </TopBarMetaRowStyled>
          </TopBarTitleBlockStyled>

          <ScopeSwitchStyled role="tablist" aria-label="Discussion scope">
            <ScopeButtonStyled
              $active={scope === 'all'}
              onClick={() => setScope('all')}
            >
              <FiEye size={13} /> All visible
            </ScopeButtonStyled>
            <ScopeButtonStyled
              $active={scope === 'mine'}
              onClick={() => setScope('mine')}
            >
              <FiUser size={13} /> My discussions
            </ScopeButtonStyled>
            <ScopeButtonStyled
              $active={scope === 'global'}
              onClick={() => setScope('global')}
            >
              <FiGlobe size={13} /> Global graph
            </ScopeButtonStyled>
          </ScopeSwitchStyled>
        </TopBarStyled>

        <WorkspaceGridStyled>
          {/* LEFT: Project anatomy */}
          <PanelStyled>
            <PanelHeaderStyled>
              <h3>Project anatomy</h3>
              <span>Composable nodes you can debate.</span>
            </PanelHeaderStyled>
            <PanelBodyStyled>
              {NODES.map((n) => (
                <NodeCardStyled
                  key={n.id}
                  $active={n.id === selectedNodeId}
                  onClick={() => setSelectedNodeId(n.id)}
                  type="button"
                >
                  <NodeKindBadgeStyled $kind={n.kind}>
                    {n.kind}
                  </NodeKindBadgeStyled>
                  <NodeTitleStyled>{n.title}</NodeTitleStyled>
                  <ConfidenceBarStyled $value={n.confidence} />
                  <NodeMetaStyled>
                    <span>
                      <FiMessageCircle size={11} /> {n.threadCount} threads
                    </span>
                    <span
                      style={{
                        color: n.openObjections > 0 ? '#F43F5E' : undefined,
                      }}
                    >
                      <FiAlertOctagon size={11} /> {n.openObjections} open
                    </span>
                  </NodeMetaStyled>
                </NodeCardStyled>
              ))}
            </PanelBodyStyled>
          </PanelStyled>

          {/* CENTER: Focused node + threads + composer */}
          <PanelStyled>
            <FocusedNodeStyled>
              <FocusedHeadStyled>
                <NodeKindBadgeStyled $kind={focusedNode.kind}>
                  {focusedNode.kind}
                </NodeKindBadgeStyled>
                <Badge
                  tone={focusedNode.openObjections > 0 ? 'rose' : 'emerald'}
                >
                  {focusedNode.openObjections > 0
                    ? `${focusedNode.openObjections} unresolved`
                    : 'Consensus'}
                </Badge>
              </FocusedHeadStyled>
              <FocusedTitleStyled>{focusedNode.title}</FocusedTitleStyled>
              <FocusedSummaryStyled>{focusedNode.summary}</FocusedSummaryStyled>
              <FocusedStatsStyled>
                <div>
                  <span>Confidence</span>
                  <span>{Math.round(focusedNode.confidence * 100)}%</span>
                </div>
                <div>
                  <span>Threads</span>
                  <span>{focusedNode.threadCount}</span>
                </div>
                <div>
                  <span>Open objections</span>
                  <span>{focusedNode.openObjections}</span>
                </div>
              </FocusedStatsStyled>
            </FocusedNodeStyled>

            <div style={{ padding: '16px 24px 0' }}>
              <ScopeNoteStyled $scope={scope}>
                {scope === 'all' && (
                  <>
                    <FiEye size={12} /> Showing public threads + private threads
                    you participate in.
                  </>
                )}
                {scope === 'mine' && (
                  <>
                    <FiLock size={12} /> Only threads you are a participant in.
                    Other investors' debates are hidden.
                  </>
                )}
                {scope === 'global' && (
                  <>
                    <FiGlobe size={12} /> Global picture: only public threads
                    visible to everyone.
                  </>
                )}
              </ScopeNoteStyled>
            </div>

            <ThreadsListStyled>
              {visibleThreads.length === 0 ? (
                <div
                  style={{
                    padding: 40,
                    textAlign: 'center',
                    color: '#8A8FA8',
                    fontSize: 14,
                  }}
                >
                  <FiEyeOff
                    size={24}
                    style={{ marginBottom: 8, opacity: 0.5 }}
                  />
                  <div>No threads visible at this scope.</div>
                </div>
              ) : (
                visibleThreads.map((t) => <ThreadView key={t.id} thread={t} />)
              )}
            </ThreadsListStyled>

            <ComposerStyled>
              <ComposerTypeRowStyled>
                {ARG_TYPES.map((t) => (
                  <ComposerTypeBtnStyled
                    key={t.value}
                    $type={t.value}
                    $active={composerType === t.value}
                    onClick={() => setComposerType(t.value)}
                    type="button"
                  >
                    {t.label}
                  </ComposerTypeBtnStyled>
                ))}
              </ComposerTypeRowStyled>
              <ComposerTextareaStyled
                placeholder={`Write a ${composerType} addressed at "${focusedNode.title}"…`}
                value={composerText}
                onChange={(e) => setComposerText(e.target.value)}
              />
              <ComposerFooterStyled>
                <span>
                  <FiPaperclip size={12} /> Attach evidence · Posting as a{' '}
                  {scope === 'mine' ? 'private' : 'public'} thread
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  iconRight={<FiSend size={13} />}
                >
                  Post {composerType}
                </Button>
              </ComposerFooterStyled>
            </ComposerStyled>
          </PanelStyled>

          {/* RIGHT: Participants + unresolved */}
          <PanelStyled>
            <PanelHeaderStyled>
              <h3>Participants</h3>
              <span>Everyone who can see this discussion scope.</span>
            </PanelHeaderStyled>
            <PanelBodyStyled>
              {PARTICIPANTS.map((p) => (
                <ParticipantItemStyled key={p.id}>
                  <img src={p.avatarSrc} alt={p.name} />
                  <ParticipantInfoStyled>
                    <strong>{p.name}</strong>
                    <span>{p.role}</span>
                  </ParticipantInfoStyled>
                  {p.isFounder && (
                    <ParticipantTagStyled $tone="founder">
                      Founder
                    </ParticipantTagStyled>
                  )}
                  {p.isMe && (
                    <ParticipantTagStyled $tone="me">You</ParticipantTagStyled>
                  )}
                </ParticipantItemStyled>
              ))}
              <Button
                variant="outline"
                size="sm"
                iconLeft={<FiPlus size={13} />}
                fullWidth
              >
                Invite to debate
              </Button>
            </PanelBodyStyled>

            <PanelHeaderStyled style={{ borderTop: '1px solid #E5E7EE' }}>
              <h3>Top unresolved</h3>
              <span>Nodes with the most open objections.</span>
            </PanelHeaderStyled>
            <UnresolvedListStyled>
              {unresolved.map((n) => (
                <UnresolvedItemStyled
                  key={n.id}
                  onClick={() => setSelectedNodeId(n.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <strong>{n.title}</strong>
                  <span>
                    {n.openObjections} open · {n.threadCount} threads · {n.kind}
                  </span>
                </UnresolvedItemStyled>
              ))}
            </UnresolvedListStyled>
          </PanelStyled>
        </WorkspaceGridStyled>
      </Container>
    </PageStyled>
  )
}
