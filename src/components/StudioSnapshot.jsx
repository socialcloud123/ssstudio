import React, { useEffect, useRef, memo } from 'react'
import './StudioSnapshot.css'
import SplashCursor from './SplashCursor';

const StudioSnapshot = memo(() => {
  const galleryImages = [
    '/Snapshots/nearbystudio _ Pitch.png',
    '/Snapshots/nearbystudio _ Pitch (1).png',
    '/Snapshots/nearbystudio _ Pitch (2).png',
    '/Snapshots/nearbystudio _ Pitch (3).png',
    '/Snapshots/nearbystudio _ Pitch (4).png',
    '/Snapshots/nearbystudio _ Pitch (5).png',
    '/Snapshots/nearbystudio _ Pitch (6).png',
    '/Snapshots/nearbystudio _ Pitch (7).png',
    '/Snapshots/nearbystudio _ Pitch (8).png',
    '/Snapshots/nearbystudio _ Pitch (9).png',
    '/Snapshots/nearbystudio _ Pitch (10).png',
    '/Snapshots/nearbystudio _ Pitch (11).png',
    '/Snapshots/nearbystudio _ Pitch (12).png',
    '/Snapshots/nearbystudio _ Pitch (13).png',
    '/Snapshots/SSD_9842.jpg',
    '/Snapshots/SSD_9851.jpg',
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

      <a href="#" className="primary-btn in-service" target="_blank" rel="noopener noreferrer">
        <div className="link-hover">
          <div className="link-inner">
            <div className="button-text">Get Started</div>
          </div>
          <div className="link-inner-hover">
            <div className="button-text">Get Started</div>
          </div>
        </div>
      </a>
    </section>
  )
})

StudioSnapshot.displayName = 'StudioSnapshot'

export default StudioSnapshot
