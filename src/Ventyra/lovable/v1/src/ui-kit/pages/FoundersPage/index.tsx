import React from 'react'
import { FiArrowRight, FiZap, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { Button } from '../../components/Button'
import { FeatureCard } from '../../components/FeatureCard'
import { Checkmark } from '../../components/Checkmark'

import {
  PageHeroStyled,
  HeroCopyStyled,
  HeroPanelStyled,
  HeroPanelRowStyled,
  PillarsGridStyled,
  SectionHeadStyled,
  ProcessListStyled,
  ProcessStepStyled,
  ProcessBodyStyled,
  ProcessMetaStyled,
  FaqListStyled,
  FaqItemStyled,
  CtaSectionStyled,
} from './styles'

const PROCESS = [
  {
    title: 'Intro & async AI interview',
    desc: 'Tell us about your venture. Our AI co-pilot helps you structure your thesis in 30 minutes.',
    meta: '30 min · async',
  },
  {
    title: 'Partner call',
    desc: 'Deep conversation with a Ventyra partner on market, team and edge.',
    meta: '60 min · 1:1',
  },
  {
    title: 'Debate room',
    desc: 'Structured due-diligence with claims, assumptions and evidence — fully transparent.',
    meta: '1–2 weeks',
  },
  {
    title: 'Term sheet',
    desc: 'We move fast when conviction is high. Clean, founder-friendly terms.',
    meta: '≤ 7 days from IC',
  },
  {
    title: 'Onboarding',
    desc: 'Access to the operator network, portfolio playbooks and follow-on capital.',
    meta: 'Day one',
  },
]

const FAQ = [
  {
    q: 'What stage do you invest at?',
    a: 'We lead and co-lead at pre-seed and seed, with selective Series A participation. Typical check size: $500K – $4M.',
  },
  {
    q: 'Do I need a deck?',
    a: 'No. Start with our AI interview — it gets us further than a deck in 30 minutes. A deck is welcome but not required.',
  },
  {
    q: 'How fast do you move?',
    a: 'From first call to term sheet typically 2–3 weeks. We commit to a yes/no within 14 days, no ghosting.',
  },
  {
    q: 'Do you only invest in APAC?',
    a: "No. We're sector-led, not geography-led. We back founders in APAC, EU and US, with a network bias toward APAC operators.",
  },
  {
    q: 'What do you bring beyond capital?',
    a: 'An operator network, structured thinking via the Ventyra platform, follow-on capital, and warm intros to customers and downstream investors.',
  },
]

export const FoundersPage: React.FC = () => {
  return (
    <>
      <Container>
        <PageHeroStyled>
          <HeroCopyStyled>
            <Eyebrow>FOR FOUNDERS</Eyebrow>
            <Heading as="h1" size="xl">
              A partner who thinks with you, not around you
            </Heading>
            <Text size="md" tone="muted">
              Ventyra backs founders building category-defining ventures. We
              bring capital, a global operator network and a structured platform
              for working through the hardest questions of your business.
            </Text>
            <div
              style={{
                display: 'flex',
                gap: 12,
                marginTop: 8,
                flexWrap: 'wrap',
              }}
            >
              <Button variant="primary" iconRight={<FiArrowRight size={14} />}>
                Start AI interview
              </Button>
              <Button variant="secondary">Book a call</Button>
            </div>
          </HeroCopyStyled>
          <HeroPanelStyled>
            <Heading as="h3" size="sm">
              What you get on day one
            </Heading>
            <div>
              <HeroPanelRowStyled>
                <span>Check size</span>
                <strong>$500K – $4M</strong>
              </HeroPanelRowStyled>
              <HeroPanelRowStyled>
                <span>Decision speed</span>
                <strong>≤ 14 days</strong>
              </HeroPanelRowStyled>
              <HeroPanelRowStyled>
                <span>Follow-on reserved</span>
                <strong>2–3× initial</strong>
              </HeroPanelRowStyled>
              <HeroPanelRowStyled>
                <span>Operator network</span>
                <strong>400+ vetted</strong>
              </HeroPanelRowStyled>
              <HeroPanelRowStyled>
                <span>Board seat</span>
                <strong>Optional</strong>
              </HeroPanelRowStyled>
            </div>
          </HeroPanelStyled>
        </PageHeroStyled>
      </Container>

      <Section tone="surface">
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              Three things we promise
            </Heading>
            <Text size="md" tone="muted" align="center">
              Capital is the easy part. What founders remember is how a partner
              showed up in the hard moments.
            </Text>
          </SectionHeadStyled>
          <PillarsGridStyled>
            <FeatureCard
              eyebrow="CONVICTION"
              eyebrowTone="primary"
              title="Real yes, fast no"
              description="No ghosting. A clear decision in ≤ 14 days with the reasoning behind it."
            />
            <FeatureCard
              eyebrow="DEPTH"
              eyebrowTone="amber"
              title="Operator-grade help"
              description="Help on hiring, pricing, GTM and architecture from people who've shipped it before."
            />
            <FeatureCard
              eyebrow="TRANSPARENCY"
              eyebrowTone="emerald"
              title="Structured debate"
              description="Our platform turns due diligence into a graph of claims and evidence. No black box."
            />
          </PillarsGridStyled>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              From first hello to wired funds
            </Heading>
            <Text size="md" tone="muted" align="center">
              A clear, time-boxed process — designed around founders, not
              partner meetings.
            </Text>
          </SectionHeadStyled>
          <ProcessListStyled>
            {PROCESS.map((s) => (
              <ProcessStepStyled key={s.title}>
                <ProcessBodyStyled>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </ProcessBodyStyled>
                <ProcessMetaStyled>{s.meta}</ProcessMetaStyled>
              </ProcessStepStyled>
            ))}
          </ProcessListStyled>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              What we look for
            </Heading>
          </SectionHeadStyled>
          <div
            style={{
              display: 'grid',
              gap: 24,
              gridTemplateColumns: '1fr',
              maxWidth: 760,
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <Checkmark>Unfair insight into the market</Checkmark>
              <Checkmark>Technical or operating edge</Checkmark>
              <Checkmark>Founders with skin in the game</Checkmark>
              <Checkmark>Clear path to category leadership</Checkmark>
              <Checkmark>Healthy unit economics by design</Checkmark>
              <Checkmark>Honest take on risks &amp; unknowns</Checkmark>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeadStyled>
            <Heading as="h2" size="lg" align="center">
              Frequently asked
            </Heading>
          </SectionHeadStyled>
          <FaqListStyled>
            {FAQ.map((f) => (
              <FaqItemStyled key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </FaqItemStyled>
            ))}
          </FaqListStyled>
        </Container>
      </Section>

      <Container>
        <div style={{ padding: '0 0 80px' }}>
          <CtaSectionStyled>
            <Eyebrow tone="primary" style={{ color: 'rgba(255,255,255,0.7)' }}>
              READY WHEN YOU ARE
            </Eyebrow>
            <Heading as="h2" size="lg" align="center">
              Tell us what you&apos;re building
            </Heading>
            <Text size="md" align="center">
              30 minutes async. You&apos;ll know if we&apos;re a fit within two
              weeks.
            </Text>
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                marginTop: 8,
                flexWrap: 'wrap',
              }}
            >
              <Button variant="secondary" iconLeft={<FiZap size={14} />}>
                Start AI interview
              </Button>
              <Button variant="ghost" iconLeft={<FiUsers size={14} />}>
                Meet the team
              </Button>
              <Button variant="ghost" iconLeft={<FiTrendingUp size={14} />}>
                See portfolio
              </Button>
            </div>
          </CtaSectionStyled>
        </div>
      </Container>
    </>
  )
}
