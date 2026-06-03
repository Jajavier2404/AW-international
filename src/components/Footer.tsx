import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sistemas', href: '/#sistemas' },
  { label: 'Mercados', href: '/#mercados' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--mid-blue)',
        borderTop: '1px solid rgba(245,248,250,0.06)',
      }}
    >
      <div
        className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        style={{ paddingTop: '60px', paddingBottom: '40px' }}
      >
        {/* Brand */}
        <div>
          <div className="text-[0.95rem] font-normal tracking-[0.1em] uppercase" style={{ color: 'var(--white)' }}>
            AW International
          </div>
          <p className="mt-3 text-xs tracking-[0.05em]" style={{ color: 'var(--muted-text)' }}>
            Making clean water out of thin air
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-xs font-normal uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--muted-text)' }}>
            Navegacion
          </div>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'var(--muted-text)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs font-normal uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--muted-text)' }}>
            Contacto
          </div>
          <div className="flex flex-col gap-2.5 text-sm" style={{ color: 'var(--muted-text)' }}>
            <span>info@awinternational.ca</span>
            <span>+1 939 251 7443</span>
            <span className="text-xs leading-relaxed">
              Global Plaza Bldg<br />
              John Albert St 322, Suite 201 B1<br />
              San Juan, Puerto Rico 00920
            </span>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/#contacto"
            className="btn-primary inline-block text-center w-full sm:w-auto"
          >
            Solicitar Cotizacion
          </Link>
          <p className="mt-6 text-xs" style={{ color: 'var(--muted-text)' }}>
            &copy; 2025 AW International Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
