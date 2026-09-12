import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If a user hits the root domain, instantly redirect them to the onboarding flow
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/register', request.url))
  }
}

// Only run this middleware on the root landing page
export const config = {
  matcher: '/',
}
