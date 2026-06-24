const CONFIG = {

  LANDING_HEADER_BUTTON_1_TITLE: 'CHABOT.run',
  LANDING_HEADER_BUTTON_1_URL: 'https://chabot.run',

  LANDING_HEADER_BUTTON_2_TITLE: 'LinkedIn',
  LANDING_HEADER_BUTTON_2_URL: 'https://www.linkedin.com/in/pinyo-limopasmanee/',

  // Hero
  LANDING_HERO_TITLE_1: 'Pinyo Limopasmanee',
  LANDING_HERO_P_1: 'Senior IT Project Manager & Product Owner · FinTech · AI Workflow Architect. 21 years delivering mission-critical banking platforms across ASEAN — now building AI-powered products solo.',
  LANDING_HERO_BUTTON_1_TEXT: 'View CHABOT.run',
  LANDING_HERO_BUTTON_1_LINK: 'https://chabot.run',
  LANDING_HERO_BUTTON_2_TEXT: 'Connect on LinkedIn',
  LANDING_HERO_BUTTON_2_LINK: 'https://www.linkedin.com/in/pinyo-limopasmanee/',
  LANDING_HERO_VIDEO_IMAGE: '/images/hero-pinyo.png',
  LANDING_HERO_VIDEO_TIPS: '',

  // Features — the three products
  LANDING_FEATURES_HEADER_1: 'What I build',
  LANDING_FEATURES_HEADER_1_P: 'From 21 years of enterprise FinTech delivery to shipping AI products solo — here is what I am building right now.',
  LANDING_FEATURES_HEADER_2: 'AI-augmented, solo-built',
  LANDING_FEATURES_HEADER_2_P: 'Each product below was designed, built, and shipped by one person using an agentic AI workflow (Claude + Gemini).',
  LANDING_FEATURES_CARD_1_TITLE: 'CHABOT.run — Lead Intelligence',
  LANDING_FEATURES_CARD_1_P: 'A live business site with an AI chatbot that silently profiles customers and briefs the sales team in real time. React 19 + Gemini 2.5 Flash + Cloudflare.',
  LANDING_FEATURES_CARD_2_TITLE: 'KickStory — AI Football Academy',
  LANDING_FEATURES_CARD_2_P: 'A LINE LIFF app using on-device AI pose detection to gamify youth football training. Applying for DEPA Startup Fund 2026.',
  LANDING_FEATURES_CARD_3_TITLE: 'Knight of Round Table',
  LANDING_FEATURES_CARD_3_P: 'A multi-persona AI system that assembles a virtual C-suite (Claude + Gemini) so one person can operate like a full executive team.',

  // Feature blocks — expertise pillars
  LANDING_FEATURES_BLOCK_HEADER: 'Expertise',
  LANDING_FEATURES_BLOCK_P: '21 years spanning enterprise FinTech delivery and modern AI product development.',
  LANDING_FEATURES_BLOCK_1_TITLE: 'FinTech & Banking Systems',
  LANDING_FEATURES_BLOCK_1_P: 'Supply Chain Finance (ESCF), E-Invoice and B2B payment platforms for ASEAN&apos;s top banks.',
  LANDING_FEATURES_BLOCK_2_TITLE: 'Product & Project Leadership',
  LANDING_FEATURES_BLOCK_2_P: '21 yrs as IT PM / Product Owner — BRD/FSD, Agile & Waterfall, stakeholder and vendor management.',
  LANDING_FEATURES_BLOCK_3_TITLE: 'Agentic AI Workflows',
  LANDING_FEATURES_BLOCK_3_P: 'Multi-persona orchestration with Claude + Gemini; prompt engineering and system design.',
  LANDING_FEATURES_BLOCK_4_TITLE: 'Modern Build Stack',
  LANDING_FEATURES_BLOCK_4_P: 'LINE LIFF, Supabase, MediaPipe, React, Cloudflare — no-backend, ship-fast tooling.',
  LANDING_FEATURES_BLOCK_5_TITLE: 'Regulatory & Compliance',
  LANDING_FEATURES_BLOCK_5_P: 'Banking-grade delivery under PDPA and tight financial-services compliance.',
  LANDING_FEATURES_BLOCK_6_TITLE: 'Solo-Founder Mindset',
  LANDING_FEATURES_BLOCK_6_P: 'One person operating like a full team — strategy, build, and go-to-market.',

  // Kept (used by LayoutSlug redirect + newsletter gating)
  LANDING_POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false,
  LANDING_POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || '',
  LANDING_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false
}
export default CONFIG
