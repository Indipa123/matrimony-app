import type { Profile } from '../types';

interface Props {
  profile: Profile;
  onView: (profile: Profile) => void;
}

const ProfileCard = ({ profile, onView }: Props) => (
  <div style={{
    background: '#FFFAF5',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(12,37,55,0.09)',
    border: '1.5px solid #F9F1E6',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(12,37,55,0.15)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(12,37,55,0.09)'; }}
    onClick={() => onView(profile)}
  >
    {/* Photo */}
    <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
      <img
        src={profile.photo}
        alt={profile.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${profile.name}&background=1B5776&color=FFFAF5&size=240`; }}
      />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to top, rgba(12,37,55,0.6) 0%, transparent 60%)',
      }} />
      {/* Badges */}
      <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '6px', flexDirection: 'column', alignItems: 'flex-end' }}>
        {profile.verified && (
          <span style={{
            background: '#1B5776', color: '#FFF4D5',
            fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px',
          }}>✓ Verified</span>
        )}
        {profile.premium && (
          <span style={{
            background: 'linear-gradient(135deg, #FFF4D5, #F9F1E6)', color: '#0C2537',
            fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px',
          }}>★ Premium</span>
        )}
      </div>
      {/* Name on photo */}
      <div style={{ position: 'absolute', bottom: '14px', left: '14px' }}>
        <div style={{ color: '#FFFAF5', fontWeight: 700, fontSize: '1.15rem' }}>{profile.name}</div>
        <div style={{ color: '#F9F1E6', fontSize: '0.82rem', opacity: 0.9 }}>
          {profile.age} yrs • {profile.location}
        </div>
      </div>
    </div>

    {/* Info */}
    <div style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
        {[profile.religion, profile.ethnicity, profile.profession].map(tag => (
          <span key={tag} style={{
            background: '#F9F1E6', color: '#143E57',
            fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: '20px',
          }}>{tag}</span>
        ))}
      </div>
      <p style={{ color: '#143E57', fontSize: '0.88rem', lineHeight: 1.55, opacity: 0.85, marginBottom: '1rem' }}>
        {profile.bio.length > 90 ? profile.bio.slice(0, 90) + '…' : profile.bio}
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={e => { e.stopPropagation(); onView(profile); }}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, #0C2537, #1B5776)',
            color: '#FFFAF5',
            border: 'none',
            borderRadius: '25px',
            padding: '9px',
            fontWeight: 600,
            fontSize: '0.88rem',
            cursor: 'pointer',
          }}
        >View Profile</button>
        <button
          onClick={e => e.stopPropagation()}
          style={{
            background: '#F9F1E6',
            color: '#0C2537',
            border: 'none',
            borderRadius: '25px',
            padding: '9px 14px',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
          }}
          title="Express Interest"
        >♥</button>
      </div>
    </div>
  </div>
);

export default ProfileCard;
