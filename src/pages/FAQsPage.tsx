import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQ {
  question: string;
  answer: string;
  topic: string;
  color: string;
}

const faqs: FAQ[] = [
  {
    topic: 'Tecnologia',
    color: 'var(--aqua)',
    question: 'Que es la Generacion de Agua Atmosferica?',
    answer: 'Es una tecnologia que condensa el vapor de agua presente en el aire para capturarlo y filtrarlo, transformandolo en agua potable pura y segura.',
  },
  {
    topic: 'Tecnologia',
    color: 'var(--aqua)',
    question: 'Como funciona el sistema?',
    answer: 'Nuestros sistemas recolectan la humedad del aire, la enfrian hasta el punto de rocio para condensarla, y luego canalizan el agua a traves de camaras de filtracion avanzada para producir agua limpia de forma confiable y economica.',
  },
  {
    topic: 'Tecnologia',
    color: 'var(--aqua)',
    question: 'En que condiciones ambientales funciona?',
    answer: 'Nuestra tecnologia produce agua con humedad ambiental de tan solo el 50%. Entre mayor sea la temperatura y humedad, mayor sera la produccion. Demuestra ahorros significativos comparado con la desalinizacion.',
  },
  {
    topic: 'Tecnologia',
    color: 'var(--aqua)',
    question: 'Que tan pura es el agua?',
    answer: 'El agua producida esta libre de impurezas, contaminacion por aire, oxidos metalicos, quimicos o contaminantes. Nuestros sistemas no contienen los farmaceuticos y contaminantes encontrados en el agua subterranea.',
  },
  {
    topic: 'Productos',
    color: 'var(--water-blue)',
    question: 'Cuanta agua pueden producir los sistemas?',
    answer: 'Nuestros sistemas van desde 20 litros por dia (AW 2500) hasta 5,000 galones por dia (AW 5K). La produccion varia segun las condiciones de temperatura y humedad.',
  },
  {
    topic: 'Productos',
    color: 'var(--water-blue)',
    question: 'Que modelos fabrican?',
    answer: 'AW 2500 (hogar/oficina), AW 800 (comercial), AWI 250 G (semi-industrial), AW 5K (industrial), y sistemas solares ADPV40K, AW 9000, AW 12000, AW 18000S y AW 24000S.',
  },
  {
    topic: 'Productos',
    color: 'var(--water-blue)',
    question: 'Que tipo de energia usan?',
    answer: 'Los sistemas estandar usan electricidad convencional. Tambien ofrecemos sistemas solares con paneles de 40KW y baterias de 13,200Ah para operacion autonoma.',
  },
  {
    topic: 'Mantenimiento',
    color: 'var(--fresh-green)',
    question: 'Que mantenimiento requieren?',
    answer: 'Operacion sencilla y mantenimiento minimo. Los sistemas estan construidos para uso continuo y duradero.',
  },
  {
    topic: 'Mantenimiento',
    color: 'var(--fresh-green)',
    question: 'Que garantias ofrecen?',
    answer: 'Ofrecemos garantias completas y servicio tecnico especializado. Contactanos para detalles especificos segun el modelo.',
  },
  {
    topic: 'Comercial',
    color: 'var(--muted-text)',
    question: 'Como funciona en mi pais?',
    answer: 'Ofrecemos servicio post-venta internacional a traves de nuestra red de distribuidores en America del Norte, Centroamerica, Sudamerica y Medio Oriente.',
  },
  {
    topic: 'Comercial',
    color: 'var(--muted-text)',
    question: 'Funciona si no llueve mucho aqui?',
    answer: 'Si. Nuestros sistemas funcionan con la humedad del aire, no con lluvia. Con tan solo 50% de humedad relativa, el sistema puede producir agua efectivamente.',
  },
];

const topics = ['Tecnologia', 'Productos', 'Mantenimiento', 'Comercial'] as const;

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(10,22,40,0.08)' }}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium pr-4" style={{ color: 'var(--deep-blue)' }}>
          {faq.question}
        </span>
        <span style={{ color: 'var(--water-blue)', flexShrink: 0 }}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-5 pr-8 text-[15px] font-light leading-relaxed" style={{ color: 'var(--mid-blue)', opacity: 0.7 }}>
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const heroRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundColor: 'var(--deep-blue)', minHeight: '40vh' }}
      >
        <div ref={heroRef}>
          <h1
            className="font-normal leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)' }}
          >
            Preguntas Frecuentes
          </h1>
          <p
            className="mt-4 text-lg font-light leading-relaxed max-w-[600px] mx-auto"
            style={{ color: 'var(--muted-text)' }}
          >
            Encuentra respuestas a todas tus preguntas sobre nuestra tecnologia y sistemas.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          backgroundColor: 'var(--white)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div className="max-w-[900px] mx-auto">
          {topics.map((topic) => {
            const topicFaqs = faqs.filter((f) => f.topic === topic);
            const topicColor = topicFaqs[0]?.color || 'var(--water-blue)';
            return (
              <div key={topic} className="mb-12">
                <h2
                  className="text-sm font-normal uppercase tracking-[0.12em] mb-6"
                  style={{ color: topicColor }}
                >
                  {topic}
                </h2>
                {topicFaqs.map((faq) => {
                  const globalIndex = faqs.indexOf(faq);
                  return (
                    <FAQItem
                      key={globalIndex}
                      faq={faq}
                      isOpen={openIndex === globalIndex}
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    />
                  );
                })}
              </div>
            );
          })}

          <div className="mt-16 text-center">
            <p className="text-base mb-6" style={{ color: 'var(--mid-blue)', opacity: 0.7 }}>
              Tienes otra pregunta?
            </p>
            <Link to="/contact" className="btn-primary">
              Contactanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
