import { useRef, useState, useEffect, memo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MOBILE_BREAKPOINT = 768

const IMAGES = [
  { src: '/ImageGallery/Brown_Setup_1 1.png', id: '_4' },
  { src: '/ImageGallery/Brown_Setup_1 3.png', id: '_3' },
  { src: '/ImageGallery/Brown_Setup_1 5.png', id: '_2' },
  { src: '/ImageGallery/nearby studio_pitch.png', id: '_1' },
]

function getDesktopPositionStyle(id) {
  const baseStyle = {
    position: 'absolute',
    borderRadius: '16px',
    overflow: 'hidden',
  }

  switch (id) {
    case '_4':
      return { ...baseStyle, width: '45%', height: '40%', top: '5%', left: '50%', x: '-50%', zIndex: 40 }
    case '_3':
      return { ...baseStyle, width: '45%', height: '40%', top: '25%', left: '5%', zIndex: 30 }
    case '_2':
      return { ...baseStyle, width: '45%', height: '40%', top: '25%', right: '5%', zIndex: 30 }
    case '_1':
      return { ...baseStyle, width: '45%', height: '40%', bottom: '5%', left: '50%', x: '-50%', zIndex: 20 }
    default:
      return baseStyle
  }
}

const AnimatedGalleryCard = memo(({ img, index, scrollYProgress }) => {
  const start = 0.1 + index * 0.15
  const end = start + 0.25

  const y = useTransform(scrollYProgress, [start, end], ['0%', '-150%'])
  const opacity = useTransform(scrollYProgress, [start + 0.1, end], [1, 0])
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9])

  return (
    <motion.div
      style={{
        ...getDesktopPositionStyle(img.id),
        y,
        opacity,
        scale,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
      }}
    >
      <img
        src={img.src}
        alt="Gallery"
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </motion.div>
  )
})

AnimatedGalleryCard.displayName = 'AnimatedGalleryCard'

const DesktopImageGallery = memo(() => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1])
  const headingY = useTransform(scrollYProgress, [0.7, 0.9], [50, 0])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '400vh',
        backgroundColor: '#0F0F12',
      }}
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
          padding: '0 1rem',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '80vh', maxWidth: '1280px' }}>
          {IMAGES.map((img, index) => (
            <AnimatedGalleryCard key={img.id} img={img} index={index} scrollYProgress={scrollYProgress} />
          ))}

          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              opacity: headingOpacity,
              y: headingY,
              padding: '0 1rem',
            }}
          >
            <h2
              style={{
                color: '#F5F5F3',
                fontSize: '4rem',
                fontWeight: 800,
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              AMENITIES & FEATURES
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

DesktopImageGallery.displayName = 'DesktopImageGallery'

const MobileImageGallery = memo(() => (
  <section
    style={{
      position: 'relative',
      backgroundColor: '#0F0F12',
      padding: '2rem 1rem 3rem',
    }}
  >
    <div style={{ maxWidth: '720px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
      {IMAGES.map((img) => (
        <div
          key={img.id}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          <img
            src={img.src}
            alt="Gallery"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', display: 'block', aspectRatio: '4 / 3', objectFit: 'cover' }}
          />
        </div>
      ))}

      <h2
        style={{
          color: '#F5F5F3',
          fontSize: 'clamp(1.5rem, 8vw, 3rem)',
          fontWeight: 800,
          textAlign: 'center',
          lineHeight: 1.2,
          marginTop: '0.5rem',
        }}
      >
        AMENITIES & FEATURES
      </h2>
    </div>
  </section>
))

MobileImageGallery.displayName = 'MobileImageGallery'

const ImageGallery = memo(() => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile ? <MobileImageGallery /> : <DesktopImageGallery />
})

ImageGallery.displayName = 'ImageGallery'

export default ImageGallery
