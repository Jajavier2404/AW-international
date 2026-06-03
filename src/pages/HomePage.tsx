import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronDown, Droplets, Send, CheckCircle, MessageSquare, Clock, User, Mail, HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SystemsCarousel from '../components/SystemsCarousel';
import WaveDivider from '../components/WaveDivider';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const heroRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const statsRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const formRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    nombre: '', email: '', sistema: '', mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      {/* Hero Section - Dark Blue */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(19,73,128,0.92) 0%, rgba(13,53,102,0.88) 50%, rgba(19,73,128,0.85) 100%)',
          }}
        />

        <div ref={heroRef} className="relative z-10 text-center max-w-[900px] mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <Droplets size={16} style={{ color: 'var(--accent)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {t('hero.overline')}
            </span>
          </div>

          <h1
            className="font-light leading-none tracking-[-0.03em] mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              color: 'var(--white)',
              textShadow: '0 4px 30px rgba(0,0,0,0.3)',
            }}
          >
            {t('hero.headline')}
          </h1>

          <p
            className="text-lg sm:text-xl font-light leading-relaxed tracking-[0.01em] mx-auto mb-12 max-w-[640px]"
            style={{ color: 'var(--muted-text)' }}
          >
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/systems" className="btn-primary">
              {t('hero.ctaPrimary')}
            </Link>
            <Link to="/about" className="btn-secondary">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-chevron z-10"
          style={{ color: 'var(--muted-text)' }}
        >
          <ChevronDown size={24} />
        </div>
      </section>

      <WaveDivider fill="#134980" />

      {/* Stats Bar - Light */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: '80px var(--section-pad-x)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div ref={statsRef} className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '97.5%', label: 'Agua Salada', sub: 'del planeta' },
              { value: '1.8B', label: 'Personas', sub: 'en escasez 2025' },
              { value: '50%', label: 'Humedad', sub: 'mínima requerida' },
              { value: '24/7', label: 'Producción', sub: 'continua' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
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
      </section>

      {/* Systems Carousel - White/Light */}
      <SystemsCarousel />

      <WaveDivider fill="#134980" flip />

      {/* Markets Preview - Dark Blue */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--deep-blue) 0%, #0d3566 100%)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="overline">{t('markets.title')}</div>
              <h2
                className="mt-3 mb-6"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--white)',
                }}
              >
                {t('markets.subtitle')}
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'var(--muted-text)' }}
              >
                {t('markets.description')}
              </p>

              <Link to="/markets" className="btn-primary">
                {t('home.marketsPreview.cta')}
              </Link>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <img
                src="/images/problem-1.jpg"
                alt="Water crisis"
                className="w-full h-[400px] object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="text-2xl font-bold mb-2"
                  style={{ color: 'var(--accent)', fontFamily: 'Outfit' }}
                >
                  47%
                </div>
                <div className="text-sm" style={{ color: 'var(--white)' }}>
                  de la población mundial en estrés hídrico para 2030
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="#134980" />

      {/* Contact Form Section - Mejorado con imagen */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-container">
          <div ref={formRef} className="max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <div className="overline-dark">{t('navigation.contact')}</div>
              <h2
                className="mt-3"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--deep-blue)',
                }}
              >
                {t('contact.subtitle')}
              </h2>
              <p className="mt-4 text-lg max-w-[500px] mx-auto" style={{ color: 'var(--muted-text-dark)' }}>
                {i18n.language === 'es' 
                  ? '¿Tienes preguntas? Escríbenos y te responderemos en menos de 24 horas.'
                  : 'Have questions? Write to us and we will respond in less than 24 hours.'
                }
              </p>
            </div>

            {/* Form Card con imagen */}
            <div 
              className="rounded-2xl overflow-hidden flex flex-col lg:flex-row"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(19,73,128,0.08)',
                boxShadow: '0 25px 50px -12px rgba(19,73,128,0.1)',
              }}
            >
              {/* Left side - Decorative image/illustration */}
              <div 
                className="lg:w-[40%] relative p-8 flex flex-col justify-center items-center text-center"
                style={{
                  background: 'linear-gradient(135deg, var(--deep-blue) 0%, #0d3566 100%)',
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <Droplets size={40} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--white)' }}>
                  {i18n.language === 'es' ? '¿Hablamos?' : 'Let\'s Talk?'}
                </h3>
                <p className="text-sm mb-6" style={{ color: 'var(--muted-text)' }}>
                  {i18n.language === 'es' 
                    ? 'Nuestro equipo está listo para ayudarte a encontrar la mejor solución para tu necesidad de agua.'
                    : 'Our team is ready to help you find the best solution for your water needs.'
                  }
                </p>
                
                <div className="space-y-3 w-full max-w-[250px]">
                  <div className="flex items-center gap-3 text-left">
                    <Clock size={16} style={{ color: 'var(--accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                      {i18n.language === 'es' ? 'Respuesta en 24h' : 'Response in 24h'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <MessageSquare size={16} style={{ color: 'var(--accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                      {i18n.language === 'es' ? 'Asesoría gratuita' : 'Free consultation'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle size={16} style={{ color: 'var(--accent)' }} />
                    <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                      {i18n.language === 'es' ? 'Sin compromiso' : 'No commitment'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="lg:w-[60%] p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'rgba(19,73,128,0.08)' }}
                    >
                      <CheckCircle size={32} style={{ color: 'var(--deep-blue)' }} />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--deep-blue)' }}>
                      {i18n.language === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                    </h3>
                    <p className="mt-3" style={{ color: 'var(--muted-text-dark)' }}>
                      {t('contact.form.success')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted-text-dark)' }} />
                        <input 
                          type="text" 
                          name="nombre" 
                          placeholder={t('contact.form.name')} 
                          value={formData.nombre} 
                          onChange={handleChange} 
                          required 
                          className="input-field-light pl-10" 
                        />
                      </div>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted-text-dark)' }} />
                        <input 
                          type="email" 
                          name="email" 
                          placeholder={t('contact.form.email')} 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          className="input-field-light pl-10" 
                        />
                      </div>
                    </div>

                    {/* Campo sistema de interés */}
                    <div className="relative">
                      <HelpCircle size={18} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted-text-dark)' }} />
                      <select 
                        name="sistema" 
                        value={formData.sistema} 
                        onChange={handleChange} 
                        className="input-field-light pl-10" 
                        style={{ color: formData.sistema ? 'var(--deep-blue)' : 'rgba(19,73,128,0.4)' }}
                      >
                        <option value="">
                          {i18n.language === 'es' ? 'Sistema de interés (opcional)' : 'System of interest (optional)'}
                        </option>
                        <option value="aw2500">AW 2500</option>
                        <option value="aw800">AW 800</option>
                        <option value="awi250g">AWI 250 G</option>
                        <option value="aw5k">AW 5K</option>
                        <option value="aw9000">AW 9000</option>
                        <option value="aw12000">AW 12000</option>
                        <option value="aw18000s">AW 18000S</option>
                        <option value="aw24000s">AW 24000S</option>
                        <option value="adpv40k">ADPV40K</option>
                      </select>
                    </div>

                    <textarea 
                      name="mensaje" 
                      placeholder={t('contact.form.message')} 
                      value={formData.mensaje} 
                      onChange={handleChange} 
                      rows={4} 
                      required 
                      className="input-field-light resize-none" 
                    />
                    <button type="submit" className="btn-primary w-full mt-2 flex items-center justify-center gap-2">
                      <Send size={18} />
                      {t('contact.form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
