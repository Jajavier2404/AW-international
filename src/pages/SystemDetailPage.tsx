import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Download, Droplets, Zap, Shield, Wind, Check, Sun, Battery, Gauge } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Datos técnicos por sistema (no traducibles)
const systemSpecs: Record<string, {
  image: string;
  datasheet: string;
  specs: { label: string; value: string }[];
  features: string[];
}> = {
  aw2500: {
    image: '/images/product-aw2500.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-2500.pdf',
    specs: [
      { label: 'Capacidad', value: 'Hasta 20L/día' },
      { label: 'Consumo', value: '550W' },
      { label: 'Dimensiones', value: '380 x 515 x 550 mm' },
      { label: 'Peso', value: '39 kg' },
      { label: 'Refrigerante', value: 'R134a (eco-friendly)' },
      { label: 'Almacenamiento', value: '13 litros' },
    ],
    features: [
      'Ideal para hogares y oficinas',
      'Agua pura sin químicos ni contaminantes',
      'Diseño compacto de escritorio',
      'Bajo consumo energético',
      'Filtros de aire y agua de fácil reemplazo',
      'Operación silenciosa',
    ],
  },
  aw800: {
    image: '/images/product-aw800.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-800.pdf',
    specs: [
      { label: 'Capacidad', value: 'Hasta 800 gal/día' },
      { label: 'Energía', value: 'Trifásica 25kW' },
      { label: 'Almacenamiento', value: '1,817 litros' },
      { label: 'Dimensiones', value: '2,337 x 4,597 x 2,311 mm' },
      { label: 'Peso', value: '2,162 kg' },
      { label: 'Aplicaciones', value: 'Resorts, hospitales, comunidades' },
    ],
    features: [
      'Producción masiva de agua potable',
      'Ideal para comunidades enteras',
      'Sistema trifásico industrial',
      'Monitoreo remoto disponible',
      'Fácil integración a redes existentes',
      'Alta eficiencia en zonas húmedas',
    ],
  },
  awi250g: {
    image: '/images/product-awi250.jpg',
    datasheet: '/fichaTecnica/AW250.pdf',
    specs: [
      { label: 'Capacidad', value: 'Hasta 1,000L/día' },
      { label: 'Categoría', value: 'Semi-industrial' },
      { label: 'Ideal para', value: 'Fábricas, hoteles, edificios' },
      { label: 'Eficiencia', value: 'Alta producción por m²' },
      { label: 'Mantenimiento', value: 'Periódico simple' },
      { label: 'Instalación', value: 'Indoor/Outdoor' },
    ],
    features: [
      'Solución semi-industrial versátil',
      'Perfecto para hoteles y fábricas',
      'Agua pura certificada',
      'Diseño modular escalable',
      'Bajo costo operativo',
      'Resistente a condiciones adversas',
    ],
  },
  aw5k: {
    image: '/images/product-aw5k.jpg',
    datasheet: '/fichaTecnica/AWI-AW-5K-Tech-Sheet-Last-2.pdf',
    specs: [
      { label: 'Capacidad', value: 'Hasta 5,000 gal/día' },
      { label: 'Categoría', value: 'Industrial' },
      { label: 'Aplicaciones', value: 'Industria, desastres, agro' },
      { label: 'Energía', value: 'Industrial trifásica' },
      { label: 'Escalabilidad', value: 'Módulos en paralelo' },
      { label: 'Monitoreo', value: 'Remoto 24/7' },
    ],
    features: [
      'Máxima capacidad de producción',
      'Ideal para respuesta a desastres',
      'Sistemas modulares escalables',
      'Monitoreo remoto continuo',
      'Cumplimiento industrial stricto',
      'Integración con sistemas solares',
    ],
  },
  aw9000: {
    image: '/images/solar-system.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-9000.pdf',
    specs: [
      { label: 'Capacidad', value: '9,000 gal/día' },
      { label: 'Energía', value: 'Solar fotovoltaica' },
      { label: 'Aplicaciones', value: 'Ubicaciones remotas' },
      { label: 'Autonomía', value: 'Independiente de red' },
      { label: 'Mantenimiento', value: 'Mínimo' },
      { label: 'Instalación', value: 'Outdoor' },
    ],
    features: [
      'Funciona 100% con energía solar',
      'Ideal para zonas sin acceso a red eléctrica',
      'Bajo costo operativo a largo plazo',
      'Resistente a condiciones climáticas extremas',
      'Fácil instalación y mantenimiento',
      'Sin emisiones de carbono',
    ],
  },
  aw12000: {
    image: '/images/solar-system.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-12000.pdf',
    specs: [
      { label: 'Capacidad', value: '12,000 gal/día' },
      { label: 'Energía', value: 'Solar fotovoltaica' },
      { label: 'Aplicaciones', value: 'Comunidades, industria' },
      { label: 'Autonomía', value: 'Independiente de red' },
      { label: 'Mantenimiento', value: 'Mínimo' },
      { label: 'Instalación', value: 'Outdoor' },
    ],
    features: [
      'Alta capacidad con energía solar',
      'Perfecto para comunidades rurales',
      'Sistema autónomo y sostenible',
      'Monitoreo remoto disponible',
      'Diseño robusto para exterior',
      'Retorno de inversión rápido',
    ],
  },
  aw18000s: {
    image: '/images/solar-system.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-18000S.pdf',
    specs: [
      { label: 'Capacidad', value: '18,000 gal/día' },
      { label: 'Energía', value: 'Solar fotovoltaica' },
      { label: 'Aplicaciones', value: 'Industrial, comunidades' },
      { label: 'Autonomía', value: 'Independiente de red' },
      { label: 'Escalabilidad', value: 'Módulos en paralelo' },
      { label: 'Instalación', value: 'Outdoor industrial' },
    ],
    features: [
      'Producción masiva con energía limpia',
      'Ideal para grandes comunidades',
      'Sistema escalable modular',
      'Mínimo impacto ambiental',
      'Operación autónoma 24/7',
      'Mantenimiento predictivo remoto',
    ],
  },
  aw24000s: {
    image: '/images/solar-system.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-24000S.pdf',
    specs: [
      { label: 'Capacidad', value: '24,000 gal/día' },
      { label: 'Energía', value: 'Solar fotovoltaica' },
      { label: 'Aplicaciones', value: 'Máxima escala industrial' },
      { label: 'Autonomía', value: 'Independiente de red' },
      { label: 'Escalabilidad', value: 'Módulos en paralelo' },
      { label: 'Instalación', value: 'Outdoor industrial' },
    ],
    features: [
      'Máxima capacidad de la línea solar',
      'Solución completa para ciudades',
      'Sistema más grande de AW International',
      'Integración con almacenamiento de baterías',
      'Control total vía web',
      'Diseñado para durar 25+ años',
    ],
  },
  adpv40k: {
    image: '/images/solar-system.jpg',
    datasheet: '/fichaTecnica/AW-SolarSystem_ADPV40K.pdf',
    specs: [
      { label: 'Capacidad', value: '40KW Solar' },
      { label: 'Seguimiento', value: '2 ejes automático' },
      { label: 'Paneles', value: '70 módulos' },
      { label: 'Baterías', value: '66 sets (13,200Ah)' },
      { label: 'Azimuth', value: '0-220 grados' },
      { label: 'Elevación', value: '20-80 grados' },
    ],
    features: [
      'Seguimiento solar de doble eje',
      'Máxima captación de energía',
      'Sistema de baterías de respaldo',
      'Automatización completa',
      'Monitoreo en tiempo real',
      'Ideal para sistemas AW grandes',
    ],
  },
};

