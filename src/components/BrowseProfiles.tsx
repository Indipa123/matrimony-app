import { useState } from 'react';
import { profiles } from '../data/profiles';
import type { FilterState, Profile } from '../types';
import ProfileCard from './ProfileCard';
import ProfileModal from './ProfileModal';

const defaultFilters: FilterState = {
  gender: '',
  ageMin: 18,
  ageMax: 50,
  religion: '',
  ethnicity: '',
  location: '',
};

const religions = ['', 'Buddhist', 'Hindu', 'Christian', 'Islam'];
const ethnicities = ['', 'Sinhalese', 'Tamil', 'Burgher', 'Malay'];
const locations = ['', 'Colombo', 'Kandy', 'Galle', 'Jaffna', 'Matara', 'Trincomalee'];

const inputStyle: React.CSSProperties = {
  background: '#FFFAF5',
  border: '1.5px solid #F9F1E6',
  borderRadius: '10px',
  padding: '8px 12px',
  fontSize: '0.88rem',
  color: '#0C2537',
  outline: 'none',
  width: '100%',
};

const BrowseProfiles = () => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const filtered = profiles.filter(p => {
    if (filters.gender && p.gender !== filters.gender) return false;
    if (p.age < filters.ageMin || p.age > filters.ageMax) return false;
    if (filters.religion && p.religion !== filters.religion) return false;
    if (filters.ethnicity && p.ethnicity !== filters.ethnicity) return false;
    if (filters.location && p.location !== filters.location) return false;
    return true;
  });

  const update = (key: keyof FilterState, value: string | number) =>
    setFilters(f => ({ ...f, [key]: value }));

  return (
    <section id="browse-profiles" style={{ background: '#F9F1E6', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(27,87,118,0.1)', color: '#1B5776',
            borderRadius: '50px', padding: '5px 18px',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Our Members</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
            color: '#0C2537', fontFamily: 'Georgia, serif', marginBottom: '0.75rem',
          }}>Browse Profiles</h2>
          <p style={{ color: '#143E57', opacity: 0.8, fontSize: '1.05rem' }}>
            Find your perfect match from our verified member profiles
          </p>
        </div>

        {/* Filters */}
        <div style={{
          background: '#FFFAF5',
          borderRadius: '20px',
          padding: '1.75rem',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(12,37,55,0.07)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          alignItems: 'end',
        }}>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1B5776', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Looking For</label>
            <select style={inputStyle} value={filters.gender} onChange={e => update('gender', e.target.value)}>
              <option value="">All</option>
              <option value="Female">Bride</option>
              <option value="Male">Groom</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1B5776', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Age Min</label>
            <input type="number" style={inputStyle} min={18} max={filters.ageMax} value={filters.ageMin}
              onChange={e => update('ageMin', Number(e.target.value))} />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1B5776', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Age Max</label>
            <input type="number" style={inputStyle} min={filters.ageMin} max={70} value={filters.ageMax}
              onChange={e => update('ageMax', Number(e.target.value))} />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1B5776', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Religion</label>
            <select style={inputStyle} value={filters.religion} onChange={e => update('religion', e.target.value)}>
              {religions.map(r => <option key={r} value={r}>{r || 'All Religions'}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1B5776', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Ethnicity</label>
            <select style={inputStyle} value={filters.ethnicity} onChange={e => update('ethnicity', e.target.value)}>
              {ethnicities.map(r => <option key={r} value={r}>{r || 'All'}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1B5776', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Location</label>
            <select style={inputStyle} value={filters.location} onChange={e => update('location', e.target.value)}>
              {locations.map(r => <option key={r} value={r}>{r || 'All Cities'}</option>)}
            </select>
          </div>
          <button
            onClick={() => setFilters(defaultFilters)}
            style={{
              background: 'linear-gradient(135deg, #0C2537, #1B5776)',
              color: '#FFFAF5', border: 'none', borderRadius: '10px',
              padding: '9px 18px', fontWeight: 600, cursor: 'pointer', fontSize: '0.88rem',
            }}
          >Reset Filters</button>
        </div>

        {/* Results count */}
        <p style={{ color: '#143E57', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Showing <span style={{ color: '#1B5776' }}>{filtered.length}</span> profiles
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.75rem',
          }}>
            {filtered.map(profile => (
              <ProfileCard key={profile.id} profile={profile} onView={setSelectedProfile} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#143E57', opacity: 0.7 }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ fontSize: '1.1rem' }}>No profiles match your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>

      {selectedProfile && (
        <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      )}
    </section>
  );
};

export default BrowseProfiles;
