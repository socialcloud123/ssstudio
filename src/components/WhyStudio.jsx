import React from 'react'
import './WhyStudio.css'

function WhyStudio() {
  const features = [
    {
      title: 'Professional Workflow',
      description: 'A space designed to keep shoots smooth: movement, lighting, flexibility, and quick transitions.'
    },
    {
      title: 'Creator + Brand Friendly',
      description: 'Whether you\'re a solo creator or a full crew—Nearby Studio adapts to your scale.'
    },
    {
      title: 'Production-First Infrastructure',
      description: 'A studio designed to reduce delays, handle professional setups, and keep your shoot running on schedule.'
    },
    {
      title: 'Flexible Sets, Fast Turnarounds',
      description: 'Adaptable floor plans and support teams that help you execute multiple concepts in a single day.'
    },
    {
      title: 'End-to-End Support',
      description: 'From planning and crew coordination to shooting and post, we integrate with your workflow—not complicate it.'
    }
  ]

  return (
    <section className="why-studio-section">
      <h2 className="why-title">WHY Nearby Studio?</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyStudio
