import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '../../../data/products';
export default function Page({ params }:{params:{locale:string}}){
  return (
    <div className="grid">
      <h1 className="h1">Œuvres</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))'}}>
        {PRODUCTS.map(p=> (
          <Link href={`/${params.locale}/oeuvres/`+p.slug} key={p.slug} className="card">
            <Image src={p.images[0]} alt={p.title} width={640} height={480} />
            <h3 className="h2" style={{marginTop:12}}>{p.title}</h3>
            <div className="muted">{p.edition}</div>
            <div style={{marginTop:8}}>€ {p.price.toLocaleString('fr-FR')}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
