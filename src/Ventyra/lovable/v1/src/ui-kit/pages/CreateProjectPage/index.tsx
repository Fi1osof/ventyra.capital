import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  FaArrowRight,
  FaCheck,
  FaPaperPlane,
  FaRobot,
  FaStop,
  FaPenToSquare,
  FaRotate,
  FaWandMagicSparkles,
  FaCircleQuestion,
} from 'react-icons/fa6'

import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { Badge } from '../../components/Badge'

import {
  PageStyled,
  BreadcrumbStyled,
  StageHeaderStyled,
  StageStepsStyled,
  StageChipStyled,
  IntroWrapStyled,
  IntroCardStyled,
  IntroBulletListStyled,
  IntroBulletStyled,
  IntroBulletNumStyled,
  IntroAsideStyled,
  IntroAsideRowStyled,
  IntroAsideDotStyled,
  InterviewLayoutStyled,
  SidebarStyled,
  SidebarHeaderStyled,
  ProgressBarStyled,
  ProgressFillStyled,
  PreviewToggleStyled,
  PreviewToggleBtnStyled,
  SectionGroupStyled,
  SectionHeadStyled,
  PropertyRowStyled,
  PropertyIconStyled,
  PropertyLabelStyled,
  PropertyLabelTopStyled,
  PropertyValuePreviewStyled,
  RequiredDotStyled,
  ScoreBarStyled,
  ScoreBarFillStyled,
  SidebarFooterStyled,
  ChatPanelStyled,
  ChatHeaderStyled,
  ChatAgentStyled,
  AvatarStyled,
  LiveDotStyled,
  MessagesStyled,
  BubbleStyled,
  BubbleMetaStyled,
  TypingStyled,
  ComposerStyled,
  ComposerRowStyled,
  TextareaStyled,
  ComposerHintStyled,
  ReviewGridStyled,
  ReviewCardStyled,
  ReviewFieldStyled,
  ReviewFieldLabelStyled,
  ReviewFieldValueStyled,
  ReviewSideStyled,
  StatBoxStyled,
  ActionRowStyled,
} from './styles'
import {
  PROJECT_PROPERTIES,
  PROJECT_SECTIONS,
  INTERVIEW_ORDER,
  EMPTY_COLLECTED,
  FILLED_COLLECTED,
} from './data'
import type {
  ChatMessage,
  CollectedState,
  CreateProjectStage,
  PropertyId,
  SidebarPreview,
} from './types'
import Link from 'next/link'

const STAGES: { id: CreateProjectStage; label: string }[] = [
  { id: 'intro', label: '1. Briefing' },
  { id: 'interview', label: '2. AI interview' },
  { id: 'review', label: '3. Review & publish' },
]

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

/** Deterministic pseudo-positive score for live-filled properties. */
function mockScoreForAnswer(answer: string, propId: PropertyId): number {
  // Negative cues from text
  const negative =
    /\b(no|none|don'?t|can'?t|not sure|risk|fail|losing|broken)\b/i.test(answer)
  // Length signal: longer, more specific answers score higher
  const lengthSignal = Math.min(1, answer.trim().length / 140)
  if (negative) {
    return -0.3 - lengthSignal * 0.4
  }
  // Slight per-property variance
  const seed = propId.charCodeAt(0) % 5
  return Math.min(1, 0.4 + lengthSignal * 0.5 + seed * 0.02)
}

