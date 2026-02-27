import React, { useEffect, useRef } from 'react'
import './OurSpaces.css'

function OurSpaces() {
  const sectionRef = useRef(null)

  const spaces = [
    {
      id: '01',
      name: 'Podcast Shoots',
      description: 'Multi-format podcast recording, talk shows, interviews, reels-friendly angles.',
      leftImg: 'https://picsum.photos/800/600?random=33',
      rightImg: 'https://picsum.photos/800/600?random=34'
    },
    {
      id: '02',
      name: 'Product Photoshoots',
      description: 'Clean product frames, ecommerce-ready shots, brand creatives.',
      leftImg: 'https://picsum.photos/800/600?random=35',
      rightImg: 'https://picsum.photos/800/600?random=36'
    },
    {
      id: '03',
      name: 'Model Photography',
      description: 'Fashion, portfolio shoots, campaign-ready imagery.',
      leftImg: 'https://picsum.photos/800/600?random=37',
      rightImg: 'https://picsum.photos/800/600?random=38'
    },
    {
      id: '04',
      name: 'Content Creation',
      description: 'Reels, YouTube, brand videos, educational content, creator formats.',
      leftImg: 'https://picsum.photos/800/600?random=39',
      rightImg: 'https://picsum.photos/800/600?random=40'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const setHolders = sectionRef.current?.querySelectorAll('.set-holder')
      if (!setHolders) return

      setHolders.forEach((holder) => {
        const rect = holder.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight * 0.8)
        ))

        const leftImg = holder.querySelector('.set-img-con.left')
        const rightImg = holder.querySelector('.set-img-con.right')

        if (leftImg && rightImg) {
          // Start from center and move outward
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

    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="sets-section" ref={sectionRef}>
      <div className="home-title-container">
        <div className="section-title home-horizontal-title left">Our Spaces</div>
        <h2 className="section-heading white-title">
          Our versatile studio spaces include everything you need for your next project, all in one location.
        </h2>
      </div>

      <div className="sets-con">
        {spaces.map((space) => (
          <div key={space.id} className="set-holder">
            <div className="set-img-con left">
              <img 
                alt={space.name} 
                className="set-img" 
                loading="lazy"
                src={space.leftImg}
              />
            </div>

            <div className="set-text-con">
              <div className="section-title home-horizontal-title in-set">{space.id}</div>
              <div className="set-name">{space.name}</div>
              <p className="set-description">{space.description}</p>
            </div>

            <div className="set-img-con right">
              <img 
                alt={space.name} 
                className="set-img" 
                loading="lazy"
                src={space.rightImg}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurSpaces
