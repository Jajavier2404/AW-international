import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Sun, FileText } from 'lucide-react';

const products = [
  {
    name: 'AW 2500',
    capacity: 'Hasta 20L/dia',
    description: 'Unidad de escritorio para hogar y oficina. La mejor agua potable del mundo, de forma sostenible.',
    applications: 'Hogar, Oficina, Estudios',
    image: '/images/product-aw2500.jpg',
    datasheet: 'https://www.awinternational.ca/wp-content/uploads/2019/01/AW-International-AW-2500.pdf',
  },
  {
    name: 'AW 800',
    capacity: 'Hasta 800 gal/dia',
    description: 'Sistema comercial e industrial de alta produccion para aplicaciones de gran escala.',
    applications: 'Resorts, Hospitales, Comunidades, Hidroponia',
    image: '/images/product-aw800.jpg',
    datasheet: 'https://www.awinternational.ca/wp-content/uploads/2019/01/AW-International-AW-800.pdf',
  },
  {
    name: 'AWI 250 G',
    capacity: 'Hasta 1,000L/dia',
    description: 'Solucion semi-industrial ideal para necesidades intermedias de agua potable.',
    applications: 'Fabricas, Hoteles, Edificios',
    image: '/images/product-awi250.jpg',
    datasheet: 'https://awinternational.ca/wp-content/uploads/2023/06/awg-250G-.pdf',
  },
  {
    name: 'AW 5K',
    capacity: 'Hasta 5,000 gal/dia',
    description: 'Sistema industrial de maxima capacidad para produccion masiva de agua potable.',
    applications: 'Industria, Desastres, Agroindustria',
    image: '/images/product-aw5k.jpg',
    datasheet: 'https://awinternational.ca/wp-content/uploads/2023/06/AWI-AW-5K-Tech-Sheet-Last-2.pdf',
  },
];

const solarProducts = ['AW 9000', 'AW 12000', 'AW 18000S', 'AW 24000S'];

export default function SystemsSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggerAnimation<HTMLDivElement>(4, 0.1);

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="sistemas"
      style={{
        backgroundColor: 'var(--cream)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div ref={headerRef} className="text-center">
          <div className="overline-dark">NUESTROS SISTEMAS</div>
          <h2
            className="mt-4 font-normal leading-tight tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--deep-blue)',
            }}
          >
            Disenados para adaptarse a tus necesidades
          </h2>
          <p
            className="mt-4 text-lg font-light leading-relaxed mx-auto max-w-[600px]"
            style={{ color: 'var(--mid-blue)', opacity: 0.7 }}
          >
            Desde unidades de escritorio hasta sistemas industriales de alta capacidad, tenemos la solucion para cada aplicacion.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}
            >
              <div
                className="h-[200px] overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: 'var(--deep-blue)' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-medium" style={{ color: 'var(--deep-blue)' }}>
                    {product.name}
                  </h3>
                  <span
                    className="text-xs font-normal uppercase tracking-[0.05em] px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(78,205,196,0.1)',
                      color: 'var(--water-blue)',
                    }}
                  >
                    {product.capacity}
                  </span>
                </div>

                <p
                  className="mt-3 text-sm font-light leading-relaxed"
                  style={{ color: 'var(--mid-blue)', opacity: 0.7 }}
                >
                  {product.description}
                </p>

                <p
                  className="mt-3 text-xs uppercase tracking-[0.05em]"
                  style={{ color: 'var(--muted-text)' }}
                >
                  {product.applications}
                </p>
              </div>

              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ borderTop: '1px solid rgba(10,22,40,0.06)' }}
              >
                <button onClick={scrollToContact} className="btn-primary text-[0.65rem] py-2.5 px-5">
                  Solicitar Cotizacion
                </button>
                <a
                  href={product.datasheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-1.5 text-[0.65rem] py-2.5 px-4"
                >
                  <FileText size={14} />
                  Ficha Tecnica
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Solar Systems */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-4">
            <Sun size={28} style={{ color: 'var(--fresh-green)' }} />
            <h3
              className="font-normal leading-tight tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--deep-blue)' }}
            >
              Sistemas Solares
            </h3>
          </div>
          <p
            className="text-base font-light leading-relaxed max-w-[700px]"
            style={{ color: 'var(--mid-blue)', opacity: 0.7 }}
          >
            Soluciones autonomas con paneles solares de 40KW y baterias de 13,200Ah.
            Ideales para ubicaciones remotas sin acceso a red electrica.
          </p>

          <div className="mt-6 overflow-hidden rounded-lg">
            <img
              src="/images/solar-system.jpg"
              alt="Solar water generation system"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {solarProducts.map((name) => (
              <div
                key={name}
                className="bg-white rounded-lg p-5 flex flex-col items-center justify-between gap-3"
                style={{ boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}
              >
                <span className="text-base font-medium" style={{ color: 'var(--deep-blue)' }}>
                  {name}
                </span>
                <button onClick={scrollToContact} className="btn-ghost text-[0.65rem] py-2 px-4">
                  Consultar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
