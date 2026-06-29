import Link from 'next/link'
import Hero from './Hero'
import Products from './Products'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <Hero />
      </div>
      <BrandStrip />
      <Products />
      <Philosophy />
      <Footer />
    </>
  )
}

function Nav() {
  return (
    <div className="container">
      <nav>
        <Link href="/" className="logo">Purrl<span>.</span></Link>
        <ul className="nav-links">
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function BrandStrip() {
  return (
    <section className="brand-strip">
      <div className="container">
        <p className="section-label">Our materials</p>
        <h2>100% natural. 100% biodegradable.<br />0% compromise.</h2>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="philosophy">
      <div className="container">
        <p className="section-label">Our promise</p>
        <h2 style={{ marginBottom: 0 }}>Two things guide every decision.</h2>
        <div className="pillars">
          <div className="pillar">
            <h4>Pure Materials</h4>
            <p>No leather. No plastic. No synthetic dyes. Every Purrl piece is 100% natural and fully biodegradable.</p>
          </div>
          <div className="pillar">
            <h4>Quiet Beauty</h4>
            <p>Designed by an architect. Every line, proportion, and texture is intentional. Nothing cute. Nothing excessive.</p>
          </div>
          <div className="pillar">
            <h4>Worn Together</h4>
            <p>Your cat's tote, bandana, and collar share a single palette. One look. One outing. One Purrl.</p>
          </div>
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
            <p className="tagline">Every cat is a Purrl. Made from nature, for the moments that matter.</p>
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
              <li><Link href="/about">Care</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:hello@purrl.com">hello@purrl.com</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Purrl. All rights reserved.</p>
      </div>
    </footer>
  )
}
