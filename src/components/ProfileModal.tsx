import type { Profile } from '../types';

interface Props {
  profile: Profile;
  onClose: () => void;
}

const ProfileModal = ({ profile, onClose }: Props) => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(12,37,55,0.7)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '1rem',
    backdropFilter: 'blur(4px)',
  }} onClick={onClose}>
    <div
      onClick={e => e.stopPropagation()}
      style={{
        background: '#FFFAF5',
        borderRadius: '24px',
        maxWidth: '560px',
        width: '100%',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(12,37,55,0.35)',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}
    >
      {/* Photo header */}
      <div style={{ position: 'relative', height: '260px' }}>
        <img
          src={profile.photo}
          alt={profile.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${profile.name}&background=1B5776&color=FFFAF5&size=260`; }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(12,37,55,0.75) 0%, transparent 50%)',
        }} />
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(255,250,245,0.9)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            cursor: 'pointer', fontSize: '1.1rem', fontWeight: 700,
            color: '#0C2537', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>
        <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
          <h2 style={{ color: '#FFFAF5', fontWeight: 800, fontSize: '1.5rem', margin: 0 }}>{profile.name}</h2>
          <p style={{ color: '#F9F1E6', margin: '4px 0 0', fontSize: '0.9rem' }}>
            {profile.age} years • {profile.height} • {profile.location}
          </p>
        </div>
        <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '6px' }}>
          {profile.verified && (
            <span style={{ background: '#1B5776', color: '#FFF4D5', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>✓ Verified</span>
          )}
          {profile.premium && (
            <span style={{ background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)', color: '#0C2537', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>★ Premium</span>
          )}
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: '1.75rem' }}>
        <p style={{ color: '#143E57', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{profile.bio}</p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem',
        }}>
          {[
            { label: 'Religion', value: profile.religion },
            { label: 'Ethnicity', value: profile.ethnicity },
            { label: 'Profession', value: profile.profession },
            { label: 'Education', value: profile.education },
            { label: 'Gender', value: profile.gender },
            { label: 'Height', value: profile.height },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: '#F9F1E6',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
            }}>
              <div style={{ fontSize: '0.72rem', color: '#1B5776', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>{label}</div>
              <div style={{ fontSize: '0.95rem', color: '#0C2537', fontWeight: 600 }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{
            flex: 1,
            background: 'linear-gradient(135deg, #0C2537, #1B5776)',
            color: '#FFFAF5', border: 'none', borderRadius: '25px',
            padding: '13px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
          }}>
            Send Interest ♥
          </button>
          <button style={{
            background: '#F9F1E6', color: '#143E57', border: 'none',
            borderRadius: '25px', padding: '13px 18px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
          }}>
            💬 Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileModal;
