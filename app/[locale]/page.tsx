import Image from 'next/image';
import { getMessages, t } from '../../lib/i18n';
export default function Page({ params }:{ params:{locale:string} }){
  const dict = getMessages(params.locale);
  return (
    <div className="grid">
      <section className="hero card">
        <div>
          <h1 className="h1">{t(dict,'hero.title')}</h1>
          <p className="lead">{t(dict,'hero.lead')}</p>
          <a className="btn" href={`/${params.locale}/oeuvres`}>{t(dict,'hero.cta')}</a>
        </div>
        <Image alt="SEYMR hero" src="/images/mun.jpg" width={800} height={600} />
      </section>
      <section className="grid" style={{gridTemplateColumns:'1fr 1fr 1fr'}}>
        <div className="card"><h3 className="h2">Éditions limitées</h3><p className="muted">Œuvres numérotées, certifiées, signées.</p></div>
        <div className="card"><h3 className="h2">Fabrication éthique</h3><p className="muted">Hêtre FSC, cuir Nappa, soie, velours.</p></div>
        <div className="card"><h3 className="h2">Expédition rapide</h3><p className="muted">95% des commandes expédiées sous 48h.</p></div>
      </section>
    </div>
  )
}
