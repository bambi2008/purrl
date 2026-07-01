import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getProduct } from '../../../data/products'
import SiteNav from '../../SiteNav'
import AddToCart from '../../AddToCart'
import PdpGallery from './PdpGallery'

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  if (!product) return notFound()

  return (
    <>
      <div className="container"><SiteNav /></div>

      <div className="container">
        <div className="pdp">
          <PdpGallery images={product.images} name={product.name} />

          <div className="pdp-info">
            <p className="section-label">Purrl — {product.category}</p>
            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-price">${product.price}</p>
            <div className="pdp-stars">★★★★★ <span>(reviewed by 2,400+ cat people)</span></div>
            <p className="pdp-desc">{product.description}</p>

            <AddToCart id={product.id} name={product.name} price={product.price} image={product.image} block />

            <div className="pdp-details">
              <h4>Details</h4>
              <ul>
                {product.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>

            <div className="pdp-materials">
              <h4>Materials</h4>
              <p>{product.materials}</p>
            </div>

            <div className="pdp-ship">
              <p>Free shipping over $120 · 30-day returns · Ships in 3–5 days</p>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
      <PdpFooter />
    </>
  )
}

function RelatedProducts({ currentId }: { currentId: string }) {
  const others = products.filter(p => p.id !== currentId)
  return (
    <section className="featured-section" style={{ borderTop: '1px solid var(--border-light)', marginTop: 40 }}>
      <div className="container">
        <div className="featured-header">
          <p className="section-label">Complete the set</p>
          <h2>Worn together</h2>
        </div>
        <div className="product-grid">
          {others.map(p => (
            <Link href={`/product/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="product-card">
                <div className="img-wrap"><img src={p.image} alt={p.name} /></div>
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function PdpFooter() {
  return (
    <footer>
      <div className="container">
        <p className="copyright">&copy; {new Date().getFullYear()} Purrl</p>
      </div>
    </footer>
  )
}
