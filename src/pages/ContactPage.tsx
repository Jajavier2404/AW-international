import { useState } from 'react';
import { Phone, Mail, MapPin, Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const needTypes = ['Residencial', 'Industrial', 'Comunidad', 'Oil & Gas', 'Agroindustria', 'Otro'];

interface Contact {
  name: string;
  address?: string;
  person?: string;
  phone?: string;
  email?: string;
  website?: string;
  extra?: string;
}

interface Distributor {
  region: string;
  contacts: Contact[];
}

const distributors: Distributor[] = [
  {
    region: 'North America',
    contacts: [
      {
        name: 'S2A Modular Homes',
        address: '24360 Village Walk Place, Suite A & B, Murrieta, CA 92563',
        extra: 'Also: Wako, Texas and Macclenny, Florida',
        website: 'www.s2amodular.com',
      },
    ],
  },
  {
    region: 'Central America',
    contacts: [
      { name: 'EDSICO - Guatemala', address: 'Guatemala City, Guatemala', person: 'Edgar Guzman', phone: '+502 5202 1773' },
      { name: 'Jacky Lalo - Panama', address: 'Panama City, Panama CA', phone: '+507 474 5241 / +507 667 47773' },
      { name: 'INVET IMPORT EXPORT - Honduras', address: 'Teguzigalpa, Honduras', phone: '+504 3190 3032 / +504 3170 2001', website: 'Infovetgroup.com', person: 'Sr Carlos Quan' },
      { name: 'Mexico', person: 'Sr Carlos Quan', phone: '1-939-251-7443', email: 'info@awinternational.ca' },
    ],
  },
  {
    region: 'South America',
    contacts: [
      { name: 'Comercializadora L&G SAS - Colombia', address: 'Bogota, Colombia, SA', person: 'Ing. Yury W. Londono, President', email: 'ywlgbusiness@gmail.com', phone: '+60-314-682-6766' },
      { name: 'Ecuador', address: 'De Las Toronjas e12-12-179 con Palmeras, Ecuador', person: 'Sr Jaime Bogunas', phone: '0999200173' },
      { name: 'SOLAR INVESTMENT inc - Peru', address: 'Ave La Encalada 569 suite 201, Monterrico, Lima, Peru', person: 'Sr Luis Felipe Del Solar', phone: '+51 1 267 0156' },
    ],
  },
  {
    region: 'Middle East',
    contacts: [
      { name: 'KFB Holding Group - Saudi Arabia', address: 'Eastern Ring Road, Al Rayan Area, Riyadh, 61891, KSA 11575', person: 'Dr Samer Almuqdah', phone: '966 50 997 2683' },
    ],
  },
];

export default function ContactPage() {
  const heroRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const leftRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', threshold: 0.15 });
  const rightRef = useScrollAnimation<HTMLDivElement>({ direction: 'right', threshold: 0.15 });

  const [formData, setFormData] = useState({
    nombre: '', empresa: '', pais: '', region: '', necesidad: '', mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openRegions, setOpenRegions] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleRegion = (region: string) => {
    setOpenRegions(prev =>
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
  };

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundColor: 'var(--deep-blue)', minHeight: '50vh' }}
      >
        <div ref={heroRef}>
          <h1
            className="font-light leading-none tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
          >
            Contacto
          </h1>
          <p
            className="mt-6 text-lg font-light leading-relaxed max-w-[600px] mx-auto"
            style={{ color: 'var(--muted-text)' }}
          >
            Nuestro equipo de ventas esta listo para conversar.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          backgroundColor: 'var(--deep-blue)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - info & distributors */}
          <div ref={leftRef}>
            <div className="overline">DIRECTOR INTERNACIONAL</div>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Mail size={18} style={{ color: 'var(--aqua)', flexShrink: 0 }} />
                <span className="text-sm" style={{ color: 'var(--white)' }}>titomatoscapifali@awinternational.ca</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} style={{ color: 'var(--aqua)', flexShrink: 0 }} />
                <span className="text-sm" style={{ color: 'var(--white)' }}>+1 939 251 7443</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} style={{ color: 'var(--aqua)', flexShrink: 0, marginTop: '2px' }} />
                <span className="text-sm leading-relaxed" style={{ color: 'var(--white)' }}>
                  Global Plaza Bldg, John Albert St 322, Suite 201 B1<br />
                  San Juan, Puerto Rico 00920
                </span>
              </div>
            </div>

            {/* Distributors */}
            <div className="mt-10">
              <div className="overline mb-6">DISTRIBUIDORES POR REGION</div>
              {distributors.map((dist) => (
                <div
                  key={dist.region}
                  className="mb-3"
                  style={{ border: '1px solid rgba(245,248,250,0.08)', borderRadius: '6px' }}
                >
                  <button
                    onClick={() => toggleRegion(dist.region)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--white)' }}>
                      {dist.region}
                    </span>
                    <span style={{ color: 'var(--muted-text)' }}>
                      {openRegions.includes(dist.region) ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {openRegions.includes(dist.region) && (
                    <div className="px-5 pb-4 flex flex-col gap-4">
                      {dist.contacts.map((c, idx) => (
                        <div key={idx} className="text-sm" style={{ color: 'var(--muted-text)' }}>
                          <div className="font-medium" style={{ color: 'var(--white)' }}>{c.name}</div>
                          {c.person ? <div>{c.person}</div> : null}
                          {c.address ? <div>{c.address}</div> : null}
                          {c.extra ? <div className="text-xs mt-1">{c.extra}</div> : null}
                          {c.phone ? <div className="mt-1">{c.phone}</div> : null}
                          {c.email ? <div>{c.email}</div> : null}
                          {c.website ? <div className="mt-1" style={{ color: 'var(--aqua)' }}>{c.website}</div> : null}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <div ref={rightRef}>
            <div
              className="rounded-lg p-8 sm:p-10"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(245,248,250,0.06)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-2xl mb-4" style={{ color: 'var(--aqua)' }}>&#10003;</div>
                  <h3 className="text-xl font-medium" style={{ color: 'var(--white)' }}>Mensaje enviado</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--muted-text)' }}>
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="text" name="nombre" placeholder="Tu nombre completo" value={formData.nombre} onChange={handleChange} required className="input-field" />
                  <input type="text" name="empresa" placeholder="Nombre de tu empresa" value={formData.empresa} onChange={handleChange} className="input-field" />
                  <input type="text" name="pais" placeholder="Pais" value={formData.pais} onChange={handleChange} className="input-field" />
                  <select name="region" value={formData.region} onChange={handleChange} className="input-field" style={{ color: formData.region ? 'var(--white)' : 'rgba(245,248,250,0.3)' }}>
                    <option value="" disabled>Region</option>
                    <option value="North America">North America</option>
                    <option value="Central America">Central America</option>
                    <option value="South America">South America</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Other">Other</option>
                  </select>
                  <select name="necesidad" value={formData.necesidad} onChange={handleChange} required className="input-field" style={{ color: formData.necesidad ? 'var(--white)' : 'rgba(245,248,250,0.3)' }}>
                    <option value="" disabled>Tipo de necesidad</option>
                    {needTypes.map((t) => (
                      <option key={t} value={t} style={{ backgroundColor: 'var(--deep-blue)', color: 'var(--white)' }}>{t}</option>
                    ))}
                  </select>
                  <textarea name="mensaje" placeholder="Cuentanos sobre tu proyecto..." value={formData.mensaje} onChange={handleChange} rows={4} required className="input-field resize-none" />
                  <button type="submit" className="btn-primary w-full mt-2">Solicitar Cotizacion</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
