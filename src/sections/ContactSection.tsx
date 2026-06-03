import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const needTypes = [
  'Residencial',
  'Industrial',
  'Comunidad',
  'Oil & Gas',
  'Agroindustria',
  'Otro',
];

export default function ContactSection() {
  const leftRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', threshold: 0.2 });
  const rightRef = useScrollAnimation<HTMLDivElement>({ direction: 'right', threshold: 0.2 });

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    pais: '',
    necesidad: '',
    mensaje: '',
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
    <section
      id="contacto"
      style={{
        background: 'linear-gradient(to bottom, #0a1628 0%, #0a1628 66%, #1e3a5f 100%)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left - info */}
        <div ref={leftRef}>
          <div className="overline">CONTACTO</div>
          <h2
            className="mt-4 font-normal leading-tight tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--white)',
            }}
          >
            Hablemos de tu proyecto
          </h2>
          <p
            className="mt-6 text-lg font-light leading-relaxed"
            style={{ color: 'var(--muted-text)' }}
          >
            Nuestro equipo de ventas esta listo para ayudarte a encontrar la solucion
            perfecta para tus necesidades de agua. Solicita una cotizacion personalizada hoy mismo.
          </p>

          <div className="flex flex-col gap-6 mt-12">
            <div className="flex items-center gap-4">
              <Phone size={20} style={{ color: 'var(--aqua)', flexShrink: 0 }} />
              <span className="text-base" style={{ color: 'var(--white)' }}>+1 939 251 7443</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} style={{ color: 'var(--aqua)', flexShrink: 0 }} />
              <div className="flex flex-col">
                <span className="text-sm" style={{ color: 'var(--white)' }}>info@awinternational.ca</span>
                <span className="text-sm" style={{ color: 'var(--muted-text)' }}>titomatoscapifali@awinternational.ca</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} style={{ color: 'var(--aqua)', flexShrink: 0, marginTop: '2px' }} />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--white)' }}>
                Global Plaza Bldg, John Albert St 322, Suite 201 B1<br />
                San Juan, Puerto Rico 00920
              </span>
            </div>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.08em]" style={{ color: 'var(--muted-text)' }}>
            Tito Matos Capifali — Director de Ventas y Marketing Internacional
          </p>
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
                <h3 className="text-xl font-medium" style={{ color: 'var(--white)' }}>
                  Mensaje enviado
                </h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--muted-text)' }}>
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Nombre de tu empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="input-field"
                />
                <input
                  type="text"
                  name="pais"
                  placeholder="Pais"
                  value={formData.pais}
                  onChange={handleChange}
                  className="input-field"
                />
                <select
                  name="necesidad"
                  value={formData.necesidad}
                  onChange={handleChange}
                  required
                  className="input-field"
                  style={{ color: formData.necesidad ? 'var(--white)' : 'rgba(245,248,250,0.3)' }}
                >
                  <option value="" disabled>Tipo de necesidad</option>
                  {needTypes.map((type) => (
                    <option key={type} value={type} style={{ backgroundColor: 'var(--deep-blue)', color: 'var(--white)' }}>
                      {type}
                    </option>
                  ))}
                </select>
                <textarea
                  name="mensaje"
                  placeholder="Cuentanos sobre tu proyecto y necesidades de agua..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="input-field resize-none"
                />
                <button type="submit" className="btn-primary w-full mt-2">
                  Solicitar Cotizacion
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
