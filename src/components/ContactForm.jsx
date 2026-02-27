import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-container">
        {/* Left Side - Company Info */}
        <div className="contact-info">
          <h2 className="contact-form-title">
            Let's work <span className="highlight-text">together.</span>
          </h2>
          <p className="contact-description">
            I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          <div className="contact-email">
            <span className="email-icon">✉</span>
            <a href="mailto:studio500@sripadastudios.com">studio500@sripadastudios.com</a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
