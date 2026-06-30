import Link from 'next/link'
import Hero from './Hero'

export default function Home() {
  return (
    <>
      <div className="container"><TopNav /></div>
      <div className="container"><Hero /></div>
      <TrustStrip />
      <CollectionShow />
      <Testimonials />
      <Values />
      <Footer />
    </>
  )
}

function TopNav() {
  return (
    <nav>
      <Link href="/" className="logo">Purrl<span>.</span></Link>
      <ul className="nav-links">
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  )
}

function TrustStrip() {
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid rgba(45,42,40,0.06)', textAlign: 'center' }}>
      <div className="container">
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C4A882', marginBottom: 20 }}>
          Pure natural materials
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', fontSize: '0.8125rem', opacity: 0.45 }}>
          <span>Flax Linen</span>
          <span>Organic Cotton</span>
          <span>Bamboo Handles</span>
          <span>Brass Hardware</span>
        </div>
      </div>
    </section>
  )
}

function CollectionShow() {
  const items = [
    { name: 'The Purrl Tote', price: 128, desc: 'Linen tote with bamboo handles. Soft, breathable, endlessly elegant.' },
    { name: 'Linen Bandana', price: 28, desc: 'Pure linen. Three natural shades to match or contrast your cat.' },
    { name: 'Cotton Collar', price: 35, desc: 'Organic cotton webbing with brushed metal buckle. Breakaway-safe.' },
  ]
  return (
    <section style={{ padding: '60px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="section-label">The Outing Set</p>
          <h2 style={{ marginBottom: 12 }}>Three pieces. One palette.</h2>
          <p style={{ fontSize: '0.9375rem', opacity: 0.5, maxWidth: 440, margin: '0 auto' }}>
            A tote, a bandana, a collar — designed to be worn together.
          </p>
        </div>
        <div className="product-grid">
          {items.map((p) => (
            <Link href="/shop" key={p.name} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="product-card">
                <div className="product-image">[ {p.name} ]</div>
                <h3>{p.name}</h3>
                <p className="desc">{p.desc}</p>
                <p className="price">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link href="/shop" className="btn btn-primary">Shop the full collection</Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { text: '"I have been looking for a cat bag that does not look like a pet product. Purrl tote is the first one I would actually carry into a coffee shop."', author: 'Sarah K., Brooklyn' },
    { text: '"The linen is so much lighter than I expected. My cat actually fell asleep in it on our first walk. No synthetic smell, no plastic hardware."', author: 'James L., Portland' },
    { text: '"I appreciate that someone finally made a cat brand without leather. The collar broke away properly when it caught on a branch. Safety first, still beautiful."', author: 'Maya R., London' },
  ]
  return (
    <section style={{ padding: '60px 0 80px', background: '#EDE8E0' }}>
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>From our customers</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 32 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ padding: '32px 28px', background: '#F5F0EB' }}>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20, opacity: 0.85 }}>{r.text}</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.4, letterSpacing: '0.02em' }}>— {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  const cols = [
    { h: 'No leather. Ever.', p: 'We do not use animal products. Every Purrl piece is 100% vegan and fully biodegradable.' },
    { h: 'Designed by an architect.', p: 'Every proportion is deliberate. Form follows function, and function serves beauty.' },
    { h: 'Worn together.', p: 'Your tote, bandana, and collar share a single palette. One look. One outing.' },
    { h: 'Built to last.', p: 'Reinforced stitching, washable fabrics, hardware that will not rust. Designed for years of walks.' },
  ]
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {cols.map((c, i) => (
            <div key={i}>
              <h4 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '0.875rem', fontWeight: 500, marginBottom: 8 }}>{c.h}</h4>
              <p style={{ fontSize: '0.875rem', opacity: 0.45, lineHeight: 1.6 }}>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">Purrl<span>.</span></Link>
            <p className="tagline">Every cat is a Purrl. Natural materials for the life you share.</p>
          </div>
          <div className="footer-col">
            <h5>Shop</h5>
            <ul>
              <li><Link href="/shop">Tote</Link></li>
              <li><Link href="/shop">Bandana</Link></li>
              <li><Link href="/shop">Collar</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>About</h5>
            <ul>
              <li><Link href="/about">Philosophy</Link></li>
              <li><Link href="/about">Materials</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:hello@purrl.com">hello@purrl.com</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Purrl</p>
      </div>
    </footer>
  )
}
