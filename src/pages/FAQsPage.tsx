import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FAQsPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const heroRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  const faqKeys = ['1', '2', '3', '4', '5', '6'];

  return (
    <main style={{ position: 'relative', zIndex: 1, paddingTop: '64px' }}>
      {/* Hero - Dark Blue */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ 
          background: 'linear-gradient(135deg, var(--deep-blue) 0%, #0d3566 50%, #0f3d75 100%)', 
          minHeight: '40vh' 
        }}
      >
        <div ref={heroRef}>
          <div className="overline mb-4">{t('navigation.faqs')}</div>
          <h1
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
          >
            {t('faqs.title')}
          </h1>
          <p
            className="mt-4 text-lg font-light leading-relaxed max-w-[600px] mx-auto"
            style={{ color: 'var(--muted-text)' }}
          >
            {t('faqs.subtitle')}
          </p>
        </div>
      </section>

      {/* Content - Light */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div className="max-w-[900px] mx-auto">
          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <div
                key={key}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(19,73,128,0.08)',
                  boxShadow: openIndex === index ? '0 4px 20px rgba(19,73,128,0.08)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className="text-base font-semibold pr-4"
                    style={{ color: 'var(--deep-blue)', fontFamily: 'Outfit' }}
                  >
                    {t(`faqs.questions.${key}.question`)}
                  </span>
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                    style={{ 
                      background: openIndex === index ? 'rgba(19,73,128,0.08)' : 'transparent',
                      color: 'var(--deep-blue)' 
                    }}
                  >
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openIndex === index ? '400px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <p
                    className="px-6 pb-6 text-[15px] leading-relaxed"
                    style={{ color: 'var(--muted-text-dark)' }}
                  >
                    {t(`faqs.questions.${key}.answer`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div 
              className="inline-block p-10 rounded-2xl"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(19,73,128,0.08)',
                boxShadow: '0 4px 20px rgba(19,73,128,0.06)',
              }}
            >
              <p className="text-base mb-6" style={{ color: 'var(--muted-text-dark)' }}>
                {t('contact.subtitle')}
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                {t('common.contactUs')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
