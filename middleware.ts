import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/jwt';
const PUBLIC_FILE = /\.(.*)$/;
const locales = ['fr','en','ar','zh','ru'];
export function middleware(req: NextRequest){
  const { pathname } = req.nextUrl;
  // i18n root redirect
  if (pathname === '/') {
    const locale = req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'fr';
    const final = locales.includes(locale) ? locale : 'fr';
    return NextResponse.redirect(new URL(`/${final}`, req.url));
  }
  // static/public skip
  if (PUBLIC_FILE.test(pathname)) return;
  // protect salon prive espace
  if (pathname.match(/^\/(fr|en|ar|zh|ru)\/salon-prive\/espace/)){
    const token = req.cookies.get('seymr_jwt')?.value;
    if (!token || !verifyToken(token)) {
      const url = req.nextUrl.clone();
      url.pathname = pathname.replace(/\/salon-prive\/espace.*/,'/salon-prive');
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next|api|favicon.ico|images).*)'] }
