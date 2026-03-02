import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import './FashionShoot.css'

export default function FashionShoot() {
  const plans = [
    {
      id: '01',
      tag: 'Plan A',
      name: 'Half Day',
      target: '4 Hours · AC Indoor Studio Setup',
      duration: '4 hrs',
      price: '₹12,000 – ₹18,000',
      features: [
        { text: '1 Cameraman + Camera', highlight: true },
        { text: '15–25 Edited Images Inclusive', highlight: true },
        { text: 'Edited + Original Photos' },
        { text: 'Own Costume (Up to 2)' },
        { text: 'AC Studio Indoor Setup' },
        { text: 'Makeup Room & Changing Room' }
      ]
    },
    {
      id: '02',
      tag: 'Plan B',
      name: 'Full Day',
      target: '8 Hours · AC Indoor Studio Setup',
      duration: '8 hrs',
      price: '₹20,000 – ₹30,000',
      features: [
        { text: '1 Cameraman + Camera', highlight: true },
        { text: '30–40 Edited Images Inclusive', highlight: true },
        { text: 'Edited + Original Photos' },
        { text: 'Own Costume (Up to 4)' },
        { text: 'AC Studio Indoor Setup' },
        { text: 'Makeup Room & Changing Room' },
        { text: 'Shoot Guidance with Catalogue for Poses', highlight: true }
      ],
      badge: 'Best Value — Full Day'
    }
  ]

  return (
    <>
      <Navbar />
      <section className="fashion-section">
      <div className="fashion-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="fashion-tag"
        >
          Part D — Fashion Shoot Packages
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Fashion<br /><span>Shoot</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="fashion-sub"
        >
          Professional fashion photography for brands, designers & e-commerce.<br /> Half day and full day packages with 1 cameraman, edited images, and complete studio access. All prices + GST.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="who-banner"
      >
        <span className="who-label">Who?</span>
        <span className="who-value">Fashion Shoot — Brands / Designers / E-commerce</span>
      </motion.div>

      <div className="fashion-grid">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="fashion-card"
          >
            <div className="card-number">{plan.id}</div>
            <span className={`plan-tag ${plan.tag === 'Plan A' ? 'tag-a' : 'tag-b'}`}>{plan.tag}</span>
            <div className="card-set">Fashion Shoot</div>
            <h3 className="card-name">{plan.name}</h3>
            <div className="card-target">{plan.target}</div>
            <div className="card-meta">
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{plan.duration}</span>
              </div>
              <div>
                <span className="meta-label">Investment</span>
                <span className="meta-price">{plan.price}</span>
              </div>
            </div>
            <div className="gst-note">+ GST</div>
            <div className="section-divider">
              <span className="divider-label">Includes</span>
              <span className="divider-line"></span>
            </div>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i} className={feature.highlight ? 'highlight' : ''}>{feature.text}</li>
              ))}
            </ul>
            {plan.badge && <span className="delivery-badge">{plan.badge}</span>}
            <a 
              className="enquiry-btn" 
              href={`https://wa.me/919980687439?text=Hi%2C%20I%20am%20interested%20in%20the%20Fashion%20Shoot%20${plan.tag}%20%E2%80%94%20${plan.name}%20${plan.price}.%20Please%20share%20more%20details.`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              ENQUIRE ON WHATSAPP
            </a>
          </motion.div>
        ))}
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
