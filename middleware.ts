// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { globalRateLimiter } from './lib/security/rate-limiter';

export async function middleware(request: NextRequest) {
  // Only protect the /api/diagnose route
  if (request.nextUrl.pathname.startsWith('/api/diagnose')) {
    const ip = request.ip ?? "127.0.0.1";
    const { success } = await globalRateLimiter.limit(ip);

    if (!success) {
      return new NextResponse("Too many requests. Slow down, turbo.", { status: 429 });
    }

    // Add logic here to verify Supabase Auth Token
    // and check user.credits > request_cost
  }
  
  return NextResponse.next();
}
