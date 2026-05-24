import React from 'react'

import {
  IntroWrapStyled,
  IntroCardStyled,
  IntroBulletListStyled,
  IntroBulletStyled,
  IntroBulletNumStyled,
  IntroAsideStyled,
  IntroAsideRowStyled,
  IntroAsideDotStyled,
  ChatAgentStyled,
  AvatarStyled,
  LiveDotStyled,
  ActionRowStyled,
} from '../../styles'
import { Badge } from '@/ui-kit/components/Badge'
import { FaCircleQuestion, FaWandMagicSparkles } from 'react-icons/fa6'
import { Heading, Text } from '@/ui-kit/components/Typography'
import { Button } from '@/ui-kit/components/Button'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { PROJECT_PROPERTIES } from '../../data'

export const CreateProjectIntroSection: React.FC = () => {
  return (
    <>
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
            <strong>Vee</strong> will interview you about the project. Answer in
            plain language — or paste a full brief in one message and Vee will
            extract what fits. The project card on the left fills in as you
            talk, with a signal score per property.
          </Text>

          <IntroBulletListStyled>
            <IntroBulletStyled>
              <IntroBulletNumStyled>1</IntroBulletNumStyled>
              <span>
                <strong>Non-linear.</strong> Answer in any order. Drop a whole
                pitch in one message and Vee fills multiple fields at once.
              </span>
            </IntroBulletStyled>
            <IntroBulletStyled>
              <IntroBulletNumStyled>2</IntroBulletNumStyled>
              <span>
                <strong>Stop whenever you want.</strong> Vee builds a draft from
                whatever is on the card.
              </span>
            </IntroBulletStyled>
            <IntroBulletStyled>
              <IntroBulletNumStyled>3</IntroBulletNumStyled>
              <span>
                <strong>Signal-aware.</strong> Each property gets a score from
                −1 to +1 — investors see at a glance where the story is strong
                and where it's at risk.
              </span>
            </IntroBulletStyled>
          </IntroBulletListStyled>

          <ActionRowStyled>
            <Button
              variant="primary"
              size="lg"
              iconRight={<FaArrowRight />}
              // onClick={startInterview}
              as={Link}
              href="/projects/create/interview"
              rel="noindex nofollow"
            >
              Start AI interview
            </Button>
            <Button variant="ghost" size="lg" iconLeft={<FaCircleQuestion />}>
              How does this work?
            </Button>
          </ActionRowStyled>
        </IntroCardStyled>

        <IntroAsideStyled>
          <ChatAgentStyled>
            <AvatarStyled>V</AvatarStyled>
            <div>
              <div style={{ fontWeight: 600 }}>Vee · Ventyra intake agent</div>
              <Text size="sm" tone="muted">
                <LiveDotStyled /> Online · responds in seconds
              </Text>
            </div>
          </ChatAgentStyled>
          <Text size="sm" tone="muted">
            A few of the {PROJECT_PROPERTIES.length} properties Vee will try to
            fill:
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
    </>
  )
}
