import { useState } from 'react';

const faqs = [
  {
    q: 'Is registration on API BADIMU.lk free?',
    a: 'Yes! Creating a basic profile is completely free. You can browse profiles and send a limited number of interest requests at no cost. Premium plans unlock unlimited messaging and advanced features.',
  },
  {
    q: 'How do you verify member profiles?',
    a: 'Our team manually reviews every profile submitted. We verify NIC / passport details and check photos to ensure all profiles are genuine. Verified members receive a blue tick badge.',
  },
  {
    q: 'Is my personal information private and secure?',
    a: 'Absolutely. You have full control over your privacy settings. Your phone number and personal contact details are hidden by default and only shared with your consent.',
  },
  {
    q: 'Can I search for members from specific religions or ethnicities?',
    a: 'Yes. Our advanced filters allow you to search by religion (Buddhist, Hindu, Christian, Islam), ethnicity (Sinhalese, Tamil, Burgher, Malay), location, age, profession, and more.',
  },
  {
    q: 'What is the difference between free and premium membership?',
    a: 'Free members can view profiles and send limited interests. Premium members enjoy unlimited messaging, priority profile placement, advanced search filters, and dedicated customer support.',
  },
  {
    q: 'How can I contact the API BADIMU.lk support team?',
    a: 'You can reach us via phone (+94 11 234 5678), WhatsApp, email (info@apibadimu.lk), or visit our Colombo office. Support is available 7 days a week from 8 AM to 6 PM.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: '#F9F1E6', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(27,87,118,0.1)', color: '#1B5776',
            borderRadius: '50px', padding: '5px 18px',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Got Questions?</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
            color: '#0C2537', fontFamily: 'Georgia, serif', marginBottom: '0.75rem',
          }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: '#FFFAF5', borderRadius: '14px',
              border: open === i ? '1.5px solid #1B5776' : '1.5px solid #F9F1E6',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(12,37,55,0.05)',
              transition: 'border-color 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.1rem 1.4rem', background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontWeight: 700, color: '#0C2537', fontSize: '0.97rem', flex: 1, lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{
                  color: '#1B5776', fontSize: '1.1rem', fontWeight: 700, marginLeft: '12px', flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.25s',
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 1.4rem 1.2rem' }}>
                  <p style={{ color: '#143E57', fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.9 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
