import { useEffect, useState, useRef } from 'react';

const images = [
  '/carrousel/z1.webp',
  '/carrousel/z2.webp',
  '/carrousel/z3.webp',
  '/carrousel/z4.webp',
  '/carrousel/z5.webp',
  '/carrousel/z6.webp',
  '/carrousel/z7.webp',
  '/carrousel/z8.webp',
  '/carrousel/z9.webp',
];

export default function Carousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!isPaused && !isHovering && !prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isHovering, prefersReducedMotion]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovering(false);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galería de zapatos artesanales"
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: scroll 45s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-item {
          transition: transform 0.6s ease;
        }
        .carousel-item:hover img {
          transform: scale(1.04);
        }
        .carousel-item img {
          transition: transform 0.8s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .carousel-track {
            animation: none;
          }
          .carousel-item img {
            transition: none;
          }
        }
      `}</style>

      {/* Botón pausa / play */}
      <button
        type="button"
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-[var(--color-bg)]/80 backdrop-blur-sm border border-[var(--color-accent)]/40 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent-deep)] transition-colors"
        aria-label={isPaused ? 'Reproducir carrusel' : 'Pausar carrusel'}
        aria-pressed={isPaused}
      >
        {isPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>

      <div className="flex carousel-track" style={{ width: 'max-content' }}>
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="carousel-item group flex-shrink-0 h-56 sm:h-64 md:h-80 lg:h-[26rem] w-auto px-3 md:px-4 relative"
            aria-roledescription="slide"
            aria-label={`Imagen ${(i % 9) + 1} de ${images.length}`}
            aria-hidden={i !== activeIndex && i !== activeIndex + images.length}
          >
            <div className="relative h-full overflow-hidden">
              <img
                src={src}
                alt={`Zapato artesanal Sanvin modelo Nº ${(i % 9) + 1}`}
                className="h-full w-auto object-cover"
                style={{ width: 'auto' }}
                loading="lazy"
                width="400"
                height="600"
              />
              {/* Overlay label italic */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--color-brand-950)]/70 via-[var(--color-brand-950)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="accent-italic text-sm text-[var(--color-brand-50)] tracking-wide">
                  Modelo Nº 0{(i % 9) + 1}
                </p>
              </div>
              {/* Stitched border bottom */}
              <div className="stitched-border absolute inset-x-0 bottom-0 h-px"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 py-6">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`h-px transition-all duration-500 ${
              i === activeIndex
                ? 'bg-[var(--color-accent)] w-12'
                : 'bg-[var(--color-text-secondary)]/30 hover:bg-[var(--color-accent)]/50 w-6'
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
            aria-current={i === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Gradientes laterales — más anchos para fade cinematográfico */}
      <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
