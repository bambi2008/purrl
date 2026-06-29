export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: 'collar' | 'bowtie' | 'bandana' | 'bag' | 'harness'
  image?: string
}
