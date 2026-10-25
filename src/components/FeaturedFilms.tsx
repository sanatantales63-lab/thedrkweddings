import React from 'react';
import { Play } from 'lucide-react';
import type { WeddingFilm } from '../data/weddingData';
import { FEATURED_FILMS, STUDIO_DETAILS } from '../data/weddingData';
import { YoutubeIcon } from './Icons';

interface FeaturedFilmsProps {
  onSelectFilm: (film: WeddingFilm) => void;
}

export const FeaturedFilms: React.FC<FeaturedFilmsProps> = ({ onSelectFilm }) => {
  const mainFilm = FEATURED_FILMS[0];
  const secondaryFilms = FEATURED_FILMS.slice(1);

  return (
    <section id="films" className="w-full bg-[#1A1A1A] text-white py-24 sm:py-32 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

        {/* Section Header — Dark Cinema Aesthetic */}
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="font-editorial-tag text-[#C89B3C] block mb-2">
              The Motion Pictures &bull; 4K Cinema
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.1] tracking-[-0.02em]">
              Award Winning <span className="font-editorial-italic font-normal text-white/90">Wedding Films</span>
            </h2>
          </div>

          <p className="font-sans text-[13px] text-white/70 font-light tracking-[0.06em] max-w-md leading-relaxed">
            For the past decade, The DRK Weddings has set new benchmarks of cinematic storytelling.
            Documenting the sacred, the unscripted, and the breathtaking across royal palaces and destinations.
          </p>
        </div>

        {/* 
          1. MASTER CINEMA THEATER:
          Widescreen 21:9 Letterbox Presentation
          Features real YouTube cinema video (lzHl-Z0vxHU) from @thedrkstudio
        */}
        {mainFilm && (
          <div className="mb-20 sm:mb-28">
            <div className="relative w-full overflow-hidden bg-black shadow-2xl border border-white/10" style={{ paddingBottom: '44%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${mainFilm.youtubeId}?rel=0&modestbranding=1&color=white`}
                title={`${mainFilm.couple} — ${mainFilm.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Cinema Title & Director Credits */}
            <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-[10px] font-sans tracking-[0.22em] uppercase text-[#C89B3C] mb-2 font-medium">
                  <span>{mainFilm.location}</span>
                  <span>&bull;</span>
                  <span>DURATION: {mainFilm.duration}</span>
                  <span>&bull;</span>
                  <span className="text-white/60">4K MASTER</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight mb-3">
                  {mainFilm.couple} &mdash; <span className="font-editorial-italic text-white/90">{mainFilm.title}</span>
                </h3>

                <p className="font-sans text-[13.5px] sm:text-[14.5px] text-white/70 font-light leading-relaxed">
                  {mainFilm.description} Every glance, every tear, and every sacred chant preserved with
                  unrivalled acoustic depth and 35mm optical fidelity.
                </p>
              </div>

              {/* Awards & Technical Specs Pill */}
              <div className="flex flex-col gap-2.5 md:items-end flex-shrink-0 text-xs font-sans text-white/60">
                <span className="px-3.5 py-1.5 border border-[#C89B3C]/40 text-[#C89B3C] tracking-widest text-[9.5px] uppercase">
                  Wedding Filmmaker of the Year
                </span>
                <span className="text-[11px] font-light tracking-wide text-white/50">
                  Color Graded in DaVinci Resolve &bull; Sound in Dolby
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 
          2. SECONDARY CINEMATIC HIGHLIGHTS (2-Column Anamorphic Grid)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {secondaryFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => onSelectFilm(film)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Video Thumbnail with Hover Play Trigger */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/50 mb-5 border border-white/10">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                {/* Minimalist Floating Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-[#1A1A1A] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 text-[9px] font-sans tracking-widest uppercase text-white/90">
                  {film.duration}
                </div>
              </div>

              {/* Film Details */}
              <div className="flex flex-col">
                <span className="font-editorial-tag text-[#C89B3C] text-[9.5px] mb-1.5">
                  {film.location}
                </span>

                <h4 className="font-serif text-2xl sm:text-[26px] text-white font-normal group-hover:text-[#C89B3C] transition-colors mb-2">
                  {film.couple}
                </h4>

                <p className="font-sans text-[13px] text-white/70 font-light leading-relaxed mb-3">
                  {film.description}
                </p>

                <span className="self-start text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-white/90 border-b border-white/40 pb-0.5 group-hover:text-[#C89B3C] group-hover:border-[#C89B3C] transition-colors">
                  Watch Teaser Film &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 
          3. YOUTUBE CHANNEL CONNECT
        */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-serif text-lg text-white/90 italic font-normal text-center sm:text-left">
            “Films that continuously overwhelm us with love, culture, and honest human emotion.”
          </p>

          <a
            href={STUDIO_DETAILS.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#1A1A1A] text-[11px] font-sans font-medium tracking-[0.18em] uppercase transition-all duration-300"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>Explore 50+ Films on YouTube (@thedrkstudio) &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
