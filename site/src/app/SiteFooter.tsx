'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SiteFooter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <footer>
      <div className="container">
        <div className="footer-signup">
          <div>
            <h3 className="footer-signup-h">Join the Purrl list</h3>
            <p className="footer-signup-p">10% off your first outing. No spam — just new drops and the occasional cat.</p>
          </div>
          <form
            className="signup-form"
            onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setDone(true) }}
          >
            {done ? (
              <p className="signup-done">Thank you — check your inbox.</p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Sign up</button>
              </>
            )}
          </form>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">Purrl<span>.</span></Link>
            <p className="tagline">Every cat is a Purrl.</p>
            <div className="footer-social">
              <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
              <a href="https://pinterest.com" aria-label="Pinterest">Pinterest</a>
              <a href="mailto:hello@purrl.com" aria-label="Email">Email</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Shop</h5>
            <ul>
              <li><Link href="/product/purrl-tote">The Tote</Link></li>
              <li><Link href="/product/linen-bandana">Bandana</Link></li>
              <li><Link href="/product/cotton-collar">Collar</Link></li>
              <li><Link href="/shop">Sets</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>About</h5>
            <ul>
              <li><Link href="/about">Philosophy</Link></li>
              <li><Link href="/about">Materials</Link></li>
              <li><Link href="/about">Sustainability</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Help</h5>
            <ul>
              <li><Link href="/shop">Shipping</Link></li>
              <li><Link href="/shop">Returns</Link></li>
              <li><a href="mailto:hello@purrl.com">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p className="copyright">&copy; {new Date().getFullYear()} Purrl. All rights reserved.</p>
          <div className="legal-links">
            <Link href="/">Privacy</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
