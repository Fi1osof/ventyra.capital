/* eslint-disable react/jsx-no-bind */
import React from 'react'
import {
  FiArrowRight,
  FiMessageCircle,
  FiUserPlus,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiMail,
  FiBriefcase,
  FiCheck,
  FiTrendingUp,
  FiFileText,
  FiUsers,
  FiAward,
} from 'react-icons/fi'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { Badge } from '../../components/Badge'
import { Tag } from '../../components/Tag'
import { MetricBlock } from '../../components/MetricBlock'
import { UserCard } from '../../components/UserCard'
import { IconButton } from '../../components/IconButton'

import avatar1 from '@/assets/avatar-1.jpg'
import avatar2 from '@/assets/avatar-2.jpg'
import avatar3 from '@/assets/avatar-3.jpg'
import avatar4 from '@/assets/avatar-4.jpg'

import {
  BreadcrumbStyled,
  ProfileHeroStyled,
  CoverStyled,
  ProfileHeadStyled,
  AvatarLargeStyled,
  NameBlockStyled,
  NameStyled,
  VerifiedDotStyled,
  RoleStyled,
  MetaRowStyled,
  BadgeRowStyled,
  HeroActionsStyled,
  StatsRowStyled,
  TwoColStyled,
  SectionHeadingStyled,
  BioCardStyled,
  SidebarCardStyled,
  SidebarRowStyled,
  TagsWrapStyled,
  TimelineStyled,
  TimelineItemStyled,
  PortfolioGridStyled,
  PortfolioCardStyled,
  PortfolioHeadStyled,
  PortfolioLogoStyled,
  PortfolioBodyStyled,
  PortfolioMetaStyled,
  ActivityListStyled,
  ActivityItemStyled,
  ActivityIconStyled,
  ActivityBodyStyled,
  NetworkGridStyled,
  CtaPanelStyled,
  CtaButtonsStyled,
} from './styles'
import type { UserPageProps } from './types'

