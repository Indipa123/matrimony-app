const Footer = () => (
  <footer style={{ background: '#0C2537', color: '#F9F1E6', padding: '4rem 2rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
        marginBottom: '3rem',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <img src="/logo.png" alt="API BADIMU.lk" style={{ height: '44px', width: '44px', objectFit: 'contain' }} />
            <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Georgia, serif', color: '#FFFAF5' }}>
              API BADIMU<span style={{ color: '#FFF4D5' }}>.lk</span>
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7, opacity: 0.75, maxWidth: '240px' }}>
            Sri Lanka's most trusted matrimony platform. Connecting hearts since 2009.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '1.25rem' }}>
            {['f', 'in', 'tw'].map(s => (
              <div key={s} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,244,213,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 700, color: '#FFF4D5', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,244,213,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,244,213,0.1)'; }}
              >{s}</div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#FFF4D5', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h4>
          {['Home', 'Browse Profiles', 'How It Works', 'Success Stories', 'Premium Plans'].map(link => (
            <a key={link} href="#" style={{
              display: 'block', color: '#F9F1E6', textDecoration: 'none',
              fontSize: '0.88rem', marginBottom: '0.6rem', opacity: 0.75, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.75'; }}
            >{link}</a>
          ))}
        </div>

        {/* Support */}
        <div>
          <h4 style={{ color: '#FFF4D5', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</h4>
          {['Contact Us', 'Privacy Policy', 'Terms of Service', 'Safety Tips', 'FAQs'].map(link => (
            <a key={link} href="#" style={{
              display: 'block', color: '#F9F1E6', textDecoration: 'none',
              fontSize: '0.88rem', marginBottom: '0.6rem', opacity: 0.75, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.75'; }}
            >{link}</a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#FFF4D5', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h4>
          {[
            { icon: '📍', text: 'No. 45, Galle Road, Colombo 03' },
            { icon: '📞', text: '+94 11 234 5678' },
            { icon: '✉️', text: 'info@apibadimu.lk' },
            { icon: '🕐', text: 'Mon–Sat: 8am – 6pm' },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: 'flex', gap: '8px', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.85rem' }}>{icon}</span>
              <span style={{ fontSize: '0.85rem', opacity: 0.75, lineHeight: 1.5 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,244,213,0.12)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{ fontSize: '0.82rem', opacity: 0.6 }}>
          © 2025 API BADIMU.lk — All rights reserved.
        </p>
        <p style={{ fontSize: '0.82rem', opacity: 0.6 }}>
          Made with ♥ for Sri Lanka
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
