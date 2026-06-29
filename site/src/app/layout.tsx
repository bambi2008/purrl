import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight' })

export const metadata: Metadata = {
  title: 'Purrl — Every cat is a Purrl.',
  description: "A cat's time with us is short. Make it breathtaking. The Outing Collection — pure natural materials for your cat.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
