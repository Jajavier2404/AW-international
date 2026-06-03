import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProblemSection() {
  const leftRef = useScrollAnimation<HTMLDivElement>({ direction: 'left', threshold: 0.2 });
  const rightRef = useScrollAnimation<HTMLDivElement>({ direction: 'right', threshold: 0.2 });

  return (
    <section
      style={{
        backgroundColor: 'var(--deep-blue)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={leftRef}>
          <div className="overline">LA CRISIS DEL AGUA</div>
          <h2
            className="mt-4 font-normal leading-tight tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--white)',
            }}
          >
            El 97.5% del agua en la Tierra es salada. Menos del 1% es dulce y accesible.
          </h2>
          <p
            className="mt-8 text-lg font-light leading-relaxed"
            style={{ color: 'var(--muted-text)' }}
          >
            Para 2025, 1.800 millones de personas viviran en paises con escasez absoluta de agua.
            Para 2030, el 47% de la poblacion mundial estara en areas de alto estres hidrico.
            AW International ofrece una solucion: agua pura, extraida directamente del aire que respiramos.
          </p>

          <div className="flex flex-wrap gap-8 mt-12">
            <div>
              <div
                className="font-normal leading-none tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--aqua)' }}
              >
                97.5%
              </div>
              <div className="overline mt-2" style={{ color: 'var(--muted-text)' }}>
                del agua mundial es salada
              </div>
            </div>
            <div>
              <div
                className="font-normal leading-none tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--aqua)' }}
              >
                &lt;1%
              </div>
              <div className="overline mt-2" style={{ color: 'var(--muted-text)' }}>
                de agua dulce disponible
              </div>
            </div>
            <div>
              <div
                className="font-normal leading-none tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--aqua)' }}
              >
                1.8B
              </div>
              <div className="overline mt-2" style={{ color: 'var(--muted-text)' }}>
                personas afectadas para 2025
              </div>
            </div>
          </div>
        </div>

        <div ref={rightRef}>
          <img
            src="/images/problem-1.jpg"
            alt="Water crisis - dry earth and oasis"
            className="w-full rounded"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          />
        </div>
      </div>
    </section>
  );
}
