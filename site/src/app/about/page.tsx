import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Purrl',
}

export default function AboutPage() {
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

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="section-label">About</p>
          <h1 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 32 }}>Every cat is a Purrl.</h1>
          
          <p style={{ opacity: 0.7, marginBottom: 24, fontSize: '1.125rem', lineHeight: 1.7 }}>
            Purrl is a design studio for cats and the people who love them. We make one thing: coordinated outing sets — a tote, a bandana, a collar — crafted entirely from natural materials.
          </p>

          <div style={{ borderTop: '1px solid rgba(45,42,40,0.06)', paddingTop: 32, marginTop: 40 }}>
            <p className="section-label">Why natural</p>
            <p style={{ opacity: 0.6, marginBottom: 16, lineHeight: 1.7 }}>
              No leather. No plastic. No synthetic dyes. Every Purrl piece is made from a single natural fiber — flax linen, organic cotton, or bamboo — and is fully biodegradable at end of life. What goes into your cat&apos;s world should be as clean as what goes into their body.
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(45,42,40,0.06)', paddingTop: 32, marginTop: 32 }}>
            <p className="section-label">Why quiet</p>
            <p style={{ opacity: 0.6, marginBottom: 16, lineHeight: 1.7 }}>
              Designed by an architect. Every line, proportion, and texture is intentional. Nothing cute. Nothing excessive. Your cat doesn&apos;t need to be a cartoon character to be beautiful.
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(45,42,40,0.06)', paddingTop: 32, marginTop: 32, marginBottom: 48 }}>
            <p className="section-label">The belief</p>
            <p style={{ opacity: 0.7, fontSize: '1.125rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              A cat&apos;s time with us is short. So while they&apos;re here — make it breathtaking.
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(45,42,40,0.06)', paddingTop: 32 }}>
            <p className="section-label">Studio</p>
            <p style={{ opacity: 0.4, fontSize: '0.875rem' }}>
              Purrl Studio — designed somewhere between Tokyo, London, and the internet.
            </p>
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
              <h5 style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4A882', marginBottom: 20 }}>Shop</h5>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: 12 }}><Link href="/shop" style={{ textDecoration: 'none', color: '#2D2A28', fontSize: '0.8125rem', opacity: 0.5 }}>Tote</Link></li>
                <li style={{ marginBottom: 12 }}><Link href="/shop" style={{ textDecoration: 'none', color: '#2D2A28', fontSize: '0.8125rem', opacity: 0.5 }}>Bandana</Link></li>
                <li style={{ marginBottom: 12 }}><Link href="/shop" style={{ textDecoration: 'none', color: '#2D2A28', fontSize: '0.8125rem', opacity: 0.5 }}>Collar</Link></li>
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
