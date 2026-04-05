import { successStories } from '../data/profiles';

const SuccessStories = () => (
  <section id="success-stories" style={{ background: '#FFFAF5', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(27,87,118,0.1)', color: '#1B5776',
          borderRadius: '50px', padding: '5px 18px',
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>Real Couples</span>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
          color: '#0C2537', fontFamily: 'Georgia, serif', marginBottom: '0.75rem',
        }}>Success Stories</h2>
        <p style={{ color: '#143E57', opacity: 0.8, fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
          Thousands of happy couples found their perfect match through API BADIMU.lk
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {successStories.map(story => (
          <div key={story.id} style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(12,37,55,0.1)',
            border: '1.5px solid #F9F1E6',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(12,37,55,0.16)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(12,37,55,0.1)'; }}
          >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img
                src={story.photo}
                alt={story.couple}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop'; }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(12,37,55,0.65) 0%, transparent 60%)',
              }} />
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)',
                color: '#0C2537', fontSize: '0.75rem', fontWeight: 700,
                padding: '4px 12px', borderRadius: '20px',
              }}>Married {story.year}</div>
              <div style={{ position: 'absolute', bottom: '14px', left: '14px' }}>
                <h3 style={{ color: '#FFFAF5', fontWeight: 700, fontSize: '1.15rem', margin: 0 }}>{story.couple}</h3>
              </div>
            </div>
            <div style={{ background: '#FFFAF5', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', color: '#1B5776', marginBottom: '8px' }}>"</div>
              <p style={{ color: '#143E57', lineHeight: 1.65, fontSize: '0.9rem', fontStyle: 'italic' }}>{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
