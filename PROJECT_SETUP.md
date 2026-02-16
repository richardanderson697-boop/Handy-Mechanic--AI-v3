# Handy Mechanic AI - Project Setup

This is the complete Next.js project structure for Handy Mechanic AI.

## Project Structure

```
handy-mechanic-ai/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── lib/                   # Backend logic & utilities
│   ├── utils.ts           # Utility functions (cn helper)
│   ├── auth.ts            # Authentication
│   ├── database.ts        # Database connections
│   ├── rag-engine.ts      # RAG AI engine
│   ├── stripe.ts          # Payment processing
│   ├── rate-limiter.ts    # Rate limiting
│   ├── vehicle.ts         # Vehicle data
│   ├── vin-decoder.ts     # VIN decoding
│   ├── scorer.ts          # Mechanic scoring
│   ├── negotiator.ts      # Price negotiation
│   ├── prescreening.ts    # Mechanic prescreening
│   ├── insurance.ts       # Insurance integration
│   ├── affiliates.ts      # Affiliate tracking
│   ├── referrals.ts       # Referral system
│   ├── pdf-generator.ts   # PDF reports
│   ├── audio-analyzer.ts  # Audio diagnostics
│   ├── diagnosis-validator.ts
│   ├── negotiation-generator.ts
│   ├── market-data.ts     # Market pricing data
│   └── admin.ts           # Admin functions
├── components/            # React components (to be added)
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── middleware.ts          # Next.js middleware
├── .env.example           # Environment variables template
└── .gitignore            # Git ignore rules
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `DATABASE_URL` - PostgreSQL connection string
- `ANTHROPIC_API_KEY` - Anthropic Claude API key
- `PINECONE_API_KEY` - Pinecone vector database key
- `PINECONE_INDEX_NAME` - Pinecone index name
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `UPSTASH_REDIS_REST_URL` - Upstash Redis URL
- `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis token
- `JWT_SECRET` - Secret for JWT tokens

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

```bash
npm run build
npm start
```

## Next Steps

1. **Database Setup**: Configure Supabase database tables
2. **API Routes**: Add API endpoints in `app/api/`
3. **UI Components**: Build user interface components
4. **Pages**: Create diagnosis, estimate, and mechanic finder pages
5. **Authentication**: Implement user login/signup
6. **Testing**: Add tests for critical functionality

## Key Features

- AI-powered auto diagnostics using RAG
- VIN decoding and vehicle data
- Real-time mechanic scoring and matching
- Price negotiation and estimates
- Insurance integration
- Affiliate and referral tracking
- PDF report generation
- Audio-based diagnostics
- Stripe payment processing
- Rate limiting and security

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **AI**: Anthropic Claude + Pinecone RAG
- **Payments**: Stripe
- **Caching**: Upstash Redis
- **Authentication**: JWT + bcrypt

## Documentation

See the following files for more details:
- `README.md` - Project overview
- `RAG_IMPLEMENTATION.md` - RAG system details
- `PRODUCTION_RAG_SYSTEM.md` - Production RAG architecture
- `ENTERPRISE_RAG_ARCH.md` - Enterprise RAG patterns
- `master-system-prompt.md` - AI system prompts
