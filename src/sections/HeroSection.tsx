import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const overlineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = [
      { el: overlineRef.current, delay: 300 },
      { el: headlineRef.current, delay: 500 },
      { el: subRef.current, delay: 700 },
      { el: ctaRef.current, delay: 900 },
    ];

    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6"
      style={{ zIndex: 1 }}
    >
      <div className="text-center max-w-[900px] mx-auto">
        <div ref={overlineRef} className="overline mb-8">
          TECNOLOGIA DE GENERACION DE AGUA ATMOSFERICA
        </div>

        <h1
          ref={headlineRef}
          className="font-light leading-none tracking-[-0.03em] mb-6"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            color: 'var(--white)',
          }}
        >
          Hacemos agua pura del aire
        </h1>

        <p
          ref={subRef}
          className="text-lg font-light leading-relaxed tracking-[0.01em] mx-auto mb-12 max-w-[640px]"
          style={{ color: 'var(--muted-text)' }}
        >
          Sistemas patentados que transforman la humedad atmosferica en agua potable limpia y segura, donde y cuando la necesites.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => handleScroll('sistemas')} className="btn-primary">
            Ver Nuestros Sistemas
          </button>
          <button onClick={() => handleScroll('tecnologia')} className="btn-secondary">
            Como Funciona
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-chevron"
        style={{ color: 'var(--muted-text)' }}
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
