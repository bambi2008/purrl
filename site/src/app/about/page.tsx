import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Purrl',
}

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <nav>
          <a href="/" className="logo">Purrl<span>.</span></a>
          <ul className="nav-links">
            <li><a href="/analyze">Discover</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="label">About</p>
          <h2 style={{ marginBottom: 24 }}>Every cat is a Purrl.</h2>
          <p style={{ opacity: 0.7, marginBottom: 16, fontSize: '1.125rem' }}>
            Purrl is a cat fashion studio. We design coordinated accessories — bags, collars, bow ties —
            that let you and your cat step out together, beautifully.
          </p>
          <p style={{ opacity: 0.7, marginBottom: 16 }}>
            Our color analysis engine studies your cat&apos;s coat and eyes, then recommends a palette that
            enhances their natural beauty. No guessing. No generic black collars. Every piece is chosen
            for your cat alone.
          </p>
          <p style={{ opacity: 0.7, marginBottom: 48 }}>
            We believe a cat&apos;s time with us is short. Until it lasts, make it breathtaking.
          </p>
          <div style={{ borderTop: '1px solid var(--transition)', paddingTop: 32 }}>
            <p className="label">Studio</p>
            <p style={{ opacity: 0.5, fontSize: '0.875rem' }}>
              Purrl Studio — somewhere between Tokyo, London, and the internet.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
