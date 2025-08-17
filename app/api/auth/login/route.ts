import { NextResponse } from 'next/server';
import { sign } from '../../../../lib/jwt';
export async function POST(req: Request){
  const form = await req.formData();
  const code = String(form.get('code')||'');
  if (code && process.env.SALON_INVITE_CODE && code.trim() === process.env.SALON_INVITE_CODE.trim()){
    const token = sign({ scope:'salon' }, 60*60*8);
    const res = NextResponse.redirect(new URL('/fr/salon-prive/espace', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
    res.cookies.set('seymr_jwt', token, { httpOnly:true, sameSite:'lax', secure:true, path:'/' });
    return res;
  }
  return NextResponse.redirect(new URL('/fr/salon-prive?err=code', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
}
