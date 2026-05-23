import React from 'react'
import {
  FiArrowRight,
  FiDownload,
  FiMessageCircle,
  FiTarget,
  FiLayers,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiMapPin,
  FiCalendar,
  FiPlay,
} from 'react-icons/fi'

import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { Badge } from '../../components/Badge'
import { Tag } from '../../components/Tag'
import { MetricBlock } from '../../components/MetricBlock'
import { UserCard } from '../../components/UserCard'
import { Checkmark } from '../../components/Checkmark'

import dashboardMockup from '@/assets/dashboard-mockup.jpg'
import avatar1 from '@/assets/avatar-1.jpg'
import avatar2 from '@/assets/avatar-2.jpg'
import avatar3 from '@/assets/avatar-3.jpg'

import {
  BreadcrumbStyled,
  ProjectHeroStyled,
  ProjectHeroGridStyled,
  HeroBadgeRowStyled,
  HeroTitleStyled,
  HeroLeadStyled,
  HeroMetaStyled,
  HeroMetaItemStyled,
  HeroCtaRowStyled,
  HeroVisualStyled,
  FloatingStatStyled,
  SectionHeadingStyled,
  MetricsGridStyled,
  NarrativeGridStyled,
  NarrativeCardStyled,
  NarrativeIconStyled,
  TractionSectionStyled,
  TimelineStyled,
  TimelineItemStyled,
  TeamGridStyled,
  InvestorsRowStyled,
  InvestorChipStyled,
  CtaPanelStyled,
  CtaButtonsStyled,
} from './styles'

