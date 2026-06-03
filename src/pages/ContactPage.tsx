import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Plus, Minus, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  const { t } = useTranslation();
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
    <main style={{ position: 'relative', zIndex: 1, paddingTop: '64px' }}>
      {/* Hero - Dark Blue */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ 
          background: 'var(--deep-blue)', 
          minHeight: '45vh' 
        }}
      >
        <div ref={heroRef}>
          <div className="overline mb-4">{t('navigation.contact')}</div>
          <h1
            className="leading-none tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
          >
            {t('contact.title')}
          </h1>
          <p
            className="mt-6 text-lg font-light leading-relaxed max-w-[600px] mx-auto"
            style={{ color: 'var(--muted-text)' }}
          >
            {t('contact.subtitle')}
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
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - info & distributors */}
          <div ref={leftRef}>
            <div
              className="rounded-xl p-8 mb-8"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(19,73,128,0.08)',
                boxShadow: '0 4px 20px rgba(19,73,128,0.06)',
              }}
            >
              <div className="overline-dark mb-6">DIRECTOR INTERNACIONAL</div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(19,73,128,0.08)' }}
                  >
                    <Mail size={18} style={{ color: 'var(--deep-blue)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--deep-blue)' }}>titomatoscapifali@awinternational.ca</span>
                </div>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(19,73,128,0.08)' }}
                  >
                    <Phone size={18} style={{ color: 'var(--deep-blue)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--deep-blue)' }}>+1 939 251 7443</span>
                </div>
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(19,73,128,0.08)' }}
                  >
                    <MapPin size={18} style={{ color: 'var(--deep-blue)' }} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--deep-blue)' }}>
                    Global Plaza Bldg, John Albert St 322, Suite 201 B1<br />
                    San Juan, Puerto Rico 00920
                  </span>
                </div>
              </div>
            </div>

            {/* Distributors */}
            <div>
              <div className="overline-dark mb-6">DISTRIBUIDORES POR REGION</div>
              {distributors.map((dist) => (
                <div
                  key={dist.region}
                  className="mb-3"
                  style={{ 
                    background: 'var(--white)',
                    border: '1px solid rgba(19,73,128,0.08)', 
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(19,73,128,0.04)',
                  }}
                >
                  <button
                    onClick={() => toggleRegion(dist.region)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <span className="text-sm font-semibold" style={{ color: 'var(--deep-blue)' }}>
                      {dist.region}
                    </span>
                    <span style={{ color: 'var(--deep-blue)' }}>
                      {openRegions.includes(dist.region) ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {openRegions.includes(dist.region) && (
                    <div className="px-5 pb-4 flex flex-col gap-4">
                      {dist.contacts.map((c, idx) => (
                        <div key={idx} className="text-sm p-3 rounded-lg" style={{ background: 'rgba(19,73,128,0.03)', color: 'var(--muted-text-dark)' }}>
                          <div className="font-semibold mb-1" style={{ color: 'var(--deep-blue)' }}>{c.name}</div>
                          {c.person ? <div>{c.person}</div> : null}
                          {c.address ? <div>{c.address}</div> : null}
                          {c.extra ? <div className="text-xs mt-1">{c.extra}</div> : null}
                          {c.phone ? <div className="mt-1">{c.phone}</div> : null}
                          {c.email ? <div>{c.email}</div> : null}
                          {c.website ? <div className="mt-1" style={{ color: 'var(--deep-blue)' }}>{c.website}</div> : null}
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
              className="rounded-xl p-8 sm:p-10"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(19,73,128,0.08)',
                boxShadow: '0 25px 50px -12px rgba(19,73,128,0.1)',
              }}
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(19,73,128,0.08)' }}
                  >
                    <CheckCircle size={32} style={{ color: 'var(--deep-blue)' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--deep-blue)', fontFamily: 'Outfit' }}>
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="mt-3" style={{ color: 'var(--muted-text-dark)' }}>
                    {t('contact.form.success')}
                  </p>
                </div>
              ) : (
                <>
                  <h3 
                    className="text-lg font-semibold mb-6"
                    style={{ color: 'var(--deep-blue)', fontFamily: 'Outfit' }}
                  >
                    Envíanos un Mensaje
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="nombre" placeholder={t('contact.form.name')} value={formData.nombre} onChange={handleChange} required className="input-field-light" />
                      <input type="text" name="empresa" placeholder="Empresa" value={formData.empresa} onChange={handleChange} className="input-field-light" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} className="input-field-light" />
                      <select name="region" value={formData.region} onChange={handleChange} className="input-field-light" style={{ color: formData.region ? 'var(--deep-blue)' : 'rgba(19,73,128,0.4)' }}>
                        <option value="" disabled>Región</option>
                        <option value="North America">North America</option>
                        <option value="Central America">Central America</option>
                        <option value="South America">South America</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <select name="necesidad" value={formData.necesidad} onChange={handleChange} required className="input-field-light" style={{ color: formData.necesidad ? 'var(--deep-blue)' : 'rgba(19,73,128,0.4)' }}>
                      <option value="" disabled>Tipo de necesidad</option>
                      <option value="Residential" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-blue)' }}>Residential</option>
                      <option value="Industrial" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-blue)' }}>Industrial</option>
                      <option value="Community" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-blue)' }}>Community</option>
                      <option value="Oil & Gas" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-blue)' }}>Oil & Gas</option>
                      <option value="Agriculture" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-blue)' }}>Agriculture</option>
                      <option value="Other" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-blue)' }}>Other</option>
                    </select>
                    <textarea name="mensaje" placeholder={t('contact.form.message')} value={formData.mensaje} onChange={handleChange} rows={4} required className="input-field-light resize-none" />
                    <button type="submit" className="btn-primary w-full mt-2 flex items-center justify-center gap-2">
                      <Send size={18} />
                      {t('contact.form.submit')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}