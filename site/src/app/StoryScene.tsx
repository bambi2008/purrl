'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface Props {
  image: string
  align?: 'left' | 'right' | 'center'
  children: ReactNode
  dark?: boolean
}

export default function StoryScene({ image, align = 'left', children, dark = true }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className={`story-scene align-${align} ${dark ? 'scene-dark' : ''}`}>
      <img className="story-img" src={image} alt="" />
      {dark && <div className="story-scrim" />}
      <div className={`story-content ${visible ? 'story-in' : ''}`}>
        {children}
      </div>
    </section>
  )
}
