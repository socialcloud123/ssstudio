import Hero from './components/Hero'
import StudioSnapshot from './components/StudioSnapshot'
import OurSpaces from './components/OurSpaces'
import WhyStudio from './components/WhyStudio'
import ImageGallery from './components/ImageGallery'
import CompanyInfo from './components/CompanyInfo'
import ContactSection from './components/ContactSection'
import ContactForm from './components/ContactForm'
import './App.css'
import Hero_1 from './components/Hero_1'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1333] via-[#0f0f1f] to-black">
      <Navbar />
      <Hero_1 />
      <Hero />
      <StudioSnapshot />
      <OurSpaces />
      <WhyStudio />
      <ImageGallery />
      <CompanyInfo />
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default App
