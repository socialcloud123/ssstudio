import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import './Studios.css'
import './GreenScreen.css'

export default function GreenScreen() {
  const packageData = {
    id: '01',
    name: 'Green Screen Package',
    target: 'Full Day — 8 Hours',
    duration: '8 hrs',
    price: '₹9,999',
    extra: '₹999',
    features: [
      'AC 2 Ton',
      'Basic Lights Included',
      'Cafeteria Access',
      'WiFi',
      'Makeup Room',
      'Changing Room',
      'Cloth Ironing',
      'Chairs & Stools (up to 4)',
      'Tutorial Table / Product Shoot Table',
      'Sound Proof'
    ],
    badge: 'Best Value — Full Day'
  }

  return (
    <>
      <Navbar />
      <section className="studios-section greenscreen-section">
        <div className="studios-hero">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="studios-tag">
            Green Screen Studio — Pricing 2026
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Green Screen<br /><span>Package</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="studios-sub">
            Dedicated green screen setup for production shoots with full studio access.<br />
            All prices + GST · Sessions by appointment only
          </motion.p>
        </div>

        <div className="studios-grid greenscreen-grid">
          <motion.div
            key={packageData.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="studios-card"
          >
            <div className="card-number">{packageData.id}</div>
            <h3 className="card-name">{packageData.name}</h3>
            <div className="card-target">{packageData.target}</div>
            <div className="card-meta">
              <div><span className="meta-label">Duration</span><span className="meta-value">{packageData.duration}</span></div>
              <div><span className="meta-label">Investment</span><span className="meta-price">{packageData.price} <span className="meta-gst-inline">+GST</span></span></div>
            </div>
            <div className="gst-note">Extra Hour {packageData.extra}</div>
            <ul className="features">
              {packageData.features.map((feature, i) => (
                <li key={i} className={i < 2 ? 'highlight' : ''}>{feature}</li>
              ))}
            </ul>
            {packageData.badge && <span className="delivery-badge">{packageData.badge}</span>}
            <span className="delivery-badge">Delivery: 7 Days</span>
            <a className="enquiry-btn" href={`https://wa.me/916366623955?text=Hi%2C%20I%20am%20interested%20in%20${packageData.name}%20${packageData.price}.%20Please%20share%20more%20details.`} target="_blank" rel="noopener noreferrer">
              ENQUIRE ON WHATSAPP
            </a>
          </motion.div>
        </div>

        <div className="note-strip">
          <div className="note-icon">!</div>
          Bring your own storage device to copy the data · All prices + GST · Sessions by appointment only
        </div>
      </section>
      <ContactForm />
    </>
  )
}
