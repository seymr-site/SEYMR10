import { NextResponse } from 'next/server';
export async function POST(req: Request){
  const data = await req.json().catch(()=>({}));
  const provider = process.env.CRM_PROVIDER || 'pipedrive';
  try{
    if (provider === 'hubspot'){
      const resp = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method:'POST',
        headers: {'Authorization':`Bearer ${process.env.HUBSPOT_API_TOKEN}`,'Content-Type':'application/json'},
        body: JSON.stringify({ properties: { email: data.email, firstname: data.firstName, lastname: data.lastName }})
      }); if(!resp.ok) throw new Error('HubSpot failed');
    } else {
      const resp = await fetch('https://api.pipedrive.com/v1/persons?api_token='+process.env.PIPEDRIVE_API_TOKEN, {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ name: data.name || 'Lead SEYMR', email: data.email })
      }); if(!resp.ok) throw new Error('Pipedrive failed');
    }
    return NextResponse.json({ ok:true });
  }catch(e:any){
    return NextResponse.json({ ok:false, error:e.message }, { status:500 });
  }
}
