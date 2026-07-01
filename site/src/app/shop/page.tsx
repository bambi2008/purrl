import Link from 'next/link'
import { products, bundles } from '../../data/products'
import SiteNav from '../SiteNav'
import SiteFooter from '../SiteFooter'
import AddToCart from '../AddToCart'

export default function ShopPage() {
  return (
    <>
      <div className="container"><SiteNav /></div>

      <section className="featured-section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="featured-header">
            <p className="section-label">Collection</p>
            <h2>The Outing Set</h2>
            <p className="sub">Free shipping over $120 · 30-day returns</p>
          </div>

          <div className="product-grid">
            {products.map(p => (
              <div key={p.id} className="product-card">
                <Link href={`/product/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="img-wrap"><img src={p.image} alt={p.name} /></div>
                  <h3>{p.name}</h3>
                  <p className="price">${p.price}</p>
                </Link>
                <AddToCart id={p.id} name={p.name} price={p.price} image={p.image} block />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bundle-section">
        <div className="container">
          <div className="featured-header">
            <p className="section-label">Save with a set</p>
            <h2>Buy the outing, not the pieces.</h2>
          </div>
          <div className="bundle-grid">
            {bundles.map(b => (
              <div key={b.id} className="bundle-card">
                <div className="bundle-img"><img src={b.image} alt={b.name} /></div>
                <div className="bundle-body">
                  <h3>{b.name}</h3>
                  <p className="bundle-desc">{b.description}</p>
                  <p className="bundle-price">
                    <strong>${b.price}</strong>
                    <span className="was">${b.compareAt}</span>
                    <span className="save">Save ${b.compareAt - b.price}</span>
                  </p>
                  <AddToCart id={b.id} name={b.name} price={b.price} image={b.image} label="Add set to bag" block />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
