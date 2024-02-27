import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const middleware = (req: NextRequest) => {
  const token = req.cookies.get('token');
  if (req.nextUrl.pathname.startsWith('/discover') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (
    (req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/forgot-password') ||
      req.nextUrl.pathname.startsWith('/reset')) &&
    token
  ) {
    return NextResponse.redirect(new URL('/discover', req.url));
  }
  return NextResponse.next();
};
export default middleware;
