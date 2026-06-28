export default function Testimonials() {
  const testimonials = [
    {
      text: "I uploaded a photo of my rescue tabby — Purrl recommended a Warm Cream set I never would have picked. Now she's the most stylish cat in the neighborhood.",
      author: "— Maya L., Brooklyn",
    },
    {
      text: "The tote is beautiful. My cat actually fell asleep in it on the first walk. The matching collar was an instant add.",
      author: "— James K., London",
    },
    {
      text: "I've never seen anything like the color analysis. It matched my cat's amber eyes perfectly. I bought the whole set.",
      author: "— Sophie T., Tokyo",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="label">From our customers</p>
          <h2>Designed for cats. Loved by owners.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <p>"{t.text}"</p>
              <p className="author">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
