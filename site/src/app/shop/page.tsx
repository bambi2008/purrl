import type { Metadata } from 'next'
import { products } from '../../data/products'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shop — Purrl',
}

export default function ShopPage() {
  return (
    <>
      <div className="container">
        <div className="page-nav">
          <Link href="/" className="logo">Purrl<span>.</span></Link>
          <ul className="nav-links">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>

      <section className="products" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="products-header">
            <p className="section-label">Collection</p>
            <h2>The Outing Set</h2>
          </div>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  [ {product.name} ]
                </div>
                <h3>{product.name}</h3>
                <p className="desc">{product.description}</p>
                <p className="price">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 0 40px', borderTop: '1px solid rgba(45,42,40,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60 }}>
            <div>
              <Link href="/" className="logo">Purrl<span>.</span></Link>
              <p style={{ fontSize: '0.8125rem', opacity: 0.4, maxWidth: 260, lineHeight: 1.6, marginTop: 12 }}>
                Every cat is a Purrl.
              </p>
            </div>
            <div>
              <h5 style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4A882', marginBottom: 20 }}>About</h5>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: 12 }}><Link href="/about" style={{ textDecoration: 'none', color: '#2D2A28', fontSize: '0.8125rem', opacity: 0.5 }}>Philosophy</Link></li>
              </ul>
            </div>
            <div>
              <h5 style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4A882', marginBottom: 20 }}>Connect</h5>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: 12 }}><a href="mailto:hello@purrl.com" style={{ textDecoration: 'none', color: '#2D2A28', fontSize: '0.8125rem', opacity: 0.5 }}>hello@purrl.com</a></li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(45,42,40,0.06)', fontSize: '0.75rem', opacity: 0.3, textAlign: 'center' }}>
            © {new Date().getFullYear()} Purrl
          </p>
        </div>
      </footer>
    </>
  )
}
