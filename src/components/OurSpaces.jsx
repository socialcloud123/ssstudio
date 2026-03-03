import React, { useEffect, useRef, memo, useCallback } from 'react'
import './OurSpaces.css'
import { throttle } from '../utils/performance'

const OurSpaces = memo(() => {
  const sectionRef = useRef(null)

  const spaces = [
    {
      id: '01',
      name: 'Podcast Shoots',
      description: 'Multi-format podcast recording, talk shows, interviews, reels-friendly angles.',
      leftImg: '/Snapshots/Podcast.png',
      rightImg: '/Snapshots/Podcast (1).png'
    },
    {
      id: '02',
      name: 'Product Photoshoots',
      description: 'Clean product frames, ecommerce-ready shots, brand creatives.',
      leftImg: '/Snapshots/Product.png',
      rightImg: '/Snapshots/Product (1).png'
    },
    {
      id: '03',
      name: 'Model Photography',
      description: 'Fashion, portfolio shoots, campaign-ready imagery.',
      leftImg: '/Snapshots/Model (1).png',
      rightImg: '/Snapshots/Model (3).png'
    },
    {
      id: '04',
      name: 'Content Creation',
      description: 'Reels, YouTube, brand videos, educational content, creator formats.',
      leftImg: '/Snapshots/Desktop.png',
      rightImg: '/Snapshots/Content.png'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const setHolders = sectionRef.current?.querySelectorAll('.set-holder')
      if (!setHolders) return

      setHolders.forEach((holder) => {
        const rect = holder.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight * 0.8)
        ))

        const leftImg = holder.querySelector('.set-img-con.left')
        const rightImg = holder.querySelector('.set-img-con.right')

        if (leftImg && rightImg) {
          const translateX = (1 - scrollProgress) * 40
          const rotate = (1 - scrollProgress) * -5

          leftImg.style.transform = `translate3d(${translateX}vw, 0px, 0px) rotateZ(${rotate}deg)`
          rightImg.style.transform = `translate3d(${-translateX}vw, 0px, 0px) rotateZ(${-rotate}deg)`
        }
      })
    }

    const handleMouseMove = (e) => {
      const images = sectionRef.current?.querySelectorAll('.set-img-con')
      if (!images) return

      const moveX = (e.clientX / window.innerWidth - 0.5) * 10

      images.forEach((img) => {
        const currentTransform = img.style.transform || ''
        const translateMatch = currentTransform.match(/translate3d\(([^,]+)/)
        const rotateMatch = currentTransform.match(/rotateZ\(([^)]+)/)
        
        const baseTranslate = translateMatch ? translateMatch[1] : '0px'
        const baseRotate = rotateMatch ? rotateMatch[1] : '0deg'

        if (img.classList.contains('left')) {
          img.style.transform = `translate3d(calc(${baseTranslate} + ${moveX}px), 0px, 0px) rotateZ(${baseRotate})`
        } else if (img.classList.contains('right')) {
          img.style.transform = `translate3d(calc(${baseTranslate} + ${-moveX}px), 0px, 0px) rotateZ(${baseRotate})`
        }
      })
    }

    const throttledScroll = throttle(handleScroll, 16)
    const throttledMouseMove = throttle(handleMouseMove, 16)

    handleScroll()
    window.addEventListener('scroll', throttledScroll, { passive: true })
    window.addEventListener('mousemove', throttledMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('mousemove', throttledMouseMove)
    }
  }, [])

  return (
    <section className="sets-section" ref={sectionRef}>
      <div className="home-title-container">
        <div className="eyebrow">Studio Blueprints</div>
        <div className="section-title home-horizontal-title left">Our Spaces</div>
      </div>

      <div className="sets-con">
        {spaces.map((space) => (
          <div key={space.id} className="set-holder">
            <div className="set-img-con left">
              <img 
                alt={space.name} 
                className="set-img" 
                loading="lazy"
                decoding="async"
                src={space.leftImg}
              />
            </div>

            <div className="set-text-con">
              <div className="set-name">{space.name}</div>
              <div className="set-divider" />
            </div>

            <div className="set-img-con right">
              <img 
                alt={space.name} 
                className="set-img" 
                loading="lazy"
                decoding="async"
                src={space.rightImg}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

OurSpaces.displayName = 'OurSpaces'

export default OurSpaces