export default function SystemDetailPage() {
  const { systemId } = useParams<{ systemId: string }>();
  const { t } = useTranslation();
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const system = systemId ? systemSpecs[systemId] : null;

  if (!system) {
    return (
      <main style={{ paddingTop: '100px', position: 'relative', zIndex: 1 }}>
        <div className="section-container text-center py-20">
          <h1 style={{ color: 'var(--white)' }}>Sistema no encontrado</h1>
          <Link to="/systems" className="btn-primary mt-6 inline-block">
            Ver todos los sistemas
          </Link>
        </div>
      </main>
    );
  }

  const systemName = t(`systems.products.${systemId}.name`);
  const systemDesc = t(`systems.products.${systemId}.description`);
  const systemCapacity = t(`systems.products.${systemId}.capacity`);

  return (
    <main style={{ paddingTop: '72px', position: 'relative', zIndex: 1 }}>
      {/* Hero - White */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: '40px var(--section-pad-x)',
        }}
      >
        <div className="section-container">
          <Link
            to="/systems"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-80"
            style={{ color: 'var(--muted-text-dark)' }}
          >
            <ArrowLeft size={16} />
            {t('navigation.systems')}
          </Link>

          <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="overline-dark mb-3">{t('systems.title')}</div>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: 'var(--deep-blue)',
                }}
              >
                {systemName}
              </h1>
              <span
                className="inline-block mt-3 text-sm font-semibold px-4 py-1.5 rounded-full"
                style={{ background: 'rgba(19,73,128,0.1)', color: 'var(--deep-blue)' }}
              >
                {systemCapacity}
              </span>
              <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--muted-text-dark)' }}>
                {systemDesc}
              </p>
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <a
                  href={system.datasheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-[0.06em]"
                  style={{ background: 'var(--deep-blue)', color: 'var(--white)' }}
                >
                  <Download size={18} />
                  {t('systems.datasheet')}
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-[0.06em]"
                  style={{ background: 'transparent', border: '2px solid var(--deep-blue)', color: 'var(--deep-blue)' }}
                >
                  {t('contact.form.submit')}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' }}>
              <img
                src={system.image}
                alt={systemName}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs - Blue */}
      <section
        style={{
          background: 'var(--deep-blue)',
          padding: '60px var(--section-pad-x)',
        }}
      >
        <div className="section-container">
          <div className="text-center mb-10">
            <div className="overline">ESPECIFICACIONES TÉCNICAS</div>
            <h2 className="mt-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--white)' }}>
              Características del Sistema
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[800px] mx-auto">
            {system.specs.map((spec, index) => (
              <div
                key={index}
                className="p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--muted-text)' }}>
                  {spec.label}
                </div>
                <div className="text-base font-semibold" style={{ color: 'var(--white)' }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - White */}
      <section
        style={{
          background: 'var(--section-light)',
          padding: '60px var(--section-pad-x)',
        }}
      >
        <div className="section-container">
          <div className="text-center mb-10">
            <div className="overline-dark">VENTAJAS</div>
            <h2 className="mt-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--deep-blue)' }}>
              ¿Por qué elegir este sistema?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px] mx-auto">
            {system.features.map((feature, index) => {
              const icons = [Droplets, Zap, Shield, Wind, Check, Sun, Battery, Gauge];
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: 'var(--white)',
                    border: '1px solid rgba(19,73,128,0.08)',
                    boxShadow: '0 2px 12px rgba(19,73,128,0.04)',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(19,73,128,0.08)' }}>
                    <Icon size={20} style={{ color: 'var(--deep-blue)' }} />
                  </div>
                  <span className="text-base" style={{ color: 'var(--deep-blue)' }}>
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--deep-blue)',
          padding: '60px var(--section-pad-x)',
        }}
      >
        <div className="section-container text-center">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--white)' }}>
            ¿Interesado en el {systemName}?
          </h2>
          <p className="mt-3 mb-6" style={{ color: 'var(--muted-text)' }}>
            Contacta a nuestro equipo de ventas para obtener una cotización personalizada.
          </p>
          <Link to="/contact" className="btn-primary">
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </main>
  );
}
