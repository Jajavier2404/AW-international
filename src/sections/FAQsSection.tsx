import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Que es la Generacion de Agua Atmosferica?',
    answer: 'Es una tecnologia que condensa el vapor de agua presente en el aire para capturarlo y filtrarlo, transformandolo en agua potable pura y segura.',
  },
  {
    question: 'Como funciona el sistema?',
    answer: 'Nuestros sistemas recolectan la humedad del aire, la enfrian hasta el punto de rocio para condensarla, y luego canalizan el agua a traves de camaras de filtracion avanzada para producir agua limpia de forma confiable y economica.',
  },
  {
    question: 'En que condiciones funciona?',
    answer: 'Nuestra tecnologia produce agua con humedad ambiental de tan solo el 50%. Entre mayor sea la temperatura y humedad, mayor sera la produccion de agua de forma mas eficiente.',
  },
  {
    question: 'Que tan pura es el agua producida?',
    answer: 'El agua producida esta libre de impurezas, contaminacion, oxidos metalicos, quimicos y farmaceuticos presentes en el agua subterranea. Es agua pura y segura lista para beber.',
  },
  {
    question: 'Cuanta energia consume?',
    answer: 'Nuestros sistemas son energeticamente eficientes. La energia requerida varia segun el modelo y las condiciones ambientales. Ofrecemos versiones solares para operacion completamente autonoma.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div style={{ borderBottom: '1px solid rgba(10,22,40,0.08)' }}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span
          className="text-base font-medium pr-4"
          style={{ color: 'var(--deep-blue)' }}
        >
          {question}
        </span>
        <span style={{ color: 'var(--water-blue)', flexShrink: 0 }}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="pb-5 pr-8 text-[15px] font-light leading-relaxed"
          style={{ color: 'var(--mid-blue)', opacity: 0.7 }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const listRef = useStaggerAnimation<HTMLDivElement>(5, 0.08);

  return (
    <section
      style={{
        backgroundColor: 'var(--white)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left - sticky header */}
        <div ref={headerRef} className="lg:col-span-2 lg:sticky lg:top-[100px] lg:self-start">
          <div className="overline-dark">PREGUNTAS FRECUENTES</div>
          <h2
            className="mt-4 font-normal leading-tight tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--deep-blue)',
            }}
          >
            Todo lo que necesitas saber
          </h2>
          <p
            className="mt-4 text-base font-light leading-relaxed"
            style={{ color: 'var(--mid-blue)', opacity: 0.7 }}
          >
            Resolvemos tus dudas sobre nuestra tecnologia, sistemas y servicio.
            Si tienes otra pregunta, contactanos directamente.
          </p>
          <Link to="/faqs" className="btn-secondary mt-6 inline-block">
            Ver Todas las Preguntas
          </Link>
        </div>

        {/* Right - accordion */}
        <div ref={listRef} className="lg:col-span-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
