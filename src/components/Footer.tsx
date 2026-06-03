import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplets, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--deep-blue)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Main Footer Content */}
      <div
        className="section-container"
        style={{ paddingTop: '60px', paddingBottom: '40px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/LogoColorNoText-HR.gif" 
                alt="AW International" 
                className="h-10 w-auto"
              />
              <span 
                className="text-[0.9rem] font-semibold tracking-[0.08em] uppercase"
                style={{ color: 'var(--white)', fontFamily: 'Outfit' }}
              >
                AW International
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-text)' }}>
              {t('home.aboutPreview.description')}
            </p>
            <div className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <Droplets size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                Making clean water<br />out of thin air
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div 
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-5" 
              style={{ color: 'var(--accent)' }}
            >
              {t('navigation.home')}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: t('navigation.home'), href: '/' },
                { label: t('navigation.systems'), href: '/systems' },
                { label: t('navigation.markets'), href: '/markets' },
                { label: t('navigation.about'), href: '/about' },
                { label: t('navigation.faqs'), href: '/faqs' },
                { label: t('navigation.contact'), href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm transition-all duration-300 hover:text-white hover:translate-x-1"
                  style={{ color: 'var(--muted-text)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div 
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-5" 
              style={{ color: 'var(--accent)' }}
            >
              {t('navigation.contact')}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail size={16} style={{ color: 'var(--accent)', marginTop: '3px' }} />
                <span className="text-sm" style={{ color: 'var(--muted-text)' }}>
                  {t('contact.info.email')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} style={{ color: 'var(--accent)', marginTop: '3px' }} />
                <span className="text-sm" style={{ color: 'var(--muted-text)' }}>
                  {t('contact.info.phone')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: 'var(--accent)', marginTop: '3px' }} />
                <span className="text-xs leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                  Global Plaza Bldg<br />
                  John Albert St 322, Suite 201 B1<br />
                  San Juan, Puerto Rico 00920
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <div 
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-5" 
              style={{ color: 'var(--accent)' }}
            >
              Newsletter
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--muted-text)' }}>
              Suscríbete para recibir noticias sobre nuestros sistemas y tecnología.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block text-center w-full text-xs"
            >
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.15)',
        }}
      >
        <div className="section-container flex items-center justify-between py-5">
          <p className="text-xs" style={{ color: 'var(--muted-text)' }}>
            {t('footer.copyright')}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs transition-colors hover:text-white"
            style={{ color: 'var(--muted-text)' }}
          >
            <ArrowUp size={14} />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
