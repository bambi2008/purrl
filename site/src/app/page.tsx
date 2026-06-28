import Link from 'next/link'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Products from './Products'
import ColorAnalysis from './ColorAnalysis'
import Testimonials from './Testimonials'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ColorAnalysis />
      <HowItWorks />
      <Products />
      <Testimonials />
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
          <li><Link href="/analyze">Discover</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <Link href="/" className="logo">Purrl<span>.</span></Link>
        <p className="tagline">Every cat is a Purrl.</p>
        <ul className="footer-links">
          <li><Link href="/analyze">Discover</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><a href="mailto:hello@purrl.com">Contact</a></li>
        </ul>
        <p className="copyright">© {new Date().getFullYear()} Purrl. All rights reserved.</p>
      </div>
    </footer>
  )
}
