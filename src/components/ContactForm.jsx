import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <>
      <section id="contact-form" className="contact-form-section">
        <div className="contact-container">
          <div className="left-column">
            <div className="contact-left">
              <h1>Let&apos;s work together.</h1>
              <p>
                Tell us about your project. We&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-item">
                <span className="label">EMAIL</span>
                <a href="mailto:photography@sripadastudios.in">photography@sripadastudios.in</a>
              </div>

              <div className="divider" />

              <div className="contact-item">
                <span className="label">PHONE</span>
                <a href="tel:+919980687439">+91 99806 87439</a>
              </div>

              <div className="divider" />

              <div className="contact-item">
                <span className="label">ADDRESS</span>
                <p>
                  No:4/2, 1st Chord Road
                  <br />
                  Rajajinagar Industrial Town
                  <br />
                  Bengaluru, Karnataka 560010
                </p>
              </div>
            </div>

            <a href="#contact-form" className="contact-btn">
              Start a Project →
            </a>
          </div>

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
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="studios">Studios</option>
                  <option value="podcast">Podcast</option>
                  <option value="fashion-shoot">Fashion Shoot</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 All rights reserved by nearbystudio.in | Developed with passion by <a href="https://sripadastudios.com/" target="_blank" rel="noopener noreferrer">
    Sripada Studios
  </a></p>
      </footer>
    </>
  )
}
