import Navbar from './Navbar'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1333] via-[#0f0f1f] to-black text-white">
      <Navbar />
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '180px 24px 80px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
          This page describes how Nearby Studio and Sripada Studios collect, use, and protect your information when you contact us or use our website. For official requests, contact us at photography@sripadastudios.in.
        </p>
      </section>
    </main>
  )
}
