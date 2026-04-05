import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Browse', href: '#browse-profiles' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  return (
    <nav style={{
      background: '#0C2537',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
    }}>
      {/* Logo */}
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <img src="/logo.png" alt="API BADIMU.lk" style={{ height: '46px', width: '46px', objectFit: 'contain' }} />
        <span style={{
          color: '#FFFAF5', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Georgia, serif',
        }}>API BADIMU<span style={{ color: '#FFF4D5' }}>.lk</span></span>
      </a>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map(link => (
          <a key={link.label} href={link.href} style={{
            color: '#F9F1E6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFF4D5'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#F9F1E6'; }}
          >{link.label}</a>
        ))}

        {/* Language toggle */}
        <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,244,213,0.1)', borderRadius: '20px', padding: '3px' }}>
          {['EN', 'SI', 'TA'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: lang === l ? '#FFF4D5' : 'transparent',
              color: lang === l ? '#0C2537' : '#F9F1E6',
              border: 'none', borderRadius: '16px', padding: '4px 10px',
              fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
            }}>{l}</button>
          ))}
        </div>

        <button style={{
          background: 'transparent', color: '#F9F1E6', border: '1.5px solid rgba(249,241,230,0.5)',
          borderRadius: '25px', padding: '7px 18px', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#F9F1E6'; e.currentTarget.style.background = 'rgba(255,244,213,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(249,241,230,0.5)'; e.currentTarget.style.background = 'transparent'; }}
        >Login</button>

        <button style={{
          background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)',
          color: '#0C2537', border: 'none', borderRadius: '25px',
          padding: '8px 20px', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >Register Free</button>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        background: 'none', border: 'none', cursor: 'pointer', display: 'none',
        flexDirection: 'column', gap: '5px', padding: '4px',
      }} className="hamburger">
        {[0, 1, 2].map(i => (
          <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: '#FFFAF5', borderRadius: '2px' }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '70px', left: 0, right: 0,
          background: '#143E57', padding: '1.25rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ color: '#FFFAF5', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}
            >{link.label}</a>
          ))}
          <div style={{ display: 'flex', gap: '8px', marginTop: '0.5rem' }}>
            <button style={{ flex: 1, background: 'transparent', color: '#F9F1E6', border: '1.5px solid rgba(249,241,230,0.5)', borderRadius: '25px', padding: '10px', fontWeight: 600, cursor: 'pointer' }}>Login</button>
            <button style={{ flex: 1, background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)', color: '#0C2537', border: 'none', borderRadius: '25px', padding: '10px', fontWeight: 700, cursor: 'pointer' }}>Register Free</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
