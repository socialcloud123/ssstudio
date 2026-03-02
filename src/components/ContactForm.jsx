import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <section id="contact-form" className="contact-form-section bg-[#0f0f12]">
      <div className="contact-form-container">
        {/* Left Side - Company Info */}
        <div className="contact-info">
          <h2 className="contact-form-title text-[#f5f5f3]/80">
            Let's work <span className="text-[#00C2A8]">together.</span>
          </h2>
          
          <div className="contact-email">
            <span className="email-icon">✉</span>
            <a href="mailto:connect@nearbystudio.in">connect@nearbystudio.in</a>
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
