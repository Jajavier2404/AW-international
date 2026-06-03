import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'INICIO', href: '/' },
  { label: 'SISTEMAS', href: '/#sistemas' },
  { label: 'MERCADOS', href: '/#mercados' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'CONTACTO', href: '/#contacto' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          height: '64px',
          backgroundColor: scrolled ? 'var(--nav-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,248,250,0.06)' : '1px solid transparent',
        }}
      >
        <div className="section-container h-full flex items-center justify-between">
          <Link
            to="/"
            className="text-[0.95rem] font-normal tracking-[0.1em] uppercase"
            style={{ color: 'var(--white)' }}
          >
            AW International
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-[0.8rem] font-normal tracking-[0.12em] transition-colors duration-300 hover:text-white"
                style={{ color: 'var(--muted-text)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} style={{ color: 'var(--white)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--deep-blue)' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-16">
            <span
              className="text-[0.95rem] font-normal tracking-[0.1em] uppercase"
              style={{ color: 'var(--white)' }}
            >
              AW International
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X size={24} style={{ color: 'var(--white)' }} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setMobileOpen(false);
                }}
                className="text-2xl font-light transition-colors duration-300 hover:text-white animate-fade-in-up"
                style={{
                  color: 'var(--muted-text)',
                  animationDelay: `${i * 0.08}s`,
                  opacity: mobileOpen ? undefined : 0,
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
