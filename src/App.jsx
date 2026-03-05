import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';

// Critical components - load immediately (above fold)
import Navbar from './components/Navbar';
import Hero_1 from './components/Hero_1';

// Lazy load below-the-fold components
const Hero = lazy(() => import('./components/Hero'));
const StudioSnapshot = lazy(() => import('./components/StudioSnapshot'));
const Services = lazy(() => import('./components/Services'));
const OurSpaces = lazy(() => import('./components/OurSpaces'));
const WhyStudio = lazy(() => import('./components/WhyStudio'));
const ImageGallery = lazy(() => import('./components/ImageGallery'));
const CompanyInfo = lazy(() => import('./components/CompanyInfo'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Podcast = lazy(() => import("./components/Podcast"));
const Studios = lazy(() => import("./components/Studios"));
const FashionShoot = lazy(() => import("./components/FashionShoot"));
const GreenScreen = lazy(() => import("./components/GreenScreen"));

// Optimized loading fallback
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '50vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'transparent'
  }}>
    <div style={{ 
      color: '#00C2A8', 
      fontSize: '1.2rem',
      fontWeight: '600'
    }}>Loading...</div>
  </div>
);

function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1333] via-[#0f0f1f] to-black">
      <Navbar />
      <Hero_1 />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <StudioSnapshot />
        <Services />
        <OurSpaces />
        <WhyStudio />
        <ImageGallery />
        <CompanyInfo />
        <ContactSection />
        <ContactForm />
      </Suspense>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactSection />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/fashionshoot" element={<FashionShoot />} />
          <Route path="/greenscreenshoot" element={<GreenScreen />} />
          <Route path="/Podcast" element={<Navigate to="/podcast" replace />} />
          <Route path="/Studios" element={<Navigate to="/studios" replace />} />
          <Route path="/FashionShoot" element={<Navigate to="/fashionshoot" replace />} />
          <Route path="/GreenScreenShoot" element={<Navigate to="/greenscreenshoot" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
