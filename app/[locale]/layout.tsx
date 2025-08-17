import '../styles/globals.css';
import { getMessages, t } from '../lib/i18n';
import { buildCSP } from '../lib/csp';
export const runtime = 'nodejs';
export const dynamic = 'force-static';
export async function generateStaticParams(){ return [{ locale:'fr'},{locale:'en'},{locale:'ar'},{locale:'zh'},{locale:'ru'}] }
export const metadata = {
  title: 'SEYMR® — Art fréquentiel & design fonctionnel',
  description: 'Pièces d’exception en édition limitée. Fabrication éthique. Maîtrise totale.'
}
export default function RootLayout({ children, params }:{ children: React.ReactNode, params:{locale:string} }){
  const dict = getMessages(params.locale);
  const csp = buildCSP();
  return (
    <html lang={params.locale}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        {process.env.GSC_VERIFICATION ? <meta name="google-site-verification" content={process.env.GSC_VERIFICATION} /> : null}
        {process.env.NEXT_PUBLIC_GA4_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}></script>
            <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`}} />
          </>
        ) : null}
      </head>
      <body>
        <header>
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16}}>
            <div style={{fontWeight:700,letterSpacing:'1px'}}>SEYMR®</div>
            <nav>
              <a href={`/${params.locale}`}>{t(dict,'nav.home')}</a>
              <a href={`/${params.locale}/manifeste`}>{t(dict,'nav.manifesto')}</a>
              <a href={`/${params.locale}/art-frequentiel`}>{t(dict,'nav.freq')}</a>
              <a href={`/${params.locale}/mobilier`}>{t(dict,'nav.furniture')}</a>
              <a href={`/${params.locale}/oeuvres`}>{t(dict,'nav.works')}</a>
              <a className="tag" href={`/${params.locale}/salon-prive`}>{t(dict,'nav.private')}</a>
              <a href={`/${params.locale}/mentions-legales`}>{t(dict,'nav.legal')}</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
            <div className="muted">{t(dict,'footer.rights')}</div>
            <div className="muted">{t(dict,'footer.contact')}</div>
            <div className="muted">{t(dict,'footer.addr')}</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
