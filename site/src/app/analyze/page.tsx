import type { Metadata } from 'next'
import ColorAnalysis from '../ColorAnalysis'

export const metadata: Metadata = {
  title: 'Discover your cat\'s palette — Purrl',
}

export default function AnalyzePage() {
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
      <ColorAnalysis />
    </>
  )
}
