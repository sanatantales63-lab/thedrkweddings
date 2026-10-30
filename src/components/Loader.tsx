import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  /** Fired as the shutters begin to open — start the hero entrance here. */
  onReveal: () => void;
  /** Fired once the loader can be unmounted. */
  onDone: () => void;
}

const MIN_MS = 2800; // premium feel: never flash past
const MAX_MS = 7000; // never trap the visitor on a slow network
const INK = '#0a0807';
const EASE_IO: [number, number, number, number] = [0.76, 0, 0.24, 1];
const pad2 = (n: number) => String(n).padStart(2, '0');

const loadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = src;
  });

export const Loader: React.FC<LoaderProps> = ({ onReveal, onDone }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading');
  const assetsReady = useRef(false);
  const cb = useRef({ onReveal, onDone });
  useEffect(() => {
    cb.current = { onReveal, onDone };
  });

  // lock scroll while the curtain is down
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      html.style.overflow = prev;
    };
  }, []);

  // wait for what the first screen actually needs
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)').matches;
    Promise.all([
      document.fonts ? document.fonts.ready : Promise.resolve(),
      loadImage(`/assets/photos/hero/web/hero-1-${desktop ? 1400 : 800}.jpg`),
      loadImage('/assets/logos/drk-logo-clean-white.png'),
    ]).then(() => {
      assetsReady.current = true;
    });
  }, []);

  // progress: eased over MIN_MS, parks at 94% until assets are in
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    let finished = false;
    const tick = (now: number) => {
      const t = now - start;
      const eased = 1 - Math.pow(1 - Math.min(1, t / MIN_MS), 2.2);
      const cap = assetsReady.current || t > MAX_MS ? 100 : 94;
      const value = Math.min(eased * 100, cap);
      setProgress(value);
      if (value >= 100 && !finished) {
        finished = true;
        setTimeout(() => setPhase('exit'), 450);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase !== 'exit') return;
    const a = setTimeout(() => cb.current.onReveal(), 500);
    const b = setTimeout(() => cb.current.onDone(), 1800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [phase]);

  const exiting = phase === 'exit';
  const pct = Math.round(progress);
  const timecode = `00:00:${pad2(Math.floor(progress * 0.03))}:${pad2(Math.floor(progress * 9) % 24)}`;
  const corner = 'absolute w-5 h-5 md:w-7 md:h-7 border-white/40';

  return (
    <div className="fixed inset-0 z-[100] text-white select-none" role="status" aria-label="Loading">
      {/* shutters — split at the seam, open on exit */}
      <motion.div
        className="absolute top-0 inset-x-0 h-1/2"
        style={{ background: INK }}
        animate={{ y: exiting ? '-100%' : '0%' }}
        transition={{ duration: 1.15, ease: EASE_IO }}
      />
      <motion.div
        className="absolute bottom-0 inset-x-0 h-1/2"
        style={{ background: INK }}
        animate={{ y: exiting ? '100%' : '0%' }}
        transition={{ duration: 1.15, ease: EASE_IO }}
      />

      {/* everything that sits on the curtain fades before it opens */}
      <motion.div className="absolute inset-0" animate={{ opacity: exiting ? 0 : 1 }} transition={{ duration: 0.45 }}>
        {/* viewfinder brackets */}
        <span className={`${corner} top-5 left-5 md:top-8 md:left-8 border-t border-l`} />
        <span className={`${corner} top-5 right-5 md:top-8 md:right-8 border-t border-r`} />
        <span className={`${corner} bottom-5 left-5 md:bottom-8 md:left-8 border-b border-l`} />
        <span className={`${corner} bottom-5 right-5 md:bottom-8 md:right-8 border-b border-r`} />

        {/* HUD */}
        <div className="absolute top-[26px] left-14 md:top-[38px] md:left-[84px] flex items-center gap-2 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Rec
        </div>
        <div className="absolute top-[26px] right-14 md:top-[38px] md:right-[84px] text-[9px] md:text-[10px] tracking-[0.25em] tabular-nums text-white/60">
          {timecode}
        </div>
        <div className="absolute bottom-[26px] left-14 md:bottom-[38px] md:left-[84px] text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/50">
          Hazaribagh · Est. 2017
        </div>

        {/* counter */}
        <div className="absolute bottom-[18px] right-12 md:bottom-[26px] md:right-[80px] flex items-start font-serif italic leading-none tabular-nums">
          <span className="text-5xl md:text-7xl text-[#E6CFA0]">{pad2(pct)}</span>
          <span className="text-xs md:text-sm mt-1 md:mt-2 ml-1 text-white/50 not-italic font-sans">%</span>
        </div>

        {/* logo above the seam, line + tagline below */}
        <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 mb-7 md:mb-9">
          <motion.img
            src="/assets/logos/drk-logo-clean-white.png"
            alt="The DRK Weddings"
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.25, ease: EASE_IO }}
            className="block w-[min(68vw,300px)] md:w-[340px] h-auto"
            draggable={false}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[min(72vw,360px)]">
          <div className="relative h-px bg-white/15">
            <div className="absolute inset-0 bg-[#C89B3C] origin-left" style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-5 md:mt-6 text-center text-[9px] md:text-[10px] font-light tracking-[0.5em] uppercase text-white/55"
          >
            Photography &amp; Cinema
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
