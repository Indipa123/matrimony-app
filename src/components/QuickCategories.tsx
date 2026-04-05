import { motion } from 'framer-motion';

const categories = [
  { icon: '👩‍⚕️', label: 'Female Doctors' },
  { icon: '👨‍⚕️', label: 'Male Doctors' },
  { icon: '👩‍💻', label: 'Female Engineers' },
  { icon: '👨‍💻', label: 'Male Engineers' },
  { icon: '👩‍⚖️', label: 'Female Lawyers' },
  { icon: '👨‍🏫', label: 'Male Teachers' },
  { icon: '👩‍🎓', label: 'Degree Holders' },
  { icon: '🌍', label: 'Overseas Members' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const QuickCategories = () => (
  <section style={{ background: '#FFF4D5', padding: '3.5rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', color: '#0C2537', fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.5rem' }}
      >
        Browse by Category
      </motion.h3>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}
      >
        {categories.map(cat => (
          <motion.a key={cat.label} href="#browse-profiles" variants={item} style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.08, background: '#0C2537', color: '#FFFAF5', borderColor: '#0C2537' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: '#FFFAF5', border: '1.5px solid #F9F1E6',
                borderRadius: '50px', padding: '10px 20px',
                fontWeight: 600, fontSize: '0.88rem', color: '#143E57',
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{cat.icon}</span>
              {cat.label}
            </motion.button>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default QuickCategories;
