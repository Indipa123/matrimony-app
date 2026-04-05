const steps = [
  {
    icon: '📝',
    title: 'Create Your Profile',
    desc: 'Register for free and build a complete profile with your photo, education, profession and preferences.',
  },
  {
    icon: '🔍',
    title: 'Browse & Search',
    desc: 'Use advanced filters to find matches by religion, ethnicity, location, age, and more.',
  },
  {
    icon: '💬',
    title: 'Connect & Chat',
    desc: 'Express interest, send messages, and get to know your potential match in a safe environment.',
  },
  {
    icon: '💍',
    title: 'Meet & Marry',
    desc: 'Meet in person with family approval and begin your beautiful journey to a happy marriage.',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" style={{ background: '#FFFAF5', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(27,87,118,0.1)',
          color: '#1B5776',
          borderRadius: '50px',
          padding: '5px 18px',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>Simple Steps</span>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          color: '#0C2537',
          fontFamily: 'Georgia, serif',
          marginBottom: '0.75rem',
        }}>How It Works</h2>
        <p style={{ color: '#143E57', opacity: 0.8, fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
          Finding your life partner is easy with API BADIMU.lk
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '2rem',
      }}>
        {steps.map((step, index) => (
          <div key={step.title} style={{
            background: '#FFFAF5',
            border: '1.5px solid #F9F1E6',
            borderRadius: '20px',
            padding: '2.5rem 1.75rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(12,37,55,0.07)',
            position: 'relative',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(12,37,55,0.13)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(12,37,55,0.07)'; }}
          >
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #0C2537, #1B5776)',
              color: '#FFF4D5',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 700,
            }}>{index + 1}</div>

            <div style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>{step.icon}</div>
            <h3 style={{ color: '#0C2537', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{step.title}</h3>
            <p style={{ color: '#143E57', fontSize: '0.92rem', lineHeight: 1.65, opacity: 0.85 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
