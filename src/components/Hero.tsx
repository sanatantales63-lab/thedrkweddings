import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, MapPin } from 'lucide-react';

interface HeroProps {
  onPlayFilm?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayFilm }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Shutterday uses 3 high-impact imagery slides that cycle seamlessly
  const slides = [
    {
      desktop: '/assets/photos/stories/mudit-muskan/01_01.jpg',
      tag: 'Royal Heritage • Rajasthan',
      title: 'Crafting Timeless Heirlooms.',
      caption: 'The quiet glances, the loud celebrations, and the forever promises.',
    },
    {
      desktop: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',
      tag: 'Fine Art Chemistry • Dunes of Thar',
      title: 'Poetry in Moving Light.',
      caption: 'Unscripted romance documented with raw honesty and editorial grace.',
    },
    {
      desktop: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
      tag: 'Monumental Vows • Grand Palaces',
      title: 'Sacred Promises Forever.',
      caption: 'Vedic heritage framed against timeless architectural majesty.',
    },
    {
      desktop: '/assets/photos/hero/CROUSEAL-1_01.jpg',
      tag: 'Soulful Celebrations • India & Beyond',
      title: 'The Art of Intimacy.',
      caption: 'Preserving the heartbeat of your family legacy for generations.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className="relative h-screen w-full overflow-hidden bg-stone-950 text-white select-none">
      {/* Background Crossfading Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].desktop}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Shutterday Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-black/40 z-10" />
      </div>

      {/* Main Hero Content - Aligned to bottom matching Shutterday */}
      <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-16 md:px-20 md:pb-24 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          {/* Left Block: Tagline + Grand Headline */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-stone-400" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-stone-300">
                {slides[currentSlide].tag}
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.92] text-stone-100 tracking-tight mb-6">
              Forever <br />
              <span className="italic font-normal">Begins.</span>
            </h1>

            <p className="text-stone-300 text-sm md:text-base max-w-xl font-light leading-relaxed">
              {slides[currentSlide].caption}
            </p>
          </div>

          {/* Right Block: Cinema Play CTA + Slide Counter */}
          <div className="flex flex-col items-start md:items-end gap-6">
            {onPlayFilm && (
              <button
                onClick={onPlayFilm}
                className="group flex items-center gap-4 bg-white/10 hover:bg-white text-white hover:text-stone-900 backdrop-blur-md border border-white/30 px-6 py-4 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-white text-stone-900 group-hover:bg-stone-900 group-hover:text-white flex items-center justify-center transition-colors">
                  <Play size={13} className="ml-0.5 fill-current" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] font-black uppercase tracking-[0.3em] opacity-80">
                    Watch Cinema Reel
                  </span>
                  <span className="font-serif text-sm italic font-medium">
                    Mudit & Muskan (4K)
                  </span>
                </div>
              </button>
            )}

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? 'w-10 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Location & Scroll Hint */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 gap-4">
          <div className="flex items-center gap-2 text-stone-300">
            <MapPin size={12} className="text-stone-400" />
            <span>Hazaribagh, Jharkhand • Traveling Worldwide</span>
          </div>

          <button
            onClick={() => scrollToSection('manifesto')}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Scroll to Explore</span>
            <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
