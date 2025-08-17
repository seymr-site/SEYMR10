# SEYMR® — V12.1 Drop‑In (Next.js)

**Prêt pour GitHub → Vercel.** i18n (FR/EN/AR/ZH/RU), SEO, sitemap, GA4/GSC, JSON‑LD, e‑mails (SendGrid/Resend), paiements (Stripe + Wise/PayPal), filigranage (Sharp), salon privé (JWT), stubs NFT & CRM.

## Démarrage
```bash
cp .env.example .env.local
npm i
npm run dev
```

## Déploiement
- Importez le repo sur **Vercel**
- Renseignez **les variables d’environnement** (mêmes clés que `.env.example`)
- Config domaine → `NEXT_PUBLIC_SITE_URL`
- Build génère `sitemap.xml` et `robots.txt`

## Contenu
- Pages dans `/app/[locale]/…`
- Œuvres : `data/products.ts`
- Textes i18n : `/i18n/*.json`
- API : `/app/api/*`
- Sécurité : CSP + ACL JWT salon privé

## À brancher (optionnel)
- Stripe Price IDs
- Pipedrive/HubSpot token
- thirdweb / EAS clés on‑chain
- Resend/SendGrid API key
