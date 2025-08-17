import { NextResponse } from 'next/server';
// Stub: connect your web3 provider (e.g., thirdweb) and mint NFT certificate
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}));
  return NextResponse.json({ ok:true, note:'Mint stub — connect thirdweb & contract to enable', input: body });
}
