import React from 'react';
import type { GalleryItem } from '../data/weddingData';

interface CuratedPortfolioProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const CuratedPortfolio: React.FC<CuratedPortfolioProps> = ({ onOpenLightbox }) => {
  // Curated flagship wedding works featuring real DRK wedding moments
  const flagshipStories: (GalleryItem & { subtitle: string; tag: string })[] = [
    {
      id: 'p-1',
      url: '/assets/photos/stories/mudit-muskan/01_01.jpg',
      title: 'Mudit & Muskan',
      subtitle: 'A Royal Rajput Symphony of Twilight Pheras & Desert Stars',
      location: 'Heritage Haveli, Rajasthan',
      tag: '01 // HERITAGE PALACE',
      category: 'royal',
      aspect: 'portrait',
    },
    {
      id: 'p-2',
      url: '/assets/photos/stories/rahul-priyanka/destination-wedding-photographer-jodhpur.jpg',
      title: 'Rahul & Priyanka',
      subtitle: 'A Dance of Stars, Neon Sangeet & Sacred Vedic Rituals',
      location: 'Jaipur Grand Estate',
      tag: '02 // DESTINATION CELEBRATION',
      category: 'royal',
      aspect: 'portrait',
    },
    {
      id: 'p-3',
      url: '/assets/photos/stories/siddharth-shamya/01_01.jpg',
      title: 'Siddharth & Shamya',
      subtitle: 'Mirrored Lake Waters, Intimate Courtyard Vows & Jasmine Air',
      location: 'Lake Pichola, Udaipur',
      tag: '03 // INTIMATE ARCHITECTURE',
      category: 'candids',
      aspect: 'portrait',
    },
    {
      id: 'p-4',
      url: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',
      title: 'The Solitary Reflection',
      subtitle: 'Quiet, unrepeatable seconds before the sacred aisle',
      location: 'Jodhpur Heritage Suite',
      tag: '04 // BRIDAL PORTRAITURE',
      category: 'portraits',
      aspect: 'portrait',
    },
  ];

  // Curated ritual and detail film cuts
  const ritualMoments: (GalleryItem & { tag: string })[] = [
    {
      id: 'r-1',
      url: '/assets/photos/hero/CROUSEAL-1_07.jpg',
      title: 'The Haldi Euphoria',
      location: 'Courtyard Revelry & Marigold Petals',
      tag: 'CANDID RITUAL',
      category: 'rituals',
      aspect: 'landscape',
    },
    {
      id: 'r-2',
      url: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
      title: 'The Royal Baraat',
      location: 'Jodhpur Fort Procession & Dhol Beats',
      tag: 'FESTIVE ENERGY',
      category: 'royal',
      aspect: 'landscape',
    },
    {
      id: 'r-3',
      url: '/assets/photos/hero/CROUSEAL-1_11.jpg',
      title: 'Under A Million Fairy Lights',
      location: 'Open Amphitheatre Midnight Vows',
      tag: 'EVENING GRANDEUR',
      category: 'royal',
      aspect: 'landscape',
    },
  ];

  return (
    <section className="w-full bg-[#F9F8F6] py-24 sm:py-32 border-t border-[#EAE5DE] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

        {/* Section Header — Refined human editorial typography matching Vijay Studio & HOTC */}
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E8E2D8]">
          <div className="max-w-2xl">
            <span className="font-editorial-tag text-[#C89B3C] block mb-3">
              Selected Works &bull; 2018–2026
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-[-0.02em]">
              The Portfolios <span className="font-editorial-italic font-normal block sm:inline sm:ml-2">&amp; Stories</span>
            </h2>
          </div>

          <p className="font-sans text-[13px] sm:text-[14px] text-[#666666] font-light leading-relaxed max-w-sm">
            We document love in its rawest, most unguarded form. From heritage palace courtyards to
            intimate terrace vows across India and worldwide destinations.
          </p>
        </div>

        {/* 
          1. FLAGSHIP 4-COLUMN STORY CARDS:
          Physical art gallery presentation (aspect-[3/4]), generous spacing,
          pure photography without fake AI grayscale-to-color tricks.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {flagshipStories.map((story) => (
            <article
              key={story.id}
              onClick={() => onOpenLightbox(story)}
              className="group cursor-pointer flex flex-col will-change-transform"
            >
              {/* Photo Frame */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#EAE4DC] mb-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
                <img
                  src={story.url}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Editorial Metadata */}
              <div className="flex flex-col">
                <span className="font-editorial-tag text-[#C89B3C] text-[9.5px] mb-1.5">
                  {story.tag}
                </span>

                <h3 className="font-serif text-[19px] sm:text-[21px] text-[#1A1A1A] font-normal leading-snug group-hover:text-[#C89B3C] transition-colors mb-1">
                  {story.title}
                </h3>

                <span className="text-[11.5px] font-sans text-[#888888] font-light mb-2">
                  {story.location}
                </span>

                <p className="text-[12.5px] font-sans text-[#555555] font-light leading-relaxed">
                  {story.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 
          2. RITUAL & CANDID FILM CUTS (Triptych Horizon):
          Breaks the monotony of grids with dynamic widescreen moments
        */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-[#E8E2D8]">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-editorial-tag text-[#1A1A1A]">
              Sacred Rituals &amp; Celebrations
            </span>
            <span className="text-[11px] font-sans text-[#888888] tracking-widest uppercase">
              Analog &bull; Candid &bull; Unscripted
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ritualMoments.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#EAE4DC] mb-3.5 shadow-xs">
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[9px] font-sans font-medium tracking-[0.16em] uppercase text-[#1A1A1A]">
                    {item.tag}
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <h4 className="font-serif text-[15.5px] text-[#1A1A1A] font-normal group-hover:text-[#C89B3C] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10.5px] font-sans text-[#888888]">
                    {item.location.split('&')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          3. MINIMALIST HUMAN CTA STRIP:
          Invites inquiry without feeling like an automated sales funnel
        */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-serif text-lg sm:text-xl text-[#1A1A1A] italic font-normal text-center sm:text-left">
            “Creating photographs and wedding films which are timeless and etched in memories forever.”
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[11.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#C89B3C] hover:border-[#C89B3C] transition-colors flex-shrink-0"
          >
            Check Availability For Your Dates &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
