import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/weddingData';

interface HeroProps {
  onPlayFilm?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* 
      HOTC SECTION 1: Full-Screen Editorial Hero
      Matches House On The Clouds exact layout:
      - 100vh full viewport height
      - Transparent navbar sitting right on top
      - Unobstructed couple portrait with authentic film grain texture
    */
    <section className="relative w-full h-screen min-h-[640px] max-h-[1100px] overflow-hidden bg-[#111111]">
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.tagline}
            className="w-full h-full object-cover object-[center_28%] sm:object-center select-none"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Subtle, ultra-minimal slide navigation bar at the bottom right */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-[2px] transition-all duration-300 ${
              i === currentSlide ? 'bg-[#111111] w-8' : 'bg-[#111111]/30 hover:bg-[#111111]/60 w-4'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
