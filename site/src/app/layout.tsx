import '../styles/globals.css'
import type { Metadata } from 'next'
import { Cardo, Figtree } from 'next/font/google'
import { CartProvider } from './CartContext'
import CartDrawer from './CartDrawer'

const cardo = Cardo({ subsets: ['latin'], weight: ['400'], variable: '--font-cardo' })
const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-figtree' })

export const metadata: Metadata = {
  title: 'Purrl - Elegant Outings With Your Cat',
  description: 'An elegant life, shared with your cat. Linen carriers and coordinated accessories in pure natural materials.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cardo.variable} ${figtree.variable}`}>
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
