import type { Metadata } from 'next'
import { products } from '../../data/products'

export const metadata: Metadata = {
  title: 'Shop — Purrl',
}

export default function ShopPage() {
  return (
    <>
      <div className="container">
        <nav>
          <a href="/" className="logo">Purrl<span>.</span></a>
          <ul className="nav-links">
            <li><a href="/analyze">Discover</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Collection</p>
            <h2>Designed at the Purrl Studio.</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  [ {product.category} — image coming ]
                </div>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
