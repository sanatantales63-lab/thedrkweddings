import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { STUDIO_DETAILS } from '../data/weddingData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Photography', href: '#photography' },
    { label: 'Films', href: '#films' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Editorial', href: '#featured' },
  ];

  const moreItems = [
    { label: 'Signature Backyard', href: '#backyard' },
    { label: 'Our Philosophy', href: '#backyard' },
    { label: 'Travel & Destinations', href: '#photography' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3.5 sm:py-4 border-b border-[#ECECEC] shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex items-center justify-between">

          {/* Left: Brand Logo — Crisp, large, perfectly visible */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="The DRK Weddings"
          >
            {/* Cropped high-resolution studio logo (aperture shutter + DRK WEDDINGS) */}
            <img
              src="/assets/logos/drk-logo-clean-dark.png"
              alt="The DRK Weddings"
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Right: Desktop Navigation Items (Exact HOTC layout & styling) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[13.5px] font-sans font-normal tracking-[0.025em] text-[#4b4b42] hover:text-[#111111] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* More Dropdown (Exact HOTC Feature) */}
            <div
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[13.5px] font-sans font-normal tracking-[0.025em] text-[#4b4b42] hover:text-[#111111] py-1 transition-colors duration-200 focus:outline-none"
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#EAEAEA] shadow-lg py-2 z-50">
                  {moreItems.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(m.href);
                      }}
                      className="block px-4 py-2 text-[12.5px] font-sans text-[#4b4b42] hover:bg-[#F9F9F9] hover:text-[#111111] transition-colors"
                    >
                      {m.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons (Instagram + YouTube) */}
            <div className="flex items-center gap-3.5 text-[#4b4b42] pl-1">
              <a
                href={STUDIO_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 hover:text-[#111111] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_DETAILS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-1 hover:text-[#111111] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* "Get In Touch" Button — Exact HOTC Solid Tan/Camel Button */}
            <button
              onClick={onOpenContact}
              className="bg-[#9e855a] hover:bg-[#8b734a] text-white px-5 py-2.5 rounded-[3px] text-[12.5px] font-sans font-normal tracking-[0.04em] shadow-xs transition-colors duration-200 ml-1"
            >
              Get In Touch
            </button>
          </nav>

          {/* Tablet & Mobile Nav Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenContact}
              className="bg-[#9e855a] hover:bg-[#8b734a] text-white px-3.5 py-1.5 rounded-[3px] text-[11.5px] font-sans font-medium tracking-[0.04em] transition-colors"
            >
              Get In Touch
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111111] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-between px-8 pt-28 pb-10 lg:hidden">
          <nav className="flex flex-col space-y-2">
            {[...navItems, ...moreItems].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-serif text-2xl sm:text-3xl text-[#111111] hover:text-[#9e855a] py-3 border-b border-[#F0F0F0] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#F0F0F0] flex items-center justify-between text-xs font-sans text-[#777777]">
            <a
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-black"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@thedrkweddings</span>
            </a>
            <a
              href={STUDIO_DETAILS.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-black"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>@thedrkstudio</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
