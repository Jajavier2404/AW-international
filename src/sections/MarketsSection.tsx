import { useStaggerAnimation, useScrollAnimation } from '../hooks/useScrollAnimation';
import { Home, Factory, Users, Fuel, Sprout } from 'lucide-react';

const markets = [
  {
    icon: Home,
    title: 'Residencial',
    description: 'Hogares y oficinas que buscan autonomia hidrica total.',
    ideal: 'AW 2500',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Produccion continua de agua para procesos industriales y manufactura.',
    ideal: 'AW 5K',
  },
  {
    icon: Users,
    title: 'Comunidades',
    description: 'Agua potable accesible para comunidades enteras y respuesta a desastres.',
    ideal: 'AW 800',
  },
  {
    icon: Fuel,
    title: 'Oil & Gas',
    description: 'Soluciones de agua para exploracion en sitios remotos sin infraestructura.',
    ideal: 'AWI 250 G',
  },
  {
    icon: Sprout,
    title: 'Agroindustria',
    description: 'Riego e hidroponia con agua pura generada in situ.',
    ideal: 'AW 800',
  },
];

export default function MarketsSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useStaggerAnimation<HTMLDivElement>(5, 0.1);

  return (
    <section
      id="mercados"
      style={{
        backgroundColor: 'var(--deep-blue)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div ref={headerRef} className="text-center">
          <div className="overline">MERCADOS OBJETIVO</div>
          <h2
            className="mt-4 font-normal leading-tight tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--white)',
            }}
          >
            Agua pura para cada industria
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {markets.slice(0, 3).map((market) => {
            const Icon = market.icon;
            return (
              <div
                key={market.title}
                className="rounded-lg p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(245,248,250,0.06)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(78,205,196,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,248,250,0.06)';
                }}
              >
                <Icon size={48} style={{ color: 'var(--aqua)' }} />
                <h3 className="mt-4 text-xl font-medium" style={{ color: 'var(--white)' }}>
                  {market.title}
                </h3>
                <p className="mt-2 text-sm font-light" style={{ color: 'var(--muted-text)' }}>
                  {market.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.05em]" style={{ color: 'var(--aqua)' }}>
                  Ideal: {market.ideal}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[800px] mx-auto">
          {markets.slice(3).map((market) => {
            const Icon = market.icon;
            return (
              <div
                key={market.title}
                className="rounded-lg p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(245,248,250,0.06)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(78,205,196,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,248,250,0.06)';
                }}
              >
                <Icon size={48} style={{ color: 'var(--aqua)' }} />
                <h3 className="mt-4 text-xl font-medium" style={{ color: 'var(--white)' }}>
                  {market.title}
                </h3>
                <p className="mt-2 text-sm font-light" style={{ color: 'var(--muted-text)' }}>
                  {market.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.05em]" style={{ color: 'var(--aqua)' }}>
                  Ideal: {market.ideal}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
