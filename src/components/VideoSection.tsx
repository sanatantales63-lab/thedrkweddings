import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, VolumeX } from 'lucide-react';
import type { WeddingFilm } from '../data/weddingData';
import { FEATURED_FILMS } from '../data/weddingData';

interface VideoSectionProps {
  onPlayFilm: (film: WeddingFilm) => void;
}

/**
 * ▶ The 16:9 reel lives at  public/assets/videos/reel.mp4  (+ reel-poster.jpg, its first frame).
 * To change it later just replace those two files. Tips for phones: 1280x720, H.264, no audio,
 * 10–30s seamless loop, ideally under 8 MB.
 */
const REEL_SRC = '/assets/videos/reel.mp4';
const POSTER = '/assets/videos/reel-poster.jpg';

/* ---------- helpers ---------- */

const DESKTOP_QUERY = '(min-width: 768px)';
const subscribeDesktop = (cb: () => void) => {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};
const useIsDesktop = () =>
  useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );

/** Muted, looping, inline video that fades in over the poster only once it is really playing. */
const Reel: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React doesn't always emit the `muted` attribute; iOS/Android need it for autoplay.
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={REEL_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      onPlaying={() => setPlaying(true)}
      onError={() => setPlaying(false)}
      className={`pointer-events-none transition-opacity duration-[1200ms] ease-out ${
        playing ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
};

/** Blinking REC dot + running timecode (DOM updated directly, no re-renders). */
const RecBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  const tc = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const start = performance.now();
    const p = (n: number) => String(n).padStart(2, '0');
    const id = window.setInterval(() => {
      const el = tc.current;
      if (!el) return;
      const t = performance.now() - start;
      el.textContent = `${p(Math.floor(t / 60000) % 60)}:${p(Math.floor(t / 1000) % 60)}:${p(
        Math.floor((t % 1000) / 41.67),
      )}`;
    }, 80);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </span>
      <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/80">Rec</span>
      <span ref={tc} className="font-mono text-[10px] tracking-[0.18em] text-white/70 tabular-nums">
        00:00:00
      </span>
    </div>
  );
};

/** Rotating-text circular button that opens the full film. */
const RingButton: React.FC<{ onClick: () => void; className?: string }> = ({ onClick, className = '' }) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileTap={{ scale: 0.92 }}
    whileHover={{ scale: 1.06 }}
    aria-label="Watch the full wedding film"
    className={`group flex items-center justify-center w-[108px] h-[108px] md:w-[132px] md:h-[132px] rounded-full bg-stone-950/70 backdrop-blur-md border border-white/25 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.9)] cursor-pointer ${className}`}
  >
    <motion.svg
      viewBox="0 0 120 120"
      className="absolute inset-0 w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
    >
      <defs>
        <path id="ring-path" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
      </defs>
      <text className="fill-white/85" style={{ fontSize: 9, fontWeight: 800 }}>
        <textPath href="#ring-path" textLength="280" lengthAdjust="spacing">WATCH THE FULL FILM • WATCH THE FULL FILM • </textPath>
      </text>
    </motion.svg>
    <span className="relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white text-stone-950 group-hover:bg-amber-300 transition-colors">
      <ArrowUpRight size={20} />
    </span>
  </motion.button>
);

/** Film-strip perforation bar. */
const Sprockets: React.FC = () => (
  <div
    aria-hidden
    className="h-[18px] bg-black"
    style={{
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.28) 9px, transparent 9px)',
      backgroundSize: '19px 8px',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '5px center',
    }}
  />
);

const Corner: React.FC<{ className: string }> = ({ className }) => (
  <span className={`absolute w-5 h-5 md:w-8 md:h-8 border-white/60 ${className}`} />
);

/* ---------- section ---------- */

export const VideoSection: React.FC<VideoSectionProps> = ({ onPlayFilm }) => {
  const film: WeddingFilm = FEATURED_FILMS[0] || {
    id: 'film-1',
    title: 'The Eternal Promise of Rajasthan',
    couple: 'Mudit & Muskan',
    location: 'Royal Heritage Palace, Rajasthan',
    duration: '04:42',
    youtubeId: 'lzHl-Z0vxHU',
    thumbnail: '/assets/photos/hero/CROUSEAL-1_04.jpg',
    description: 'A grand royal union woven with twilight pheras, tearful smiles, and celebration under desert stars.',
  };

  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: '250px 0px' });
  const screenOpen = useInView(screenRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  // desktop: slow push-in on the full-bleed reel
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.07, 1.0]);
  // mobile: the cinema screen "opens up" to edge-to-edge as you scroll into it
  const screenScale = useTransform(scrollYProgress, [0.08, 0.38], [0.86, 1]);
  const screenRadius = useTransform(scrollYProgress, [0.08, 0.38], [18, 0]);
  const headShift = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section ref={sectionRef} id="videos" className="bg-black text-white relative select-none overflow-hidden">
      {/* Desktop: full-bleed 16:9 reel */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ scale: bgScale }} className="absolute inset-0 will-change-transform">
            <img src={POSTER} alt="" className="absolute inset-0 w-full h-full object-cover" />
            {inView && <Reel className="absolute inset-0 w-full h-full object-cover" />}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
        </div>
      )}

      {/* Mobile: soft colour wash from the poster so the section isn't flat black */}
      {!isDesktop && (
        <div className="absolute inset-0 z-0">
          <img src={POSTER} alt="" className="w-full h-full object-cover opacity-25 blur-2xl scale-125" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>
      )}

      {/* Desktop viewfinder frame */}
      <div className="hidden md:block absolute inset-8 z-20 pointer-events-none">
        <Corner className="top-0 left-0 border-t border-l" />
        <Corner className="top-0 right-0 border-t border-r" />
        <Corner className="bottom-0 left-0 border-b border-l" />
        <Corner className="bottom-0 right-0 border-b border-r" />
      </div>

      <div className="relative z-30 flex flex-col md:justify-between md:h-[90vh] px-6 md:px-20 pt-14 pb-14 md:pt-16 md:pb-20 max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div style={{ y: headShift }} className="relative z-40 flex md:justify-between items-start w-full max-w-7xl mx-auto">
          <div>
            <div className="flex items-center gap-4 mb-5">
              {isDesktop && <RecBadge />}
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-300">
                Section 05 • Cinema Reel
              </span>
            </div>
            <h2 className="font-serif text-white tracking-tighter leading-[0.86] text-[5rem] sm:text-[6rem] md:text-8xl [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block md:inline italic"
              >
                WATCH
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block md:inline italic font-normal text-white/90 max-md:ml-10 max-md:-mb-7 relative"
              >
                Magic.
              </motion.span>
            </h2>
          </div>
          <p className="hidden md:block text-[10px] font-black uppercase tracking-[0.5em] text-white/80 max-w-[220px] text-right mt-8">
            Cinematic stories of forever.
          </p>
        </motion.div>

        {/* Mobile: 16:9 cinema screen (never cropped) */}
        {!isDesktop && (
          <div ref={screenRef} className="relative mt-6 -mx-6">
            {/* ambilight: blurred copy of the reel glowing around the screen */}
            <div
              className="absolute -inset-x-6 -inset-y-14 -z-10 pointer-events-none opacity-60"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 70%)',
                maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 70%)',
              }}
            >
              <img src={POSTER} alt="" className="absolute inset-0 w-full h-full object-cover blur-2xl saturate-150" />
              {inView && <Reel className="absolute inset-0 w-full h-full object-cover blur-2xl saturate-150" />}
            </div>

            <motion.div style={{ scale: screenScale }} className="relative will-change-transform">
              <motion.div
                initial={false}
                animate={{ clipPath: screenOpen ? 'inset(0% 0% 0% 0%)' : 'inset(42% 0% 42% 0%)' }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  style={{ borderRadius: screenRadius }}
                  className="overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
                >
                  <Sprockets />
                  <div className="relative aspect-video bg-stone-900">
                    <img src={POSTER} alt="The DRK Weddings cinema reel" className="absolute inset-0 w-full h-full object-cover" />
                    {inView && <Reel className="absolute inset-0 w-full h-full object-cover" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

                    <RecBadge className="absolute top-3 left-4" />
                    <div className="absolute top-3 right-4 flex items-center gap-1.5 text-white/60">
                      <VolumeX size={12} />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em]">Silent</span>
                    </div>
                    <span className="absolute bottom-3 left-4 text-[8px] font-black uppercase tracking-[0.35em] text-white/70">
                      4K • {film.duration}
                    </span>
                  </div>
                  <Sprockets />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ring button hangs off the screen corner */}
            <RingButton onClick={() => onPlayFilm(film)} className="absolute right-6 -bottom-14 z-40" />
          </div>
        )}

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-30 w-full max-w-7xl mx-auto mt-20 md:mt-0 flex md:justify-between md:items-end"
        >
          <div className="max-md:max-w-[62%]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-300 border border-amber-300/40 px-2.5 py-1">
                {film.badge || 'Signature Film'}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/60">{film.duration}</span>
            </div>
            <p className="font-serif text-[1.9rem] md:text-4xl text-white/95 italic max-w-md leading-[1.1]">
              The poetry of moving frames.
            </p>
            <div className="mt-4 h-px w-12 bg-amber-300/70" />
            <p className="text-stone-300 text-[10px] md:text-xs mt-4 uppercase tracking-[0.2em] font-black leading-relaxed">
              {film.couple}
              <span className="block text-stone-400">{film.location}</span>
            </p>
          </div>

          {isDesktop && <RingButton onClick={() => onPlayFilm(film)} className="relative" />}
        </motion.div>
      </div>
    </section>
  );
};
