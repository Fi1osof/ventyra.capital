import {
  FaTag,
  FaQuoteLeft,
  FaFlagCheckered,
  FaTriangleExclamation,
  FaUsers,
  FaFireFlameCurved,
  FaArrowsLeftRight,
  FaLightbulb,
  FaGears,
  FaStar,
  FaUserTie,
  FaGlobe,
  FaClock,
  FaSackDollar,
  FaTags,
  FaScaleBalanced,
  FaBullhorn,
  FaChartLine,
  FaCircleCheck,
  FaChartSimple,
  FaCommentDots,
  FaShieldHalved,
  FaCircleQuestion,
  FaLink,
  FaUserAstronaut,
  FaPeopleGroup,
  FaHandHoldingDollar,
  FaWallet,
  FaBullseye,
  FaFingerprint,
  FaPuzzlePiece,
  FaChartPie,
  FaStore,
  FaShareNodes,
  FaFlaskVial,
  FaSkullCrossbones,
  FaUserGroup,
  FaMoneyBillTrendUp,
} from 'react-icons/fa6'

import type { CollectedState, PropertySchema, SectionSchema } from './types'

export const PROJECT_SECTIONS: SectionSchema[] = [
  { id: 'identity', label: 'Identity', icon: FaFingerprint },
  { id: 'problem', label: 'Problem', icon: FaTriangleExclamation },
  { id: 'solution', label: 'Solution', icon: FaPuzzlePiece },
  { id: 'market', label: 'Audience & Market', icon: FaChartPie },
  { id: 'businessModel', label: 'Business Model', icon: FaStore },
  { id: 'distribution', label: 'Distribution', icon: FaShareNodes },
  { id: 'validation', label: 'Validation & Evidence', icon: FaFlaskVial },
  { id: 'risks', label: 'Risks & Unknowns', icon: FaSkullCrossbones },
  { id: 'team', label: 'Team', icon: FaUserGroup },
  { id: 'investment', label: 'Investment & Goals', icon: FaMoneyBillTrendUp },
]

