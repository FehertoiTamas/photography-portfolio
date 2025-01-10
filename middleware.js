// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Ha a URL nem tartalmazza a nyelvet, akkor az alapértelmezett nyelvet használjuk
  if (!pathname.startsWith('/en') && !pathname.startsWith('/hu')) {
    url.pathname = `/en${pathname}`; // Alapértelmezett nyelv: 'en'
    return NextResponse.redirect(url); // Átirányítjuk a megfelelő nyelvre
  }

  // Ha a URL tartalmazza a nyelvet, akkor beállítjuk a nyelvet
  const language = pathname.split('/')[1]; // /en vagy /hu
  if (language && ['en', 'hu'].includes(language)) {
    // Nyelv váltás a Next.js locale-ra
    return NextResponse.next(); // Folytatjuk a kérést
  }

  return NextResponse.next(); // Ha minden rendben, folytatjuk a kérést
}
