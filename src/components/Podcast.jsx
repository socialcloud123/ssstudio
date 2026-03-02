import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import './Podcast.css'

export default function Podcast() {
  const [activePart, setActivePart] = useState('a')

  const packages = {
    a: [
      {
        id: '00',
        name: 'Custom Setup',
        set: 'Beginner',
        target: 'All Audiences • You Decide',
        duration: '2 hrs',
        price: '₹3,499',
        features: ['AC Studio access', 'Premium sofas', 'Makeup & Changing Room', 'Sound-treated room for clean audio'],
        custom: true
      },
      {
        id: '01',
        name: 'The Founders Room',
        set: 'Set 1 — Part A',
        target: 'Founders & Startup Owners',
        duration: '2.5 hrs',
        price: '₹24,999',
        features: ['1 Camera Setup', '40 min podcast', '3 Reels edited', 'Basic colour correction, graphics & editing', 'Basic inserts • 1 Iteration', '2 Colour or Podcast Mics', '2 Rotation Chairs • White Table', '1 Sofa • Tea Tables • Plane Frame']
      },
      {
        id: '02',
        name: 'Round Table Conference',
        set: 'Set 2 — Part A',
        target: 'Corporate Heads',
        duration: '2.5 hrs',
        price: '₹54,999',
        features: ['1 Round Table • Up to 4 Guests', '4 Rotating Chairs', '3 Camera Setup', 'Premium lighting • 4 Colour Mics', '4 Reels <90 sec each • 1 Hook Teaser', '40–60 min Podcast • Podcast Switcher', '1 Iteration'],
        delivery: '7 Days'
      },
      {
        id: '03',
        name: 'The Social Podcast',
        set: 'Set 3 — Part A',
        target: 'Influencers & Content Creators',
        duration: '2.5 hrs',
        price: '₹24,999',
        features: ['1 Camera Setup', '40 min podcast', '3 Reels edited', 'Basic colour correction, graphics & editing', 'Basic inserts • 1 Iteration', '2 Colour or Podcast Mics', '2 Rotation Chairs • White Table', '1 Sofa • Tea Tables • Plane Frame']
      },
      {
        id: '04',
        name: 'Your Coffee Show',
        set: 'Set 4 — Part A',
        target: 'Brands',
        duration: '2.5 hrs',
        price: '₹54,999',
        features: ['Coffee Table Setup', 'Floor Mat • Logo Placement • Artificial Props', '2–3 Guests — 2-Seater Sofa + Premium Chair', '3 Camera Setup', 'Premium Lighting • 2–3 Colour Mics', '4 Reels <90 sec each • 1 Hook Teaser', '40–60 min Show • Podcast Switcher', '1 Iteration'],
        delivery: '7 Days'
      }
    ],
    b: [
      {
        id: '05',
        name: 'The Founders Room — 2',
        set: 'Set 5 — Part B',
        target: 'Founders & Startup Owners',
        duration: '2.5 hrs',
        price: '₹34,999',
        features: ['3 Camera Setup', 'Podcast Switcher', '5 Reels <90 sec each', '30–40 min Podcast (up to 1 hr)', 'Basic colour correction, graphics & editing', 'Basic inserts • 1 Iteration', '2 Colour or Podcast Mics', '2 Rotation Chairs • White Table • Sofa']
      },
      {
        id: '06',
        name: 'Organic Podcast Setup',
        set: 'Set 6 — Part B',
        target: 'Corporate Series',
        duration: '2.5 hrs',
        price: '₹34,999',
        features: ['2 People on Organic Sofa', 'Coffee Table • Two Individual Sofas', '3 Camera Setup', 'Premium Lighting • 2 Colour Mics', '4 Reels <90 sec each', '1 Hook Teaser • 1.5 hr Podcast', 'Podcast Switcher • 1 Iteration'],
        delivery: '7 Days'
      },
      {
        id: '07',
        name: 'The Social Podcast — 2',
        set: 'Set 7 — Part B',
        target: 'Influencers & Content Creators',
        duration: '2.5 hrs',
        price: '₹34,999',
        features: ['3 Camera Setup', 'Podcast Switcher', '5 Reels <90 sec each', '30–40 min Podcast (up to 1 hr)', 'Basic colour correction, graphics & editing', 'Basic inserts • 1 Iteration', '2 Colour or Podcast Mics', '2 Rotation Chairs • White Table • Sofa']
      }
    ],
    c: [
      {
        id: '08',
        name: 'Pitch Podcast Setup',
        set: 'Part C — Corporate Series',
        target: 'Corporate — 2 People',
        duration: '2.5 hrs',
        price: '₹34,999',
        features: ['2 People — Individual Sofas', '1 Coffee Table', '3 Camera Setup', 'Premium Lighting', '2 Colour Mics', '4 Reels <90 sec each', '1 Hook Teaser • 1.5 hr Podcast', 'Podcast Switcher • 1 Iteration'],
        delivery: '7 Days'
      }
    ]
  }

  return (
    <>
      <Navbar />
      <section className="podcast-section">
      <div className="podcast-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="podcast-tag"
        >
          Podcast Studio — Pricing 2026
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Studio<br /><span>Packages</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="podcast-sub"
        >
          Professional podcast studio packages for founders, corporates, influencers, and brands. Pick your setup. Show up. Ship it.
        </motion.p>
      </div>

      <div className="section-tabs">
        {['a', 'b', 'c'].map((part, i) => (
          <div 
            key={part}
            className={`section-tab ${activePart === part ? 'active' : ''}`}
            onClick={() => setActivePart(part)}
          >
            <span className="tab-letter">{part.toUpperCase()}</span>
            <div className="tab-meta">
              <span className="tab-label">
                {i === 0 ? 'Entry — Mid Tier' : i === 1 ? 'Mid — Pro Tier' : 'Corporate Series'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="packages-grid">
        {packages[activePart].map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`package-card ${pkg.custom ? 'custom' : ''}`}
          >
            <div className="card-number">{pkg.id}</div>
            <div className="card-set">{pkg.set}</div>
            <h3 className="card-name">{pkg.name}</h3>
            <div className="card-target">{pkg.target}</div>
            <div className="card-meta">
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{pkg.duration}</span>
              </div>
              <div>
                <span className="meta-label">Investment</span>
                <span className="meta-price">{pkg.price}</span>
              </div>
            </div>
            <ul className="features">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {pkg.custom && <span className="custom-badge">Fully Customisable</span>}
            {pkg.delivery && <span className="delivery-badge">Delivery: {pkg.delivery}</span>}
            <a 
              className="enquiry-btn" 
              href="https://wa.me/919980687439?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20studio%20session.%20Please%20share%20more%20details." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ENQUIRE ON WHATSAPP
            </a>
          </motion.div>
        ))}
      </div>
    </section>
      <ContactForm />
    </>
  )
}
