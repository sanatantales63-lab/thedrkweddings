import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { STUDIO_DETAILS } from '../data/weddingData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-200 px-6 py-28 md:py-36 md:px-20 relative overflow-hidden select-none">
      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-800" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-28">
          {/* Column 1: Grand Headline & Inquire CTA (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-500 block mb-6">
                The DRK Legacy
              </span>
              <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-none italic text-stone-100">
                Forever <br />
                Begins.
              </h2>
            </div>

            <div>
              <button
                onClick={() => scrollTo('contact')}
                className="bg-transparent border border-stone-600 text-stone-200 hover:bg-white hover:text-stone-950 hover:border-white transition-all duration-300 px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em]"
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links in Serif (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-500">
              Navigation
            </span>

            <nav className="flex flex-col space-y-3 font-serif text-2xl md:text-3xl text-stone-300">
              <button
                onClick={() => scrollTo('about')}
                className="text-left hover:text-white hover:italic hover:translate-x-2 transition-all w-fit"
              >
                About
              </button>
              <button
                onClick={() => scrollTo('lookbook')}
                className="text-left hover:text-white hover:italic hover:translate-x-2 transition-all w-fit"
              >
                The Lookbook
              </button>
              <button
                onClick={() => scrollTo('videos')}
                className="text-left hover:text-white hover:italic hover:translate-x-2 transition-all w-fit"
              >
                Cinema Films
              </button>
              <button
                onClick={() => scrollTo('packages')}
                className="text-left hover:text-white hover:italic hover:translate-x-2 transition-all w-fit"
              >
                Collections &amp; Investment
              </button>
              <button
                onClick={() => scrollTo('testimonials')}
                className="text-left hover:text-white hover:italic hover:translate-x-2 transition-all w-fit"
              >
                Client Praise
              </button>
              <button
                onClick={() => scrollTo('faq-section')}
                className="text-left hover:text-white hover:italic hover:translate-x-2 transition-all w-fit"
              >
                Common Inquiries
              </button>
            </nav>
          </div>

          {/* Column 3: Contact Details & Socials (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-500 block">
                Connect
              </span>

              <div className="flex flex-col space-y-2">
                <a
                  href={STUDIO_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-white text-xs uppercase tracking-[0.2em] font-black transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>

                <a
                  href={STUDIO_DETAILS.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-white text-xs uppercase tracking-[0.2em] font-black transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YouTube Studio</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>

                <a
                  href={`https://wa.me/${STUDIO_DETAILS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs uppercase tracking-[0.2em] font-black transition-colors"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-stone-800 text-xs text-stone-400 font-light">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-stone-500 shrink-0 mt-0.5" />
                <span>{STUDIO_DETAILS.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-stone-500 shrink-0" />
                <span>{STUDIO_DETAILS.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-stone-500 shrink-0" />
                <span>{STUDIO_DETAILS.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} THE DRK WEDDINGS. ALL RIGHTS RESERVED.</p>
          <p className="tracking-[0.4em] text-stone-400">Crafted for Forever</p>
        </div>
      </div>
    </footer>
  );
};
