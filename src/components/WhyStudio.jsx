import React, { memo } from 'react'
import './WhyStudio.css'

const WhyStudio = memo(() => {
  const features = [
    {
      title: 'Professional Workflow',
      description: 'Built to keep shoots fluid with dialed lighting, flexible sets, and quick transitions.'
    },
    {
      title: 'Creator + Brand Friendly',
      description: 'Solo creator or full crew, the floor plan adapts to your scale without slowing you down.'
    },
    {
      title: 'Production-First Infrastructure',
      description: 'Pro rigs, power, and acoustics set up to cut delays and keep schedules tight.'
    },
    {
      title: 'Flexible Sets, Fast Turnarounds',
      description: 'Swap looks in minutes—multiple concepts in a single day with crew on standby.'
    },
    {
      title: 'End-to-End Support',
      description: 'From pre-pro to post, we integrate with your workflow instead of complicating it.'
    }
  ]

  return (
    <section className="why-studio-section">
      <div className="why-container">
        <div className="why-layout">
          <div className="why-left">
            <p className="why-kicker">Why Nearby Studio</p>
            <h2 className="why-title">Production-first, creator-ready.</h2>
            <p className="why-subtitle">
              A floor plan built to move fast: pre-lit rigs, tuned acoustics, and on-site crew so you can focus on the shot.
            </p>
            <div className="why-tags">
              <span className="why-chip">Pre-lit zones</span>
              <span className="why-chip ghost">Acoustic control</span>
              <span className="why-chip">On-site crew</span>
            </div>
            <div className="why-stats">
              <div className="stat-block">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Access on request</span>
              </div>
              <div className="stat-block">
                <span className="stat-number">10</span>
                <span className="stat-label">Pre-built looks</span>
              </div>
              <div className="stat-block">
                <span className="stat-number">500</span>
                <span className="stat-label">sq.ft production floor</span>
              </div>
            </div>
          </div>

          <div className="feature-stack">
            {features.map((feature, index) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-top">
                  <span className="feature-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="feature-line" />
                </div>
                <div className="feature-body">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

WhyStudio.displayName = 'WhyStudio'

export default WhyStudio