export const CreateProjectPage: React.FC = () => {
  const [stage, setStage] = useState<CreateProjectStage>('intro')
  const [collected, setCollected] = useState<CollectedState>({})
  const [propIndex, setPropIndex] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [aiTyping, setAiTyping] = useState(false)
  const [preview, setPreview] = useState<SidebarPreview>('live')
  const messagesRef = useRef<HTMLDivElement>(null)

  /* -------------------- INTRO -> INTERVIEW -------------------- */
  const startInterview = useCallback(() => {
    setStage('interview')
    setPropIndex(0)
    setCollected({})
    setPreview('live')
    setMessages([
      {
        id: uid(),
        role: 'ai',
        text: "Hi — I'm Vee, the Ventyra intake agent. I'll ask short questions to fill in your project card on the left. You can also paste a whole brief in one go and I'll extract what I can. Hit \"Stop & build card\" any time. Ready?",
      },
      {
        id: uid(),
        role: 'ai',
        text: INTERVIEW_ORDER[0].question,
      },
    ])
  }, [])

  /* -------------------- AUTOSCROLL -------------------- */
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, aiTyping])

  /* -------------------- CHAT FLOW -------------------- */
  const sendAnswer = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) {
        return
      }
      const currentProp = INTERVIEW_ORDER[propIndex]

      const filledFields: PropertyId[] = currentProp ? [currentProp.id] : []

      setMessages((prev) => [
        ...prev,
        { id: uid(), role: 'user', text: trimmed, filledFields },
      ])

      if (currentProp) {
        setCollected((prev) => ({
          ...prev,
          [currentProp.id]: {
            value: trimmed,
            score: mockScoreForAnswer(trimmed, currentProp.id),
          },
        }))
      }
      setDraft('')

      const nextIndex = propIndex + 1
      setAiTyping(true)

      window.setTimeout(() => {
        if (nextIndex < INTERVIEW_ORDER.length) {
          setMessages((prev) => [
            ...prev,
            {
              id: uid(),
              role: 'ai',
              text: `Got it. ${INTERVIEW_ORDER[nextIndex].question}`,
            },
          ])
          setPropIndex(nextIndex)
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: uid(),
              role: 'ai',
              text: "That's everything I need. I've assembled a draft of your project card — open the review panel to check it.",
            },
          ])
          setStage('review')
        }
        setAiTyping(false)
      }, 600)
    },
    [propIndex],
  )

  const stopAndBuild = useCallback(() => {
    setAiTyping(false)
    setMessages((prev) => [
      ...prev,
      {
        id: uid(),
        role: 'ai',
        text: 'Got it — stopping here and building the card with what we have. You can come back and continue later.',
      },
    ])
    setStage('review')
  }, [])

  const restart = useCallback(() => {
    setStage('intro')
    setMessages([])
    setCollected({})
    setPropIndex(0)
    setDraft('')
  }, [])

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      sendAnswer(draft)
    },
    [draft, sendAnswer],
  )

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendAnswer(draft)
      }
    },
    [draft, sendAnswer],
  )

  /* -------------------- DERIVED -------------------- */
  const visibleCollected: CollectedState = useMemo(() => {
    if (preview === 'empty') {
      return EMPTY_COLLECTED
    }
    if (preview === 'filled') {
      return FILLED_COLLECTED
    }
    return collected
  }, [preview, collected])

  const {
    filledAllCount,
    requiredProgress,
    filledRequiredCount,
    requiredProps,
  } = useMemo(() => {
    const requiredProps = PROJECT_PROPERTIES.filter((p) => p.required)

    const filledRequiredCount = requiredProps.filter(
      (p) => visibleCollected[p.id]?.value,
    ).length
    const filledAllCount = PROJECT_PROPERTIES.filter(
      (p) => visibleCollected[p.id]?.value,
    ).length
    const requiredProgress = Math.round(
      (filledRequiredCount / requiredProps.length) * 100,
    )

    return {
      filledAllCount,
      requiredProgress,
      filledRequiredCount,
      requiredProps,
    }
  }, [visibleCollected])

  // Aggregate signal: average of non-zero scores
  const aggregateSignal = useMemo(() => {
    const scored = PROJECT_PROPERTIES.map((p) => visibleCollected[p.id]).filter(
      (v) => v && v.value,
    ) as { value: string; score: number }[]
    if (scored.length === 0) {
      return 0
    }
    return scored.reduce((sum, s) => sum + s.score, 0) / scored.length
  }, [visibleCollected])

  const currentPropId = INTERVIEW_ORDER[propIndex]?.id

  /* -------------------- RENDER -------------------- */
  return (
    <PageStyled>
      <Container>
        <BreadcrumbStyled>
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/founders">Founders</Link>
          <span aria-hidden>/</span>
          <strong>New project</strong>
        </BreadcrumbStyled>

        <StageHeaderStyled>
          <Eyebrow tone="primary">Project intake</Eyebrow>
          <Heading as="h1" size="xl">
            Create a new project
          </Heading>
          <StageStepsStyled>
            {STAGES.map((s, i) => {
              const currentIdx = STAGES.findIndex((x) => x.id === stage)
              const state =
                i < currentIdx ? 'done' : i === currentIdx ? 'active' : 'todo'
              return (
                <React.Fragment key={s.id}>
                  <StageChipStyled $state={state}>
                    {state === 'done' ? <FaCheck size={10} /> : null}
                    {s.label}
                  </StageChipStyled>
                  {i < STAGES.length - 1 ? <span>›</span> : null}
                </React.Fragment>
              )
            })}
          </StageStepsStyled>
        </StageHeaderStyled>

        {stage === 'intro' && (
          <IntroWrapStyled>
            <IntroCardStyled>
              <Badge tone="primary">
                <FaWandMagicSparkles size={11} style={{ marginRight: 6 }} />
                Guided by AI
              </Badge>
              <Heading as="h2" size="lg">
                You won't fill in a form. You'll have a conversation.
              </Heading>
              <Text tone="muted">
                Instead of a 30-field application, our AI intake agent{' '}
                <strong>Vee</strong> will interview you about the project.
                Answer in plain language — or paste a full brief in one message
                and Vee will extract what fits. The project card on the left
                fills in as you talk, with a signal score per property.
              </Text>

              <IntroBulletListStyled>
                <IntroBulletStyled>
                  <IntroBulletNumStyled>1</IntroBulletNumStyled>
                  <span>
                    <strong>Non-linear.</strong> Answer in any order. Drop a
                    whole pitch in one message and Vee fills multiple fields at
                    once.
                  </span>
                </IntroBulletStyled>
                <IntroBulletStyled>
                  <IntroBulletNumStyled>2</IntroBulletNumStyled>
                  <span>
                    <strong>Stop whenever you want.</strong> Vee builds a draft
                    from whatever is on the card.
                  </span>
                </IntroBulletStyled>
                <IntroBulletStyled>
                  <IntroBulletNumStyled>3</IntroBulletNumStyled>
                  <span>
                    <strong>Signal-aware.</strong> Each property gets a score
                    from −1 to +1 — investors see at a glance where the story is
                    strong and where it's at risk.
                  </span>
                </IntroBulletStyled>
              </IntroBulletListStyled>

              <ActionRowStyled>
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<FaArrowRight />}
                  onClick={startInterview}
                >
                  Start AI interview
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconLeft={<FaCircleQuestion />}
                >
                  How does this work?
                </Button>
              </ActionRowStyled>
            </IntroCardStyled>

            <IntroAsideStyled>
              <ChatAgentStyled>
                <AvatarStyled>V</AvatarStyled>
                <div>
                  <div style={{ fontWeight: 600 }}>
                    Vee · Ventyra intake agent
                  </div>
                  <Text size="sm" tone="muted">
                    <LiveDotStyled /> Online · responds in seconds
                  </Text>
                </div>
              </ChatAgentStyled>
              <Text size="sm" tone="muted">
                A few of the {PROJECT_PROPERTIES.length} properties Vee will try
                to fill:
              </Text>
              <IntroAsideRowStyled>
                <IntroAsideDotStyled /> Problem statement &amp; who has it
              </IntroAsideRowStyled>
              <IntroAsideRowStyled>
                <IntroAsideDotStyled /> Existing proof &amp; metrics
              </IntroAsideRowStyled>
              <IntroAsideRowStyled>
                <IntroAsideDotStyled /> Main risks &amp; dependencies
              </IntroAsideRowStyled>
              <Text size="xs" tone="subtle">
                Your answers stay private until you publish the card.
              </Text>
            </IntroAsideStyled>
          </IntroWrapStyled>
        )}

        {stage === 'interview' && (
          <InterviewLayoutStyled>
            <SidebarStyled>
              <SidebarHeaderStyled>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>
                    Project card
                  </div>
                  <Text size="xs" tone="muted">
                    {filledAllCount}/{PROJECT_PROPERTIES.length} filled ·{' '}
                    {filledRequiredCount}/{requiredProps.length} required
                  </Text>
                </div>
                <PreviewToggleStyled
                  role="tablist"
                  aria-label="Sidebar preview"
                >
                  <PreviewToggleBtnStyled
                    type="button"
                    $active={preview === 'live'}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => setPreview('live')}
                  >
                    Live
                  </PreviewToggleBtnStyled>
                  <PreviewToggleBtnStyled
                    type="button"
                    $active={preview === 'empty'}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => setPreview('empty')}
                  >
                    Empty
                  </PreviewToggleBtnStyled>
                  <PreviewToggleBtnStyled
                    type="button"
                    $active={preview === 'filled'}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => setPreview('filled')}
                  >
                    Filled
                  </PreviewToggleBtnStyled>
                </PreviewToggleStyled>
              </SidebarHeaderStyled>

              <ProgressBarStyled>
                <ProgressFillStyled $value={requiredProgress} />
              </ProgressBarStyled>

              {PROJECT_SECTIONS.map((section) => {
                const SectionIcon = section.icon
                const props = PROJECT_PROPERTIES.filter(
                  (p) => p.section === section.id,
                )
                return (
                  <SectionGroupStyled key={section.id}>
                    <SectionHeadStyled>
                      <SectionIcon size={11} />
                      {section.label}
                    </SectionHeadStyled>
                    {props.map((prop) => {
                      const PropIcon = prop.icon
                      const v = visibleCollected[prop.id]
                      const hasValue = Boolean(v?.value)
                      const score = v?.score ?? 0
                      const isActive =
                        preview === 'live' && prop.id === currentPropId
                      return (
                        <PropertyRowStyled
                          key={prop.id}
                          $score={score}
                          $hasValue={hasValue}
                          $active={isActive}
                          title={v?.value ?? prop.exampleAnswer}
                        >
                          <PropertyIconStyled
                            $score={score}
                            $hasValue={hasValue}
                          >
                            <PropIcon size={11} />
                          </PropertyIconStyled>
                          <PropertyLabelStyled>
                            <PropertyLabelTopStyled>
                              {prop.required ? (
                                <RequiredDotStyled title="Required" />
                              ) : null}
                              <span>{prop.label}</span>
                            </PropertyLabelTopStyled>
                            {hasValue ? (
                              <PropertyValuePreviewStyled>
                                {v?.value}
                              </PropertyValuePreviewStyled>
                            ) : null}
                          </PropertyLabelStyled>
                          <ScoreBarStyled
                            aria-label={`Signal ${score.toFixed(1)}`}
                          >
                            <ScoreBarFillStyled
                              $score={score}
                              $hasValue={hasValue}
                            />
                          </ScoreBarStyled>
                        </PropertyRowStyled>
                      )
                    })}
                  </SectionGroupStyled>
                )
              })}

              <SidebarFooterStyled>
                <Text size="xs" tone="subtle">
                  Aggregate signal:{' '}
                  <strong
                    style={{
                      color:
                        aggregateSignal > 0.05
                          ? 'var(--colors-accentEmerald, #10b981)'
                          : aggregateSignal < -0.05
                            ? '#ef4444'
                            : undefined,
                    }}
                  >
                    {aggregateSignal >= 0 ? '+' : ''}
                    {aggregateSignal.toFixed(2)}
                  </strong>
                </Text>
                <Button
                  variant="outline"
                  size="sm"
                  iconLeft={<FaStop />}
                  onClick={stopAndBuild}
                  disabled={preview !== 'live' || filledAllCount === 0}
                >
                  Stop &amp; build card
                </Button>
              </SidebarFooterStyled>
            </SidebarStyled>

            <ChatPanelStyled>
              <ChatHeaderStyled>
                <ChatAgentStyled>
                  <AvatarStyled>V</AvatarStyled>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>
                      Vee · Intake agent
                    </div>
                    <Text size="xs" tone="muted">
                      <LiveDotStyled /> Conducting interview
                    </Text>
                  </div>
                </ChatAgentStyled>
                <Badge tone="neutral">
                  <FaRobot size={11} style={{ marginRight: 6 }} />
                  AI-led
                </Badge>
              </ChatHeaderStyled>

              <MessagesStyled ref={messagesRef}>
                {messages.map((m) => (
                  <React.Fragment key={m.id}>
                    <BubbleMetaStyled $role={m.role}>
                      {m.role === 'ai' ? 'Vee' : 'You'}
                      {m.filledFields && m.filledFields.length > 0
                        ? ` · filled ${m.filledFields
                            .map(
                              (id) =>
                                PROJECT_PROPERTIES.find((p) => p.id === id)
                                  ?.label ?? id,
                            )
                            .join(', ')}`
                        : ''}
                    </BubbleMetaStyled>
                    <BubbleStyled $role={m.role}>{m.text}</BubbleStyled>
                  </React.Fragment>
                ))}
                {aiTyping ? (
                  <>
                    <BubbleMetaStyled $role="ai">Vee</BubbleMetaStyled>
                    <BubbleStyled $role="ai">
                      <TypingStyled>
                        <span />
                        <span />
                        <span />
                      </TypingStyled>
                    </BubbleStyled>
                  </>
                ) : null}
              </MessagesStyled>

              <ComposerStyled onSubmit={onSubmit}>
                <ComposerRowStyled>
                  <TextareaStyled
                    placeholder={
                      INTERVIEW_ORDER[propIndex]?.exampleAnswer ??
                      'Type your answer…'
                    }
                    value={draft}
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={onKeyDown}
                    disabled={aiTyping}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    iconRight={<FaPaperPlane />}
                    disabled={!draft.trim() || aiTyping}
                  >
                    Send
                  </Button>
                </ComposerRowStyled>
                <ComposerHintStyled>
                  <span>
                    Press Enter to send · Shift+Enter for a new line · paste a
                    full brief if you have one
                  </span>
                  <span>
                    Property {Math.min(propIndex + 1, INTERVIEW_ORDER.length)}{' '}
                    of {INTERVIEW_ORDER.length}
                  </span>
                </ComposerHintStyled>
              </ComposerStyled>
            </ChatPanelStyled>
          </InterviewLayoutStyled>
        )}

        {stage === 'review' && (
          <ReviewGridStyled>
            <ReviewCardStyled>
              <div>
                <Eyebrow tone="emerald">Draft project card</Eyebrow>
                <Heading as="h2" size="lg">
                  {collected.name?.value || 'Untitled project'}
                </Heading>
                {collected.oneLiner?.value ? (
                  <Text tone="muted">{collected.oneLiner.value}</Text>
                ) : (
                  <Text tone="subtle">
                    Add a one-liner to summarize the project.
                  </Text>
                )}
              </div>

              {PROJECT_PROPERTIES.filter(
                (p) => !['name', 'oneLiner'].includes(p.id),
              ).map((p) => {
                const v = collected[p.id]
                return (
                  <ReviewFieldStyled key={p.id}>
                    <ReviewFieldLabelStyled>{p.label}</ReviewFieldLabelStyled>
                    <ReviewFieldValueStyled $empty={!v?.value}>
                      {v?.value || 'Not collected yet'}
                    </ReviewFieldValueStyled>
                  </ReviewFieldStyled>
                )
              })}
            </ReviewCardStyled>

            <ReviewSideStyled>
              <StatBoxStyled>
                <Eyebrow tone="primary">Card completeness</Eyebrow>
                <Heading as="h3" size="md">
                  {Math.round(
                    (filledAllCount / PROJECT_PROPERTIES.length) * 100,
                  )}
                  %
                </Heading>
                <ProgressBarStyled style={{ marginTop: 10 }}>
                  <ProgressFillStyled
                    $value={Math.round(
                      (filledAllCount / PROJECT_PROPERTIES.length) * 100,
                    )}
                  />
                </ProgressBarStyled>
                <Text size="sm" tone="muted" style={{ marginTop: 10 }}>
                  {filledAllCount} of {PROJECT_PROPERTIES.length} properties
                  collected.
                  {filledRequiredCount < requiredProps.length
                    ? ' Some required properties are still missing.'
                    : ' All required properties are in.'}
                </Text>
              </StatBoxStyled>

              <StatBoxStyled>
                <Eyebrow tone="amber">Next steps</Eyebrow>
                <IntroBulletListStyled>
                  <IntroBulletStyled>
                    <IntroBulletNumStyled>1</IntroBulletNumStyled>
                    <span>Edit any field that needs tightening.</span>
                  </IntroBulletStyled>
                  <IntroBulletStyled>
                    <IntroBulletNumStyled>2</IntroBulletNumStyled>
                    <span>Publish to open the card for investor debate.</span>
                  </IntroBulletStyled>
                  <IntroBulletStyled>
                    <IntroBulletNumStyled>3</IntroBulletNumStyled>
                    <span>
                      Investors can attack individual claims, not just the whole
                      pitch.
                    </span>
                  </IntroBulletStyled>
                </IntroBulletListStyled>
              </StatBoxStyled>

              <ActionRowStyled>
                <Button
                  variant="primary"
                  size="md"
                  iconRight={<FaArrowRight />}
                >
                  Publish project
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  iconLeft={<FaPenToSquare />}
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => setStage('interview')}
                  disabled={filledAllCount === PROJECT_PROPERTIES.length}
                >
                  Resume interview
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  iconLeft={<FaRotate />}
                  onClick={restart}
                >
                  Start over
                </Button>
              </ActionRowStyled>
            </ReviewSideStyled>
          </ReviewGridStyled>
        )}
      </Container>
    </PageStyled>
  )
}
