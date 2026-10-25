import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled down > 150px and moving downwards -> hide navbar
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isDark = scrolled;

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F5F0]/85 backdrop-blur-md border-b border-stone-200 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Left Navigation Items */}
      <div
        className={`flex items-center gap-6 md:gap-8 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
          isDark ? 'text-stone-500' : 'text-white/90'
        }`}
      >
        <span className={isDark ? 'text-stone-900 font-black' : 'text-white font-black'}>
          Est. 2017
        </span>
        <button
          onClick={() => scrollTo('lookbook')}
          className={`hidden md:inline transition-colors hover:scale-105 ${
            isDark ? 'hover:text-stone-900 text-stone-500' : 'hover:text-white text-white/80'
          }`}
        >
          Lookbook
        </button>
        <button
          onClick={() => scrollTo('packages')}
          className={`hidden md:inline transition-colors hover:scale-105 ${
            isDark ? 'hover:text-stone-900 text-stone-500' : 'hover:text-white text-white/80'
          }`}
        >
          Collections
        </button>
        <button
          onClick={() => scrollTo('testimonials')}
          className={`hidden lg:inline transition-colors hover:scale-105 ${
            isDark ? 'hover:text-stone-900 text-stone-500' : 'hover:text-white text-white/80'
          }`}
        >
          Praise
        </button>
      </div>

      {/* Center Brand Logo / Wordmark */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer select-none group"
      >
        <div className="flex flex-col items-center">
          <img
            src={isDark ? '/assets/logos/drk-logo-clean-dark.png' : '/assets/logos/drk-logo-white-banner.png'}
            alt="The DRK Weddings"
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300 drop-shadow-sm group-hover:scale-[1.02]"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const textFallback = target.nextElementSibling as HTMLElement;
              if (textFallback) textFallback.style.display = 'flex';
            }}
          />
          <div
            style={{ display: 'none' }}
            className={`flex-col items-center leading-none ${
              isDark ? 'text-stone-900' : 'text-white'
            }`}
          >
            <span className="font-serif text-lg md:text-xl tracking-tight font-medium">
              THE DRK WEDDINGS
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-70">
              Fine Art Cinema
            </span>
          </div>
        </div>
      </div>

      {/* Right Action & Menu Toggle */}
      <div className="flex items-center gap-4 md:gap-8">
        <button
          onClick={() => {
            if (onOpenContact) onOpenContact();
            else scrollTo('contact');
          }}
          className={`hidden md:inline-block text-[10px] font-black uppercase tracking-[0.3em] transition-all px-5 py-2.5 border ${
            isDark
              ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
              : 'border-white/80 text-white hover:bg-white hover:text-stone-900'
          }`}
        >
          Book Session
        </button>

        <button
          onClick={onMenuClick}
          className={`p-2 transition-colors flex items-center gap-2 ${
            isDark ? 'text-stone-900 hover:text-stone-600' : 'text-white hover:text-stone-200'
          }`}
          aria-label="Open navigation drawer"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] hidden sm:inline">
            Menu
          </span>
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
};
