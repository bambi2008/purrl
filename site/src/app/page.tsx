import Link from 'next/link'
import Hero from './Hero'

export default function Home() {
  return (
    <>
      <div className="container"><TopNav /></div>
      <div className="container"><Hero /></div>
      <CollectionShow />
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

function CollectionShow() {
  const items = [
    { name: 'The Purrl Tote', price: 128, desc: 'Linen body, bamboo handles. Unfussy proportions, reinforced stitching.' },
    { name: 'Linen Bandana', price: 28, desc: 'Pure flax triangle. Three shades that complement any coat.' },
    { name: 'Cotton Collar', price: 35, desc: 'Organic webbing. Brushed brass buckle. Breakaway-safe.' },
  ]
  return (
    <section style={{ padding: '60px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="section-label">The Outing Set</p>
          <h2 style={{ marginBottom: 12 }}>Three things. One silhouette.</h2>
          <p style={{ fontSize: '0.9375rem', opacity: 0.5, maxWidth: 440, margin: '0 auto' }}>
            A tote, a bandana, a collar — designed to work together, not just sit together.
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

function Values() {
  const cols = [
    { h: 'No leather. Ever.', p: 'Every Purrl piece is 100% vegan and fully biodegradable.' },
    { h: 'Designed by an architect.', p: 'Proportion over ornament. Nothing cute. Nothing excessive.' },
    { h: 'Worn together.', p: 'Your tote, bandana, and collar share one palette. One look.' },
    { h: 'Built to outlast.', p: 'Reinforced stitching, washable fabrics, brass hardware that patinas.' },
  ]
  return (
    <section style={{ padding: '60px 0 80px', background: '#EDE8E0' }}>
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
            <p className="tagline">Every cat is a Purrl.</p>
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
