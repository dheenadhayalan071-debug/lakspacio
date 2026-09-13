import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Look for our custom authorization cookie
  const isAuthorized = request.cookies.has('lakspacio_auth');

  // Do not block API routes, static files, or the register page itself
  if (
    path.startsWith('/api') || 
    path.startsWith('/_next') || 
    path.startsWith('/register') ||
    path.includes('.') // Allows images/favicons to load
  ) {
    return NextResponse.next();
  }

  // If they are not authorized, force them to the registration screen
  if (!isAuthorized) {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  // Otherwise, let them through to the homepage or their requested tab
  return NextResponse.next();
}
