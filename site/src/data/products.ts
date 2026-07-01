export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: string
  image: string
  images: string[]
  details: string[]
  materials: string
}

export const products: Product[] = [
  {
    id: 'purrl-tote',
    name: 'The Purrl Tote',
    price: 128,
    description: 'A soft-structured linen carrier with bamboo ring handles. Breathable, unfussy, endlessly elegant — designed to be carried into a coffee shop, not hidden away.',
    category: 'bag',
    image: '/images/tote.png',
    images: ['/images/tote.png', '/images/hero-1.png', '/images/hero-2.png'],
    details: [
      'Soft-structured linen body with organic cotton lining',
      'Bamboo ring handles, sanded smooth',
      'Interior safety clip for harness attachment',
      'Holds cats up to 12 lb / 5.5 kg',
      'Machine washable, cold, hang dry',
    ],
    materials: '100% European flax linen exterior, organic cotton lining, bamboo handles, brass hardware. No leather. No plastic.',
  },
  {
    id: 'linen-bandana',
    name: 'Linen Bandana',
    price: 28,
    description: 'A pure flax triangle that ties softly at the neck. Three natural shades to match or contrast your cat.',
    category: 'bandana',
    image: '/images/tote.png',
    images: ['/images/tote.png'],
    details: [
      'Pure European flax linen',
      'Adjustable tie closure',
      'One size fits most cats',
      'Three natural shades',
      'Hand wash, hang dry',
    ],
    materials: '100% European flax linen. Undyed and low-impact natural dyes only.',
  },
  {
    id: 'cotton-collar',
    name: 'Organic Cotton Collar',
    price: 35,
    description: 'Organic cotton webbing with a brushed brass buckle and breakaway safety clasp. No plastic anywhere.',
    category: 'collar',
    image: '/images/tote.png',
    images: ['/images/tote.png'],
    details: [
      'GOTS-direction organic cotton webbing',
      'Brushed brass buckle',
      'Breakaway safety clasp',
      'Adjustable 8–12 in / 20–30 cm',
      'Wipe clean',
    ],
    materials: 'Organic cotton webbing, solid brass hardware. No plastic. No nickel.',
  },
]

export const bundles = [
  {
    id: 'bundle-tote-bandana',
    name: 'Tote + Bandana',
    price: 145,
    compareAt: 156,
    description: 'The essential pair — carrier and matching bandana.',
    image: '/images/hero-1.png',
    includes: ['purrl-tote', 'linen-bandana'],
  },
  {
    id: 'bundle-full',
    name: 'The Full Outing Set',
    price: 175,
    compareAt: 191,
    description: 'Tote, bandana, and collar in one palette. One look, one outing.',
    image: '/images/hero-2.png',
    includes: ['purrl-tote', 'linen-bandana', 'cotton-collar'],
  },
]

export function getProduct(id: string) {
  return products.find(p => p.id === id)
}
