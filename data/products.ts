export type Product = {
  slug: string;
  sku: string;
  title: string;
  price: number;
  currency: 'EUR';
  edition: string;
  images: string[];
  summary: string;
  specs: Record<string,string|number>;
  localeMeta?: Record<string, { title:string; summary:string }>;
};
export const PRODUCTS: Product[] = [
  {
    slug: 'fauteuil-mun', sku: 'MUN-001', title: 'FAUTEUIL MUN', price: 15000, currency: 'EUR',
    edition: 'Édition 1/22 — Œuvre fondatrice', images: ['/images/mun.jpg'],
    summary: 'MUN transpose une abstraction picturale en architecture habitée. Velours haute couture, hêtre FSC, 18h d’assemblage.',
    specs: { dimensions: '63×74×49 cm', poids: '7 kg', materiaux: 'Hêtre FSC, velours, mousse 45kg/m³', atelier: 'Londres' }
  },
  {
    slug: 'cosmosis', sku: 'COS-001', title: 'COSMOSIS', price: 7900, currency: 'EUR',
    edition: '22 exemplaires — Planète domestique', images: ['/images/cosmosis.jpg'],
    summary: 'Sphère en suédine Vision 250g, impression 1440 dpi, garnissage viscoélastique, Ø70cm.',
    specs: { diametre: '70 cm', housse: 'amovible', uv: 'résistant UV', garantie: '15 ans' }
  },
  {
    slug: 'sisit', sku: 'SIS-001', title: 'SISIT', price: 6500, currency: 'EUR',
    edition: 'Édition 1/22 — L’invisible prend forme', images: ['/images/sisit.jpg'],
    summary: 'Structure aluminium alvéolaire, mousse 35kg/m³, 3.5 kg, 120 kg charge.',
    specs: { dimensions: '38×38×40 cm', masse: '3.5 kg', charge: '120 kg' }
  },
  {
    slug: 'eclipse', sku: 'ECL-001', title: 'ECLIPSE', price: 3800, currency: 'EUR',
    edition: 'Manifeste portatif', images: ['/images/eclipse.jpg'],
    summary: 'Porte-documents en cuir Nappa pleine fleur, 320 opérations manuelles, 38×26×2 cm.',
    specs: { format: '38×26×2 cm', poids: '890 g', cuir: 'Nappa pleine fleur', fermeture: 'magnétique' }
  },
  {
    slug: 'ka-presence', sku: 'KAP-001', title: 'KA PRESENCE', price: 950, currency: 'EUR',
    edition: 'Art nomade — Diffusion urbaine', images: ['/images/kapresence.jpg'],
    summary: 'Casquette en satin de soie pure, ajustement 57–60 cm, coutures invisibles.',
    specs: { tailles: '57–60 cm', matiere: 'satin de soie', usage: 'urbain' }
  }
];
