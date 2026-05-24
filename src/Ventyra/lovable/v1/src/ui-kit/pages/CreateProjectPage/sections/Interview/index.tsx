import { Text } from '@/ui-kit/components/Typography'

import {
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
} from '../../styles'

import {
  INTERVIEW_ORDER,
  PROJECT_PROPERTIES,
  PROJECT_SECTIONS,
} from '../../data'
import {
  ChatMessage,
  CollectedState,
  CreateProjectSection,
  PropertyId,
  PropertySchema,
  PropertyValue,
  SidebarPreview,
} from '../../types'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/ui-kit/components/Button'
import { FaPaperPlane, FaRobot, FaStop } from 'react-icons/fa'
import { Badge } from '@/ui-kit/components/Badge'

type CreateProjectInterviewSectionProps = {
  setStage: (stage: CreateProjectSection) => void

  filledAllCount: number
  filledRequiredCount: number
  requiredProps: PropertySchema[]
  preview: SidebarPreview
  // setPreview: React.Dispatch<React.SetStateAction<SidebarPreview>>
  requiredProgress: number

  // collected: Partial<Record<PropertyId, PropertyValue>>
  setCollected: React.Dispatch<
    React.SetStateAction<Partial<Record<PropertyId, PropertyValue>>>
  >
  setPreview: React.Dispatch<React.SetStateAction<SidebarPreview>>
  visibleCollected: CollectedState
}

export const CreateProjectInterviewSection: React.FC<
  CreateProjectInterviewSectionProps
> = ({
  setStage,
  filledAllCount,
  filledRequiredCount,
  requiredProps,
  preview,
  requiredProgress,
  setCollected,
  setPreview,
  visibleCollected,
}) => {
  const [propIndex, setPropIndex] = useState(0)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const messagesRef = useRef<HTMLDivElement>(null)

  const [aiTyping, setAiTyping] = useState(false)

  function uid() {
    return Math.random().toString(36).slice(2, 10)
  }

  /** Deterministic pseudo-positive score for live-filled properties. */
  function mockScoreForAnswer(answer: string, propId: PropertyId): number {
    // Negative cues from text
    const negative =
      /\b(no|none|don'?t|can'?t|not sure|risk|fail|losing|broken)\b/i.test(
        answer,
      )
    // Length signal: longer, more specific answers score higher
    const lengthSignal = Math.min(1, answer.trim().length / 140)
    if (negative) {
      return -0.3 - lengthSignal * 0.4
    }
    // Slight per-property variance
    const seed = propId.charCodeAt(0) % 5
    return Math.min(1, 0.4 + lengthSignal * 0.5 + seed * 0.02)
  }

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
          setStage(CreateProjectSection.Review)
        }
        setAiTyping(false)
      }, 600)
    },
    [propIndex, setCollected, setStage],
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
    setStage(CreateProjectSection.Review)
  }, [setStage])

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

  return (
    <>
      <InterviewLayoutStyled>
        <SidebarStyled>
          <SidebarHeaderStyled>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Project card</div>
              <Text size="xs" tone="muted">
                {filledAllCount}/{PROJECT_PROPERTIES.length} filled ·{' '}
                {filledRequiredCount}/{requiredProps.length} required
              </Text>
            </div>
            <PreviewToggleStyled role="tablist" aria-label="Sidebar preview">
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
                      <PropertyIconStyled $score={score} $hasValue={hasValue}>
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
                      <ScoreBarStyled aria-label={`Signal ${score.toFixed(1)}`}>
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
                Press Enter to send · Shift+Enter for a new line · paste a full
                brief if you have one
              </span>
              <span>
                Property {Math.min(propIndex + 1, INTERVIEW_ORDER.length)} of{' '}
                {INTERVIEW_ORDER.length}
              </span>
            </ComposerHintStyled>
          </ComposerStyled>
        </ChatPanelStyled>
      </InterviewLayoutStyled>
    </>
  )
}
