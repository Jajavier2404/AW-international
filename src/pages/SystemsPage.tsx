import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, ArrowRight } from 'lucide-react';

// IDs de sistemas - los textos vienen de i18n
const allSystems = [
  { id: 'aw2500', image: '/images/product-aw2500.jpg', category: 'residential', capacityKey: '20L/día' },
  { id: 'aw800', image: '/images/product-aw800.jpg', category: 'commercial', capacityKey: '800 gal/día' },
  { id: 'awi250g', image: '/images/product-awi250.jpg', category: 'semi-industrial', capacityKey: '1,000L/día' },
  { id: 'aw5k', image: '/images/product-aw5k.jpg', category: 'industrial', capacityKey: '5,000 gal/día' },
  { id: 'aw9000', image: '/images/solar-system.jpg', category: 'solar', capacityKey: '9,000 gal/día' },
  { id: 'aw12000', image: '/images/solar-system.jpg', category: 'solar', capacityKey: '12,000 gal/día' },
  { id: 'aw18000s', image: '/images/solar-system.jpg', category: 'solar', capacityKey: '18,000 gal/día' },
  { id: 'aw24000s', image: '/images/solar-system.jpg', category: 'solar', capacityKey: '24,000 gal/día' },
  { id: 'adpv40k', image: '/images/solar-system.jpg', category: 'solar', capacityKey: '40KW Solar' },
];

const categories = ['all', 'residential', 'commercial', 'industrial', 'semi-industrial', 'solar'];

export default function SystemsPage() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSystems = allSystems.filter(system => {
    const name = t(`systems.products.${system.id}.name`);
    const desc = t(`systems.products.${system.id}.description`);
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || system.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main style={{ paddingTop: '72px', background: '#f0f4f8', minHeight: '100vh' }}>
      {/* Header */}
      <section
        style={{
          background: '#134980',
          padding: '50px 20px',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
            {t('systems.title')}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginTop: '8px', marginBottom: '8px' }}>
            {t('systems.subtitle')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            {t('systems.description')}
          </p>

          <div style={{ maxWidth: '400px', margin: '24px auto 0', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
            <input
              type="text"
              placeholder={i18n.language === 'es' ? 'Buscar sistemas...' : 'Search systems...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '0.9rem',
              }}
            />
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ padding: '30px 20px 60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  border: '1px solid #134980',
                  background: activeCategory === cat ? '#134980' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#134980',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat === 'all' ? (i18n.language === 'es' ? 'Todos' : 'All') : 
                 cat === 'residential' ? (i18n.language === 'es' ? 'Residencial' : 'Residential') :
                 cat === 'commercial' ? (i18n.language === 'es' ? 'Comercial' : 'Commercial') :
                 cat === 'industrial' ? (i18n.language === 'es' ? 'Industrial' : 'Industrial') :
                 cat === 'semi-industrial' ? (i18n.language === 'es' ? 'Semi-industrial' : 'Semi-industrial') :
                 cat === 'solar' ? (i18n.language === 'es' ? 'Solar' : 'Solar') : cat}
              </button>
            ))}
          </div>

          {/* Grid Responsive - más grande */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {filteredSystems.map((system) => (
              <Link
                key={system.id}
                to={`/systems/${system.id}`}
                style={{
                  display: 'block',
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={system.image}
                    alt={t(`systems.products.${system.id}.name`)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' 
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: '#134980',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                  }}>
                    {system.category}
                  </span>
                  <span style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}>
                    {system.capacityKey}
                  </span>
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#134980', marginBottom: '8px' }}>
                    {t(`systems.products.${system.id}.name`)}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                    {t(`systems.products.${system.id}.description`)}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#134980', fontWeight: 600, fontSize: '0.9rem' }}>
                    <span>Ver detalles</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredSystems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ color: '#64748b' }}>
                {i18n.language === 'es' ? 'No se encontraron sistemas.' : 'No systems found.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
