import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Absorcion',
    description: 'El sistema extrae aire humedo del ambiente. Funciona con humedad minima del 50%, sin necesidad de lluvia.',
    image: '/images/step-1.jpg',
  },
  {
    number: '02',
    title: 'Condensacion',
    description: 'El aire se enfria hasta el punto de rocio. La humedad se condensa sobre bobinas de acero inoxidable de ultima generacion.',
    image: '/images/step-2.jpg',
  },
  {
    number: '03',
    title: 'Purificacion',
    description: 'El agua pasa por camaras de filtracion avanzada, produciendo agua potable pura, limpia y lista para consumir.',
    image: '/images/step-3.jpg',
  },
];

export default function HowItWorksSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const stepsRef = useStaggerAnimation<HTMLDivElement>(3, 0.15);

  return (
    <section
      id="tecnologia"
      style={{
        backgroundColor: 'var(--white)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div ref={headerRef} className="text-center">
          <div className="overline-dark">NUESTRA TECNOLOGIA</div>
          <h2
            className="mt-4 font-normal leading-tight tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--deep-blue)',
            }}
          >
            Tres pasos. Agua infinita.
          </h2>
        </div>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{
                  border: '2px solid var(--aqua)',
                }}
              >
                <span
                  className="font-normal"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--aqua)' }}
                >
                  {step.number}
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <h3
                className="mt-6 text-xl font-medium"
                style={{ color: 'var(--deep-blue)' }}
              >
                {step.title}
              </h3>
              <p
                className="mt-3 text-base font-light leading-relaxed"
                style={{ color: 'var(--mid-blue)', opacity: 0.7 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
