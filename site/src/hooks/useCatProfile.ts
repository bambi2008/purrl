"use client"

import { useState } from 'react'
import { CatProfile } from '@/types'

// Mock palette extraction — will be replaced by vision_analyze API
function extractPalette(imageUrl: string): CatProfile {
  return {
    catId: crypto.randomUUID(),
    breed: 'Domestic Longhair',
    palette: [
      { name: 'Warm Cream', hex: '#F5E6D3', role: 'primary' },
      { name: 'Toasted Almond', hex: '#D4A574', role: 'secondary' },
      { name: 'Amber Eye', hex: '#C49A3C', role: 'accent' },
    ],
    eyeColor: 'Amber',
    furLength: 'long',
    pattern: 'Solid',
    temperament: 'Elegant',
    imageUrl,
  }
}

export function useCatProfile() {
  const [profile, setProfile] = useState<CatProfile | null>(null)
  const [loading, setLoading] = useState(false)

  const analyze = async (file: File) => {
    setLoading(true)
    const url = URL.createObjectURL(file)
    // Simulate API call — replace with real vision_analyze
    await new Promise(r => setTimeout(r, 1500))
    const result = extractPalette(url)
    setProfile(result)
    setLoading(false)
  }

  return { profile, loading, analyze }
}
