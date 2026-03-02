import React from 'react'
import './WhyStudio.css'
import { FaArrowRight } from 'react-icons/fa'

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
      <div className="why-container">
        <div className="features-grid">
          <div className="feature-card heading-card">
            <h2 className="why-title">Why Nearby Studio?</h2>
          </div>
          <div className="feature-card empty-card"></div>
          <div className="feature-card">
            <h3 className="feature-title">Professional Workflow</h3>
            <p className="feature-description">A space designed to keep shoots smooth: movement, lighting, flexibility, and quick transitions.</p>
          </div>
          <div className="feature-card empty-card"></div>
          <div className="feature-card">
            <h3 className="feature-title">Creator + Brand Friendly</h3>
            <p className="feature-description">Whether you're a solo creator or a full crew—Nearby Studio adapts to your scale.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Production-First Infrastructure</h3>
            <p className="feature-description">A studio designed to reduce delays, handle professional setups, and keep your shoot running on schedule.</p>
          </div>
          <div className="feature-card arrow-card">
  <div className="arrow-wrapper">
    <FaArrowRight className="arrow-icon" />
    <div className="arrow-text">
      <h3 className="feature-title">See the Space</h3>
      <p className="feature-description">
        Explore how Nearby Studio transforms your production workflow.
      </p>
    </div>
  </div>
</div>
          <div className="feature-card">
            <h3 className="feature-title">Flexible Sets, Fast Turnarounds</h3>
            <p className="feature-description">Adaptable floor plans and support teams that help you execute multiple concepts in a single day.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">End-to-End Support</h3>
            <p className="feature-description">From planning and crew coordination to shooting and post, we integrate with your workflow—not complicate it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyStudio
