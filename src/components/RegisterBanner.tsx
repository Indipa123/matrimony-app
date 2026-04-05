const RegisterBanner = () => (
  <section style={{
    background: 'linear-gradient(135deg, #0C2537 0%, #143E57 50%, #1B5776 100%)',
    padding: '5rem 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '-60px', right: '-60px',
      width: '250px', height: '250px', borderRadius: '50%',
      background: 'rgba(255,244,213,0.07)',
    }} />
    <div style={{
      position: 'absolute', bottom: '-40px', left: '-40px',
      width: '180px', height: '180px', borderRadius: '50%',
      background: 'rgba(255,244,213,0.05)',
    }} />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💍</div>
      <h2 style={{
        color: '#FFFAF5', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800, fontFamily: 'Georgia, serif', marginBottom: '1rem',
      }}>
        Begin Your Journey to <span style={{ color: '#FFF4D5' }}>Forever</span>
      </h2>
      <p style={{ color: '#F9F1E6', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', opacity: 0.9 }}>
        Join over 50,000 members who found their life partner through API BADIMU.lk.
        Register today — it's completely free!
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button style={{
          background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)',
          color: '#0C2537', border: 'none', borderRadius: '50px',
          padding: '14px 40px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(255,244,213,0.3)',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,244,213,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,244,213,0.3)'; }}
        >Register as Bride</button>
        <button style={{
          background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)',
          color: '#0C2537', border: 'none', borderRadius: '50px',
          padding: '14px 40px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(255,244,213,0.3)',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,244,213,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,244,213,0.3)'; }}
        >Register as Groom</button>
      </div>
    </div>
  </section>
);

export default RegisterBanner;
