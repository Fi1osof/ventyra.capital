import avatar1 from '@/assets/avatar-1.jpg'
import avatar2 from '@/assets/avatar-2.jpg'
import avatar3 from '@/assets/avatar-3.jpg'
import avatar4 from '@/assets/avatar-4.jpg'

import type { DebateParticipant, GraphNode, DebateThread } from './types'

export const PARTICIPANTS: DebateParticipant[] = [
  {
    id: 'u1',
    name: 'Maya Okafor',
    role: 'Founder & CEO, Smart Hotel',
    avatarSrc: avatar2.src,
    isFounder: true,
  },
  {
    id: 'u2',
    name: 'Alex Chen',
    role: 'Founding Partner, Ventyra',
    avatarSrc: avatar1.src,
    isMe: true,
  },
  {
    id: 'u3',
    name: 'Priya Raman',
    role: 'Principal, Sequoia SEA',
    avatarSrc: avatar3.src,
  },
  {
    id: 'u4',
    name: 'Diego Alvarez',
    role: 'Angel, ex-Booking.com',
    avatarSrc: avatar4.src,
  },
]

export const NODES: GraphNode[] = [
  {
    id: 'n1',
    kind: 'claim',
    title: 'LTV per property exceeds $24K within 18 months',
    summary:
      'Bundled AI front-desk + revenue-management modules drive expansion revenue beyond the initial deployment.',
    confidence: 0.62,
    openObjections: 2,
    threadCount: 3,
  },
  {
    id: 'n2',
    kind: 'assumption',
    title: 'Independent hotels adopt SaaS within 6 months of pilot',
    summary:
      'Sales-cycle benchmark inherited from comparable boutique-hospitality SaaS players in APAC.',
    confidence: 0.45,
    openObjections: 3,
    threadCount: 4,
  },
  {
    id: 'n3',
    kind: 'metric',
    title: 'Net Revenue Retention — 138%',
    summary:
      'Trailing-12-month NRR computed on 27 paying properties; excludes 4 churned during COVID re-opening cycles.',
    confidence: 0.78,
    openObjections: 1,
    threadCount: 2,
  },
  {
    id: 'n4',
    kind: 'decision',
    title: 'Launch Vietnam GTM before Thailand',
    summary:
      'Distribution partnership with VinHotels accelerates the early-traction motion vs. fragmented Thai market.',
    confidence: 0.55,
    openObjections: 1,
    threadCount: 2,
  },
  {
    id: 'n5',
    kind: 'risk',
    title: 'Grants funding 38% of pipeline is non-recurring',
    summary:
      'Tourism-recovery grants underwrite a meaningful share of FY25 deal flow and expire in Q3 2026.',
    confidence: 0.32,
    openObjections: 2,
    threadCount: 2,
  },
]

export const THREADS: DebateThread[] = [
  {
    id: 't1',
    nodeId: 'n1',
    scope: 'public',
    participantIds: ['u1', 'u2', 'u3'],
    updatedAt: '2h ago',
    root: {
      id: 'a1',
      type: 'claim',
      authorId: 'u1',
      createdAt: '5d ago',
      status: 'contested',
      statement:
        'LTV per property will exceed $24K within 18 months as we layer revenue-management on top of front-desk automation.',
      evidence: [
        { label: 'Cohort model v3', source: '#fact-12' },
        { label: 'Pilot expansion data', source: '#fact-08' },
      ],
      children: [
        {
          id: 'a2',
          type: 'objection',
          authorId: 'u3',
          createdAt: '3d ago',
          statement:
            'Your cohort only spans 11 months; you are extrapolating expansion revenue from 6 properties. That is not enough to underwrite an $24K LTV.',
          children: [
            {
              id: 'a3',
              type: 'rebuttal',
              authorId: 'u1',
              createdAt: '2d ago',
              statement:
                'We extended the cohort to 14 months in October. Expansion-MRR cohort retention is 112% — confirming the trajectory, not negating it.',
              evidence: [
                { label: "Cohort dashboard Oct'25", source: '#fact-19' },
              ],
            },
            {
              id: 'a4',
              type: 'support',
              authorId: 'u2',
              createdAt: '2d ago',
              statement:
                'Comparable players (Cloudbeds, Mews) reached >$22K LTV at similar property counts — this is a defensible band.',
            },
          ],
        },
        {
          id: 'a5',
          type: 'question',
          authorId: 'u2',
          createdAt: '1d ago',
          statement:
            'How much of the LTV uplift is conditional on the upcoming Channel Manager release shipping on time?',
        },
      ],
    },
  },
  {
    id: 't2',
    nodeId: 'n1',
    scope: 'private',
    participantIds: ['u1', 'u2'],
    updatedAt: '6h ago',
    root: {
      id: 'b1',
      type: 'claim',
      authorId: 'u2',
      createdAt: '1d ago',
      statement:
        'Privately — I would like to underwrite this LTV at $19K, not $24K, for our IC memo. Can we agree on that band?',
      children: [
        {
          id: 'b2',
          type: 'rebuttal',
          authorId: 'u1',
          createdAt: '8h ago',
          status: 'open',
          statement:
            '$19K is too conservative — it ignores the Channel Manager attach. I can live with $21K if we mark Channel Manager as a gated milestone.',
        },
      ],
    },
  },
  {
    id: 't3',
    nodeId: 'n2',
    scope: 'public',
    participantIds: ['u1', 'u3', 'u4'],
    updatedAt: '1d ago',
    root: {
      id: 'c1',
      type: 'objection',
      authorId: 'u4',
      createdAt: '2d ago',
      statement:
        'Independent boutique hotels in SEA typically take 9–12 months to commit to any SaaS. A 6-month sales-cycle assumption is aspirational.',
      evidence: [{ label: 'STR APAC adoption report', source: '#fact-22' }],
      children: [
        {
          id: 'c2',
          type: 'rebuttal',
          authorId: 'u1',
          createdAt: '1d ago',
          statement:
            'Our wedge is the AI front-desk demo: 70% of pilots converted to paid in under 90 days. The 6-month figure is a blended average, not a sales-cycle floor.',
        },
      ],
    },
  },
]
