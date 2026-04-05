const features = [
  {
    icon: '🔒',
    title: 'Privacy & Security',
    desc: 'Your personal data is fully protected. Control who sees your profile and contact details at all times.',
    color: '#0C2537',
  },
  {
    icon: '✅',
    title: 'Verified Profiles',
    desc: 'Every profile is manually verified by our team. Connect with genuine, trustworthy members.',
    color: '#143E57',
  },
  {
    icon: '🕐',
    title: '7-Day Support',
    desc: 'Our dedicated team is available all 7 days a week to assist you via phone, WhatsApp, or in-person.',
    color: '#1B5776',
  },
  {
    icon: '💬',
    title: 'Unlimited Messaging',
    desc: 'Send unlimited interest requests and messages. No hidden limits or surprise charges.',
    color: '#0C2537',
  },
  {
    icon: '🌐',
    title: 'Multilingual',
    desc: 'Full support in Sinhala (සිංහල), Tamil (தமிழ்), and English for all communities.',
    color: '#143E57',
  },
  {
    icon: '🏆',
    title: 'Award Winning',
    desc: 'Recognized as Sri Lanka\'s leading matrimony platform with thousands of successful marriages.',
    color: '#1B5776',
  },
];

const WhyChooseUs = () => (
  <section style={{ background: '#FFFAF5', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(27,87,118,0.1)', color: '#1B5776',
          borderRadius: '50px', padding: '5px 18px',
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>Our Promise</span>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
          color: '#0C2537', fontFamily: 'Georgia, serif', marginBottom: '0.75rem',
        }}>Why Choose API BADIMU.lk?</h2>
        <p style={{ color: '#143E57', opacity: 0.8, fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          We combine tradition with technology to help you find your perfect life partner
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {features.map(f => (
          <div key={f.title} style={{
            display: 'flex', gap: '1.1rem', alignItems: 'flex-start',
            background: '#FFFAF5', border: '1.5px solid #F9F1E6',
            borderRadius: '16px', padding: '1.5rem',
            boxShadow: '0 2px 12px rgba(12,37,55,0.06)',
            transition: 'transform 0.25s, box-shadow 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(12,37,55,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(12,37,55,0.06)'; }}
          >
            <div style={{
              background: `${f.color}`, color: '#FFF4D5',
              borderRadius: '12px', padding: '12px', fontSize: '1.4rem',
              flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '52px', height: '52px',
            }}>{f.icon}</div>
            <div>
              <h3 style={{ color: '#0C2537', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>{f.title}</h3>
              <p style={{ color: '#143E57', fontSize: '0.88rem', lineHeight: 1.65, opacity: 0.85 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
