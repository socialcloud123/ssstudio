import React, { useEffect, useRef } from 'react'
import './CompanyInfo.css'
import ColorBlends from './ColorBlends'

function CompanyInfo() {
  const videoRef = useRef(null)

  const startTime = 2
  const endTime = 5

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => {
      video.currentTime = startTime
      video.play()
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime
      }
    }

    video.addEventListener('loadedmetadata', handleLoaded)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

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
            <span className="company-highlight">
              Sripada Studios Pvt. Ltd.
            </span>
          </h2>

          <div className="company-divider" />

          <div className="company-copy">
            <p>
              nearbystudio is a proud vertical of Sripada Studios Pvt. Ltd., Bengaluru<br />
              A creative conglomerate built on originality, bold thinking,
              & service-oriented execution.
            </p>

            <p>
              As part of Sripada Studios, we operate within a larger ecosystem
              of creative strategy, production excellence, and brand-building capabilities
              ensuring every deliverable is aligned to quality and impact.
            </p>
          </div>
        </div>

        <div className="company-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="company-video"
          >
            <source
              src="/Nearby studio_Studio tour 1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo