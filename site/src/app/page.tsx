import Link from 'next/link'
import Hero from './Hero'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'
import StoryScene from './StoryScene'
import Reveal from './Reveal'
import { products, bundles } from '../data/products'

export default function Home() {
  return (
    <>
      <div className="nav-float"><div className="container"><SiteNav /></div></div>
      <Hero />
      <TrustAnchor />
      <StoryScene image="/images/scene-2.png" align="left">
        <p className="scene-label">The material</p>
        <h2 className="scene-title">Linen you can<br />feel from across<br />the room.</h2>
        <p className="scene-text">European flax, woven soft. No synthetics, no plastic hardware, no leather. Just fibre that breathes — and biodegrades.</p>
      </StoryScene>
      <StoryScene image="/images/scene-3.png" align="right">
        <p className="scene-label">The comfort</p>
        <h2 className="scene-title">A place they<br />actually want<br />to be.</h2>
        <p className="scene-text">Soft-structured, breathable, and open at the top. Most cats settle in on the first walk.</p>
      </StoryScene>
      <ProductInterlude />
      <StoryScene image="/images/scene-4.png" align="left">
        <p className="scene-label">Worn together</p>
        <h2 className="scene-title">One palette.<br />One outing.</h2>
        <p className="scene-text">Tote, bandana, and collar share a single natural tone — designed to be worn as a set, not assembled by accident.</p>
      </StoryScene>
      <Reveal><BundleSection /></Reveal>
      <Reveal><Reviews /></Reveal>
      <Reveal><StatsBar /></Reveal>
      <SiteFooter />
    </>
  )
}

/* Hero 下方信任锚 —— 一行，留住刚到达的 Sophie */
function TrustAnchor() {
  return (
    <section className="trust-anchor">
      <div className="container">
        <p className="trust-line">
          <span className="trust-stars">★★★★★</span>
          <span className="trust-text">Loved by 2,400+ cat people</span>
          <span className="trust-div"></span>
          <span className="trust-text">100% natural materials</span>
        </p>
      </div>
    </section>
  )
}

function ProductInterlude() {
  return (
    <section className="interlude">
      <div className="container">
        <div className="featured-header">
          <p className="section-label">The Outing Set</p>
          <h2>Three pieces. One palette.</h2>
        </div>
        <div className="product-grid">
          {products.map((p) => (
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

/* 套装区 */
function BundleSection() {
  return (
    <section className="bundle-section">
      <div className="container">
        <div className="featured-header">
          <p className="section-label">Save with a set</p>
          <h2>Buy the outing, not the pieces.</h2>
          <p className="sub">Coordinated sets ship together — and cost less.</p>
        </div>
        <div className="bundle-grid">
          {bundles.map((b) => (
            <Link href="/shop" key={b.id} className="bundle-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bundle-img"><img src={b.image} alt={b.name} /></div>
              <div className="bundle-body">
                <h3>{b.name}</h3>
                <p className="bundle-desc">{b.description}</p>
                <p className="bundle-price">
                  <strong>${b.price}</strong>
                  <span className="was">${b.compareAt}</span>
                  <span className="save">Save ${b.compareAt - b.price}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 完整评论 —— 紧贴套装区，临门一脚 */
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
