'use client'

import Link from 'next/link'
import { useCart } from './CartContext'

export default function SiteNav() {
  const { count, setOpen } = useCart()
  return (
    <nav>
      <Link href="/" className="logo">Purrl<span>.</span></Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Open cart">
          Bag{count > 0 && <span className="cart-count">{count}</span>}
        </button>
      </div>
    </nav>
  )
}
