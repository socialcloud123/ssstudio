import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './components/Navbar';
import Hero_1 from './components/Hero_1';
import Hero from './components/Hero';
import StudioSnapshot from './components/StudioSnapshot';
import Services from './components/Services';
import OurSpaces from './components/OurSpaces';
import WhyStudio from './components/WhyStudio';
import ImageGallery from './components/ImageGallery';
import CompanyInfo from './components/CompanyInfo';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import Podcast from "./components/Podcast";
import Studios from "./components/Studios";
import FashionShoot from "./components/FashionShoot";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1333] via-[#0f0f1f] to-black">
      <Navbar />
      <Hero_1 />
      <Hero />
      <StudioSnapshot />
      <Services />
      <OurSpaces />
      <WhyStudio />
      <ImageGallery />
      <CompanyInfo />
      <ContactSection />
      <ContactForm />
      <SpeedInsights />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactSection />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Studios" element={<Studios />} />
        <Route path="/FashionShoot" element={<FashionShoot />} />
      </Routes>
    </Router>
  );
}

export default App;