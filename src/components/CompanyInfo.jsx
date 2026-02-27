import React from 'react'
import './CompanyInfo.css'

function CompanyInfo() {
  return (
    <section className="company-info-section">
      <div className="company-info-container">
        <div className="company-video-wrapper">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="company-video"
          >
            <source src="/Sripada_Studios_Showreel_Filmmaking_Department_Bengaluru's_Start-up_Film_Production_house_360p.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="company-text-wrapper">
          <h2 className="company-title">
            PROUDLY A SUB-COMPANY OF<br />
            <span className="company-name">SRIPADA STUDIOS PVT. LTD.</span>
          </h2>

          <div className="company-description">
            <p>
              <strong>Nearby Studio</strong> is a proud vertical of <strong>Sripada Studios Pvt. Ltd., Bengaluru</strong> — a creative conglomerate built on Originality, Think Bold, and Service-Oriented execution.
            </p>

            <p>
              As part of Sripada Studios, we bring a larger ecosystem of creative strategy, production excellence, and brand-building capabilities - ensuring every deliverable is aligned to quality and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
