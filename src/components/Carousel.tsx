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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused && !isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isHovering]);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg)]"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovering(false);
      }}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: scroll 40s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-item {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .carousel-item:hover {
          transform: scale(1.02);
        }
      `}</style>

      <div className="flex carousel-track" style={{ width: 'max-content' }}>
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="carousel-item flex-shrink-0 h-56 sm:h-64 md:h-80 lg:h-[26rem] w-auto px-2 md:px-3"
          >
            <img
              src={src}
              alt=""
              className="h-full w-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ width: 'auto' }}
            />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'bg-brand-600 w-6'
                : 'bg-[var(--color-text-secondary)]/30 hover:bg-[var(--color-text-secondary)]/50'
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Gradientes laterales */}
      <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
