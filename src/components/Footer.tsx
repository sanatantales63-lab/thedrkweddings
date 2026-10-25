import React, { useState } from 'react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { STUDIO_DETAILS } from '../data/weddingData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-gray-400 py-24 rounded-t-[2.5rem] mt-10 transition-colors">
      {/* Top Grid Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 reveal delay-100">
        
        {/* Footer Links (Exact 7-column layout with DRK details) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-sm md:text-base">
          
          {/* Column 1: Studio & Offerings */}
          <div className="flex flex-col gap-6">
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-medium hover:text-[#C89B3C] transition-colors cursor-pointer tracking-tight"
            >
              The DRK Studio
            </span>
            <span
              onClick={() => scrollTo('portfolio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Fine-Art Portfolios
            </span>
            <span
              onClick={() => scrollTo('films')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cinematic Films
            </span>
            <span
              onClick={() => scrollTo('stories')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Curated Stories
            </span>
            <span
              onClick={() => scrollTo('signature')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              The DRK Signature
            </span>
          </div>

          {/* Column 2: Studio Information & Experience */}
          <div className="flex flex-col gap-6">
            <span
              onClick={() => scrollTo('approach')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Modern Approach
            </span>
            <span
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Check Availability
            </span>
            <span
              onClick={() => scrollTo('signature')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Studio Heritage
            </span>
            <a
              href={`mailto:${STUDIO_DETAILS.email}`}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Direct Email
            </a>
            <a
              href={`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=Hello%20The%20DRK%20Weddings,%20we%20would%20like%20to%20inquire%20about%20dates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              WhatsApp Concierge
            </a>
          </div>

          {/* Column 3: Channels & Presence */}
          <div className="flex flex-col gap-6">
            <a
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4 text-[#C89B3C]" />
              <span>Instagram</span>
            </a>
            <a
              href={STUDIO_DETAILS.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              <YoutubeIcon className="w-4 h-4 text-[#C89B3C]" />
              <span>YouTube Cinema</span>
            </a>
            <span className="hover:text-white transition-colors cursor-pointer">
              Hazaribagh Studio
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Worldwide Travel
            </span>
            <span
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inquire Season 2026
            </span>
          </div>

        </div>

        {/* Footer Newsletter (Exact 5-column layout) */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end lg:text-right reveal delay-300">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight font-serif">
            Subscribe to Updates
          </h3>

          {subscribed ? (
            <div className="w-full max-w-md bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a] text-left lg:text-right">
              <p className="text-white text-sm font-medium mb-1">Thank you for joining</p>
              <p className="text-gray-400 text-xs">
                You're on the list for our latest films, editorial stories, and season updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md bg-[#1a1a1a] rounded-xl p-1.5 border border-[#2a2a2a]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="w-full bg-transparent text-white px-4 outline-none text-sm placeholder-gray-500 font-sans"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover-lift flex-shrink-0 transition-transform"
              >
                Join
              </button>
            </form>
          )}

          <p className="text-xs text-gray-500 mt-4 max-w-md font-sans">
            Timeless wedding cinema, intimate behind-the-scenes journals, and calendar openings. No spam ever.
          </p>
        </div>

      </div>

      {/* DRK Studio Brand Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-sans">
        <div className="flex items-center gap-4">
          <img
            src="/assets/logos/drk-logo-clean-dark.png"
            alt="The DRK Weddings"
            className="h-7 w-auto object-contain brightness-0 invert opacity-75"
          />
          <span className="text-[#C89B3C] font-editorial-tag text-[9px]">
            The DRK Weddings &bull; Est. 2018
          </span>
        </div>

        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} The DRK Weddings. Award Winning Wedding Cinema &amp; Modern Photography.
        </p>

        <p className="text-[#888888] tracking-widest uppercase text-[10px]">
          Dipugarha &bull; Worldwide
        </p>
      </div>
    </footer>
  );
};
