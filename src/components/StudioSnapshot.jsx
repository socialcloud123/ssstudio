import React, { useEffect, useRef, memo } from 'react'
import './StudioSnapshot.css'
import SplashCursor from './SplashCursor';

const StudioSnapshot = memo(() => {
  const galleryImages = [
    '/Snapshots/Content.png',
    '/Snapshots/Desktop.png',
    '/Snapshots/Desktop (1).png',
    '/Snapshots/Green_screen.png',
    '/Snapshots/Model.png',
    '/Snapshots/Model (1).png',
    '/Snapshots/Model (2).png',
    '/Snapshots/Podcast.png',
    '/Snapshots/Podcast (1).png',
    '/Snapshots/Product.png',
    '/Snapshots/Product (1).png',
    '/Snapshots/Studio.png',
    '/Snapshots/Studio (1).png',
    '/Snapshots/Studio (2).png',
    '/Snapshots/Studio (3).png',
    '/Snapshots/Studio_setup.png',
  ]
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const wrappers = section.querySelectorAll('.hover-gallery-image-wrapper')

    wrappers.forEach((wrapper) => {
      const img = wrapper.querySelector('.hover-img')
      let showTimeout = null

      const handleMouseEnter = () => {
        if (showTimeout) clearTimeout(showTimeout)
        img.classList.remove('fade-out')
        img.style.opacity = '1'
        img.style.transform = 'scale(1.15)'
      }

      const handleMouseLeave = () => {
        showTimeout = setTimeout(() => {
          img.classList.add('fade-out')
          img.style.opacity = '0'
          img.style.transform = 'scale(1)'
        }, 600)
      }

      wrapper.addEventListener('mouseenter', handleMouseEnter)
      wrapper.addEventListener('mouseleave', handleMouseLeave)

      wrapper._cleanup = () => {
        wrapper.removeEventListener('mouseenter', handleMouseEnter)
        wrapper.removeEventListener('mouseleave', handleMouseLeave)
      }
    })

    return () => {
      wrappers.forEach((wrapper) => {
        if (wrapper._cleanup) wrapper._cleanup()
      })
    }
  }, [])

  return (
    <section className="service-hero-section" ref={sectionRef}>
      <SplashCursor />
      <div className="abs-gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="hover-gallery-image-wrapper">
            <img 
              alt={`Studio gallery ${index + 1}`}
              className="hover-img" 
              loading="lazy"
              decoding="async"
              src={img}
            />
          </div>
        ))}
      </div>

      <div className="service-hero-con">
        <div className="service-card">
          <div className="section-title in-service">STUDIO SNAPSHOT</div>
          
          <h2 className="service-hero-title">
            Production-ready studio floor crafted for fast turnarounds.
          </h2>

          <p className="service-hero-heading">
            Nearby Studio is a premium, production-ready studio floor designed for brands, creators, agencies,
            and film teams who need a reliable space with smooth workflows from pre-production to final delivery.
          </p>

          <div className="studio-meta">
            <div className="detail-card">
              <p className="detail-title">Why teams choose Nearby</p>
              <ul className="studio-points">
                <li>Smooth handoff from pre-production to delivery.</li>
                <li>Ready-to-roll lighting and acoustically tuned rooms.</li>
                <li>On-site crew support for creators, brands, and agencies.</li>
              </ul>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-number">600</div>
                <div className="stat-label">Total sq.ft</div>
                <div className="stat-sub">Open-plan layout with staging zone.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500</div>
                <div className="stat-label">Production floor</div>
                <div className="stat-sub">Optimized for multi-camera setups.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10</div>
                <div className="stat-label">Built-in setups</div>
                <div className="stat-sub">Podcasts, content creation, and product shoots.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1</div>
                <div className="stat-label">Green room</div>
                <div className="stat-sub">Makeup, costume change, and quick resets.</div>
              </div>
            </div>
          </div>

          <div className="cta-row">
            <a href="https://wa.me/919980687439?text=Hi%2C%20I%20am%20interested%20in%20booking%20Nearby%20Studio.%20Please%20share%20more%20details." className="primary-btn in-service" target="_blank" rel="noopener noreferrer">
              <div className="link-hover">
                <div className="link-inner">
                  <div className="button-text">ENQUIRE ON WHATSAPP</div>
                </div>
                <div className="link-inner-hover">
                  <div className="button-text">ENQUIRE ON WHATSAPP</div>
                </div>
              </div>
            </a>
            <div className="cta-note">Share your shoot window—we reply with availability in minutes.</div>
          </div>
        </div>
      </div>
    </section>
  )
})

StudioSnapshot.displayName = 'StudioSnapshot'

export default StudioSnapshot
