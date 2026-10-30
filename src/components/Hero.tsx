import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onPlayFilm?: () => void;
  /** Hero stays hidden until the loader hands over (defaults to true). */
  ready?: boolean;
}

const SLIDE_MS = 6500;
const EASE_IO: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SLIDES = [
  {
    n: 1,
    tag: 'Two Souls, One Story',
    line1: 'The DRK',
    line2: 'Weddings',
    caption: 'Capturing the raw elegance of your love story with an editorial eye.',
  },
  {
    n: 2,
    tag: 'Where Love Meets Light',
    line1: 'Timeless',
    line2: 'Heirlooms.',
    caption: 'Every frame crafted with intention. Every moment held with reverence.',
  },
  {
    n: 3,
    tag: 'Fine Art Cinema • India',
    line1: 'Sacred',
    line2: 'Promises.',
    caption: 'Vedic heritage framed against timeless architectural majesty.',
  },
  {
    n: 4,
    tag: 'Unscripted Romance',
    line1: 'Forever',
    line2: 'Begins.',
    caption: 'The quiet glances, the loud celebrations, and the forever promises.',
  },
  {
    n: 5,
    tag: 'Hazaribagh · Worldwide',
    line1: 'Poetry in',
    line2: 'Motion.',
    caption: 'Unscripted romance documented with raw honesty and editorial grace.',
  },
];

const imgSrc = (n: number, w: 800 | 1400) => `/assets/photos/hero/web/hero-${n}-${w}.jpg`;
const pad2 = (n: number) => String(n).padStart(2, '0');

/** Directional curtain wipe — the old frame drifts away while the new one slides in. */
const wipe: Variants = {
  enter: (d: number) => ({ clipPath: d > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' }),
  center: { clipPath: 'inset(0 0 0 0)', transition: { duration: 1.2, ease: EASE_IO } },
  exit: (d: number) => ({
    x: d > 0 ? '-14%' : '14%',
    transition: { duration: 1.25, ease: EASE_IO },
  }),
};

const titleParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04 } },
};
const titleLine: Variants = {
  hidden: { y: '108%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE_OUT } },
  exit: { y: '-108%', transition: { duration: 0.45, ease: EASE_IO } },
};

function useIsDesktop() {
  const [v, setV] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const on = () => setV(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return v;
}

/** Rotating text ring with a play button — opens the reel. */
const ReelBadge: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    aria-label="Watch the reel"
    className={`group grid place-items-center rounded-full bg-black/25 backdrop-blur-sm border border-white/15 text-white/90 ${className}`}
  >
    <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]" aria-hidden>
      <defs>
        <path id="reel-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <text fill="currentColor" fontSize="9.5" textLength="272" lengthAdjust="spacing" style={{ fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase' }}>
        <textPath href="#reel-ring">Watch the reel · Watch the reel · </textPath>
      </text>
    </svg>
    <span className="relative grid place-items-center w-[38%] h-[38%] rounded-full bg-white text-stone-900 transition-transform duration-500 group-hover:scale-110">
      <Play size={14} fill="currentColor" className="ml-0.5" />
    </span>
  </button>
);

