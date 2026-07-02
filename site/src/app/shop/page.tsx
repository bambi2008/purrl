import Link from 'next/link'
import { products, bundles } from '../../data/products'
import SiteNav from '../SiteNav'
import SiteFooter from '../SiteFooter'
import AddToCart from '../AddToCart'
import Reveal from '../Reveal'

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

      <Reveal><Reviews /></Reveal>
      <Reveal><StatsBar /></Reveal>

      <SiteFooter />
    </>
  )
}

function Reviews() {
  const reviews = [
    { text: '"I have been looking for a cat bag that does not look like a pet product. This is the first one I would actually carry into a coffee shop."', author: 'Sarah K.', city: 'Brooklyn, NY' },
    { text: '"No synthetic smell, no plastic hardware. My cat fell asleep in it on our first walk. The linen is so much softer than I expected."', author: 'James L.', city: 'Portland, OR' },
    { text: '"Finally a cat brand without leather. The collar broke away safely when it caught on a branch — safety first, still beautiful."', author: 'Maya R.', city: 'London, UK' },
  ]
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <div className="stars">★★★★★</div>
          <h2>Still thinking? 98% would recommend.</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="r-stars">★★★★★</div>
              <p className="r-text">{r.text}</p>
              <p className="r-author"><strong>{r.author}</strong> — {r.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { num: '2,400+', lbl: 'Cats outfitted' },
    { num: '4.9 / 5', lbl: 'Average rating' },
    { num: '98%', lbl: 'Would recommend' },
    { num: '100%', lbl: 'Natural materials' },
  ]
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar-inner">
          {stats.map((s, i) => (
            <div className="stat-block" key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
