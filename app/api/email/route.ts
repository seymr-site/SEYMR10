import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export async function POST(req: Request){
  const data = await req.json().catch(()=>({}));
  const subject = data.subject || 'SEYMR — Message';
  const text = data.text || 'Message vide';
  const to = process.env.EMAIL_TO || 'contact@seymr.art';
  const from = process.env.EMAIL_FROM || 'SEYMR <contact@seymr.art>';
  const provider = process.env.EMAIL_PROVIDER || 'sendgrid';
  try {
    if (provider === 'resend'){
      const resp = await fetch('https://api.resend.com/emails', {
        method:'POST',
        headers:{ 'Authorization':`Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type':'application/json' },
        body: JSON.stringify({ from, to, subject, text })
      });
      if(!resp.ok) throw new Error('Resend failed');
    } else {
      const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method:'POST',
        headers:{ 'Authorization':`Bearer ${process.env.SENDGRID_API_KEY}`, 'Content-Type':'application/json' },
        body: JSON.stringify({ personalizations:[{to:[{email:to}]}], from:{email:from}, subject, content:[{type:'text/plain', value:text}]})
      });
      if(!resp.ok) throw new Error('SendGrid failed');
    }
    return NextResponse.json({ ok:true });
  } catch(e:any){
    return NextResponse.json({ ok:false, error:e.message }, { status:500 });
  }
}
