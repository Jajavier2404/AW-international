import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ArrowRight, FileText } from 'lucide-react';

const systems = [
  {
    key: 'aw2500',
    image: '/images/product-aw2500.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-2500.pdf',
  },
  {
    key: 'aw800',
    image: '/images/product-aw800.jpg',
    datasheet: '/fichaTecnica/AW-International-AW-800.pdf',
  },
  {
    key: 'awi250g',
    image: '/images/product-awi250.jpg',
    datasheet: '/fichaTecnica/AW250.pdf',
  },
  {
    key: 'aw5k',
    image: '/images/product-aw5k.jpg',
    datasheet: '/fichaTecnica/AWI-AW-5K-Tech-Sheet-Last-2.pdf',
  },
];

export default function SystemsCarousel() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section
      style={{
        background: 'var(--section-light)',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="overline-dark">{t('systems.title')}</div>
            <h2
              className="mt-3"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--deep-blue)',
              }}
            >
              {t('home.systemsPreview.title')}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--deep-blue)',
                color: 'var(--white)',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--deep-blue)',
                color: 'var(--white)',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {systems.map((system) => (
              <div
                key={system.key}
                className="flex-shrink-0"
                style={{ width: 'calc(33.333% - 16px)', minWidth: '300px' }}
              >
                <div
                  className="group rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full"
                  style={{ 
                    background: 'var(--white)',
                    border: '1px solid rgba(19,73,128,0.08)',
                    boxShadow: '0 4px 20px rgba(19,73,128,0.06)',
                  }}
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={system.image}
                      alt={t(`systems.products.${system.key}.name`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{
                          background: 'var(--deep-blue)',
                          color: 'var(--white)',
                        }}
                      >
                        {t(`systems.products.${system.key}.capacity`)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: 'var(--deep-blue)' }}
                    >
                      {t(`systems.products.${system.key}.name`)}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: 'var(--muted-text-dark)' }}
                    >
                      {t(`systems.products.${system.key}.description`)}
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <Link
                        to={`/systems/${system.key}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                        style={{ color: 'var(--deep-blue)' }}
                      >
                        {t('systems.viewDetails')}
                        <ArrowRight size={16} />
                      </Link>
                      <a
                        href={system.datasheet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm transition-all duration-300"
                        style={{ color: 'var(--muted-text-dark)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText size={14} />
                        {t('systems.datasheet')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {systems.map((_, index) => (
            <button
              key={index}
              className="transition-all duration-300 rounded-full"
              style={{
                width: selectedIndex === index ? '32px' : '8px',
                height: '8px',
                background: selectedIndex === index ? 'var(--deep-blue)' : 'rgba(19,73,128,0.2)',
              }}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/systems" className="btn-ghost inline-flex items-center gap-2">
            {t('home.systemsPreview.cta')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
