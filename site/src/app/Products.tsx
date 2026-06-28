import { products } from '@/data/products'

export default function Products() {
  return (
    <section className="section" id="shop">
      <div className="container">
        <div className="section-header">
          <p className="label">The collection</p>
          <h2>Designed at the Purrl Studio.</h2>
          <p className="subtitle" style={{ margin: '16px auto 0' }}>
            Each piece works alone — together, they tell a story.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                [ {product.category} — placeholder ]
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
  )
}
