'use client'

import { useState } from 'react'
import { useCatProfile } from '@/hooks/useCatProfile'

export default function ColorAnalysis() {
  const { profile, loading, analyze } = useCatProfile()
  const [dragOver, setDragOver] = useState(false)

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) await analyze(file)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) await analyze(file)
  }

  return (
    <section className="section" id="analyze">
      <div className="container">
        <div className="section-header">
          <p className="label">Discover your cat&apos;s palette</p>
          <h2>Every cat is a unique color story.</h2>
          <p className="subtitle" style={{ margin: '16px auto 0' }}>
            Upload a photo and we&apos;ll extract the tones that make your cat beautiful.
          </p>
        </div>

        {!profile && (
          <div
            className="upload-area"
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            style={dragOver ? { borderColor: 'var(--pearl-gold)', backgroundColor: 'rgba(196, 168, 130, 0.05)' } : {}}
          >
            {loading ? (
              <p>Analyzing your cat&apos;s palette...</p>
            ) : (
              <>
                <p style={{ fontSize: '2rem', margin: 0, opacity: 1 }}>🐱</p>
                <p>Drop a photo here or click to upload</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              style={{ display: 'none' }}
              id="cat-photo"
            />
            <label htmlFor="cat-photo" style={{ cursor: 'pointer', display: 'block', marginTop: 8, fontSize: 0 }}> </label>
          </div>
        )}

        {profile && (
          <div className="color-result">
            {profile.palette.map((color) => (
              <div key={color.hex} className="swatch-card">
                <div className="swatch" style={{ backgroundColor: color.hex }} />
                <h4>{color.name}</h4>
                <p className="hex">{color.hex}</p>
                <p style={{ fontSize: '0.75rem', opacity: 0.4, marginTop: 4, textTransform: 'capitalize' }}>{color.role}</p>
              </div>
            ))}

            <div className="recommendation" style={{ gridColumn: '1 / -1' }}>
              <h3>We recommend the <em>Warm Day Out</em> set for {profile.breed}</h3>
              <p className="subtitle" style={{ margin: '8px auto 24px' }}>
                Warm Cream Bow Tie + Warm Cream Collar — designed for your cat&apos;s coat.
              </p>
              <a href="/shop" className="btn btn-primary">See the complete set</a>
              <button
                className="btn btn-secondary"
                style={{ marginLeft: 16 }}
                onClick={() => window.location.reload()}
              >
                Try another photo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
