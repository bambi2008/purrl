'use client'

import { useCart } from './CartContext'

interface Props {
  id: string
  name: string
  price: number
  image: string
  label?: string
  block?: boolean
}

export default function AddToCart({ id, name, price, image, label = 'Add to bag', block }: Props) {
  const { addItem } = useCart()
  return (
    <button
      className={`btn-add ${block ? 'block' : ''}`}
      onClick={() => addItem({ id, name, price, image })}
    >
      {label}
    </button>
  )
}
