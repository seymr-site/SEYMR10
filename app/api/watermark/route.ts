import sharp from 'sharp';
import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export async function POST(req: Request){
  const form = await req.formData();
  const file = form.get('file') as File | null;
  if(!file) return NextResponse.json({error:'file required'}, {status:400});
  const buf = Buffer.from(await file.arrayBuffer());
  // tiny watermark placeholder
  const wm = await sharp(Buffer.from([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,1,8,2,0,0,0,144,119,83,222,0,0,0,10,73,68,65,84,120,156,99,96,0,0,0,2,0,1,226,33,181,10,0,0,0,0,73,69,78,68,174,66,96,130])) // 1x1 png
    .resize(200,200,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toBuffer();
  const base = sharp(buf).resize(2000).composite([{ input: wm, gravity: 'southeast', blend: 'over', opacity: 0.2 }]).webp({quality:90});
  const out = await base.toBuffer();
  return new NextResponse(out, { headers: { 'Content-Type':'image/webp' } });
}
