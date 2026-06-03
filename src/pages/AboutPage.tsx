import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutPage() {
  const { t } = useTranslation();
  const missionRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const visionRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: '64px' }}>
      {/* Hero - Dark Blue */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          background: 'var(--deep-blue)',
          minHeight: '55vh',
        }}
      >
        <div className="overline mb-4">{t('navigation.about')}</div>
        <h1
          className="leading-none tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--white)',
          }}
        >
          {t('about.title')}
        </h1>
        <p
          className="mt-6 text-lg font-light leading-relaxed max-w-[600px]"
          style={{ color: 'var(--muted-text)' }}
        >
          {t('about.subtitle')}
        </p>
      </section>

      {/* Description - Light */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xl font-light leading-relaxed"
              style={{ color: 'var(--deep-blue)' }}
            >
              {t('about.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              ref={missionRef}
              className="rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(19,73,128,0.08)',
                boxShadow: '0 4px 20px rgba(19,73,128,0.06)',
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(19,73,128,0.08)' }}
              >
                <Target size={28} style={{ color: 'var(--deep-blue)' }} />
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  color: 'var(--deep-blue)',
                  fontFamily: 'Outfit',
                }}
              >
                {t('about.mission.title')}
              </h2>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: 'var(--muted-text-dark)' }}
              >
                {t('about.mission.text')}
              </p>
            </div>

            {/* Vision */}
            <div
              ref={visionRef}
              className="rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(19,73,128,0.08)',
                boxShadow: '0 4px 20px rgba(19,73,128,0.06)',
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(19,73,128,0.08)' }}
              >
                <Eye size={28} style={{ color: 'var(--deep-blue)' }} />
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  color: 'var(--deep-blue)',
                  fontFamily: 'Outfit',
                }}
              >
                {t('about.vision.title')}
              </h2>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: 'var(--muted-text-dark)' }}
              >
                {t('about.vision.text')}
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              {t('common.contactUs')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}