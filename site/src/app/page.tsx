import Link from 'next/link'
import Hero from './Hero'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'
import Reveal from './Reveal'
import { products, bundles } from '../data/products'

export default function Home() {
  return (
    <>
      <div className="nav-float"><div className="container"><SiteNav /></div></div>
      <Hero />
      <TrustAnchor />
      <Reveal><LifestyleIntro /></Reveal>
      <Reveal><FounderStory /></Reveal>
      <Reveal><OutingRitual /></Reveal>
      <Reveal><ProductInterlude /></Reveal>
      <Reveal><Principles /></Reveal>
      <Reveal><BundleSection /></Reveal>
      <Reveal><MaterialCode /></Reveal>
      <Reveal><PaletteSection /></Reveal>
      <Reveal><StatsBar /></Reveal>
      <SiteFooter />
    </>
  )
}

function TrustAnchor() {
  return (
    <section className="trust-anchor">
      <div className="container">
        <p className="trust-line">
          <span className="trust-text">Elegant outings with your cat</span>
          <span className="trust-div"></span>
          <span className="trust-text">100% natural materials</span>
          <span className="trust-div"></span>
          <span className="trust-text">No plastic. No leather.</span>
        </p>
      </div>
    </section>
  )
}

function LifestyleIntro() {
  return (
    <section className="lifestyle-intro">
      <div className="container lifestyle-grid">
        <p className="section-label">Not a carrier</p>
        <h2>A way for a woman and her cat to appear in the world together.</h2>
        <p>
          Most pet products treat going out as transportation. Purrl treats it as a scene:
          a refined woman, a composed cat, a linen tote, a collar and bandana in one quiet palette.
          Not cute. Not loud. Not childish. Simply elegant.
        </p>
      </div>
    </section>
  )
}

function FounderStory() {
  return (
    <section className="memory-section">
      <div className="container memory-grid">
        <div className="memory-kicker">
          <p className="section-label">Story One</p>
          <span>Black Panther and Youyou</span>
        </div>
        <div className="memory-copy">
          <h2>This began with a photograph we could not stop returning to.</h2>
          <p>
            Black Panther, our Maine Coon, and Youyou, our Ragdoll, were the beloved cats of our family.
            During an unexpected fire while we were away from home, both were lost to smoke.
          </p>
          <p>
            In the days that followed, their photographs became a quiet reason to keep going.
            The image on this page is one of our most tender memories of Black Panther.
          </p>
          <p>
            Purrl comes from that tenderness. Cats are not background objects in our homes.
            They are presence, personality, beauty, memory and family. While they are here,
            they deserve to be seen. When they are gone, they deserve to be remembered with grace.
          </p>
        </div>
      </div>
    </section>
  )
}

function OutingRitual() {
  const items = [
    {
      title: 'She gets herself ready',
      text: 'A coat with clean lines. Soft shoes. A bag that does not announce itself. The outing begins with restraint.',
    },
    {
      title: "She chooses the cat's palette",
      text: "Flax, Bark, Bone or Fog Grey, chosen to flatter the cat's coat, eyes and temperament rather than disguise them.",
    },
    {
      title: 'The cat joins the scene',
      text: 'Not as cargo. Not as a novelty. A cat in a linen tote, wearing a quiet matching detail, becomes part of the composition.',
    },
    {
      title: 'The world opens gently',
      text: 'Not every cat wants the same outside life. Safety comes first. But curiosity, light, air and presence belong to them too.',
    },
  ]

  return (
    <section className="ritual-section">
      <div className="container">
        <div className="featured-header">
          <p className="section-label">The ritual</p>
          <h2>A cat was not born to be only a quiet shape behind a closed door.</h2>
        </div>
        <div className="ritual-grid">
          {items.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductInterlude() {
  return (
    <section className="interlude">
      <div className="container">
        <div className="featured-header">
          <p className="section-label">The Outing Set</p>
          <h2>Three pieces. One palette. One life, shared.</h2>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <Link href={`/product/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="product-card">
                <div className="img-wrap"><img src={p.image} alt={p.name} /></div>
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Principles() {
  const items = [
    ['The woman comes first', 'Purrl is for someone who already has taste. The product has to belong beside her coat, shoes, furniture and coffee cup.'],
    ['The cat stays herself', 'The palette should flatter her coat and eyes. She is not dressed as a toy. She is framed with respect.'],
    ['Together, not matching too hard', 'The point is not costume. It is visual harmony: human, cat, tote and accessory held in one quiet composition.'],
    ['Technology stays invisible', 'AI may help choose the palette. But what the customer remembers is simpler: we looked beautiful together.'],
  ]

  return (
    <section className="principles-section">
      <div className="container">
        <div className="featured-header">
          <p className="section-label">What makes it Purrl</p>
          <h2>Elegance is built from decisions small enough to feel inevitable.</h2>
        </div>
        <div className="principles-grid">
          {items.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BundleSection() {
  return (
    <section className="bundle-section">
      <div className="container">
        <div className="featured-header">
          <p className="section-label">Save with a set</p>
          <h2>You are not buying pieces. You are dressing the outing.</h2>
          <p className="sub">Coordinated sets ship together and cost less.</p>
        </div>
        <div className="bundle-grid">
          {bundles.map((b) => (
            <Link href="/shop" key={b.id} className="bundle-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="bundle-img"><img src={b.image} alt={b.name} /></div>
              <div className="bundle-body">
                <h3>{b.name}</h3>
                <p className="bundle-desc">{b.description}</p>
                <p className="bundle-price">
                  <strong>${b.price}</strong>
                  <span className="was">${b.compareAt}</span>
                  <span className="save">Save ${b.compareAt - b.price}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function MaterialCode() {
  return (
    <section className="material-code-section">
      <div className="container material-grid">
        <div>
          <p className="section-label">Material code</p>
          <h2>Soft materials make elegance feel lived-in, not precious.</h2>
          <p>
            Linen breathes and falls naturally. Bamboo feels warm in the hand.
            Brass gathers a patina instead of pretending to stay new. Purrl does not rely on a loud logo.
            Its identity lives in proportion, touch, restraint and the way a cat looks from the edge of the bag.
          </p>
        </div>
        <div className="material-list">
          <div><span>Exterior</span><strong>European flax linen</strong></div>
          <div><span>Touchpoint</span><strong>Bamboo handles</strong></div>
          <div><span>Hardware</span><strong>Brushed brass</strong></div>
          <div><span>Collar</span><strong>Organic cotton</strong></div>
          <div><span>Brand rule</span><strong>No plastic</strong></div>
          <div><span>Brand rule</span><strong>No leather</strong></div>
        </div>
      </div>
    </section>
  )
}

function PaletteSection() {
  return (
    <section className="palette-section">
      <div className="container palette-grid">
        <div>
          <p className="section-label">Palette system</p>
          <h2>Color is how the woman and the cat quietly answer each other.</h2>
        </div>
        <div className="palette-swatches" aria-label="Purrl palette">
          <span className="swatch flax">Flax</span>
          <span className="swatch bark">Bark</span>
          <span className="swatch bone">Bone</span>
          <span className="swatch fog">Fog Grey</span>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { num: '100%', lbl: 'Natural materials' },
    { num: '0', lbl: 'Plastic visual language' },
    { num: '3', lbl: 'Pieces in one outing set' },
    { num: '1', lbl: 'Life shared with your cat' },
  ]
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-bar-inner">
          {stats.map((s) => (
            <div className="stat-block" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
