# Handy Mechanic v3

## Overview
Handy Mechanic v3 is an enterprise-grade AI automotive diagnostic platform. It leverages RAG (Retrieval-Augmented Generation) with Pinecone and OpenAI/Anthropic to provide detailed vehicle pre-purchase inspections, audio analysis for mechanical failures, and negotiation leverage reports.

## Architecture
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI + Tremor
- **Database**: Supabase (PostgreSQL)
- **Vector DB**: Pinecone (for RAG)
- **Payments**: Stripe
- **AI**: OpenAI (Embeddings), Anthropic (Analysis), Custom Audio Processing
- **Caching/Rate Limiting**: Upstash Redis

## Project Structure
- `src/app`: Next.js App Router pages and API routes.
- `src/components`: React UI components (Dashboard, Diagnosis, Marketplace).
- `src/lib`: Core logic (AI, Auth, Database, Stripe, PDF).
- `src/types`: TypeScript definitions.
- `supabase`: Database migrations and functions.
- `docs`: Architecture and RAG system documentation.

## Getting Started
1. Install dependencies: `npm install`
2. Set up environment variables (Supabase, Stripe, OpenAI, Pinecone).
3. Run development server: `npm run dev`
