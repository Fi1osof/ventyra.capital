import React, { useState, useMemo } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { Tag } from '../../components/Tag'
import { Badge } from '../../components/Badge'
import { MetricBlock } from '../../components/MetricBlock'

import {
  PageHeroStyled,
  FiltersBarStyled,
  FilterChipStyled,
  PortfolioGridStyled,
  CompanyCardStyled,
  CompanyHeadStyled,
  CompanyLogoStyled,
  CompanyNameStyled,
  CompanySectorStyled,
  CompanyDescStyled,
  CompanyMetaStyled,
  StatsRowStyled,
} from './styles'

type Stage = 'All' | 'Seed' | 'Series A' | 'Growth' | 'Exited'
type Sector =
  | 'All'
  | 'AI / SaaS'
  | 'Fintech'
  | 'Hospitality'
  | 'Climate'
  | 'Healthtech'

type Company = {
  name: string
  sector: Exclude<Sector, 'All'>
  stage: Exclude<Stage, 'All'>
  description: string
  geo: string
  year: number
  status?: 'Active' | 'Exited'
  logoBg: string
  initials: string
}

const COMPANIES: Company[] = [
  {
    name: 'Smart Hotel',
    sector: 'Hospitality',
    stage: 'Seed',
    description:
      'AI operating system for boutique hospitality across Southeast Asia.',
    geo: 'Vietnam',
    year: 2024,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#6366F1,#2D2F8F)',
    initials: 'SH',
  },
  {
    name: 'Lumen Health',
    sector: 'Healthtech',
    stage: 'Series A',
    description:
      'Clinical copilot helping GPs diagnose chronic conditions earlier.',
    geo: 'Singapore',
    year: 2023,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#10B981,#047857)',
    initials: 'LH',
  },
  {
    name: 'Northwind Pay',
    sector: 'Fintech',
    stage: 'Seed',
    description: 'Cross-border payouts for SaaS companies operating in APAC.',
    geo: 'Indonesia',
    year: 2024,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#F59E0B,#B45309)',
    initials: 'NP',
  },
  {
    name: 'Atlas Forge',
    sector: 'AI / SaaS',
    stage: 'Series A',
    description: 'Agentic developer platform for autonomous backend services.',
    geo: 'Remote',
    year: 2023,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
    initials: 'AF',
  },
  {
    name: 'Reverie Labs',
    sector: 'AI / SaaS',
    stage: 'Seed',
    description: 'Semantic search infrastructure for vertical knowledge bases.',
    geo: 'United States',
    year: 2024,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#F43F5E,#9F1239)',
    initials: 'RL',
  },
  {
    name: 'Verdant Grid',
    sector: 'Climate',
    stage: 'Series A',
    description: 'Forecasting demand response for industrial energy buyers.',
    geo: 'Germany',
    year: 2023,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#22C55E,#15803D)',
    initials: 'VG',
  },
  {
    name: 'Harbor OS',
    sector: 'AI / SaaS',
    stage: 'Growth',
    description: 'Workflow OS for distributed logistics and freight operators.',
    geo: 'Netherlands',
    year: 2021,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#0EA5E9,#075985)',
    initials: 'HO',
  },
  {
    name: 'Mira Bio',
    sector: 'Healthtech',
    stage: 'Seed',
    description: 'AI-native protein design for next-generation therapeutics.',
    geo: 'United Kingdom',
    year: 2024,
    status: 'Active',
    logoBg: 'linear-gradient(135deg,#EC4899,#831843)',
    initials: 'MB',
  },
  {
    name: 'Kintsu',
    sector: 'Fintech',
    stage: 'Exited',
    description:
      'B2B treasury management. Acquired by a Tier-1 fintech in 2023.',
    geo: 'Japan',
    year: 2019,
    status: 'Exited',
    logoBg: 'linear-gradient(135deg,#64748B,#1E293B)',
    initials: 'KT',
  },
]

const STAGES: Stage[] = ['All', 'Seed', 'Series A', 'Growth', 'Exited']
const SECTORS: Sector[] = [
  'All',
  'AI / SaaS',
  'Fintech',
  'Hospitality',
  'Climate',
  'Healthtech',
]

export const PortfolioPage: React.FC = () => {
  const [stage, setStage] = useState<Stage>('All')
  const [sector, setSector] = useState<Sector>('All')

  const filtered = useMemo(
    () =>
      COMPANIES.filter(
        (c) =>
          (stage === 'All' || c.stage === stage) &&
          (sector === 'All' || c.sector === sector),
      ),
    [stage, sector],
  )

  return (
    <>
      <Container>
        <PageHeroStyled>
          <Eyebrow>PORTFOLIO</Eyebrow>
          <Heading as="h1" size="xl">
            Ventures we back, builders we believe in
          </Heading>
          <Text size="md" tone="muted">
            From pre-seed to growth — a focused portfolio of category-defining
            companies in AI, fintech, climate and applied healthtech.
          </Text>
        </PageHeroStyled>

        <StatsRowStyled>
          <MetricBlock label="Portfolio companies" value="42" />
          <MetricBlock label="Active markets" value="14" />
          <MetricBlock label="Capital deployed" value="$210M" />
          <MetricBlock label="Notable exits" value="6" />
        </StatsRowStyled>

        <FiltersBarStyled>
          {STAGES.map((s) => (
            <FilterChipStyled
              key={s}
              $active={stage === s}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setStage(s)}
            >
              {s}
            </FilterChipStyled>
          ))}
          <div
            style={{
              width: 1,
              background: 'var(--fb, #E5E7EE)',
              margin: '0 8px',
            }}
          />
          {SECTORS.map((s) => (
            <FilterChipStyled
              key={s}
              $active={sector === s}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => setSector(s)}
            >
              {s}
            </FilterChipStyled>
          ))}
        </FiltersBarStyled>

        <PortfolioGridStyled>
          {filtered.map((c) => (
            <CompanyCardStyled key={c.name} href="/project">
              <CompanyHeadStyled>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <CompanyLogoStyled $bg={c.logoBg}>
                    {c.initials}
                  </CompanyLogoStyled>
                  <div>
                    <CompanyNameStyled>{c.name}</CompanyNameStyled>
                    <CompanySectorStyled>
                      {c.sector} · {c.geo}
                    </CompanySectorStyled>
                  </div>
                </div>
                <FiArrowUpRight size={18} />
              </CompanyHeadStyled>
              <CompanyDescStyled>{c.description}</CompanyDescStyled>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <Tag>{c.stage}</Tag>
                {c.status === 'Exited' && <Badge tone="emerald">Exited</Badge>}
              </div>
              <CompanyMetaStyled>
                <span>Invested {c.year}</span>
                <span>View venture →</span>
              </CompanyMetaStyled>
            </CompanyCardStyled>
          ))}
        </PortfolioGridStyled>
      </Container>

      <Section tone="surface">
        <Container>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <Heading as="h2" size="lg" align="center">
              Don&apos;t see your space?
            </Heading>
            <Text
              size="md"
              tone="muted"
              align="center"
              style={{ marginTop: 12 }}
            >
              We&apos;re actively researching new theses every quarter. If
              you&apos;re building something category-defining, we want to hear
              from you.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  )
}
