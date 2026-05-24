/* eslint-disable no-console */
import React, { useCallback, useMemo, useState } from 'react'
import {
  FaArrowRight,
  FaCheck,
  // FaPaperPlane,
  // FaRobot,
  // FaStop,
  FaPenToSquare,
  FaRotate,
  // FaWandMagicSparkles,
  // FaCircleQuestion,
} from 'react-icons/fa6'

import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { Heading, Text, Eyebrow } from '../../components/Typography'
// import { Badge } from '../../components/Badge'

import {
  PageStyled,
  BreadcrumbStyled,
  StageHeaderStyled,
  StageStepsStyled,
  StageChipStyled,
  // IntroWrapStyled,
  // IntroCardStyled,
  IntroBulletListStyled,
  IntroBulletStyled,
  IntroBulletNumStyled,
  // IntroAsideStyled,
  // IntroAsideRowStyled,
  // IntroAsideDotStyled,
  // InterviewLayoutStyled,
  // SidebarStyled,
  // SidebarHeaderStyled,
  ProgressBarStyled,
  ProgressFillStyled,
  // PreviewToggleStyled,
  // PreviewToggleBtnStyled,
  // SectionGroupStyled,
  // SectionHeadStyled,
  // PropertyRowStyled,
  // PropertyIconStyled,
  // PropertyLabelStyled,
  // PropertyLabelTopStyled,
  // PropertyValuePreviewStyled,
  // RequiredDotStyled,
  // ScoreBarStyled,
  // ScoreBarFillStyled,
  // SidebarFooterStyled,
  // ChatPanelStyled,
  // ChatHeaderStyled,
  // ChatAgentStyled,
  // AvatarStyled,
  // LiveDotStyled,
  // MessagesStyled,
  // BubbleStyled,
  // BubbleMetaStyled,
  // TypingStyled,
  // ComposerStyled,
  // ComposerRowStyled,
  // TextareaStyled,
  // ComposerHintStyled,
  ReviewGridStyled,
  ReviewCardStyled,
  ReviewFieldStyled,
  ReviewFieldLabelStyled,
  ReviewFieldValueStyled,
  ReviewSideStyled,
  StatBoxStyled,
  ActionRowStyled,
} from './styles'
// import {
//   PROJECT_PROPERTIES,
//   PROJECT_SECTIONS,
//   INTERVIEW_ORDER,
//   EMPTY_COLLECTED,
//   FILLED_COLLECTED,
// } from './data'
import {
  CollectedState,
  // ChatMessage,
  // CollectedState,
  CreateProjectSection,
  SidebarPreview,
  // CreateProjectStage,
  // PropertyId,
  // SidebarPreview,
} from './types'
import Link from 'next/link'
import { Page, PageProps } from 'src/components/pages/_App/interfaces'
import { useRouter } from 'next/router'
import { CreateProjectIntroSection } from './sections/Intro'
import { EMPTY_COLLECTED, FILLED_COLLECTED, PROJECT_PROPERTIES } from './data'
import { CreateProjectInterviewSection } from './sections/Interview'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'

const STAGES: { id: CreateProjectSection; label: string }[] = [
  { id: CreateProjectSection.Intro, label: '1. Briefing' },
  { id: CreateProjectSection.Interview, label: '2. AI interview' },
  { id: CreateProjectSection.Review, label: '3. Review & publish' },
]

function isCreateProjectSection(
  path: string | undefined,
): path is CreateProjectSection {
  return path && Object.values<string>(CreateProjectSection).includes(path)
    ? true
    : false
}

type CreateProjectPageProps = PageProps & {
  section: CreateProjectSection
}

export const CreateProjectPage: Page<CreateProjectPageProps> = ({
  section: stage,
}) => {
  // const [stage, setStage] = useState<CreateProjectStage>('intro')

  console.log('CreateProjectPage stage', stage)

  const router = useRouter()

  const setStage = useCallback(
    (stage: CreateProjectSection) => {
      const parts = ['/projects/create']

      if (stage !== CreateProjectSection.Intro) {
        parts.push(stage)
      }

      router.push(parts.join('/'))
    },
    [router],
  )

  /* -------------------- INTRO -> INTERVIEW -------------------- */
  // const startInterview = useCallback(() => {
  //   setStage('interview')
  //   setPropIndex(0)
  //   setCollected({})
  //   setPreview('live')
  //   setMessages([
  //     {
  //       id: uid(),
  //       role: 'ai',
  //       text: "Hi — I'm Vee, the Ventyra intake agent. I'll ask short questions to fill in your project card on the left. You can also paste a whole brief in one go and I'll extract what I can. Hit \"Stop & build card\" any time. Ready?",
  //     },
  //     {
  //       id: uid(),
  //       role: 'ai',
  //       text: INTERVIEW_ORDER[0].question,
  //     },
  //   ])
  // }, [])

  const [preview, setPreview] = useState<SidebarPreview>('live')

  const [collected, setCollected] = useState<CollectedState>({})

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

  const restart = useCallback(() => {
    setStage(CreateProjectSection.Intro)
    // setMessages([])
    // setCollected({})
    // setPropIndex(0)
    // setDraft('')
  }, [setStage])

  const searchable = stage === CreateProjectSection.Intro

  /* -------------------- RENDER -------------------- */
  return (
    <>
      <SeoHeaders
        title="Create new project"
        noindex={!searchable}
        nofollow={!searchable}
      />

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

          {stage === 'intro' && <CreateProjectIntroSection />}

          {stage === 'interview' && (
            <CreateProjectInterviewSection
              setCollected={setCollected}
              setStage={setStage}
              visibleCollected={visibleCollected}
              setPreview={setPreview}
              filledAllCount={filledAllCount}
              filledRequiredCount={filledRequiredCount}
              preview={preview}
              requiredProgress={requiredProgress}
              requiredProps={requiredProps}
            />
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
                        Investors can attack individual claims, not just the
                        whole pitch.
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
                    onClick={() => setStage(CreateProjectSection.Interview)}
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
    </>
  )
}

CreateProjectPage.getInitialProps = async ({ query }) => {
  const section =
    query.section && typeof query.section === 'string'
      ? query.section
      : undefined

  return {
    section: isCreateProjectSection(section)
      ? section
      : CreateProjectSection.Intro,
  }
}
