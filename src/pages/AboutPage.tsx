import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutPage() {
  const missionRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const visionRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const teamRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundColor: 'var(--deep-blue)',
          minHeight: '60vh',
        }}
      >
        <h1
          className="font-light leading-none tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--white)',
          }}
        >
          Sobre AW International
        </h1>
        <p
          className="mt-6 text-lg font-light leading-relaxed max-w-[600px]"
          style={{ color: 'var(--muted-text)' }}
        >
          Pioneros en tecnologia de generacion de agua atmosferica
        </p>
      </section>

      {/* Content */}
      <section
        style={{
          backgroundColor: 'var(--white)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <div ref={missionRef}>
            <h2
              className="font-normal leading-tight tracking-[-0.01em]"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--deep-blue)',
              }}
            >
              Nuestra Mision
            </h2>
            <p
              className="mt-4 text-base font-light leading-relaxed"
              style={{ color: 'var(--mid-blue)', opacity: 0.8 }}
            >
              AW International desarrollo tecnologia pionera para extraer agua de la humedad del aire.
              Aprovechando el oceano renovable de vapor de agua en la atmosfera, nuestra tecnologia
              patentada transforma la humedad en una fuente abundante de agua limpia cerca del punto de uso.
              Nuestros sistemas escalables y modulares son la solucion responsable a la crisis mundial del agua.
            </p>
          </div>

          <div ref={visionRef} className="mt-16">
            <h2
              className="font-normal leading-tight tracking-[-0.01em]"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--deep-blue)',
              }}
            >
              Nuestra Vision
            </h2>
            <p
              className="mt-4 text-base font-light leading-relaxed"
              style={{ color: 'var(--mid-blue)', opacity: 0.8 }}
            >
              AW International continuara liderando la investigacion y desarrollo en tecnologia Air-to-Water.
              Nuestra segunda generacion de maquinas para hogar, oficina y comercio establecera el estandar
              de la industria, convirtiendonos en el lider de mercado mas reconocido y confiable del mundo.
            </p>
          </div>

          <div
            ref={teamRef}
            className="mt-16 rounded-lg p-10 text-center"
            style={{
              backgroundColor: 'var(--cream)',
            }}
          >
            <h2
              className="font-normal leading-tight tracking-[-0.01em]"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--deep-blue)',
              }}
            >
              Nuestro Equipo
            </h2>
            <p
              className="mt-4 text-base font-light"
              style={{ color: 'var(--muted-text)' }}
            >
              Pronto conoceras al equipo detras de esta revolucionaria tecnologia.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Contactar al Equipo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
