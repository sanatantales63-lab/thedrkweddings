import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LOOKBOOK_DATA } from '../data/weddingData';

interface LookbookProps {
  onSelectCategory?: (category: string) => void;
}

export const Lookbook: React.FC<LookbookProps> = ({ onSelectCategory }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      const wrapper = wrapperRef.current;
      const strip = stripRef.current;
      if (!wrapper || !strip) {
        ticking = false;
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const wrapperH = wrapper.offsetHeight;
      const viewportH = window.innerHeight;
      const totalScrollable = wrapperH - viewportH;

      if (totalScrollable <= 0) {
        ticking = false;
        return;
      }

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const maxTravel = Math.max(0, strip.scrollWidth - window.innerWidth + 40);
      const currentX = progress * maxTravel;

      strip.style.transform = `translate3d(-${currentX}px, 0, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="lookbook"
      className="relative w-full"
      style={{ height: '280vh' }}
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full bg-stone-950 text-stone-100 overflow-hidden select-none flex flex-col justify-between py-10 md:py-14 z-10">
        {/* Background Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025] hidden lg:flex"
          aria-hidden
        >
          <span
            className="font-serif font-black text-white whitespace-nowrap"
            style={{ fontSize: '22vw', lineHeight: 1 }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Section Header */}
        <div className="relative z-10 px-6 md:px-12 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-7xl">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-500 block mb-3">
                Curated Work · 2026
              </span>
              <h2
                className="font-serif leading-none tracking-tight text-stone-100"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}
              >
                The <em className="font-normal italic">Look</em>
                <br />book.
              </h2>
            </div>
            <p className="text-stone-400 text-xs md:text-sm max-w-xs leading-relaxed font-light md:pb-1">
              A curated anthology of love stories, sacred rites, and unscripted
              intimacy documented with cinematic elegance.
            </p>
          </div>
        </div>

        {/* Sliding Cards Track */}
        <div className="relative z-10 overflow-hidden w-full">
          <div
            ref={stripRef}
            className="flex gap-6 md:gap-8 px-6 md:px-12 w-max"
            style={{
              willChange: 'transform',
            }}
          >
            {LOOKBOOK_DATA.map((item, idx) => (
              <div
                key={item.id}
                className="group relative shrink-0 cursor-pointer flex flex-col"
                style={{ width: 'clamp(220px, 24vw, 360px)' }}
                onClick={() => onSelectCategory && onSelectCategory(item.category)}
              >
                <div
                  className="relative overflow-hidden bg-stone-900 border border-stone-800 shadow-xl"
                  style={{ aspectRatio: '3 / 4' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Top tags */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-stone-400">
                    <span>0{idx + 1}</span>
                    <span className="border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-2.5 py-1 text-stone-300">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom description */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl italic mb-1.5 text-stone-100 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 font-light line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Below-card interactive hint */}
                <div className="mt-3 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.3em] text-stone-500 group-hover:text-stone-200 transition-colors duration-200">
                  <span>View Portfolio Series</span>
                  <ArrowUpRight
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
