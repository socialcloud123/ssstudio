import React, { useEffect, useRef } from 'react'
import './StudioSnapshot.css'

function StudioSnapshot() {
  const galleryImages = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8',
    'https://picsum.photos/400/300?random=9',
    'https://picsum.photos/400/300?random=10',
    'https://picsum.photos/400/300?random=11',
    'https://picsum.photos/400/300?random=12',
    'https://picsum.photos/400/300?random=13',
    'https://picsum.photos/400/300?random=14',
    'https://picsum.photos/400/300?random=15',
    'https://picsum.photos/400/300?random=16',
    'https://picsum.photos/400/300?random=17',
    'https://picsum.photos/400/300?random=18',
    'https://picsum.photos/400/300?random=19',
    'https://picsum.photos/400/300?random=20',
    'https://picsum.photos/400/300?random=21',
    'https://picsum.photos/400/300?random=22',
    'https://picsum.photos/400/300?random=23',
    'https://picsum.photos/400/300?random=24',
    'https://picsum.photos/400/300?random=25',
    'https://picsum.photos/400/300?random=26',
    'https://picsum.photos/400/300?random=27',
    'https://picsum.photos/400/300?random=28',
    'https://picsum.photos/400/300?random=29',
    'https://picsum.photos/400/300?random=30',
    'https://picsum.photos/400/300?random=31',
    'https://picsum.photos/400/300?random=32',
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
        img.style.opacity = '0.8'
        img.style.transform = 'scale3d(1, 1, 1)'
      }

      const handleMouseLeave = () => {
        showTimeout = setTimeout(() => {
          img.classList.add('fade-out')
          img.style.opacity = '0'
          img.style.transform = 'scale3d(0.3, 0.3, 1)'
        }, 1000)
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
      <div className="abs-gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="hover-gallery-image-wrapper">
            <img 
              alt={`Studio gallery ${index + 1}`}
              className="hover-img" 
              loading="lazy"
              src={img}
            />
          </div>
        ))}
      </div>

      <div className="service-hero-con">
        <div className="section-title in-service">STUDIO SNAPSHOT.</div>
        
        <p className="service-hero-heading">
          Studio500 is a premium, production-ready studio<br />
          floor designed for brands, creators, agencies, and film <br />
          teams who need a reliable space with smooth <br />
          workflows from pre-production to final delivery.
        </p>

        <div className="studio-details">
          <p className="studio-intro">
            A production-ready space built for creators, brands, and teams who need speed + quality.
          </p>
          
          <ul className="studio-features">
            <li>✓ Total Studio: 600 sq.ft</li>
            <li>✓ Production Floor: 500 sq.ft</li>
            <li>✓ In-built Green Room: Makeup + costume change</li>
            <li>✓ 10 In-built Setups: For podcasts and content creation</li>
          </ul>
        </div>
      </div>

      <a href="#" className="primary-btn in-service" target="_blank" rel="noopener noreferrer">
        <div className="link-hover">
          <div className="link-inner yellow">
            <div className="button-text">Get Started</div>
          </div>
          <div className="link-inner-hover yellow">
            <div className="button-text">Get Started</div>
          </div>
        </div>
      </a>
    </section>
  )
}

export default StudioSnapshot
