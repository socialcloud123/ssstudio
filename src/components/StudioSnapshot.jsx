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
        <div className="section-title in-service">STUDIO SNAPSHOT</div>
        
        <p className="service-hero-heading">
          Nearby Studio is a premium, production-ready studio<br />
          floor designed for brands, creators, agencies, and film <br />
          teams who need a reliable space with smooth <br />
          workflows from pre-production to final delivery.
        </p>

        <div className="studio-details max-w-[90%]">
          <p className="studio-intro">
            A production-ready space built for creators, brands, and teams who need speed + quality.
          </p>
          
          <ul className="studio-features">
            <li>• Total Studio: 600 sq.ft</li>
            <li>• Production Floor: 500 sq.ft</li>
            <li>• In-built Green Room: Makeup + costume change</li>
            <li>• 10 In-built Setups: For podcasts and content creation</li>
          </ul>
        </div>
      </div>

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
    </section>
  )
})

StudioSnapshot.displayName = 'StudioSnapshot'

export default StudioSnapshot