export const UserPage: React.FC<UserPageProps> = () => {
  return (
    <>
      <Container>
        <BreadcrumbStyled aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden>/</span>
          <a href="/#founders">Members</a>
          <span aria-hidden>/</span>
          <strong>Alex Chen</strong>
        </BreadcrumbStyled>
      </Container>

      <Container>
        <ProfileHeroStyled>
          <CoverStyled />
          <ProfileHeadStyled>
            <AvatarLargeStyled src={avatar1.src} alt="Alex Chen" />
            <NameBlockStyled>
              <NameStyled>
                Alex Chen
                <VerifiedDotStyled title="Verified Ventyra member">
                  <FiCheck size={12} />
                </VerifiedDotStyled>
              </NameStyled>
              <RoleStyled>Founding Partner · Ventyra Capital</RoleStyled>
              <MetaRowStyled>
                <span>
                  <FiMapPin size={13} /> Singapore
                </span>
                <span>
                  <FiBriefcase size={13} /> 12 years in venture
                </span>
                <span>
                  <FiCalendar size={13} /> Joined Mar 2023
                </span>
              </MetaRowStyled>
              <BadgeRowStyled>
                <Badge tone="primary">Investor</Badge>
                <Badge tone="emerald">Operator</Badge>
                <Badge tone="amber">Mentor</Badge>
                <Badge tone="neutral">AI · Vertical SaaS · APAC</Badge>
              </BadgeRowStyled>
            </NameBlockStyled>
            <HeroActionsStyled>
              <Button
                variant="primary"
                size="md"
                iconLeft={<FiMessageCircle size={14} />}
              >
                Message
              </Button>
              <Button
                variant="secondary"
                size="md"
                iconLeft={<FiUserPlus size={14} />}
              >
                Follow
              </Button>
              <IconButton
                ariaLabel="Twitter"
                onClick={() => window.open('#', '_blank')}
              >
                <FaTwitter size={14} />
              </IconButton>
              <IconButton
                ariaLabel="LinkedIn"
                onClick={() => window.open('#', '_blank')}
              >
                <FaLinkedinIn size={14} />
              </IconButton>
            </HeroActionsStyled>
          </ProfileHeadStyled>

          <StatsRowStyled>
            <MetricBlock
              label="Investments"
              value="38"
              delta="+6 YTD"
              deltaTone="positive"
            />
            <MetricBlock label="Companies advised" value="24" />
            <MetricBlock label="Years experience" value="12" />
            <MetricBlock
              label="Exits"
              value="5"
              delta="2 IPOs"
              deltaTone="positive"
            />
          </StatsRowStyled>
        </ProfileHeroStyled>
      </Container>

      <Section>
        <Container>
          <TwoColStyled>
            <div>
              <SectionHeadingStyled>
                <Eyebrow>ABOUT</Eyebrow>
                <Heading as="h2" size="lg">
                  Operator-turned-investor backing AI-native ventures
                </Heading>
              </SectionHeadingStyled>
              <BioCardStyled>
                <p>
                  Alex co-founded Ventyra Capital after a decade of building and
                  scaling vertical SaaS businesses across Southeast Asia. He led
                  product at a regional hospitality unicorn, shipped two
                  ML-driven platforms from zero to nine-figure revenue, and now
                  partners with founders at seed and Series A.
                </p>
                <p>
                  He focuses on AI-native operating systems for traditional
                  industries — hospitality, logistics, healthcare, and financial
                  infrastructure — where data flywheels and operator empathy
                  compound into category leadership.
                </p>
                <TagsWrapStyled style={{ marginTop: 6 }}>
                  <Tag>AI</Tag>
                  <Tag>Vertical SaaS</Tag>
                  <Tag>Product-led growth</Tag>
                  <Tag>GTM strategy</Tag>
                  <Tag>Hospitality</Tag>
                  <Tag>Logistics</Tag>
                  <Tag>Southeast Asia</Tag>
                  <Tag>Seed / Series A</Tag>
                </TagsWrapStyled>
              </BioCardStyled>
            </div>

            <SidebarCardStyled>
              <Heading as="h3" size="sm">
                Contact &amp; info
              </Heading>
              <SidebarRowStyled>
                <span>Email</span>
                <a href="mailto:alex@ventyra.capital">alex@ventyra.capital</a>
              </SidebarRowStyled>
              <SidebarRowStyled>
                <span>Website</span>
                <a href="#">ventyra.capital/alex</a>
              </SidebarRowStyled>
              <SidebarRowStyled>
                <span>Office hours</span>
                <span>Thursdays, 14:00–17:00 SGT</span>
              </SidebarRowStyled>
              <SidebarRowStyled>
                <span>Languages</span>
                <span>English · Mandarin · Vietnamese</span>
              </SidebarRowStyled>
              <SidebarRowStyled>
                <span>Focus stage</span>
                <span>Seed · Series A</span>
              </SidebarRowStyled>
              <SidebarRowStyled>
                <span>Ticket size</span>
                <span>$500K – $3M</span>
              </SidebarRowStyled>
              <Button
                variant="primary"
                size="md"
                fullWidth
                iconLeft={<FiMail size={14} />}
              >
                Request intro
              </Button>
            </SidebarCardStyled>
          </TwoColStyled>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeadingStyled>
            <Eyebrow tone="primary">PORTFOLIO</Eyebrow>
            <Heading as="h2" size="lg">
              Selected investments led by Alex
            </Heading>
            <Text size="md" tone="muted">
              A focused portfolio of AI-native ventures across hospitality,
              logistics and fintech.
            </Text>
          </SectionHeadingStyled>

          <PortfolioGridStyled>
            <PortfolioCardStyled href="/project">
              <PortfolioHeadStyled>
                <PortfolioLogoStyled>SH</PortfolioLogoStyled>
                <Badge tone="emerald">Active</Badge>
              </PortfolioHeadStyled>
              <PortfolioBodyStyled>
                <strong>Smart Hotel</strong>
                <span>
                  AI operating system for boutique hospitality across APAC.
                </span>
              </PortfolioBodyStyled>
              <PortfolioMetaStyled>
                <span>Seed · 2025</span>
                <strong>$2.5M</strong>
              </PortfolioMetaStyled>
            </PortfolioCardStyled>

            <PortfolioCardStyled href="#">
              <PortfolioHeadStyled>
                <PortfolioLogoStyled>NR</PortfolioLogoStyled>
                <Badge tone="emerald">Active</Badge>
              </PortfolioHeadStyled>
              <PortfolioBodyStyled>
                <strong>Northroute</strong>
                <span>
                  Cross-border logistics intelligence for emerging-market SMBs.
                </span>
              </PortfolioBodyStyled>
              <PortfolioMetaStyled>
                <span>Series A · 2024</span>
                <strong>$5M</strong>
              </PortfolioMetaStyled>
            </PortfolioCardStyled>

            <PortfolioCardStyled href="#">
              <PortfolioHeadStyled>
                <PortfolioLogoStyled>LM</PortfolioLogoStyled>
                <Badge tone="primary">Exit</Badge>
              </PortfolioHeadStyled>
              <PortfolioBodyStyled>
                <strong>Ledgermind</strong>
                <span>
                  AI accounting copilot. Acquired by a regional fintech in 2024.
                </span>
              </PortfolioBodyStyled>
              <PortfolioMetaStyled>
                <span>Seed · 2022</span>
                <strong>3.4x MOIC</strong>
              </PortfolioMetaStyled>
            </PortfolioCardStyled>

            <PortfolioCardStyled href="#">
              <PortfolioHeadStyled>
                <PortfolioLogoStyled>OS</PortfolioLogoStyled>
                <Badge tone="amber">Stealth</Badge>
              </PortfolioHeadStyled>
              <PortfolioBodyStyled>
                <strong>Orbital Studio</strong>
                <span>
                  AI-native creative workflow platform for product teams.
                </span>
              </PortfolioBodyStyled>
              <PortfolioMetaStyled>
                <span>Pre-seed · 2026</span>
                <strong>$1.2M</strong>
              </PortfolioMetaStyled>
            </PortfolioCardStyled>

            <PortfolioCardStyled href="#">
              <PortfolioLogoStyled>HW</PortfolioLogoStyled>
              <PortfolioBodyStyled>
                <strong>Helmwise</strong>
                <span>
                  Compliance automation for cross-border financial institutions.
                </span>
              </PortfolioBodyStyled>
              <PortfolioMetaStyled>
                <span>Seed · 2024</span>
                <strong>$1.8M</strong>
              </PortfolioMetaStyled>
            </PortfolioCardStyled>

            <PortfolioCardStyled href="#">
              <PortfolioLogoStyled>VC</PortfolioLogoStyled>
              <PortfolioBodyStyled>
                <strong>Verdant Clinic</strong>
                <span>
                  Patient operations OS for boutique healthcare networks.
                </span>
              </PortfolioBodyStyled>
              <PortfolioMetaStyled>
                <span>Seed · 2023</span>
                <strong>$2.1M</strong>
              </PortfolioMetaStyled>
            </PortfolioCardStyled>
          </PortfolioGridStyled>
        </Container>
      </Section>

      <Section>
        <Container>
          <TwoColStyled>
            <div>
              <SectionHeadingStyled>
                <Eyebrow tone="emerald">EXPERIENCE</Eyebrow>
                <Heading as="h2" size="lg">
                  A decade of building, twelve years of investing
                </Heading>
                <Text size="md" tone="muted">
                  Operator roles, founding chapters, and the path to launching
                  Ventyra Capital.
                </Text>
              </SectionHeadingStyled>
              <TimelineStyled>
                <TimelineItemStyled>
                  <time>2023 — Now</time>
                  <strong>Founding Partner, Ventyra Capital</strong>
                  <p>
                    Co-founded an AI-native venture platform investing across
                    APAC. Leading seed and Series A bets in vertical SaaS.
                  </p>
                </TimelineItemStyled>
                <TimelineItemStyled>
                  <time>2019 — 2023</time>
                  <strong>Principal, Northwind Ventures</strong>
                  <p>
                    Led 22 investments across vertical SaaS and AI
                    infrastructure. Two exits, one IPO.
                  </p>
                </TimelineItemStyled>
                <TimelineItemStyled>
                  <time>2016 — 2019</time>
                  <strong>VP Product, regional hospitality unicorn</strong>
                  <p>
                    Shipped the pricing and demand intelligence platform that
                    scaled the company to 14 markets.
                  </p>
                </TimelineItemStyled>
                <TimelineItemStyled>
                  <time>2013 — 2016</time>
                  <strong>Co-founder, Polymath Labs</strong>
                  <p>
                    Built a B2B analytics platform from zero to Series A,
                    acquired by a global SaaS leader.
                  </p>
                </TimelineItemStyled>
              </TimelineStyled>
            </div>

            <div>
              <SectionHeadingStyled>
                <Eyebrow tone="amber">RECENT ACTIVITY</Eyebrow>
                <Heading as="h2" size="lg">
                  What Alex is doing this quarter
                </Heading>
              </SectionHeadingStyled>
              <ActivityListStyled>
                <ActivityItemStyled>
                  <ActivityIconStyled $tone="emerald">
                    <FiTrendingUp size={16} />
                  </ActivityIconStyled>
                  <ActivityBodyStyled>
                    <strong>Led seed round in Smart Hotel</strong>
                    <span>
                      $2.5M check, joined alongside Northwind Ventures and
                      Mekong Operators Fund.
                    </span>
                    <time>2 weeks ago</time>
                  </ActivityBodyStyled>
                </ActivityItemStyled>
                <ActivityItemStyled>
                  <ActivityIconStyled $tone="primary">
                    <FiFileText size={16} />
                  </ActivityIconStyled>
                  <ActivityBodyStyled>
                    <strong>
                      Published essay: "Operator capital in AI-native SaaS"
                    </strong>
                    <span>
                      A field guide on how operator-led funds compound trust
                      with founders.
                    </span>
                    <time>1 month ago</time>
                  </ActivityBodyStyled>
                </ActivityItemStyled>
                <ActivityItemStyled>
                  <ActivityIconStyled $tone="amber">
                    <FiUsers size={16} />
                  </ActivityIconStyled>
                  <ActivityBodyStyled>
                    <strong>Hosted Founders Roundtable in Bangkok</strong>
                    <span>
                      32 operators across hospitality, logistics and fintech
                      joined.
                    </span>
                    <time>6 weeks ago</time>
                  </ActivityBodyStyled>
                </ActivityItemStyled>
                <ActivityItemStyled>
                  <ActivityIconStyled $tone="rose">
                    <FiAward size={16} />
                  </ActivityIconStyled>
                  <ActivityBodyStyled>
                    <strong>Speaking at SuperReturn Asia 2026</strong>
                    <span>
                      Panel on AI-native vertical platforms and emerging-market
                      dynamics.
                    </span>
                    <time>Upcoming</time>
                  </ActivityBodyStyled>
                </ActivityItemStyled>
              </ActivityListStyled>
            </div>
          </TwoColStyled>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeadingStyled>
            <Eyebrow tone="primary">NETWORK</Eyebrow>
            <Heading as="h2" size="lg">
              Operators and co-investors in Alex's circle
            </Heading>
            <Text size="md" tone="muted">
              People Alex regularly co-invests, builds and ships with.
            </Text>
          </SectionHeadingStyled>

          <NetworkGridStyled>
            <UserCard
              name="Linh Nguyen"
              role="COO, Smart Hotel"
              avatarSrc={avatar2.src}
              description="Scaled boutique hotel brands across Vietnam, Thailand and Indonesia for 15 years."
              tags={['Operations', 'Hospitality']}
              meta="Co-founder"
              profileHref="#"
            />
            <UserCard
              name="David Park"
              role="CTO, Smart Hotel"
              avatarSrc={avatar3.src}
              description="Ex-staff engineer leading ML infrastructure at a category-defining AI platform."
              tags={['ML', 'Infra']}
              meta="Co-founder"
              profileHref="#"
            />
            <UserCard
              name="Maya Rahman"
              role="Partner, Northwind Ventures"
              avatarSrc={avatar4.src}
              description="Investor in B2B SaaS and fintech across emerging markets. Frequent Ventyra co-investor."
              tags={['Co-investor', 'Fintech']}
              meta="6 shared deals"
              profileHref="#"
            />
          </NetworkGridStyled>
        </Container>
      </Section>

      <Container>
        <div style={{ paddingBottom: 64, paddingTop: 16 }}>
          <CtaPanelStyled>
            <h2>Want to work with Alex?</h2>
            <p>
              Founders can request a warm intro and pitch a round. Investors and
              operators can join the next office hours or co-invest on upcoming
              Ventyra-led deals.
            </p>
            <CtaButtonsStyled>
              <Button
                variant="primary"
                size="lg"
                iconLeft={<FiMessageCircle size={16} />}
              >
                Send a message
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconRight={<FiArrowRight size={14} />}
              >
                Book office hours
              </Button>
            </CtaButtonsStyled>
          </CtaPanelStyled>
        </div>
      </Container>

      <span style={{ display: 'none' }}>
        <FiGlobe />
      </span>
    </>
  )
}
