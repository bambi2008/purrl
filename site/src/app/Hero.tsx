export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="label">Cat fashion for the modern city</p>
        <h1>
          A cat&apos;s time with us is short.<br />
          Make it breathtaking.
        </h1>
        <p className="subtitle">
          Upload a photo of your cat. We analyze its coat and eyes,
          then recommend the perfect color palette — from bag to bow tie.
        </p>
        <div className="hero-buttons">
          <a href="/analyze" className="btn btn-primary">Find your cat&apos;s palette</a>
          <a href="/shop" className="btn btn-secondary">Shop the collection</a>
        </div>
      </div>
    </section>
  )
}
