import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.systems'), href: '/systems' },
    { label: t('navigation.markets'), href: '/markets' },
    { label: t('navigation.about'), href: '/about' },
    { label: t('navigation.faqs'), href: '/faqs' },
    { label: t('navigation.contact'), href: '/contact' },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          height: '72px',
          background: 'rgba(19, 73, 128, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
        }}
      >
        <div className="section-container h-full flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img 
              src="/images/LogoColorNoText-HR.gif" 
              alt="AW International" 
              className="h-10 w-auto"
            />
            <span 
              className="text-[0.9rem] font-semibold tracking-[0.08em] uppercase hidden sm:block"
              style={{ color: 'var(--white)', fontFamily: 'Outfit' }}
            >
              AW International
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative px-4 py-2 text-[0.85rem] font-medium tracking-wide transition-all duration-300 rounded-lg"
                style={{ 
                  color: isActive(link.href) ? 'var(--accent)' : 'var(--muted-text)',
                  background: isActive(link.href) ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center gap-2 px-3 py-2 rounded-lg text-[0.85rem] font-medium transition-all duration-300 hover:bg-white/10"
              style={{ color: 'var(--muted-text)' }}
            >
              <Globe size={16} />
              <span style={{ color: 'var(--accent)' }}>{i18n.language === 'es' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 text-[0.8rem] font-medium"
              style={{ color: 'var(--accent)' }}
            >
              <Globe size={16} />
              {i18n.language === 'es' ? 'ES' : 'EN'}
            </button>
            <button
              className="p-2 rounded-lg transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} style={{ color: 'var(--white)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(19, 73, 128, 0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-[72px]">
            <span
              className="text-[0.9rem] font-semibold tracking-[0.08em] uppercase"
              style={{ color: 'var(--white)', fontFamily: 'Outfit' }}
            >
              AW International
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg hover:bg-white/10"
            >
              <X size={24} style={{ color: 'var(--white)' }} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium transition-all duration-300 hover:text-white px-6 py-3 rounded-lg w-[80%] text-center"
                style={{
                  color: isActive(link.href) ? 'var(--accent)' : 'var(--muted-text)',
                  background: isActive(link.href) ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
