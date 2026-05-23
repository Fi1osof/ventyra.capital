import React from 'react'
import {
  FiCpu,
  FiDollarSign,
  FiActivity,
  FiCloud,
  FiHeart,
  FiTruck,
} from 'react-icons/fi'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Heading, Text, Eyebrow } from '../../components/Typography'

import {
  PageHeroStyled,
  ThesisGridStyled,
  ThesisCardStyled,
  ThesisIconStyled,
  StageTableStyled,
  StageRowStyled,
  PrinciplesGridStyled,
  PrincipleStyled,
  PrincipleNumberStyled,
  SectionHeadStyled,
  AntiThesisStyled,
  AntiColStyled,
} from './styles'

const THESES = [
  {
    icon: <FiCpu size={20} />,
    bg: '#EEF0FF',
    color: '#4F46E5',
    title: 'Agentic AI infrastructure',
    desc: 'Foundational tools for building, deploying and supervising autonomous software agents.',
  },
  {
    icon: <FiDollarSign size={20} />,
    bg: '#FEF3C7',
    color: '#B45309',
    title: 'Programmable money',
    desc: 'Fintech rails for embedded finance, cross-border payouts and B2B treasury.',
  },
  {
    icon: <FiActivity size={20} />,
    bg: '#FFE4E6',
    color: '#9F1239',
    title: 'Applied healthtech',
    desc: 'Clinician copilots, diagnostics and AI-native therapeutics with regulatory tailwinds.',
  },
  {
    icon: <FiCloud size={20} />,
    bg: '#D1FAE5',
    color: '#047857',
    title: 'Industrial climate',
    desc: 'Software-defined energy, grid intelligence and decarbonization of heavy industry.',
  },
  {
    icon: <FiHeart size={20} />,
    bg: '#FDE7F2',
    color: '#9D174D',
    title: 'Consumer with margin',
    desc: 'Brands and products with durable affinity and clear path to gross-margin economics.',
  },
  {
    icon: <FiTruck size={20} />,
    bg: '#E0F2FE',
    color: '#0369A1',
    title: 'Vertical operating systems',
    desc: 'Workflow OSes for logistics, hospitality and field operations across emerging markets.',
  },
]

const STAGES = [
  {
    stage: 'Pre-seed',
    check: '$250K – $750K',
    ownership: '5–10%',
    role: 'Co-lead with conviction angels',
  },
  {
    stage: 'Seed',
    check: '$1M – $4M',
    ownership: '10–20%',
    role: 'Lead or co-lead, board observer',
  },
  {
    stage: 'Series A',
    check: '$2M – $6M',
    ownership: 'Pro-rata + opportunistic',
    role: 'Follow-on, selectively new',
  },
  {
    stage: 'Opportunity',
    check: '$5M – $15M',
    ownership: 'Concentrated bets',
    role: 'Conviction follow-ons in winners',
  },
]

const PRINCIPLES = [
  {
    n: '01',
    title: 'Decisions in days, not months',
    body: 'We commit to a yes/no within 14 days of the first partner call. Founders deserve clarity.',
  },
  {
    n: '02',
    title: 'Conviction over consensus',
    body: 'Single-partner sponsorship can drive an investment. We don&apos;t hide behind committees.',
  },
  {
    n: '03',
    title: 'Operator-led diligence',
    body: 'Every deal is pressure-tested by an operator in the space. Theory meets practice.',
  },
  {
    n: '04',
    title: 'Reserve discipline',
    body: 'We reserve 2–3× the initial check for follow-on. Winners get capital when they need it.',
  },
  {
    n: '05',
    title: 'Founder-friendly terms',
    body: 'Standard NVCA-style docs, no creative structures. We win when founders win.',
  },
  {
    n: '06',
    title: 'Transparent reasoning',
    body: 'Our debate platform makes diligence a graph of claims and evidence — visible to the founder.',
  },
]

export const HowWeInvestPage: React.FC = () => {
  return (
    <>
      <Container>
        <PageHeroStyled>
          <Eyebrow>HOW WE INVEST</Eyebrow>
          <Heading as="h1" size="xl">
            A thesis-driven fund with an operator&apos;s instinct
          </Heading>
          <Text size="md" tone="muted">
            We focus on six categories where AI, capital efficiency and operator
            expertise compound. Within them, we move with conviction and at
            speed.
          </Text>
        </PageHeroStyled>
      </Container>

      <Section tone="surface">
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              Where we play
            </Heading>
            <Text size="md" tone="muted" align="center">
              Six theses, refreshed every quarter — each backed by a dedicated
              partner and operator network.
            </Text>
          </SectionHeadStyled>
          <ThesisGridStyled>
            {THESES.map((t) => (
              <ThesisCardStyled key={t.title}>
                <ThesisIconStyled $bg={t.bg} $color={t.color}>
                  {t.icon}
                </ThesisIconStyled>
                <Heading as="h3" size="sm">
                  {t.title}
                </Heading>
                <Text size="sm" tone="muted">
                  {t.desc}
                </Text>
              </ThesisCardStyled>
            ))}
          </ThesisGridStyled>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              Stages &amp; check sizes
            </Heading>
            <Text size="md" tone="muted" align="center">
              How we size investments across the lifecycle of a venture.
            </Text>
          </SectionHeadStyled>
          <StageTableStyled>
            <StageRowStyled data-head="true">
              <div>Stage</div>
              <div>Check size</div>
              <div>Ownership</div>
              <div>Our role</div>
            </StageRowStyled>
            {STAGES.map((s) => (
              <StageRowStyled key={s.stage}>
                <strong>{s.stage}</strong>
                <span>{s.check}</span>
                <span>{s.ownership}</span>
                <span>{s.role}</span>
              </StageRowStyled>
            ))}
          </StageTableStyled>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              Six principles we run on
            </Heading>
          </SectionHeadStyled>
          <PrinciplesGridStyled>
            {PRINCIPLES.map((p) => (
              <PrincipleStyled key={p.n}>
                <PrincipleNumberStyled>{p.n}</PrincipleNumberStyled>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </PrincipleStyled>
            ))}
          </PrinciplesGridStyled>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              What we back — and what we don&apos;t
            </Heading>
          </SectionHeadStyled>
          <AntiThesisStyled>
            <AntiColStyled $tone="yes">
              <h3>What gets us excited</h3>
              <ul>
                <li>Founders with non-obvious, earned insight</li>
                <li>Software with structural margin</li>
                <li>Markets with regulatory or technical tailwinds</li>
                <li>Teams that can execute in emerging markets</li>
                <li>Honest discussions about what could go wrong</li>
              </ul>
            </AntiColStyled>
            <AntiColStyled $tone="no">
              <h3>What we usually pass on</h3>
              <ul>
                <li>Hype-driven categories without unit economics</li>
                <li>Pure services businesses without leverage</li>
                <li>Markets where regulation is structurally hostile</li>
                <li>
                  Solo founders without a complementary co-founder pipeline
                </li>
                <li>Pitches that avoid risk discussion</li>
              </ul>
            </AntiColStyled>
          </AntiThesisStyled>
        </Container>
      </Section>
    </>
  )
}
