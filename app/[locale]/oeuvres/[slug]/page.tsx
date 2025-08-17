import { PRODUCTS } from '../../../../data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
export default function Page({ params }:{ params:{ locale:string, slug:string } }){
  const p = PRODUCTS.find(x => x.slug === params.slug);
  if(!p) return notFound();
  const jsonLd = {
    "@context":"https://schema.org",
    "@type":["Product","CreativeWork"],
    "name": p.title,
    "image": p.images.map(i=> (process.env.NEXT_PUBLIC_SITE_URL||'https://seymr.art') + i),
    "description": p.summary,
    "brand": "SEYMR",
    "sku": p.sku,
    "offers": {
      "@type":"Offer",
      "priceCurrency":"EUR",
      "price": p.price,
      "availability":"https://schema.org/InStock",
      "url": (process.env.NEXT_PUBLIC_SITE_URL||'https://seymr.art') + `/${params.locale}/oeuvres/${p.slug}`
    }
  };
  return (
    <div className="grid">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <h1 className="h1">{p.title}</h1>
      <div className="grid" style={{gridTemplateColumns:'1.1fr .9fr'}}>
        <div className="card"><Image src={p.images[0]} alt={p.title} width={1200} height={900}/></div>
        <div className="card">
          <div className="tag">{p.edition}</div>
          <p className="lead" style={{marginTop:12}}>{p.summary}</p>
          <ul style={{marginTop:12}}>
            {Object.entries(p.specs).map(([k,v])=> <li key={k}><span className="muted">{k}:</span> {String(v)}</li>)}
          </ul>
          <div style={{display:'flex',gap:12,marginTop:18}}>
            <form action="/api/checkout" method="post">
              <input type="hidden" name="sku" value={p.sku}/>
              <button className="btn">Acheter (Stripe)</button>
            </form>
            <a className="btn" href={process.env.WISE_CHECKOUT_URL||'#'}>Wise</a>
            <a className="btn" href={process.env.PAYPAL_CHECKOUT_URL||'#'}>PayPal</a>
          </div>
        </div>
      </div>
    </div>
  )
}
