import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import type { WeddingFilm } from '../data/weddingData';
import { FEATURED_FILMS } from '../data/weddingData';

interface VideoSectionProps {
  onPlayFilm: (film: WeddingFilm) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onPlayFilm }) => {
  const primaryFilm = FEATURED_FILMS[0] || {
    id: 'film-1',
    title: 'The Eternal Promise of Rajasthan',
    couple: 'Mudit & Muskan',
    location: 'Royal Heritage Palace, Rajasthan',
    duration: '04:42',
    youtubeId: 'lzHl-Z0vxHU',
    thumbnail: '/assets/photos/hero/CROUSEAL-1_04.jpg',
    description: 'A grand royal union woven with twilight pheras, tearful smiles, and celebration under desert stars.',
  };

  return (
    <section id="videos" className="bg-stone-950 text-white relative select-none">
      <div className="h-[75vh] md:h-[90vh] px-6 md:px-20 relative overflow-hidden flex flex-col justify-between pt-12 pb-12 md:pt-16 md:pb-20">
        {/* Background Film Poster / Ambient Preview */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="/assets/photos/gallery/cinematic-wedding-filmmaker-jaipur-palace.jpg"
            alt="The DRK Weddings Cinema"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] transition-colors duration-500 z-10" />
        </div>

        {/* Top Header */}
        <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-start gap-4 max-w-7xl mx-auto w-full">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-3">
              Section 05 • Cinema Reel
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-white italic tracking-tighter leading-none">
              WATCH Magic.
            </h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80 max-w-[220px] md:text-right mt-2 md:mt-6">
            Cinematic stories of forever.
          </p>
        </div>

        {/* Center Play Button Icon */}
        <div className="relative z-20 flex justify-center items-center my-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPlayFilm(primaryFilm)}
            className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-stone-900 transition-all duration-300"
            aria-label="Play Featured Wedding Film"
          >
            <Play size={32} className="ml-1 fill-current" />
            <span className="absolute -bottom-8 text-[9px] font-black uppercase tracking-[0.3em] text-stone-300 group-hover:text-white whitespace-nowrap">
              Click to Play 4K Film
            </span>
          </motion.button>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8 max-w-7xl mx-auto w-full">
          <div>
            <p className="font-serif text-2xl md:text-4xl text-white/95 italic max-w-md leading-tight">
              The poetry of moving frames.
            </p>
            <p className="text-stone-300 text-xs mt-2 uppercase tracking-[0.2em] font-black">
              {primaryFilm.couple} — {primaryFilm.location}
            </p>
          </div>

          <button
            onClick={() => onPlayFilm(primaryFilm)}
            className="group border border-white px-8 py-4 rounded-none hover:bg-white hover:border-white transition-all duration-300 flex items-center justify-center w-fit cursor-pointer"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white group-hover:text-stone-900 transition-colors">
              WATCH FILMS
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
