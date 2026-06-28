export interface CatProfile {
  catId: string
  breed?: string
  palette: ColorInfo[]
  eyeColor?: string
  furLength?: 'short' | 'medium' | 'long'
  pattern?: string
  temperament?: string
  imageUrl: string
}

export interface ColorInfo {
  name: string
  hex: string
  role: 'primary' | 'secondary' | 'accent'
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: 'collar' | 'bowtie' | 'bandana' | 'bag' | 'harness'
  image?: string
}

export interface OutfitSet {
  products: Product[]
  totalPrice: number
  theme: string
  description: string
}
