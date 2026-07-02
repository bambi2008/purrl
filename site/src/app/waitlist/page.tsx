'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email.')
      return
    }
    setSubmitted(true)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 24px',
      background: '#fff'
    }}>
      <div style={{ maxWidth: 520, width: '100%' }}>
        <p style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '0.68rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#a99843',
          marginBottom: 24
        }}>
          Purrl — The Outing Collection
        </p>

        <h1 style={{
          fontFamily: "'Cardo', Georgia, serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          color: '#212121',
          marginBottom: 16
        }}>
          Refined street style<br />for going out with your cat.
        </h1>

        <p style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '0.95rem',
          color: '#646464',
          lineHeight: 1.7,
          marginBottom: 36
        }}>
          Linen carriers and accessories. Bamboo handles. Brass hardware. No plastic, no leather. Coming soon.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                width: '100%',
                maxWidth: 360,
                padding: '14px 18px',
                border: '1px solid #d1cdc4',
                background: '#faf8f5',
                fontFamily: "'Figtree', sans-serif",
                fontSize: '0.9rem',
                color: '#212121',
                outline: 'none'
              }}
            />
            {error && <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: '0.8rem', color: '#c0392b', margin: 0 }}>{error}</p>}
            <button
              type="submit"
              style={{
                width: '100%',
                maxWidth: 360,
                padding: '14px 0',
                background: '#a99843',
                color: '#fff',
                border: 'none',
                fontFamily: "'Figtree', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Get early access
            </button>
          </form>
        ) : (
          <div style={{
            background: '#f5f2ec',
            padding: '32px 24px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Cardo', Georgia, serif",
              fontSize: '1.3rem',
              color: '#212121',
              marginBottom: 8
            }}>
              You&apos;re on the list.
            </p>
            <p style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: '0.9rem',
              color: '#646464',
              lineHeight: 1.6
            }}>
              We&apos;ll let you know the moment we launch.
            </p>
          </div>
        )}

        <div style={{ marginTop: 40 }}>
          <Link href="/" style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: '0.78rem',
            color: '#a99843',
            textDecoration: 'none',
            letterSpacing: '0.02em'
          }}>
            ← Back to Purrl
          </Link>
        </div>
      </div>
    </div>
  )
}
