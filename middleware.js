// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Alapértelmezett nyelv
  const defaultLocale = 'en';

  // Ellenőrizzük, hogy az URL tartalmazza-e a nyelvet (pl. /en vagy /hu)
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');

  // Ha az URL nem tartalmazza a nyelvet, átirányítjuk az alapértelmezett nyelvvel
  if (!pathname.startsWith(`/${defaultLocale}`)) {
    url.pathname = `/${defaultLocale}${pathnameWithoutLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next).*)'], // Minden URL-t figyelembe veszünk, ami nem a _next mappa
};
