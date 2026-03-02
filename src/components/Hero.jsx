import { useEffect, useRef, memo } from 'react'
import './Hero.css'

const Hero = memo(() => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        video.muted = true
        await video.play()
      } catch (error) {
        document.addEventListener('click', () => {
          video.play().catch(() => {})
        }, { once: true })
      }
    }

    if (video.readyState >= 3) {
      playVideo()
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true })
    }
  }, [])

  return (
    <div className="hero-section">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video object-contain"
        preload="metadata"
        webkit-playsinline="true"
      >
        <source src="/Nearby studio_Studio_tour.mp4" type="video/mp4" />
      </video>
    </div>
  )
})

Hero.displayName = 'Hero'

export default Hero
