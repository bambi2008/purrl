import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="section-label">Purrl — The Outing Collection</p>
        <h1>Beautiful cat carriers and accessories.<br />Made from pure natural materials.</h1>
        <p>Purrl makes coordinated outing sets — a tote, a bandana, a collar — crafted entirely from flax linen, organic cotton, and bamboo. No leather. No plastic. No compromise.</p>
        <div>
          <Link href="/shop" className="btn btn-primary">Shop the collection</Link>
          <Link href="/about" className="btn btn-secondary">Learn more</Link>
        </div>
      </div>
      <div className="hero-visual">
        [ Purrl Tote — product image ]
      </div>
    </section>
  )
}
