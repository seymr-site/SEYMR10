import { NextResponse } from 'next/server';
// Stub: connect onchain attestation service (e.g., Ethereum Attestation Service)
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}));
  return NextResponse.json({ ok:true, note:'Attest stub — connect EAS to enable', input: body });
}
