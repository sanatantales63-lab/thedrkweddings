import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/weddingData';

const pad = (n: number) => String(n).padStart(2, '0');

const getInitials = (names: string) =>
  names
    .split('&')
    .map((n) => n.trim().charAt(0))
    .join(' & ');

const Stars: React.FC<{ size?: number }> = ({ size = 11 }) => (
  <div className="flex gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={size} fill="currentColor" stroke="none" />
    ))}
  </div>
);

export const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });
  const [canScroll, setCanScroll] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const total = TESTIMONIALS.length;

  // Keeps active card / progress thumb / arrow state in sync with the swipe position.
  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const overflow = scrollWidth - clientWidth > 4;
    setCanScroll(overflow);
    setAtStart(scrollLeft <= 4);
    setAtEnd(scrollLeft >= scrollWidth - clientWidth - 4);
    setThumb({
      width: Math.min(100, (clientWidth / scrollWidth) * 100),
      left: (scrollLeft / scrollWidth) * 100,
    });

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const cards = Array.from(el.children) as HTMLElement[];
    const focusX = isDesktop ? scrollLeft + (cards[0]?.offsetLeft ?? 0) : scrollLeft + clientWidth / 2;

    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const point = isDesktop ? card.offsetLeft : card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(point - focusX);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    // Near the very end the last card can never reach the focus point
    if (overflow && scrollLeft >= scrollWidth - clientWidth - 4) best = cards.length - 1;
    setActive(best);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sync]);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-36 bg-[#FBFBFA] relative overflow-hidden border-t border-stone-200 select-none"
    >
      {/* Soft ambient glow so the section doesn't feel flat on phones */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-amber-200/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-4">
              Section 06 • Real Stories
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-stone-900 tracking-tight leading-none">
              Client Praise <br />
              <span className="italic font-normal">&amp; Kind Words.</span>
            </h2>
          </div>

          {/* Rating pill */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="font-serif text-5xl md:text-6xl leading-none text-stone-900">5.0</div>
            <div className="h-10 w-px bg-stone-300" />
            <div className="flex flex-col gap-2 text-stone-600">
              <div className="text-amber-500">
                <Stars size={14} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                Across 100+ Reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe track — one horizontal row, so extra reviews never lengthen the page */}
      <div
        ref={trackRef}
        className="
          flex gap-4 md:gap-6 items-stretch overflow-x-auto overscroll-x-contain
          snap-x snap-mandatory scroll-smooth
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          px-[9vw] scroll-px-[9vw]
          md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]
          md:scroll-px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]
          pb-6 pt-2
        "
        style={{ WebkitOverflowScrolling: 'touch' }}
        aria-label="Client reviews"
      >
        {TESTIMONIALS.map((t, idx) => {
          const isActive = idx === active;
          return (
            <motion.article
              key={idx}
              data-active={isActive}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: Math.min(idx, 3) * 0.12 }}
              className="
                group relative shrink-0 snap-center md:snap-start
                w-[82vw] sm:w-[22rem]
                md:w-[calc((min(100vw,80rem)-3rem-3rem)/3)]
                flex flex-col justify-between overflow-hidden
                border p-7 md:p-9
                transition-[background-color,border-color,box-shadow,transform,opacity] duration-500 ease-out
                bg-white border-stone-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]
                md:hover:-translate-y-1.5 md:hover:shadow-[0_24px_50px_-24px_rgba(28,25,23,0.25)]
                max-md:data-[active=true]:bg-stone-900 max-md:data-[active=true]:border-stone-800
                max-md:data-[active=true]:shadow-[0_28px_50px_-22px_rgba(28,25,23,0.55)]
                max-md:data-[active=false]:opacity-70 max-md:data-[active=false]:scale-[0.97]
              "
            >
              {/* Gold hairline that draws across on hover (desktop) / when active (mobile) */}
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-700 md:group-hover:w-full max-md:group-data-[active=true]:w-full" />

              {/* Giant watermark index */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-serif text-[7.5rem] leading-none text-stone-900/[0.04] max-md:group-data-[active=true]:text-white/[0.06] transition-colors duration-500"
              >
                {pad(idx + 1)}
              </span>

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-6xl leading-[0.6] h-7 text-amber-500/80">&ldquo;</span>
                  <div className="text-amber-500">
                    <Stars />
                  </div>
                </div>

                <p
                  className="
                    font-serif italic text-[17px] md:text-[17px] leading-[1.75] text-stone-700
                    max-md:group-data-[active=true]:text-stone-100 transition-colors duration-500
                    mb-8
                  "
                >
                  {t.quote}
                </p>
              </div>

              <div
                className="
                  relative pt-6 border-t border-stone-100 flex items-center gap-4
                  max-md:group-data-[active=true]:border-white/10 transition-colors duration-500
                "
              >
                {/* Monogram */}
                <div
                  className="
                    shrink-0 w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center
                    font-serif text-[13px] tracking-wider text-stone-800 bg-amber-50
                    max-md:group-data-[active=true]:bg-transparent max-md:group-data-[active=true]:text-amber-300
                    transition-colors duration-500
                  "
                >
                  {getInitials(t.names)}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-serif text-lg text-stone-900 font-medium leading-tight max-md:group-data-[active=true]:!text-white transition-colors duration-500">
                    {t.names}
                  </h4>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-stone-400 leading-snug">
                    {t.location}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-600/80">
                    {t.year}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Controls: progress rail + counter + arrows (only when there is something to scroll) */}
      <div
        className={`max-w-7xl mx-auto px-6 mt-4 md:mt-8 flex items-center gap-5 transition-opacity duration-300 ${
          canScroll ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 mt-0 overflow-hidden'
        }`}
      >
        <span className="font-serif text-sm text-stone-900 tabular-nums shrink-0">
          {pad(active + 1)}
          <span className="text-stone-400"> / {pad(total)}</span>
        </span>

        <div className="relative h-px flex-1 bg-stone-300/70">
          <div
            className="absolute -top-px h-[3px] bg-stone-900 rounded-full transition-[left,width] duration-200 ease-out"
            style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
          />
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => slide(-1)}
            disabled={atStart}
            aria-label="Previous review"
            className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center text-stone-800 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => slide(1)}
            disabled={atEnd}
            aria-label="Next review"
            className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center text-stone-800 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        <span className="md:hidden text-[9px] font-black uppercase tracking-[0.3em] text-stone-400 shrink-0">
          Swipe
        </span>
      </div>
    </section>
  );
};
