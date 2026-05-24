import React from 'react'
import {
  FiArrowRight,
  FiLock,
  FiZap,
  FiUsers,
  FiSearch,
  FiBarChart2,
  FiMessageCircle,
  FiBriefcase,
  FiUserCheck,
  FiAward,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiCpu,
  FiLink2,
  FiPenTool,
  FiFileText,
  FiPlay,
} from 'react-icons/fi'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { FeatureCard } from '../../components/FeatureCard'
import { StepsRow } from '../../components/StepsRow'
import { UserCard } from '../../components/UserCard'
import { Checkmark } from '../../components/Checkmark'
import { MetricBlock } from '../../components/MetricBlock'
import { Badge } from '../../components/Badge'
import { Icon } from '../../components/Icon'

import avatar1 from '@/assets/avatar-1.jpg'
import avatar2 from '@/assets/avatar-2.jpg'
import avatar3 from '@/assets/avatar-3.jpg'
import avatar4 from '@/assets/avatar-4.jpg'
import dashboardMockup from '@/assets/dashboard-mockup.jpg'

import {
  HeroSectionStyled,
  HeroGridStyled,
  HeroEyebrowStyled,
  HeroTitleStyled,
  HeroSubtitleStyled,
  HeroCtaRowStyled,
  HeroBadgesStyled,
  HeroBadgeStyled,
  HeroBadgeIconStyled,
  HeroVisualWrapStyled,
  HeroFloatingCardStyled,
  SectionHeadingStyled,
  FeaturesGridStyled,
  TwoWaysGridStyled,
  TwoWaysCardStyled,
  TwoWaysCheckListStyled,
  TwoWaysIconStyled,
  PictureSectionStyled,
  PictureFrameStyled,
  PictureFrameInnerStyled,
  CommunityGridStyled,
  TrustRowStyled,
  TrustItemStyled,
  TrustTextStyled,
  BrowseAllStyled,
} from './styles'
import Link from 'next/link'

/* Hero illustrative graph — pure SVG, no AI text issues */
const HeroGraph: React.FC = () => (
  <svg
    viewBox="0 0 540 420"
    width="100%"
    height="100%"
    role="img"
    aria-label="Venture network graph"
  >
    <defs>
      <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="centerFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#2D2F8F" />
      </linearGradient>
    </defs>
    {/* connections */}
    <g stroke="#C7CBE0" strokeWidth="1" fill="none" strokeDasharray="3 4">
      <path d="M270 210 L120 90" />
      <path d="M270 210 L420 90" />
      <path d="M270 210 L70 220" />
      <path d="M270 210 L470 230" />
      <path d="M270 210 L150 350" />
      <path d="M270 210 L400 360" />
      <path d="M270 210 L260 60" />
      <path d="M270 210 L280 380" />
    </g>
    {/* center halo */}
    <circle cx="270" cy="210" r="110" fill="url(#centerGlow)" />
    {/* center node */}
    <circle cx="270" cy="210" r="62" fill="url(#centerFill)" />
    <text
      x="270"
      y="205"
      textAnchor="middle"
      fill="#fff"
      fontSize="14"
      fontWeight="700"
      fontFamily="Inter, sans-serif"
    >
      Smart Hotel
    </text>
    <text
      x="270"
      y="222"
      textAnchor="middle"
      fill="#fff"
      fontSize="11"
      fontFamily="Inter, sans-serif"
      opacity="0.85"
    >
      Vietnam
    </text>
    {/* surrounding nodes */}
    {[
      {
        cx: 120,
        cy: 90,
        r: 30,
        fill: '#DBEAFE',
        stroke: '#3B82F6',
        label: 'Founder',
      },
      {
        cx: 420,
        cy: 90,
        r: 30,
        fill: '#DBEAFE',
        stroke: '#3B82F6',
        label: 'Technical',
      },
      {
        cx: 70,
        cy: 220,
        r: 26,
        fill: '#FEF3C7',
        stroke: '#F59E0B',
        label: 'Operators',
      },
      {
        cx: 470,
        cy: 230,
        r: 28,
        fill: '#D1FAE5',
        stroke: '#10B981',
        label: 'Local',
      },
      {
        cx: 150,
        cy: 350,
        r: 26,
        fill: '#FFE4E6',
        stroke: '#F43F5E',
        label: 'Investors',
      },
      {
        cx: 400,
        cy: 360,
        r: 26,
        fill: '#EDE9FE',
        stroke: '#8B5CF6',
        label: 'Markets',
      },
      {
        cx: 260,
        cy: 60,
        r: 22,
        fill: '#E0E7FF',
        stroke: '#4F46E5',
        label: 'AI',
      },
      {
        cx: 280,
        cy: 380,
        r: 22,
        fill: '#FEF3C7',
        stroke: '#F59E0B',
        label: 'Partners',
      },
    ].map((n) => (
      <g key={n.label}>
        <circle
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={n.fill}
          stroke={n.stroke}
          strokeWidth="1.5"
          opacity="0.9"
        />
        <text
          x={n.cx}
          y={n.cy + 4}
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#0E1230"
          fontFamily="Inter, sans-serif"
        >
          {n.label}
        </text>
      </g>
    ))}
  </svg>
)

