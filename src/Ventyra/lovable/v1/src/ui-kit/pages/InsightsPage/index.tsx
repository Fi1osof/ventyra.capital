/* eslint-disable react/jsx-no-bind */
import React, { useState, useMemo } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Heading, Text, Eyebrow } from '../../components/Typography'
import { NewsletterInput } from '../../components/NewsletterInput'

import avatar1 from '@/assets/avatar-1.jpg'
import avatar2 from '@/assets/avatar-2.jpg'
import avatar3 from '@/assets/avatar-3.jpg'
import avatar4 from '@/assets/avatar-4.jpg'

import {
  PageHeroStyled,
  TopicFilterStyled,
  TopicChipStyled,
  FeaturedStyled,
  FeaturedCoverStyled,
  FeaturedBodyStyled,
  FeaturedMetaStyled,
  ArticlesGridStyled,
  ArticleCardStyled,
  ArticleCoverStyled,
  ArticleBodyStyled,
  ArticleMetaStyled,
  ArticleTitleStyled,
  ArticleExcerptStyled,
  ArticleAuthorStyled,
  NewsletterBoxStyled,
} from './styles'

type Topic =
  | 'All'
  | 'Thesis'
  | 'Portfolio'
  | 'Founders'
  | 'Markets'
  | 'Inside Ventyra'

type Article = {
  title: string
  excerpt: string
  topic: Exclude<Topic, 'All'>
  date: string
  readTime: string
  author: string
  avatar: string
  cover: string
}

const ARTICLES: Article[] = [
  {
    title: 'The agentic stack: where the durable margin will accrue',
    excerpt:
      'A field map of the agentic AI stack — and where we think the next decade of venture returns will land.',
    topic: 'Thesis',
    date: 'May 2026',
    readTime: '12 min read',
    author: 'Alex Chen',
    avatar: avatar1.src,
    cover: 'linear-gradient(135deg,#4F46E5,#2D2F8F)',
  },
  {
    title: 'Why we led Smart Hotel&apos;s seed round',
    excerpt:
      'Inside our diligence on Vietnam&apos;s most ambitious hospitality OS and what convinced us to lead.',
    topic: 'Portfolio',
    date: 'Apr 2026',
    readTime: '8 min read',
    author: 'Linh Nguyen',
    avatar: avatar4.src,
    cover: 'linear-gradient(135deg,#10B981,#047857)',
  },
  {
    title: 'Hiring your first ten engineers',
    excerpt:
      'Pattern-matched advice from 40 portfolio CEOs on how to build a senior team without burning your runway.',
    topic: 'Founders',
    date: 'Apr 2026',
    readTime: '6 min read',
    author: 'David Park',
    avatar: avatar3.src,
    cover: 'linear-gradient(135deg,#F59E0B,#B45309)',
  },
  {
    title: 'The fintech rebuild in Southeast Asia',
    excerpt:
      'Why the next generation of APAC fintech will look nothing like the last one — and what that means for builders.',
    topic: 'Markets',
    date: 'Mar 2026',
    readTime: '10 min read',
    author: 'Michael Tran',
    avatar: avatar2.src,
    cover: 'linear-gradient(135deg,#F43F5E,#9F1239)',
  },
  {
    title: 'From operator to investor: lessons from year one',
    excerpt:
      'What I got wrong about venture in my first twelve months, and what I&apos;d tell my past self.',
    topic: 'Inside Ventyra',
    date: 'Mar 2026',
    readTime: '7 min read',
    author: 'Alex Chen',
    avatar: avatar1.src,
    cover: 'linear-gradient(135deg,#8B5CF6,#5B21B6)',
  },
  {
    title: 'Pricing AI products in a deflationary market',
    excerpt:
      'Token costs are collapsing. Here&apos;s how leading AI-native companies are repricing without losing margin.',
    topic: 'Thesis',
    date: 'Feb 2026',
    readTime: '9 min read',
    author: 'David Park',
    avatar: avatar3.src,
    cover: 'linear-gradient(135deg,#0EA5E9,#075985)',
  },
  {
    title: 'What a great seed pitch looks like in 2026',
    excerpt:
      'After 400+ pitches this year, here&apos;s the shape of the ones that actually moved us to conviction.',
    topic: 'Founders',
    date: 'Feb 2026',
    readTime: '6 min read',
    author: 'Michael Tran',
    avatar: avatar2.src,
    cover: 'linear-gradient(135deg,#EC4899,#831843)',
  },
  {
    title: 'Industrial climate is having its software moment',
    excerpt:
      'Why we&apos;re leaning into grid intelligence, demand response and the operating layer of the energy transition.',
    topic: 'Markets',
    date: 'Jan 2026',
    readTime: '11 min read',
    author: 'Linh Nguyen',
    avatar: avatar4.src,
    cover: 'linear-gradient(135deg,#22C55E,#15803D)',
  },
]

