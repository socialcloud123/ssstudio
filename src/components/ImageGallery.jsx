import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ImageGallery() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const images = [
    { src: '/ImageGallery/Brown_Setup_1 1.png', id: '_4' },
    { src: '/ImageGallery/Brown_Setup_1 3.png', id: '_3' },
    { src: '/ImageGallery/Brown_Setup_1 5.png', id: '_2' },
    // { src: '/ImageGallery/Brown_Setup_1 6.png', id: '_1' },
    { src: '/ImageGallery/nearby studio_pitch.png', id: '_1' },
  ]

  const getPositionStyle = (id, index) => {
    const baseStyle = {
      position: 'absolute',
      borderRadius: '16px',
      overflow: 'hidden',
    }

    if (isMobile) {
      // Mobile: Stack vertically
      return {
        ...baseStyle,
        width: '85%',
        height: '35%',
        left: '50%',
        top: `${5 + index * 18}%`,
        x: '-50%',
        zIndex: 40 - index,
      }
    }

    // Desktop: Original overlapping layout
    switch(id) {
      case '_4': return { ...baseStyle, width: '45%', height: '40%', top: '5%', left: '50%', x: '-50%', zIndex: 40 }
      case '_3': return { ...baseStyle, width: '45%', height: '40%', top: '25%', left: '5%', zIndex: 30 }
      case '_2': return { ...baseStyle, width: '45%', height: '40%', top: '25%', right: '5%', zIndex: 30 }
      case '_1': return { ...baseStyle, width: '45%', height: '40%', bottom: '5%', left: '50%', x: '-50%', zIndex: 20 }
      default: return baseStyle
    }
  }

  return (
    <section 
      ref={containerRef} 
      style={{ position: 'relative', height: '400vh', backgroundColor: '#0F0F12' }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100%', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem'
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '80vh', maxWidth: '1280px' }}>
          
          {images.map((img, index) => {
            const start = 0.1 + (index * 0.15)
            const end = start + 0.25

            const y = useTransform(scrollYProgress, [start, end], ["0%", "-150%"])
            const opacity = useTransform(scrollYProgress, [start + 0.1, end], [1, 0])
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.9])

            return (
              <motion.div
                key={img.id}
                style={{ 
                  ...getPositionStyle(img.id, index),
                  y, 
                  opacity,
                  scale,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
                }}
              >
                <img 
                  src={img.src} 
                  alt="Gallery" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </motion.div>
            )
          })}

          {/* Text Reveal */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              opacity: useTransform(scrollYProgress, [0.7, 0.85], [0, 1]),
              y: useTransform(scrollYProgress, [0.7, 0.9], [50, 0]),
              padding: '0 1rem',
            }}
          >
            <h2 style={{ 
              color: '#F5F5F3', 
              fontSize: isMobile ? 'clamp(1.5rem, 8vw, 3rem)' : '4rem',
              fontWeight: 800, 
              textAlign: 'center',
              lineHeight: 1.2,
            }}>
              AMENITIES & FEATURES
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