export const PROJECT_PROPERTIES: PropertySchema[] = [
  // 1. Identity
  {
    id: 'name',
    section: 'identity',
    label: 'Project title',
    required: true,
    icon: FaTag,
    question: "What's a short working name for the project?",
    exampleAnswer: 'AI Copilot for Restaurant Procurement',
  },
  {
    id: 'oneLiner',
    section: 'identity',
    label: 'One-line description',
    required: true,
    icon: FaQuoteLeft,
    question: 'Explain the project in one sentence — what, for whom, why.',
    exampleAnswer:
      'We help small restaurants cut procurement losses with AI-driven analytics.',
  },
  {
    id: 'stage',
    section: 'identity',
    label: 'Current stage',
    required: true,
    icon: FaFlagCheckered,
    question:
      'What stage is the project at? (idea / prototype / MVP / revenue / scaling)',
    exampleAnswer: 'MVP with 3 paying pilots.',
  },

  // 2. Problem
  {
    id: 'problemStatement',
    section: 'problem',
    label: 'Problem statement',
    required: true,
    icon: FaTriangleExclamation,
    question:
      "What's going badly today, in concrete terms, without your solution?",
    exampleAnswer:
      'Small restaurants over-order produce and lose margin on waste.',
  },
  {
    id: 'whoHasProblem',
    section: 'problem',
    label: 'Who has this problem',
    required: true,
    icon: FaUsers,
    question: 'Who exactly experiences this problem?',
    exampleAnswer: 'Independent restaurants with 1–5 locations.',
  },
  {
    id: 'painSeverity',
    section: 'problem',
    label: 'Pain severity',
    required: false,
    icon: FaFireFlameCurved,
    question:
      'How painful is this for the user — financially, operationally, emotionally?',
    exampleAnswer: 'Some lose up to 15% of monthly margin to waste.',
  },
  {
    id: 'existingAlternatives',
    section: 'problem',
    label: 'Existing alternatives',
    required: true,
    icon: FaArrowsLeftRight,
    question: 'How are people coping with this problem right now?',
    exampleAnswer: 'Excel, WhatsApp orders, and manual stock checks.',
  },

  // 3. Solution
  {
    id: 'solutionDescription',
    section: 'solution',
    label: 'Solution description',
    required: true,
    icon: FaLightbulb,
    question: 'What does your system actually do for the user?',
    exampleAnswer:
      'AI analyses purchase history and forecasts daily demand per SKU.',
  },
  {
    id: 'coreMechanism',
    section: 'solution',
    label: 'Core mechanism',
    required: false,
    icon: FaGears,
    question:
      "Why does the solution actually work — what's the underlying mechanism?",
    exampleAnswer:
      'We combine seasonality models with waste history per restaurant.',
  },
  {
    id: 'uniqueAdvantage',
    section: 'solution',
    label: 'Unique advantage',
    required: false,
    icon: FaStar,
    question: "What's unusual about your approach vs existing options?",
    exampleAnswer:
      'We train on local regional restaurant data, not generic retail.',
  },

  // 4. Market
  {
    id: 'idealCustomer',
    section: 'market',
    label: 'Ideal customer',
    required: true,
    icon: FaUserTie,
    question: 'Who is your ideal paying customer?',
    exampleAnswer: 'Owners of independent restaurants doing $1–10M/year.',
  },
  {
    id: 'marketSize',
    section: 'market',
    label: 'Market size',
    required: false,
    icon: FaGlobe,
    question: 'Roughly how many customers like this exist?',
    exampleAnswer: '200k+ independent restaurants in the US alone.',
  },
  {
    id: 'whyNow',
    section: 'market',
    label: 'Why now',
    required: false,
    icon: FaClock,
    question: 'Why is this particularly the right moment for this idea?',
    exampleAnswer:
      'Food inflation has pushed restaurants to actively hunt for cost cuts.',
  },

  // 5. Business Model
  {
    id: 'monetization',
    section: 'businessModel',
    label: 'Monetization',
    required: true,
    icon: FaSackDollar,
    question: 'How will the project make money?',
    exampleAnswer: 'Subscription, $299/month per location.',
  },
  {
    id: 'pricingLogic',
    section: 'businessModel',
    label: 'Pricing logic',
    required: false,
    icon: FaTags,
    question:
      "Why is the price set where it is — what's the value to the customer?",
    exampleAnswer:
      'A restaurant typically saves $2–5k/month, paying $299 is a no-brainer.',
  },
  {
    id: 'costStructure',
    section: 'businessModel',
    label: 'Cost structure',
    required: false,
    icon: FaScaleBalanced,
    question: 'What are the main cost drivers of the project?',
    exampleAnswer: 'AI inference and POS integration maintenance.',
  },

  // 6. Distribution
  {
    id: 'customerAcquisition',
    section: 'distribution',
    label: 'Customer acquisition',
    required: true,
    icon: FaBullhorn,
    question: 'How will you actually reach your first paying customers?',
    exampleAnswer:
      'Partnerships with food distributors who already serve our ICP.',
  },
  {
    id: 'growthStrategy',
    section: 'distribution',
    label: 'Growth strategy',
    required: false,
    icon: FaChartLine,
    question: 'What will let you grow faster over time?',
    exampleAnswer:
      'Restaurant-to-restaurant referrals and data network effects.',
  },

  // 7. Validation
  {
    id: 'existingProof',
    section: 'validation',
    label: 'Existing proof',
    required: true,
    icon: FaCircleCheck,
    question: 'What signals do you already have that the idea works?',
    exampleAnswer: '3 restaurants using the system daily for 4+ months.',
  },
  {
    id: 'metrics',
    section: 'validation',
    label: 'Metrics',
    required: false,
    icon: FaChartSimple,
    question: 'Any measurable outcomes so far?',
    exampleAnswer: 'Average 11% reduction in food waste across pilots.',
  },
  {
    id: 'userFeedback',
    section: 'validation',
    label: 'User feedback',
    required: false,
    icon: FaCommentDots,
    question: 'What do users actually say about the product?',
    exampleAnswer:
      "Owners say it's the first time they understand their real losses.",
  },

  // 8. Risks
  {
    id: 'mainRisks',
    section: 'risks',
    label: 'Main risks',
    required: true,
    icon: FaShieldHalved,
    question: 'What could realistically kill this project?',
    exampleAnswer: 'Restaurants may resist changing legacy procurement habits.',
  },
  {
    id: 'biggestUnknown',
    section: 'risks',
    label: 'Biggest unknown',
    required: false,
    icon: FaCircleQuestion,
    question: 'What do you not yet know that you wish you did?',
    exampleAnswer: 'Whether the model generalises outside our home market.',
  },
  {
    id: 'dependencies',
    section: 'risks',
    label: 'Dependencies',
    required: false,
    icon: FaLink,
    question: 'What does the success of the project critically depend on?',
    exampleAnswer: 'Stable APIs from the top 3 POS providers.',
  },

  // 9. Team
  {
    id: 'founderBackground',
    section: 'team',
    label: 'Founder background',
    required: true,
    icon: FaUserAstronaut,
    question: 'Why are you the right person to solve this problem?',
    exampleAnswer: 'I ran an 8-restaurant group for 8 years before this.',
  },
  {
    id: 'teamComposition',
    section: 'team',
    label: 'Team composition',
    required: false,
    icon: FaPeopleGroup,
    question: 'Who else is on the team and what do they bring?',
    exampleAnswer: 'An ex-Uber AI engineer and a former restaurant-chain COO.',
  },

  // 10. Investment
  {
    id: 'whatIsNeeded',
    section: 'investment',
    label: 'What is needed',
    required: true,
    icon: FaHandHoldingDollar,
    question: 'What do you need right now to move forward?',
    exampleAnswer: '$150k pre-seed to harden the product and hire 1 sales rep.',
  },
  {
    id: 'useOfFunds',
    section: 'investment',
    label: 'Use of funds',
    required: false,
    icon: FaWallet,
    question: 'What exactly will the money buy?',
    exampleAnswer: '60% engineering, 30% sales, 10% integrations.',
  },
  {
    id: 'desiredOutcome',
    section: 'investment',
    label: 'Desired outcome',
    required: false,
    icon: FaBullseye,
    question: 'What does success look like in 3 years?',
    exampleAnswer: '5,000 restaurants on subscription, $20M ARR.',
  },
]