const FEATURED = ARTICLES[0]
const REST = ARTICLES.slice(1)

const TOPICS: Topic[] = [
  'All',
  'Thesis',
  'Portfolio',
  'Founders',
  'Markets',
  'Inside Ventyra',
]

export const InsightsPage: React.FC = () => {
  const [topic, setTopic] = useState<Topic>('All')
  const filtered = useMemo(
    () => REST.filter((a) => topic === 'All' || a.topic === topic),
    [topic],
  )

  return (
    <>
      <Container>
        <PageHeroStyled>
          <Eyebrow>INSIGHTS</Eyebrow>
          <Heading as="h1" size="xl">
            Notes from the road
          </Heading>
          <Text size="md" tone="muted">
            Theses, portfolio deep-dives and founder playbooks. Written by the
            Ventyra team and the operators in our network.
          </Text>
        </PageHeroStyled>

        <TopicFilterStyled>
          {TOPICS.map((t) => (
            <TopicChipStyled
              key={t}
              $active={topic === t}
              onClick={() => setTopic(t)}
            >
              {t}
            </TopicChipStyled>
          ))}
        </TopicFilterStyled>

        <FeaturedStyled href="#">
          <FeaturedCoverStyled $bg={FEATURED.cover} />
          <FeaturedBodyStyled>
            <FeaturedMetaStyled>
              <span>Featured</span>
              <span>·</span>
              <span>{FEATURED.topic}</span>
              <span>·</span>
              <span>{FEATURED.date}</span>
            </FeaturedMetaStyled>
            <Heading as="h2" size="lg">
              {FEATURED.title}
            </Heading>
            <Text size="md" tone="muted">
              {FEATURED.excerpt}
            </Text>
            <ArticleAuthorStyled style={{ borderTop: 'none', paddingTop: 0 }}>
              <img src={FEATURED.avatar} alt={FEATURED.author} />
              <span>
                <strong style={{ color: 'var(--ft, #0E1230)' }}>
                  {FEATURED.author}
                </strong>{' '}
                · {FEATURED.readTime}
              </span>
            </ArticleAuthorStyled>
          </FeaturedBodyStyled>
        </FeaturedStyled>

        <ArticlesGridStyled>
          {filtered.map((a) => (
            <ArticleCardStyled key={a.title} href="#">
              <ArticleCoverStyled $bg={a.cover} />
              <ArticleBodyStyled>
                <ArticleMetaStyled>
                  <span>{a.topic}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </ArticleMetaStyled>
                <ArticleTitleStyled>{a.title}</ArticleTitleStyled>
                <ArticleExcerptStyled>{a.excerpt}</ArticleExcerptStyled>
                <ArticleAuthorStyled>
                  <img src={a.avatar} alt={a.author} />
                  <span>
                    {a.author} · {a.readTime}
                  </span>
                </ArticleAuthorStyled>
              </ArticleBodyStyled>
            </ArticleCardStyled>
          ))}
        </ArticlesGridStyled>
      </Container>

      <Section tone="surface">
        <Container>
          <NewsletterBoxStyled>
            <Eyebrow>THE QUARTERLY</Eyebrow>
            <Heading as="h2" size="lg" align="center">
              Four issues a year. Zero noise.
            </Heading>
            <Text size="md" tone="muted" align="center">
              Our quarterly note on theses, portfolio updates and what
              we&apos;re researching next.
            </Text>
            <div style={{ width: '100%', maxWidth: 420 }}>
              <NewsletterInput placeholder="you@company.com" />
            </div>
          </NewsletterBoxStyled>
        </Container>
      </Section>
    </>
  )
}
