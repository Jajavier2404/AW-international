import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Home, Factory, Users, Fuel, Sprout, AlertTriangle, Droplets, ArrowRight } from 'lucide-react';

const markets = [
  { icon: Home, key: 'residential' },
  { icon: Factory, key: 'industrial' },
  { icon: Users, key: 'communities' },
  { icon: Fuel, key: 'oilGas' },
  { icon: Sprout, key: 'agriculture' },
];

export default function MarketsPage() {
  const { t } = useTranslation();
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const crisisRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const marketsRef = useStaggerAnimation<HTMLDivElement>(5, 0.1);
  const atmosphericRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main style={{ paddingTop: '64px' }}>
      {/* Hero Section - Dark Blue */}
      <section
        style={{
          background: 'var(--deep-blue)',
          padding: 'calc(var(--section-pad-y) - 40px) var(--section-pad-x) var(--section-pad-y)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-container">
          <div ref={headerRef} className="text-center max-w-[900px] mx-auto">
            <div className="overline">{t('markets.title')}</div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--white)',
                marginTop: '16px',
              }}
            >
              {t('markets.subtitle')}
            </h1>
            <p
              className="mt-6 text-lg font-light leading-relaxed"
              style={{ color: 'var(--muted-text)' }}
            >
              {t('markets.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Section - Light */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-container">
          <div ref={crisisRef} className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(19,73,128,0.08)' }}
              >
                <AlertTriangle size={28} style={{ color: 'var(--deep-blue)' }} />
              </div>
              <h2
                style={{ 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
                  color: 'var(--deep-blue)',
                }}
              >
                {t('markets.crisis.title')}
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--muted-text-dark)' }}
              >
                {t('markets.crisis.text1')}
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--muted-text-dark)' }}
              >
                {t('markets.crisis.text2')}
              </p>

              <div
                className="p-6 rounded-xl"
                style={{
                  background: 'rgba(19,73,128,0.04)',
                  border: '1px solid rgba(19,73,128,0.08)',
                  borderLeft: '4px solid var(--deep-blue)',
                }}
              >
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--muted-text-dark)' }}
                >
                  {t('markets.crisis.oilGas')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { value: '97.5%', label: 'Agua Salada', sub: 'del planeta' },
                { value: '1.8B', label: 'Personas', sub: 'en escasez 2025' },
                { value: '47%', label: 'Población', sub: 'en estrés 2030' },
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="text-center p-6 rounded-xl"
                  style={{
                    background: 'var(--white)',
                    border: '1px solid rgba(19,73,128,0.08)',
                    boxShadow: '0 2px 12px rgba(19,73,128,0.04)',
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: 'var(--deep-blue)', fontFamily: 'Outfit' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--deep-blue)' }}>
                    {stat.label}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--muted-text-dark)' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets Grid - Dark Blue */}
      <section
        style={{
          background: 'var(--deep-blue)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="overline">MARKETS WE SERVE</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--white)',
                marginTop: '16px',
              }}
            >
              Water for Every Industry
            </h2>
          </div>

          <div ref={marketsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market) => {
              const Icon = market.icon;
              return (
                <div
                  key={market.key}
                  className="group rounded-xl p-8 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon size={28} style={{ color: 'var(--white)' }} />
                  </div>
                  <h3 
                    className="text-xl font-semibold" 
                    style={{ color: 'var(--white)' }}
                  >
                    {t(`markets.marketsList.${market.key}.title`)}
                  </h3>
                  <p
                    className="mt-3 text-base leading-relaxed"
                    style={{ color: 'var(--muted-text)' }}
                  >
                    {t(`markets.marketsList.${market.key}.description`)}
                  </p>
                  <p
                    className="mt-4 text-sm font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    Ideal: {t(`markets.marketsList.${market.key}.ideal`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atmospheric Water Generation - Light */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-container">
          <div ref={atmosphericRef} className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <div className="overline-dark">{t('markets.atmospheric.title')}</div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--deep-blue)',
                  marginTop: '16px',
                }}
              >
                {t('markets.atmospheric.subtitle')}
              </h2>
            </div>

            <div className="space-y-6">
              {['responsible', 'accessible', 'questions'].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-5 p-6 rounded-xl"
                  style={{
                    background: 'var(--white)',
                    border: '1px solid rgba(19,73,128,0.08)',
                    boxShadow: '0 2px 12px rgba(19,73,128,0.04)',
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(19,73,128,0.08)' }}
                  >
                    <Droplets size={20} style={{ color: 'var(--deep-blue)' }} />
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted-text-dark)' }}>
                    {t(`markets.atmospheric.${item}`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/systems"
                className="btn-ghost inline-flex items-center gap-2"
              >
                {t('common.viewAll')} {t('navigation.systems')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
