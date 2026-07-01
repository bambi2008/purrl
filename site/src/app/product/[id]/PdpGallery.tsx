'use client'

import { useState } from 'react'

export default function PdpGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  return (
    <div className="pdp-gallery">
      <div className="pdp-main-img">
        <img src={images[active]} alt={name} />
      </div>
      {images.length > 1 && (
        <div className="pdp-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`pdp-thumb ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={img} alt={`${name} ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
