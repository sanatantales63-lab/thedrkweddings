import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { STUDIO_DETAILS } from '../data/weddingData';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuLinks = [
    { label: 'Home', href: '#hero', sub: 'The Beginning' },
    { label: 'About', href: '#about', sub: 'Editorial • Vol. 01' },
    { label: 'Lookbook', href: '#lookbook', sub: 'Curated Portfolio' },
    { label: 'Films', href: '#videos', sub: 'Cinematic Stories' },
    { label: 'Spotlight', href: '#spotlight', sub: 'Signature Frames' },
    { label: 'Collections', href: '#packages', sub: 'Investment' },
    { label: 'Testimonials', href: '#testimonials', sub: 'Kind Words' },
    { label: 'Inquiries', href: '#faq-section', sub: 'Common FAQs' },
    { label: 'Contact', href: '#contact', sub: 'Book Your Date' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative ml-auto h-full w-full max-w-lg bg-[#F5F5F0] text-stone-900 flex flex-col justify-between p-8 md:p-12 overflow-y-auto shadow-2xl z-10"
          >
            {/* Header: Brand + Close button */}
            <div className="flex items-center justify-between pb-8 border-b border-stone-200">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500">
                  Est. 2017
                </span>
                <span className="font-serif text-xl tracking-tight font-medium text-stone-900">
                  THE DRK WEDDINGS
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-full hover:bg-stone-200/70 transition-colors text-stone-700 hover:text-stone-900"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="py-8 space-y-4">
              {menuLinks.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="group w-full flex items-center justify-between text-left py-2 text-stone-900 hover:text-stone-600 transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-900 transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-3xl md:text-4xl italic group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-900 hidden sm:inline">
                      {item.sub}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer / Socials / Location */}
            <div className="pt-8 border-t border-stone-200 flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <a
                  href={STUDIO_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" /> Instagram
                </a>
                <a
                  href={STUDIO_DETAILS.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" /> YouTube
                </a>
                <a
                  href={`https://wa.me/${STUDIO_DETAILS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-emerald-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              <div className="text-xs text-stone-500 flex flex-col gap-1">
                <p className="flex items-center gap-1.5 font-sans">
                  <MapPin size={13} className="text-stone-400 shrink-0" />
                  {STUDIO_DETAILS.location}
                </p>
                <p className="flex items-center gap-1.5 font-sans">
                  <Phone size={13} className="text-stone-400 shrink-0" />
                  {STUDIO_DETAILS.phone}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
