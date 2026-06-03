import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export function useScrollAnimation<T extends HTMLElement>(options: ScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, delay = 0, direction = 'up' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const translateValue = direction === 'up' ? '40px' : direction === 'left' ? '-30px' : '30px';
    const translateAxis = direction === 'up' ? 'Y' : 'X';

    el.style.opacity = '0';
    el.style.transform = `translate${translateAxis}(${translateValue})`;
    el.style.transition = `opacity 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}s, transform 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0)';
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay, direction]);

  return ref;
}

export function useStaggerAnimation<T extends HTMLElement>(itemCount: number, baseDelay: number = 0.12) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const children = container.children;
    const items = Array.from(children) as HTMLElement[];

    items.forEach((item, i) => {
      if (prefersReducedMotion) {
        item.style.opacity = '1';
        item.style.transform = 'none';
        return;
      }
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = `opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) ${baseDelay * i}s, transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) ${baseDelay * i}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [itemCount, baseDelay]);

  return containerRef;
}
