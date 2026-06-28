export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload a photo',
      description: 'One clear shot of your cat against a plain background. We\'ll handle the rest.',
    },
    {
      number: '02',
      title: 'We find the palette',
      description: 'Our AI extracts the exact tones — primary coat, secondary markings, and eye color.',
    },
    {
      number: '03',
      title: 'Match your set',
      description: 'We recommend a coordinated outfit: bag, collar, bow tie — all in colors that complement your cat.',
    },
    {
      number: '04',
      title: 'Step out together',
      description: 'Your cat in the Purrl tote, wearing its matched accessories. Ready for the world.',
    },
  ]

  return (
    <section className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-header">
          <p className="label">How it works</p>
          <h2>Three steps to a beautiful outing.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
