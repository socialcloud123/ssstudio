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
        video.muted = true
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
        className="hero-video object-contain"
        preload="auto"
        webkit-playsinline="true"
        onLoadedData={() => console.log("📺 Video data loaded")}
        onError={(e) => console.log("❌ Video error:", e.target.error)}
        onCanPlay={() => console.log("✅ Video can play")}
      >
        <source src="/Nearby studio_Studio_tour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        </div>
  )
}

export default Hero
