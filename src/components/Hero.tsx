import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [gender, setGender] = useState<'Female' | 'Male'>('Female');
  const [ageMin, setAgeMin] = useState(22);
  const [ageMax, setAgeMax] = useState(35);

  return (
    <section id="home" style={{
      background: 'linear-gradient(150deg, #0C2537 0%, #143E57 55%, #1B5776 100%)',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '-100px', right: '-100px', width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(255,244,213,0.06)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1], rotate: [0, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(255,244,213,0.05)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', top: '38%', left: '8%', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,244,213,0.04)', pointerEvents: 'none' }}
      />

      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,244,213,0.12)', border: '1px solid rgba(255,244,213,0.25)',
            borderRadius: '50px', padding: '6px 18px', marginBottom: '1.75rem',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#FFF4D5', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
            ★ Sri Lanka's Most Trusted Matrimony
          </span>
        </motion.div>

        {/* Logo - floating */}
        <motion.img
          src="/logo.png"
          alt="API BADIMU.lk"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ duration: 0.7, y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 } }}
          style={{
            width: '125px', height: '125px', objectFit: 'contain', marginBottom: '1.5rem', display: 'block', margin: '0 auto 1.5rem',
            filter: 'drop-shadow(0 6px 24px rgba(255,244,213,0.3))',
          }}
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            color: '#FFFAF5', fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
            fontWeight: 800, lineHeight: 1.15, marginBottom: '0.85rem',
            fontFamily: 'Georgia, serif',
          }}
        >
          Find Your{' '}
          <motion.span
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'linear-gradient(90deg, #FFF4D5, #F9F1E6, #FFF4D5)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Life Partner
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ color: '#F9F1E6', fontSize: '1.05rem', opacity: 0.85, marginBottom: '0.4rem' }}
        >
          ඔබේ සිත් ගත් ජීවිත සහකරු / සහකාරිය සොයා ගන්න
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{ color: '#F9F1E6', fontSize: '0.9rem', opacity: 0.65, marginBottom: '2.5rem' }}
        >
          உங்கள் இணையை கண்டுபிடியுங்கள்
        </motion.p>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            background: 'rgba(255,250,245,0.97)',
            borderRadius: '20px', padding: '1.75rem',
            boxShadow: '0 24px 60px rgba(12,37,55,0.45)',
            maxWidth: '680px', margin: '0 auto 2.5rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B5776', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
            I am looking for a
          </p>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '1.25rem' }}>
            {([
              { value: 'Female', label: 'Bride', icon: '👰' },
              { value: 'Male', label: 'Groom', icon: '🤵' },
            ] as const).map(opt => (
              <motion.button
                key={opt.value}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setGender(opt.value)}
                style={{
                  flex: 1, padding: '14px 12px', borderRadius: '12px', cursor: 'pointer',
                  border: gender === opt.value ? '2.5px solid #1B5776' : '2px solid #F9F1E6',
                  background: gender === opt.value ? 'linear-gradient(135deg, #0C2537, #1B5776)' : '#FFFAF5',
                  color: gender === opt.value ? '#FFFAF5' : '#143E57',
                  fontWeight: 700, fontSize: '1rem', transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{opt.icon}</span> {opt.label}
              </motion.button>
            ))}
          </div>

          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B5776', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
            Age Range: <span style={{ color: '#0C2537' }}>{ageMin} – {ageMax} years</span>
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
            {[
              { label: 'Min Age', val: ageMin, min: 18, max: ageMax - 1, set: setAgeMin },
              { label: 'Max Age', val: ageMax, min: ageMin + 1, max: 60, set: setAgeMax },
            ].map(slider => (
              <div key={slider.label} style={{ flex: 1 }}>
                <label style={{ fontSize: '0.75rem', color: '#143E57', display: 'block', marginBottom: '4px' }}>{slider.label}</label>
                <input type="range" min={slider.min} max={slider.max} value={slider.val}
                  onChange={e => slider.set(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#1B5776', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#143E57', opacity: 0.65 }}>
                  <span>{slider.min}</span><span style={{ fontWeight: 700, color: '#0C2537' }}>{slider.val}</span><span>{slider.max}</span>
                </div>
              </div>
            ))}
          </div>

          <motion.a href="#browse-profiles" style={{ display: 'block', textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(12,37,55,0.3)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%', padding: '14px',
                background: 'linear-gradient(135deg, #0C2537, #1B5776)',
                color: '#FFFAF5', border: 'none', borderRadius: '12px',
                fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer',
              }}
            >
              🔍 Search Profiles
            </motion.button>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '2rem' }}
        >
          {[
            { value: '50,000+', label: 'Members' },
            { value: '8,500+', label: 'Marriages' },
            { value: '15+', label: 'Years' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.65 + i * 0.12 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFF4D5' }}>{stat.value}</div>
              <div style={{ fontSize: '0.78rem', color: '#F9F1E6', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* App download */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {[
            { icon: '🍎', label: 'App Store', sub: 'Download on the' },
            { icon: '▶', label: 'Google Play', sub: 'Get it on' },
          ].map(app => (
            <motion.button key={app.label}
              whileHover={{ scale: 1.06, background: 'rgba(255,250,245,0.2)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255,250,245,0.1)', border: '1.5px solid rgba(255,250,245,0.3)',
                borderRadius: '12px', padding: '10px 22px', cursor: 'pointer', color: '#FFFAF5',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{app.icon}</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', opacity: 0.72 }}>{app.sub}</div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{app.label}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
