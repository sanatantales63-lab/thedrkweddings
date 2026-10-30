import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onMenuClick: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-10 py-4 md:py-5 flex items-center justify-between relative">

        {/* ── LEFT: Desktop only nav links ── */}
        <div className={`hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.35em] transition-colors ${
          scrolled ? 'text-stone-500' : 'text-white/90'
        }`}>
          <span className={`font-black ${scrolled ? 'text-stone-800' : 'text-white'}`}>
            Est. 2017
          </span>
          <button
            onClick={() => scrollTo('testimonials')}
            className={`transition-colors hover:opacity-100 ${
              scrolled ? 'text-stone-500 hover:text-stone-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollTo('lookbook')}
            className={`transition-colors hover:opacity-100 ${
              scrolled ? 'text-stone-500 hover:text-stone-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Lookbook
          </button>
        </div>

        {/* ── MOBILE LEFT: Est. only ── */}
        <div className={`md:hidden text-[9px] font-black uppercase tracking-[0.25em] ${
          scrolled ? 'text-stone-800' : 'text-white'
        }`}>
          Est. 2017
        </div>

        {/* ── CENTER: Logo (absolute centered) ── */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer select-none group"
        >
          <img
            src={scrolled ? '/assets/logos/drk-logo-clean-dark.png' : '/assets/logos/drk-logo-clean-white.png'}
            alt="The DRK Weddings"
            className="h-7 sm:h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span
            style={{ display: 'none' }}
            className={`font-serif text-base md:text-xl tracking-tight font-medium whitespace-nowrap ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}
          >
            THE DRK WEDDINGS
          </span>
        </div>

        {/* ── RIGHT: Gallery (desktop) + Book Session ── */}
        <div className="flex items-center gap-3 md:gap-8">
          <button
            onClick={() => scrollTo('spotlight')}
            className={`hidden md:inline text-[10px] font-black uppercase tracking-[0.35em] transition-colors ${
              scrolled ? 'text-stone-500 hover:text-stone-900' : 'text-white/80 hover:text-white'
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => {
              if (onOpenContact) onOpenContact();
              else scrollTo('contact');
            }}
            className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] px-3 py-2 md:px-5 md:py-2.5 border transition-all duration-200 whitespace-nowrap ${
              scrolled
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Session
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
