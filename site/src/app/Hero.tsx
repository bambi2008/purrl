import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-full">
      <img className="hero-full-img" src="/images/scene-1.png" alt="Going out with your cat" />
      <div className="hero-full-scrim" />
      <div className="hero-full-content">
        <p className="hero-full-label">The Outing Collection</p>
        <h1 className="hero-full-title">Refined street style<br />for going out with your cat.</h1>
        <p className="hero-full-sub">Carriers and accessories in pure natural materials. Nothing cute. Nothing excessive.</p>
        <Link href="/shop" className="hero-full-cta">Shop the collection</Link>
      </div>
      <div className="hero-scroll-hint"><span>Scroll</span></div>
    </section>
  )
}
