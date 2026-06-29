'use client'

import { products } from '../data/products'

export default function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="products-header">
          <p className="section-label">The Outing Set</p>
          <h2>Everything your cat needs to step out.</h2>
        </div>
        <div className="product-grid">
          {products.filter(p => p.category !== 'harness' && p.category !== 'bowtie').map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                [ {product.name} ]
              </div>
              <h3>{product.name}</h3>
              <p className="desc">{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
