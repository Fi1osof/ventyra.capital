import React from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Heading, Text, Eyebrow } from '../../components/Typography'

import avatar1 from '@/assets/avatar-1.jpg'
import avatar2 from '@/assets/avatar-2.jpg'
import avatar3 from '@/assets/avatar-3.jpg'
import avatar4 from '@/assets/avatar-4.jpg'

import {
  PageHeroStyled,
  ManifestoStyled,
  StatsRowStyled,
  StatStyled,
  ValuesGridStyled,
  ValueCardStyled,
  ValueLabelStyled,
  TeamGridStyled,
  TeamCardStyled,
  TeamAvatarStyled,
  TeamNameStyled,
  TeamRoleStyled,
  SectionHeadStyled,
  TimelineStyled,
  TimelineItemStyled,
} from './styles'

const VALUES = [
  {
    label: '01 · CONVICTION',
    title: 'We invest before consensus',
    body: 'When we believe, we lead. We&apos;d rather be early and wrong sometimes than late and right always.',
  },
  {
    label: '02 · CLARITY',
    title: 'We earn trust by being explicit',
    body: 'Reasoning, assumptions and risks are written down — for founders and ourselves.',
  },
  {
    label: '03 · CRAFT',
    title: 'We respect the work of building',
    body: 'Most of our team has shipped product, hired engineers and made payroll. We never forget how hard it is.',
  },
  {
    label: '04 · COMPOUNDING',
    title: 'We play the long game',
    body: 'Reputation, network and judgment compound over decades. We optimize for the next twenty years, not the next quarter.',
  },
]

const TEAM = [
  { name: 'Alex Chen', role: 'Founding Partner', avatar: avatar1 },
  { name: 'Michael Tran', role: 'Partner, Fintech', avatar: avatar2 },
  { name: 'David Park', role: 'Partner, AI / SaaS', avatar: avatar3 },
  { name: 'Linh Nguyen', role: 'Partner, APAC', avatar: avatar4 },
]

const TIMELINE = [
  {
    year: '2019',
    title: 'Founded in Singapore',
    desc: 'Two operators-turned-investors raise a $25M debut fund focused on APAC seed.',
  },
  {
    year: '2021',
    title: 'First exit',
    desc: 'Kintsu acquired by a Tier-1 fintech, returning the debut fund.',
  },
  {
    year: '2022',
    title: 'Fund II — $80M',
    desc: 'Expanded thesis to AI infrastructure and applied healthtech.',
  },
  {
    year: '2024',
    title: 'Ventyra platform launch',
    desc: 'Structured-debate diligence platform goes live for founders and LPs.',
  },
  {
    year: '2025',
    title: 'Fund III — $150M',
    desc: 'Six theses, four partners, one operator network spanning APAC, EU and US.',
  },
]

export const AboutPage: React.FC = () => {
  return (
    <>
      <Container>
        <PageHeroStyled>
          <Eyebrow>ABOUT VENTYRA</Eyebrow>
          <Heading as="h1" size="xl">
            Capital, operators and structured thinking — in one place
          </Heading>
          <Text size="md" tone="muted">
            Ventyra Capital is an early-stage venture firm. We back founders
            building category-defining companies in AI, fintech, climate and
            applied healthtech across APAC, EU and US.
          </Text>
        </PageHeroStyled>

        <ManifestoStyled>
          We started Ventyra because the best founders deserve more than capital
          with a side of advice. They deserve a partner who will think with them
          — through the messy middle, the hard pivot, and the quiet moments when
          conviction matters most.
        </ManifestoStyled>

        <StatsRowStyled>
          <StatStyled>
            <strong>$255M</strong>
            <span>Assets under management</span>
          </StatStyled>
          <StatStyled>
            <strong>42</strong>
            <span>Portfolio companies</span>
          </StatStyled>
          <StatStyled>
            <strong>6</strong>
            <span>Notable exits</span>
          </StatStyled>
          <StatStyled>
            <strong>14</strong>
            <span>Active markets</span>
          </StatStyled>
        </StatsRowStyled>
      </Container>

      <Section tone="surface">
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              What we stand for
            </Heading>
            <Text size="md" tone="muted" align="center">
              Four values that shape every decision we make.
            </Text>
          </SectionHeadStyled>
          <ValuesGridStyled>
            {VALUES.map((v) => (
              <ValueCardStyled key={v.label}>
                <ValueLabelStyled>{v.label}</ValueLabelStyled>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </ValueCardStyled>
            ))}
          </ValuesGridStyled>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              The team
            </Heading>
            <Text size="md" tone="muted" align="center">
              Operators, engineers and investors — all founders at some point in
              their lives.
            </Text>
          </SectionHeadStyled>
          <TeamGridStyled>
            {TEAM.map((m) => (
              <TeamCardStyled key={m.name}>
                <TeamAvatarStyled src={m.avatar.src} alt={m.name} />
                <div>
                  <TeamNameStyled>{m.name}</TeamNameStyled>
                  <TeamRoleStyled>{m.role}</TeamRoleStyled>
                </div>
              </TeamCardStyled>
            ))}
          </TeamGridStyled>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              The story so far
            </Heading>
          </SectionHeadStyled>
          <TimelineStyled>
            {TIMELINE.map((t) => (
              <TimelineItemStyled key={t.year}>
                <strong>{t.year}</strong>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </TimelineItemStyled>
            ))}
          </TimelineStyled>
        </Container>
      </Section>
    </>
  )
}