export const Hero: React.FC<HeroProps> = ({ onPlayFilm, ready = true }) => {
  const [[cur, dir], setSlide] = useState<[number, number]>([0, 1]);
  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLElement>(null);
  const slide = SLIDES[cur];

  const go = useCallback((d: number) => {
    setSlide(([c]) => [(c + d + SLIDES.length) % SLIDES.length, d]);
  }, []);
  const goTo = (i: number) => setSlide(([c]) => (i === c ? [c, 1] : [i, i > c ? 1 : -1]));

  // autoplay (restarts on every slide change, incl. manual ones)
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => go(1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [cur, ready, go]);

  // preload the rest so wipes never flash
  useEffect(() => {
    SLIDES.forEach((s) => {
      const i = new Image();
      i.src = imgSrc(s.n, isDesktop ? 1400 : 800);
    });
  }, [isDesktop]);

  // gentle scroll-away
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToNext = () => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const renderBars = (className: string, barClass: string) => (
    <div className={`flex items-center ${className}`}>
      {SLIDES.map((s, i) => (
        <button key={s.n} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} className="py-3 first:pl-0 flex-1 md:flex-none group">
          <span className={`relative block h-[2px] bg-white/25 overflow-hidden ${barClass}`}>
            {i < cur && <span className="absolute inset-0 bg-white" />}
            {i === cur && ready && (
              <motion.span
                key={cur}
                className="absolute inset-0 bg-white origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
              />
            )}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <header
      id="hero"
      ref={sectionRef}
      style={{ '--fw': 'min(58svh,44vw)' } as React.CSSProperties}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#0a0807] text-white select-none"
    >
      {/* ── Ambient colour wash from the current photo (desktop) ── */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence>
            {ready && (
              <motion.img
                key={`amb-${cur}`}
                src={imgSrc(slide.n, 800)}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4 }}
                className="absolute inset-0 w-full h-full object-cover scale-125"
                style={{ filter: 'blur(70px) saturate(1.15)' }}
              />
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-[#0a0807]/60" />
        </div>
      )}

      {/* ── Photo: full-bleed on mobile, framed editorial plate on desktop ── */}
      <motion.div
        className="absolute inset-0 z-10 md:inset-auto md:right-[9vw] md:top-[15vh] md:bottom-[8vh] md:w-[var(--fw)] touch-pan-y"
        onPanEnd={(_, info) => {
          if (info.offset.x < -50 && Math.abs(info.velocity.x) > 80) go(1);
          else if (info.offset.x > 50 && Math.abs(info.velocity.x) > 80) go(-1);
        }}
      >
        <div aria-hidden className="hidden md:block absolute inset-0 translate-x-4 translate-y-4 border border-[#C89B3C]/45" />
        <div className="absolute inset-0 overflow-hidden bg-stone-900">
          {ready && (
            <AnimatePresence initial custom={dir}>
              <motion.div
                key={cur}
                custom={dir}
                variants={wipe}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.22 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 7, ease: EASE_OUT }}
                >
                  <picture>
                    <source media="(min-width: 768px)" srcSet={imgSrc(slide.n, 1400)} />
                    <img
                      src={imgSrc(slide.n, 800)}
                      alt={`${slide.line1} ${slide.line2}`}
                      className="w-full h-full object-cover object-center"
                      draggable={false}
                      fetchPriority="high"
                    />
                  </picture>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
          {/* legibility: mobile gets top + bottom shade, desktop only a soft edge */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/10 to-black/55 md:from-black/25 md:via-transparent md:to-black/10" />
        </div>
      </motion.div>

      {/* film grain */}
      <div aria-hidden className="grain absolute inset-0 z-[15] pointer-events-none" />

      {/* ── Reel badge ── */}
      {ready && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -40 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 1.1, ease: EASE_OUT }}
          className="absolute z-30 top-[7.6rem] right-5 md:top-auto md:bottom-[calc(8vh_+_3.5rem)] md:right-[calc(9vw_+_var(--fw)_-_56px)]"
        >
          <ReelBadge onClick={onPlayFilm} className="relative w-[76px] h-[76px] md:w-28 md:h-28" />
        </motion.div>
      )}

      {/* ── Story-style progress (mobile) ── */}
      {ready && <div className="md:hidden absolute z-30 top-[4.6rem] left-5 right-5">{renderBars('gap-1.5', 'w-full')}</div>}

      {/* ── Copy ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between px-5 pt-[8rem] pb-8 md:pl-[6vw] md:pr-[6vw] md:pt-[17vh] md:pb-[8vh]"
      >
        {ready && (
          <>
            {/* tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${cur}`}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 self-start"
              >
                <span className="h-px w-8 md:w-12 bg-[#C89B3C]" />
                <span className="text-[10px] md:text-xs font-light tracking-[0.28em] uppercase text-[#E6CFA0]">{slide.tag}</span>
              </motion.div>
            </AnimatePresence>

            <div>
              {/* title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${cur}`}
                  variants={titleParent}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="font-serif text-white leading-[0.92] tracking-[-0.02em] text-[clamp(3.6rem,19vw,5.8rem)] md:text-[clamp(4.2rem,10.5vw,10.5rem)]"
                >
                  <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                    <motion.span variants={titleLine} className="block">
                      {slide.line1}
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden pb-[0.16em] -mb-[0.16em] pr-[0.1em]">
                    <motion.span variants={titleLine} className="block italic font-normal text-[#E6CFA0]">
                      {slide.line2}
                    </motion.span>
                  </span>
                </motion.h1>
              </AnimatePresence>

              {/* caption + CTA */}
              <div className="mt-6 md:mt-9 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`cap-${cur}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="max-w-[19rem] md:max-w-xs text-[13px] md:text-sm leading-relaxed text-white/75 font-light"
                  >
                    {slide.caption}
                  </motion.p>
                </AnimatePresence>

                <motion.button
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: EASE_OUT }}
                  onClick={scrollToContact}
                  className="pointer-events-auto self-start group inline-flex items-center gap-3 bg-[#E6CFA0] text-stone-900 pl-6 pr-2 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-white transition-colors duration-300"
                >
                  Book Your Date
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-stone-900 text-white transition-transform duration-500 group-hover:rotate-[-45deg]">
                    <ArrowRight size={15} />
                  </span>
                </motion.button>
              </div>

              {/* desktop control bar */}
              <div className="hidden md:flex mt-[5vh] pt-5 border-t border-white/15 items-center gap-8 pointer-events-auto max-w-[min(640px,40vw)]">
                <div className="font-serif tabular-nums leading-none">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`n-${cur}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="inline-block text-3xl italic text-white"
                    >
                      {pad2(cur + 1)}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-white/40 ml-1">/ {pad2(SLIDES.length)}</span>
                </div>
                {renderBars('gap-2', 'w-12')}
                <div className="flex items-center gap-2 ml-auto">
                  <button onClick={() => go(-1)} aria-label="Previous" className="grid place-items-center w-10 h-10 rounded-full border border-white/25 hover:bg-white hover:text-stone-900 transition-colors">
                    <ArrowLeft size={15} />
                  </button>
                  <button onClick={() => go(1)} aria-label="Next" className="grid place-items-center w-10 h-10 rounded-full border border-white/25 hover:bg-white hover:text-stone-900 transition-colors">
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>

      {/* ── Desktop: vertical location + scroll cue ── */}
      <button
        onClick={scrollToNext}
        className="hidden md:flex absolute z-30 right-[2.6vw] top-1/2 -translate-y-1/2 flex-col items-center gap-5 text-[10px] font-light uppercase tracking-[0.35em] text-white/55 hover:text-white transition-colors"
      >
        <span style={{ writingMode: 'vertical-rl' }}>Hazaribagh, Jharkhand · Traveling Worldwide</span>
        <span className="relative block w-px h-14 bg-white/20 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-white"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </button>
    </header>
  );
};