export const ProjectPage: React.FC = () => {
  return (
    <>
      <Container>
        <BreadcrumbStyled aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden>/</span>
          <a href="/portfolio">Portfolio</a>
          <span aria-hidden>/</span>
          <strong>Smart Hotel</strong>
        </BreadcrumbStyled>
      </Container>

      {/* HERO */}
      <Container>
        <ProjectHeroStyled>
          <ProjectHeroGridStyled>
            <div>
              <HeroBadgeRowStyled>
                <Badge tone="primary">Seed</Badge>
                <Badge tone="emerald">Active</Badge>
                <Badge tone="neutral">Hospitality &middot; AI</Badge>
              </HeroBadgeRowStyled>

              <Eyebrow>VENTYRA PORTFOLIO &middot; 2025</Eyebrow>
              <HeroTitleStyled>
                Smart Hotel — AI operating system for boutique hospitality
              </HeroTitleStyled>
              <HeroLeadStyled>
                Smart Hotel turns independent properties across Southeast Asia
                into AI-native operations: dynamic pricing, guest experience
                automation, and unified back-office. Ventyra led the seed round
                and supports the team with operators on the ground.
              </HeroLeadStyled>

              <HeroMetaStyled>
                <HeroMetaItemStyled>
                  <span>Stage</span>
                  <span>Seed</span>
                </HeroMetaItemStyled>
                <HeroMetaItemStyled>
                  <span>Ticket</span>
                  <span>$2.5M</span>
                </HeroMetaItemStyled>
                <HeroMetaItemStyled>
                  <span>HQ</span>
                  <span>Ho Chi Minh City</span>
                </HeroMetaItemStyled>
                <HeroMetaItemStyled>
                  <span>Joined</span>
                  <span>Mar 2025</span>
                </HeroMetaItemStyled>
              </HeroMetaStyled>

              <HeroCtaRowStyled>
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<FiArrowRight size={16} />}
                >
                  Request founder intro
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  iconLeft={<FiDownload size={14} />}
                >
                  Download deck
                </Button>
              </HeroCtaRowStyled>
            </div>

            <HeroVisualStyled>
              <img
                src={dashboardMockup.src}
                alt="Smart Hotel operations dashboard"
                loading="lazy"
              />
              <FloatingStatStyled $top="28px" $left="-12px">
                <Text size="xs" tone="subtle" style={{ marginBottom: 2 }}>
                  Occupancy
                </Text>
                <div
                  style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}
                >
                  <strong style={{ fontSize: 18, color: '#0E1230' }}>
                    84%
                  </strong>
                  <span
                    style={{ color: '#10B981', fontSize: 12, fontWeight: 700 }}
                  >
                    +12%
                  </span>
                </div>
              </FloatingStatStyled>
              <FloatingStatStyled $bottom="28px" $right="-12px">
                <Text size="xs" tone="subtle" style={{ marginBottom: 2 }}>
                  NPS Guest
                </Text>
                <div
                  style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}
                >
                  <strong style={{ fontSize: 18, color: '#0E1230' }}>72</strong>
                  <span
                    style={{ color: '#10B981', fontSize: 12, fontWeight: 700 }}
                  >
                    +18
                  </span>
                </div>
              </FloatingStatStyled>
            </HeroVisualStyled>
          </ProjectHeroGridStyled>
        </ProjectHeroStyled>
      </Container>

      {/* KEY METRICS */}
      <Section tone="surface">
        <Container>
          <SectionHeadingStyled>
            <Eyebrow>TRACTION</Eyebrow>
            <Heading as="h2" size="lg">
              Key metrics that matter
            </Heading>
            <Text size="md" tone="muted">
              Numbers from the last reporting period, verified through Ventyra's
              operator network.
            </Text>
          </SectionHeadingStyled>
          <MetricsGridStyled>
            <MetricBlock
              label="ARR"
              value="$1.84M"
              delta="+34%"
              deltaTone="positive"
            />
            <MetricBlock
              label="Properties live"
              value="142"
              delta="+28"
              deltaTone="positive"
            />
            <MetricBlock
              label="Gross margin"
              value="68%"
              delta="+6 pp"
              deltaTone="positive"
            />
            <MetricBlock
              label="Net retention"
              value="121%"
              delta="+9 pp"
              deltaTone="positive"
            />
          </MetricsGridStyled>
        </Container>
      </Section>

      {/* PROBLEM / SOLUTION */}
      <Section>
        <Container>
          <SectionHeadingStyled>
            <Eyebrow tone="amber">THESIS</Eyebrow>
            <Heading as="h2" size="lg">
              Why we backed Smart Hotel
            </Heading>
          </SectionHeadingStyled>

          <NarrativeGridStyled>
            <NarrativeCardStyled>
              <NarrativeIconStyled $tone="rose">
                <FiTarget size={20} />
              </NarrativeIconStyled>
              <Heading as="h3" size="md">
                The problem
              </Heading>
              <Text size="md" tone="muted">
                Independent hotels across APAC run on fragmented tools, manual
                pricing, and limited guest data. Margins erode, staff burns out,
                and brand equity stays trapped in spreadsheets.
              </Text>
            </NarrativeCardStyled>

            <NarrativeCardStyled>
              <NarrativeIconStyled $tone="primary">
                <FiLayers size={20} />
              </NarrativeIconStyled>
              <Heading as="h3" size="md">
                The solution
              </Heading>
              <Text size="md" tone="muted">
                A single AI-native operating system: pricing co-pilot,
                multilingual guest agent, back-office automation and a
                benchmarking layer trained on live regional demand.
              </Text>
            </NarrativeCardStyled>

            <NarrativeCardStyled>
              <NarrativeIconStyled $tone="emerald">
                <FiTrendingUp size={20} />
              </NarrativeIconStyled>
              <Heading as="h3" size="md">
                The opportunity
              </Heading>
              <Text size="md" tone="muted">
                Southeast Asia's boutique hospitality market is a $28B segment
                growing 14% YoY, with almost no AI-native incumbents and clear
                path to category leadership.
              </Text>
            </NarrativeCardStyled>

            <NarrativeCardStyled>
              <NarrativeIconStyled $tone="amber">
                <FiShield size={20} />
              </NarrativeIconStyled>
              <Heading as="h3" size="md">
                Why this team
              </Heading>
              <Text size="md" tone="muted">
                Founders combine 15+ years of hotel operations with deep ML
                engineering. Backed by operators who have scaled hospitality
                brands across 8 countries.
              </Text>
            </NarrativeCardStyled>
          </NarrativeGridStyled>
        </Container>
      </Section>

      {/* TRACTION + MILESTONES */}
      <Section tone="surface">
        <Container>
          <TractionSectionStyled>
            <div>
              <Eyebrow tone="emerald">MILESTONES</Eyebrow>
              <Heading
                as="h2"
                size="lg"
                style={{ marginTop: 10, marginBottom: 16 }}
              >
                From pilot to category leader
              </Heading>
              <Text size="md" tone="muted" style={{ marginBottom: 20 }}>
                Twelve months of disciplined execution: shipping product,
                signing properties, and turning early wins into a repeatable
                playbook for the rest of the region.
              </Text>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <Checkmark>
                  Pricing co-pilot in production across 4 markets
                </Checkmark>
                <Checkmark>
                  SOC 2 Type I completed, Type II in progress
                </Checkmark>
                <Checkmark>
                  Strategic partnership with regional OTA signed
                </Checkmark>
                <Checkmark>Series A targeted for Q3 2026</Checkmark>
              </div>
            </div>

            <TimelineStyled>
              <TimelineItemStyled>
                <time>Mar 2025</time>
                <strong>Ventyra leads $2.5M seed</strong>
                <p>
                  Round closes with Ventyra Capital as lead investor and three
                  regional operators joining.
                </p>
              </TimelineItemStyled>
              <TimelineItemStyled>
                <time>Jul 2025</time>
                <strong>First 25 properties onboarded</strong>
                <p>
                  Initial cohort across Vietnam and Thailand reaches positive
                  unit economics within 60 days.
                </p>
              </TimelineItemStyled>
              <TimelineItemStyled>
                <time>Nov 2025</time>
                <strong>AI guest agent ships</strong>
                <p>
                  Multilingual concierge handles 70% of guest inquiries with
                  measurable NPS lift.
                </p>
              </TimelineItemStyled>
              <TimelineItemStyled>
                <time>Mar 2026</time>
                <strong>$1.84M ARR and 142 properties</strong>
                <p>
                  Team crosses 12x ARR growth year-over-year while preserving
                  gross margin.
                </p>
              </TimelineItemStyled>
            </TimelineStyled>
          </TractionSectionStyled>
        </Container>
      </Section>

      {/* TEAM */}
      <Section>
        <Container>
          <SectionHeadingStyled>
            <Eyebrow>FOUNDING TEAM</Eyebrow>
            <Heading as="h2" size="lg">
              The operators behind Smart Hotel
            </Heading>
            <Text size="md" tone="muted">
              A senior team that has built, scaled and exited hospitality and AI
              products before.
            </Text>
          </SectionHeadingStyled>

          <TeamGridStyled>
            <UserCard
              name="Alex Chen"
              role="Co-founder &amp; CEO"
              avatarSrc={avatar1.src}
              description="Built and scaled two SaaS companies. Former product lead at a regional hospitality unicorn."
              tags={['Product', 'GTM', 'AI']}
              meta="2 prior exits"
            />
            <UserCard
              name="Linh Nguyen"
              role="Co-founder &amp; COO"
              avatarSrc={avatar2.src}
              description="15 years operating boutique hotel brands across Vietnam, Thailand and Indonesia."
              tags={['Operations', 'Hospitality']}
              meta="80+ properties"
            />
            <UserCard
              name="David Park"
              role="Co-founder &amp; CTO"
              avatarSrc={avatar3.src}
              description="Ex-staff engineer leading ML infrastructure at a category-defining AI platform."
              tags={['ML', 'Infra', 'Platform']}
              meta="8 years ML"
            />
          </TeamGridStyled>
        </Container>
      </Section>

      {/* CO-INVESTORS */}
      <Section tone="surface">
        <Container>
          <SectionHeadingStyled>
            <Eyebrow tone="primary">CO-INVESTORS</Eyebrow>
            <Heading as="h2" size="lg">
              In good company
            </Heading>
            <Text size="md" tone="muted">
              Ventyra led the round alongside category specialists and seasoned
              hospitality operators.
            </Text>
          </SectionHeadingStyled>

          <InvestorsRowStyled>
            <InvestorChipStyled>
              <strong>Ventyra Capital</strong>
              <span>Lead &middot; Seed</span>
            </InvestorChipStyled>
            <InvestorChipStyled>
              <strong>Northwind Ventures</strong>
              <span>Co-investor</span>
            </InvestorChipStyled>
            <InvestorChipStyled>
              <strong>Mekong Operators Fund</strong>
              <span>Strategic</span>
            </InvestorChipStyled>
            <InvestorChipStyled>
              <strong>Angel Syndicate</strong>
              <span>12 operators</span>
            </InvestorChipStyled>
          </InvestorsRowStyled>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 28,
              color: '#5B6079',
              fontSize: 13,
            }}
          >
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              <FiGlobe size={14} /> ventyra.capital/smart-hotel
            </span>
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              <FiMapPin size={14} /> Ho Chi Minh City, Vietnam
            </span>
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              <FiCalendar size={14} /> Investment date: Mar 2025
            </span>
          </div>
        </Container>
      </Section>

      {/* TAGS / TOPICS */}
      <Section>
        <Container>
          <SectionHeadingStyled>
            <Eyebrow tone="rose">TOPICS</Eyebrow>
            <Heading as="h2" size="lg">
              What this venture is about
            </Heading>
          </SectionHeadingStyled>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              'AI',
              'Hospitality',
              'Vertical SaaS',
              'Southeast Asia',
              'Operations',
              'Pricing',
              'Guest experience',
              'Multilingual AI',
              'Booking',
              'Back office',
            ].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Container>
        <div style={{ paddingBottom: 64 }}>
          <CtaPanelStyled>
            <h2>Interested in this venture?</h2>
            <p>
              Ventyra investors and partners can request a warm intro to the
              founding team, access the latest data room, or join the next
              office hours.
            </p>
            <CtaButtonsStyled>
              <Button
                variant="primary"
                size="lg"
                iconLeft={<FiMessageCircle size={16} />}
              >
                Request founder intro
              </Button>
              <Button variant="ghost" size="lg" iconLeft={<FiPlay size={14} />}>
                Watch product demo
              </Button>
            </CtaButtonsStyled>
          </CtaPanelStyled>
        </div>
      </Container>
    </>
  )
}
