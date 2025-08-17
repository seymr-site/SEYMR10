import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion:'2024-06-20'}) : null as any;
const skuToPrice = (sku:string) => {
  const map:Record<string,string|undefined> = {
    'MUN-001': process.env.STRIPE_PRICE_ID_MUN,
    'COS-001': process.env.STRIPE_PRICE_ID_COSMOSIS,
    'SIS-001': process.env.STRIPE_PRICE_ID_SISIT,
    'ECL-001': process.env.STRIPE_PRICE_ID_ECLIPSE,
    'KAP-001': process.env.STRIPE_PRICE_ID_KA,
  };
  return map[sku||''];
}
export async function POST(req: Request){
  const form = await req.formData();
  const sku = String(form.get('sku')||'');
  const price = skuToPrice(sku);
  if(!stripe || !price) return NextResponse.json({error:'Stripe not configured'}, {status:400});
  const session = await stripe.checkout.sessions.create({
    mode:'payment',
    line_items:[{ price, quantity:1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/fr/oeuvres/${sku.toLowerCase().split('-')[0]}?status=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/fr/oeuvres/${sku.toLowerCase().split('-')[0]}?status=cancel`
  });
  return NextResponse.json({ url: session.url });
}
