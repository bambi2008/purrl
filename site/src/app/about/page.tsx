import SiteNav from '../SiteNav'
import SiteFooter from '../SiteFooter'

export default function AboutPage() {
  return (
    <>
      <div className="container"><SiteNav /></div>

      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="section-label">About</p>
          <h1 style={{ fontFamily: "'Cardo', Georgia, serif", fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 400, lineHeight: 1.15, marginBottom: 28 }}>Every cat is a Purrl.</h1>

          <p style={{ color: 'var(--fg-muted)', marginBottom: 24, fontSize: '1.05rem', lineHeight: 1.75 }}>
            Purrl is a design studio for cats and the people who love them. We make one thing: coordinated outing sets — a tote, a bandana, a collar — crafted entirely from natural materials.
          </p>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 28, marginTop: 36 }}>
            <p className="section-label">Why natural</p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75 }}>
              No leather. No plastic. No synthetic dyes. Every Purrl piece is made from a single natural fiber — flax linen, organic cotton, or bamboo — and is fully biodegradable at end of life.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 28, marginTop: 28 }}>
            <p className="section-label">Why quiet</p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75 }}>
              Designed by an architect. Every line, proportion, and texture is intentional. Nothing cute. Nothing excessive.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 28, marginTop: 28 }}>
            <p className="section-label">The belief</p>
            <p style={{ color: 'var(--fg)', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.6, fontFamily: "'Cardo', Georgia, serif" }}>
              A cat&apos;s time with us is short. So while they&apos;re here — make it breathtaking.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
