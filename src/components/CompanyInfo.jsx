import React from 'react'
import './CompanyInfo.css'
import ColorBlends from './ColorBlends'

function CompanyInfo() {
  return (
    <section className="company-info-section">
      {/* Background Layer */}
      <div className="company-bg">
        <ColorBlends
          colors={["#00c2a8", "#0f0f12", "#00433a"]}
          rotation={105}
          speed={0.1}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={4}
          noise={0.1}
          transparent
          autoRotate={0}
          color=""
        />
      </div>

      <div className="company-info-container">
        <div className="company-left">
          <div className="company-label">Proudly A Sub-Company Of</div>

          <h2 className="company-heading">
            <span className="company-highlight">Sripada Studios Pvt. Ltd.</span>
          </h2>

          <div className="company-divider" />

          <div className="company-copy">
            <p>
              Nearby Studio is a proud vertical of Sripada Studios Pvt. Ltd., Bengaluru - a creative conglomerate
              built on originality, bold thinking, and service-oriented execution.
            </p>

            <p>
              As part of Sripada Studios, we operate within a larger ecosystem of creative strategy, production
              excellence, and brand-building capabilities - ensuring every deliverable is aligned to quality and impact.
            </p>
          </div>
        </div>

        <div className="company-video-wrapper">
          <video autoPlay muted loop playsInline className="company-video">
            <source
              src="/Sripada_Studios_Showreel_Filmmaking_Department_Bengaluru's_Start-up_Film_Production_house_360p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="company-play-overlay">▶</div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
