import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" style={{ paddingBottom: 40 }}>
      <div className="hero-text">
        <p className="section-label">Purrl — The Outing Collection</p>
        <h1>Beautiful cat carriers and accessories.<br />Made from pure natural materials.</h1>
        <p>Purrl makes coordinated outing sets — a tote, a bandana, a collar — crafted entirely from flax linen, organic cotton, and bamboo. No leather. No plastic. No compromise.</p>
        <div style={{ marginBottom: 48 }}>
          <Link href="/shop" className="btn btn-primary">Shop the collection</Link>
          <Link href="/about" className="btn btn-secondary">Learn more</Link>
        </div>

        <div style={{ borderTop: '1px solid rgba(45,42,40,0.08)', paddingTop: 32 }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4A882', marginBottom: 16 }}>What our customers say</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', opacity: 0.75 }}>
              &ldquo;I have been looking for a cat bag that does not look like a pet product. Purrl tote is the first one I would actually carry into a coffee shop.&rdquo;
              <span style={{ display: 'block', fontSize: '0.75rem', fontStyle: 'normal', opacity: 0.4, marginTop: 4 }}>— Sarah K., Brooklyn</span>
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', opacity: 0.75 }}>
              &ldquo;No synthetic smell, no plastic hardware. My cat actually fell asleep in it on our first walk.&rdquo;
              <span style={{ display: 'block', fontSize: '0.75rem', fontStyle: 'normal', opacity: 0.4, marginTop: 4 }}>— James L., Portland</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        [ Purrl Tote — product image ]
      </div>
    </section>
  )
}