export const HomePage: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <Container>
        <HeroSectionStyled>
          <HeroGridStyled>
            <div>
              <HeroEyebrowStyled>
                <Eyebrow>AI-NATIVE VENTURE PLATFORM</Eyebrow>
              </HeroEyebrowStyled>
              <HeroTitleStyled>
                Turn vision, capital and expertise into category-defining
                ventures
              </HeroTitleStyled>
              <HeroSubtitleStyled>
                Ventyra Capital backs founders with private interviews, semantic
                venture mapping and a global network of operators and investors
                — all in one platform.
              </HeroSubtitleStyled>
              <HeroCtaRowStyled>
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<FiArrowRight size={16} />}
                  as={Link}
                  href="/projects/create"
                >
                  Start AI Interview
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  iconLeft={<FiPlay size={14} />}
                >
                  Explore Portfolio
                </Button>
              </HeroCtaRowStyled>
              <HeroBadgesStyled>
                <HeroBadgeStyled>
                  <HeroBadgeIconStyled>
                    <FiLock size={16} />
                  </HeroBadgeIconStyled>
                  Private discussions
                  <br />
                  end-to-end
                </HeroBadgeStyled>
                <HeroBadgeStyled>
                  <HeroBadgeIconStyled>
                    <FiZap size={16} />
                  </HeroBadgeIconStyled>
                  AI-assisted
                  <br />
                  structuring
                </HeroBadgeStyled>
                <HeroBadgeStyled>
                  <HeroBadgeIconStyled>
                    <FiUsers size={16} />
                  </HeroBadgeIconStyled>
                  Partnerships
                  <br />
                  that scale
                </HeroBadgeStyled>
              </HeroBadgesStyled>
            </div>

            <HeroVisualWrapStyled>
              <HeroGraph />

              <HeroFloatingCardStyled $top="20px" $left="20px">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 6,
                  }}
                >
                  <Badge tone="primary">AI Insight</Badge>
                </div>
                <div
                  style={{ fontWeight: 600, marginBottom: 4, color: '#0E1230' }}
                >
                  Hidden opportunity detected
                </div>
                <div
                  style={{ color: '#5B6079', fontSize: 11, lineHeight: 1.4 }}
                >
                  Southeast Asia hospitality market shows high potential for
                  expansion.
                </div>
                <a
                  href="#"
                  style={{
                    color: '#4F46E5',
                    fontSize: 11,
                    fontWeight: 600,
                    marginTop: 8,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  View insight <FiArrowRight size={11} />
                </a>
              </HeroFloatingCardStyled>

              <HeroFloatingCardStyled $top="20px" $right="20px">
                <div
                  style={{ fontWeight: 600, marginBottom: 8, color: '#0E1230' }}
                >
                  Venture Metrics
                </div>
                {[
                  ['Market Size', '$28.4B'],
                  ['Projected Revenue', '$4.7M'],
                  ['Gross Margin', '62%'],
                  ['Target IRR', '35%+'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 11,
                      padding: '3px 0',
                      color: '#5B6079',
                    }}
                  >
                    <span>{k}</span>
                    <strong style={{ color: '#0E1230' }}>{v}</strong>
                  </div>
                ))}
              </HeroFloatingCardStyled>

              <HeroFloatingCardStyled $bottom="20px" $right="20px">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontWeight: 600, color: '#0E1230' }}>
                    Partnership Match
                  </span>
                  <span
                    style={{
                      background: '#D1FAE5',
                      color: '#059669',
                      borderRadius: 999,
                      padding: '2px 8px',
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    92%
                  </span>
                </div>
                <div style={{ fontSize: 11, color: '#5B6079' }}>
                  Technical + Local
                  <br />
                  Strong fit
                </div>
              </HeroFloatingCardStyled>
            </HeroVisualWrapStyled>
          </HeroGridStyled>
        </HeroSectionStyled>
      </Container>

      {/* FEATURES — three audiences */}
      <Section tone="surface">
        <Container>
          <SectionHeadingStyled>
            <Heading as="h2" size="lg" align="center">
              Built for every type of venture builder
            </Heading>
          </SectionHeadingStyled>
          <FeaturesGridStyled>
            <FeatureCard
              eyebrow="FOR FOUNDERS"
              eyebrowTone="primary"
              title="Go from raw ideas to investment-ready ventures"
              description="Structure your venture with AI support and prepare for fundraising conversations."
            >
              <StepsRow
                tone="primary"
                steps={[
                  { icon: <FiFileText size={16} />, label: 'Create Venture' },
                  {
                    icon: <FiMessageCircle size={16} />,
                    label: 'Discuss with AI',
                  },
                  {
                    icon: <FiPenTool size={16} />,
                    label: 'Structure Proposal',
                  },
                  { icon: <FiBriefcase size={16} />, label: 'Meet Investors' },
                ]}
              />
            </FeatureCard>

            <FeatureCard
              eyebrow="FOR INVESTORS"
              eyebrowTone="amber"
              title="Discover high-potential ventures and have structured discussions"
              description="Curated dealflow with semantic mapping and private rooms for due diligence."
            >
              <StepsRow
                tone="amber"
                steps={[
                  { icon: <FiSearch size={16} />, label: 'Explore Ventures' },
                  { icon: <FiBarChart2 size={16} />, label: 'Analyze' },
                  { icon: <FiMessageCircle size={16} />, label: 'Open Room' },
                  { icon: <FiAward size={16} />, label: 'Negotiate' },
                ]}
              />
            </FeatureCard>

            <FeatureCard
              eyebrow="FOR OPERATORS & PARTNERS"
              eyebrowTone="emerald"
              title="Find the right opportunities and become an essential part of great ventures"
              description="Showcase your operational expertise and join the ventures that match your skills."
            >
              <StepsRow
                tone="emerald"
                steps={[
                  { icon: <FiUserCheck size={16} />, label: 'Create Profile' },
                  { icon: <FiAward size={16} />, label: 'Show Expertise' },
                  { icon: <FiUsers size={16} />, label: 'Join Venture' },
                  { icon: <FiLink2 size={16} />, label: 'Build Partnerships' },
                ]}
              />
            </FeatureCard>
          </FeaturesGridStyled>
        </Container>
      </Section>

      {/* TWO WAYS */}
      <Section>
        <Container>
          <SectionHeadingStyled>
            <Heading as="h2" size="lg" align="center">
              Two ways to back ventures
            </Heading>
          </SectionHeadingStyled>
          <TwoWaysGridStyled>
            <TwoWaysCardStyled>
              <div>
                <TwoWaysIconStyled>
                  <FiTarget size={18} />
                </TwoWaysIconStyled>
                <Heading as="h3" size="md">
                  Seed Investments
                </Heading>
                <Text
                  size="sm"
                  tone="muted"
                  style={{ marginTop: 8, marginBottom: 16 }}
                >
                  Early-stage capital for founders raising their first
                  institutional round.
                </Text>
                <TwoWaysCheckListStyled>
                  <Checkmark>Funding goal &amp; terms</Checkmark>
                  <Checkmark>Roadmap &amp; milestones</Checkmark>
                  <Checkmark>Partnership needs</Checkmark>
                  <Checkmark>Growth strategy</Checkmark>
                </TwoWaysCheckListStyled>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <MetricBlock label="Funding Goal" value="$2.5M" />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                  }}
                >
                  <MetricBlock label="Stage" value="Seed" />
                  <MetricBlock label="Round" value="$2.5M" />
                </div>
              </div>
            </TwoWaysCardStyled>

            <TwoWaysCardStyled>
              <div>
                <TwoWaysIconStyled
                  style={{ background: '#D1FAE5', color: '#059669' }}
                >
                  <FiTrendingUp size={18} />
                </TwoWaysIconStyled>
                <Heading as="h3" size="md">
                  Portfolio Growth
                </Heading>
                <Text
                  size="sm"
                  tone="muted"
                  style={{ marginTop: 8, marginBottom: 16 }}
                >
                  Follow-on capital and operating support for portfolio
                  companies already shipping.
                </Text>
                <TwoWaysCheckListStyled>
                  <Checkmark>Real performance metrics</Checkmark>
                  <Checkmark>Users, revenue, traction</Checkmark>
                  <Checkmark>Technology showcase</Checkmark>
                  <Checkmark>Proof of execution</Checkmark>
                </TwoWaysCheckListStyled>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <MetricBlock
                  label="Monthly Revenue"
                  value="$128,450"
                  delta="+24%"
                />
                <MetricBlock label="Active Users" value="12,430" delta="+24%" />
              </div>
            </TwoWaysCardStyled>
          </TwoWaysGridStyled>
        </Container>
      </Section>

      {/* SEE THE FULL PICTURE */}
      <Section tone="surface">
        <Container>
          <PictureSectionStyled>
            <div>
              <Heading as="h2" size="lg">
                See the full picture of your venture
              </Heading>
              <Text
                size="md"
                tone="muted"
                style={{ marginTop: 16, marginBottom: 24 }}
              >
                Our semantic graph reveals hidden connections, opportunities and
                risks across your entire venture ecosystem — from market
                dynamics to operator fit.
              </Text>
              <Button variant="secondary">Explore Demo</Button>
            </div>
            <PictureFrameStyled>
              <PictureFrameInnerStyled>
                <img
                  src={dashboardMockup.src}
                  alt="Ventyra Capital venture dashboard"
                  loading="lazy"
                />
              </PictureFrameInnerStyled>
            </PictureFrameStyled>
          </PictureSectionStyled>
        </Container>
      </Section>

      {/* COMMUNITY */}
      <Section>
        <Container>
          <SectionHeadingStyled>
            <Heading as="h2" size="lg" align="center">
              A community of builders and investors
            </Heading>
          </SectionHeadingStyled>
          <CommunityGridStyled>
            <UserCard
              name="Alex Chen"
              role="Founder"
              avatarSrc={avatar1.src}
              description="AI & SaaS builder with 10+ years of experience scaling category-defining products."
              tags={['SaaS', 'AI', 'Product']}
              meta="3 ventures"
            />
            <UserCard
              name="Michael Tran"
              role="Investor"
              avatarSrc={avatar2.src}
              description="Focused on early-stage Southeast Asia ventures and AI-native fintech."
              tags={['Seed', 'AI', 'Fintech']}
              meta="18 investments"
            />
            <UserCard
              name="David Park"
              role="Technical Operator"
              avatarSrc={avatar3.src}
              description="Building scalable systems and leading senior engineering teams across portfolio."
              tags={['Backend', 'DevOps', 'AI']}
              meta="7 ventures"
            />
            <UserCard
              name="Linh Nguyen"
              role="Local Partner"
              avatarSrc={avatar4.src}
              description="Hospitality expert with deep local network across emerging APAC markets."
              tags={['Hospitality', 'GTM', 'Operations']}
              meta="12 partnerships"
            />
          </CommunityGridStyled>
          <BrowseAllStyled>
            <a href="#community">
              Browse all members <FiArrowRight size={14} />
            </a>
          </BrowseAllStyled>
        </Container>
      </Section>

      {/* TRUST ROW */}
      <Container>
        <div style={{ paddingBottom: 64 }}>
          <TrustRowStyled>
            {[
              {
                icon: <FiShield size={18} />,
                tone: 'primary' as const,
                title: 'Private by design',
                text: 'Your conversations and data are always confidential.',
              },
              {
                icon: <FiPenTool size={18} />,
                tone: 'amber' as const,
                title: 'Structured clarity',
                text: 'We help you reduce ambiguity and make better decisions.',
              },
              {
                icon: <FiCpu size={18} />,
                tone: 'emerald' as const,
                title: 'AI that understands',
                text: 'Our AI finds patterns humans might miss.',
              },
              {
                icon: <FiLink2 size={18} />,
                tone: 'rose' as const,
                title: 'Partnerships that last',
                text: 'We focus on aligned incentives and long-term value.',
              },
            ].map((item) => (
              <TrustItemStyled key={item.title}>
                <Icon size={18} tone={item.tone} background>
                  {item.icon}
                </Icon>
                <TrustTextStyled>
                  <strong>{item.title}</strong>
                  {item.text}
                </TrustTextStyled>
              </TrustItemStyled>
            ))}
          </TrustRowStyled>
        </div>
      </Container>
    </>
  )
}
