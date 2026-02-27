import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log('🎬 Video element:', video)
    console.log('🔇 Is muted?', video.muted)
    console.log('📁 Video src:', video.currentSrc)
    console.log('▶️ Ready state:', video.readyState)

    // Try to play after a short delay
    const playVideo = async () => {
      try {
        video.muted = true // Force mute
        await video.play()
        console.log('✅ Video playing successfully')
      } catch (error) {
        console.error('❌ Autoplay failed:', error)
        console.log('Trying manual play...')
        // If autoplay fails, try again after user interaction
        document.addEventListener('click', () => {
          video.play().catch(e => console.log('Manual play failed:', e))
        }, { once: true })
      }
    }

    if (video.readyState >= 3) {
      playVideo()
    } else {
      video.addEventListener('loadeddata', playVideo)
    }

    return () => {
      video.removeEventListener('loadeddata', playVideo)
    }
  }, [])

  return (
    <div className="hero-section">
      {/* Video background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
        preload="auto"
        webkit-playsinline="true"
        onLoadedData={() => console.log("📺 Video data loaded")}
        onError={(e) => console.log("❌ Video error:", e.target.error)}
        onCanPlay={() => console.log("✅ Video can play")}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="hero-title">
        <h1 className="hero-heading">
          <span className="hero-main-title">STUDIO 500</span>
          <br />
          <span>End-to-End Production</span>
          <br />
          <span>A Studio Floor in the Heart of Namma Bengaluru</span>
        </h1>
      </section>

      <section className="hero-services">
        <div className="services-container">
          <p className="services-text">
            Podcasts • Product Photoshoots • Model Photography • Content Creations • Green Screen Shoots • Ad Films • Product Films • Fashion • Reels & Social • OTT Promos and many more.
          </p>
        </div>
      </section>

      <section className="hero-cta">
        <div className="cta-buttons">
          <a href="#book" className="cta-button">
            Book a Studio Visit
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="cta-button">
            Check Availability (WhatsApp)
          </a>
        </div>
      </section>

      <section className="hero-footer">
        <div className="footer-spacer"></div>
      </section>
    </div>
  )
}

export default Hero
