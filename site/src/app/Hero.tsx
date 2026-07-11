import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-full">
      <img
        className="hero-full-img"
        src="/images/black-panther-outing.jpg"
        alt="An elegant cat resting inside a linen tote with bamboo ring handles"
      />
      <div className="hero-full-scrim" />
      <div className="hero-full-content">
        <p className="hero-full-label">The Outing Collection</p>
        <h1 className="hero-full-title">An elegant life, shared with your cat.</h1>
        <p className="hero-full-sub">
          Purrl is made for the woman who dresses with intention, lives with beauty,
          and does not want her cat left outside the life she has so carefully built.
        </p>
        <Link href="/waitlist" className="hero-full-cta">Join the first drop</Link>
      </div>
      <div className="hero-scroll-hint"><span>Scroll</span></div>
    </section>
  )
}