/** Empty preview — all properties unknown, score 0, gray. */
export const EMPTY_COLLECTED: CollectedState = {}

/** Fully-filled preview — every property has a value and a signal score in [-1, 1]. */
export const FILLED_COLLECTED: CollectedState = {
  name: { value: 'ProcureIQ', score: 0.4 },
  oneLiner: {
    value:
      'AI copilot that cuts food-procurement losses for independent restaurants.',
    score: 0.85,
  },
  stage: { value: 'MVP with 3 paying pilots', score: 0.5 },

  problemStatement: {
    value:
      'Independent restaurants over-order produce and bleed 8–15% of margin on waste.',
    score: 0.9,
  },
  whoHasProblem: {
    value: 'Independent restaurants with 1–5 locations.',
    score: 0.7,
  },
  painSeverity: {
    value: 'Top-3 P&L line for most owners — they feel it monthly.',
    score: 0.8,
  },
  existingAlternatives: {
    value: 'Excel sheets, WhatsApp orders, gut feeling. No real software.',
    score: 0.6,
  },

  solutionDescription: {
    value:
      'Daily SKU-level demand forecast, auto-generated purchase orders, waste tracking.',
    score: 0.75,
  },
  coreMechanism: {
    value: 'Seasonality models combined with per-restaurant waste history.',
    score: 0.3,
  },
  uniqueAdvantage: {
    value:
      "Local regional restaurant data — generic retail models don't fit kitchens.",
    score: 0.55,
  },

  idealCustomer: {
    value: 'Owners of independent restaurants doing $1–10M/year.',
    score: 0.6,
  },
  marketSize: { value: '200k+ independent restaurants in the US.', score: 0.4 },
  whyNow: {
    value: 'Post-inflation, owners are actively hunting cost cuts.',
    score: 0.7,
  },

  monetization: { value: '$299/month per location subscription.', score: 0.5 },
  pricingLogic: {
    value: 'Typical pilot saves $2–5k/month → 10x ROI on the subscription.',
    score: 0.7,
  },
  costStructure: {
    value:
      'AI inference and POS integration maintenance dominate variable cost.',
    score: -0.2,
  },

  customerAcquisition: {
    value:
      'Partnerships with two regional food distributors covering 4k restaurants.',
    score: 0.6,
  },
  growthStrategy: {
    value:
      'Restaurant-to-restaurant referrals; data network effects per cuisine type.',
    score: 0.35,
  },

  existingProof: {
    value: '3 restaurants live 4+ months, all renewed after pilot.',
    score: 0.8,
  },
  metrics: {
    value: 'Avg. 11% reduction in food waste; 92% weekly active.',
    score: 0.9,
  },
  userFeedback: {
    value: '“First time I actually see where money leaks.” — pilot owner.',
    score: 0.6,
  },

  mainRisks: {
    value: 'Long sales cycles; restaurants resist changing procurement habits.',
    score: -0.7,
  },
  biggestUnknown: {
    value: 'Whether the model generalises outside our home metro.',
    score: -0.3,
  },
  dependencies: {
    value:
      'Stable APIs from the top 3 POS providers — one of them is closing access.',
    score: -0.8,
  },

  founderBackground: {
    value: 'Ran an 8-restaurant group for 8 years; deep ICP empathy.',
    score: 0.85,
  },
  teamComposition: {
    value: 'Ex-Uber AI engineer + former restaurant-chain COO.',
    score: 0.6,
  },

  whatIsNeeded: {
    value: '$150k pre-seed for product hardening and 1 sales hire.',
    score: 0.4,
  },
  useOfFunds: {
    value: '60% engineering, 30% sales, 10% integrations.',
    score: 0.3,
  },
  desiredOutcome: {
    value: '5,000 restaurants on subscription, ~$20M ARR by year 3.',
    score: 0.2,
  },
}

/** Required-first ordering for the linear-fallback interview flow. */
export const INTERVIEW_ORDER: PropertySchema[] = [
  ...PROJECT_PROPERTIES.filter((p) => p.required),
  ...PROJECT_PROPERTIES.filter((p) => !p.required),
]
