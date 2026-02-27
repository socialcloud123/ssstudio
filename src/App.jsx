import React from 'react'
import Hero from './components/Hero'
import StudioSnapshot from './components/StudioSnapshot'
import OurSpaces from './components/OurSpaces'
import WhyStudio from './components/WhyStudio'
import ImageGallery from './components/ImageGallery'
import CompanyInfo from './components/CompanyInfo'
import ContactSection from './components/ContactSection'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  return (
    <div className="app">
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
