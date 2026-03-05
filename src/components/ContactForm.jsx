import React from 'react'
import Navbar from './Navbar'
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
                Tell us about your project.<br /> We&apos;ll get back to you within 24 hours.
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
                <a href="tel:+916366623955">+91 63666 23955</a>
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

          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
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
                  <option value="">Choose a service</option>
                  <option value="studios">Studio Rental</option>
                  <option value="podcast">Podcast Shoot</option>
                  <option value="fashion-shoot">Fashion Shoot</option>
                  <option value="fashion-shoot">Green Screen Shoot</option>
                  <option value="product-shoot">Other Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
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
        <div className="footer-inner">
          <div className="footer-bar">
            <p className="footer-credits">© 2026 All rights reserved by{' '}
              <a
                href="https://www.nearbystudio.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault()
                  window.open('https://www.nearbystudio.in/', '_blank', 'noopener,noreferrer')
                }}
              >
                nearby studio
              </a>{' '}| Developed & Owned by{' '}<a href="https://sripadastudios.com/" target="_blank" rel="noopener noreferrer">
                Sripada Studios
              </a>
            </p>
            <div className="footer-navbar-wrap">
              <Navbar />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
