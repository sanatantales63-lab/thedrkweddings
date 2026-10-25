import React from 'react';
import type { WeddingStory } from '../data/weddingData';
import { WEDDING_STORIES } from '../data/weddingData';

interface CuratedStoriesProps {
  onSelectStory: (story: WeddingStory) => void;
}

export const CuratedStories: React.FC<CuratedStoriesProps> = ({ onSelectStory }) => {
  // Flagship spotlight story: Mudit & Muskan
  const spotlightStory = WEDDING_STORIES[0];
  const secondaryStories = WEDDING_STORIES.slice(1);

  return (
    <section id="featured" className="w-full bg-[#FFFFFF] py-24 sm:py-32 border-t border-[#EAE5DE] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

        {/* Section Header — Haute Couture Typography */}
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE5DE]">
          <div>
            <span className="font-editorial-tag text-[#C89B3C] block mb-2">
              Editorial Spotlight &bull; Vol. 24
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-[-0.02em]">
              The Wedding <span className="font-editorial-italic font-normal">Feature</span>
            </h2>
          </div>

          <p className="font-sans text-[13px] text-[#777777] font-light tracking-[0.06em] max-w-sm">
            An in-depth editorial deep dive into an unrepeatable celebration of sacred traditions and human emotion.
          </p>
        </div>

        {/* 
          DOUBLE-PAGE EDITORIAL SPREAD:
          Inspired by luxury print magazines (Vogue Weddings / Kinfolk)
          No generic AI template alternating cards!
        */}
        {spotlightStory && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">

            {/* Left Page: Master Photographic Print */}
            <div
              className="lg:col-span-7 cursor-pointer group"
              onClick={() => onSelectStory(spotlightStory)}
            >
              <div className="relative p-2.5 sm:p-3.5 bg-white border border-[#E2DAD0] shadow-[0_12px_44px_rgba(0,0,0,0.05)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE6DC]">
                  <img
                    src={spotlightStory.coverImage}
                    alt={spotlightStory.couple}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between px-1 text-[11px] font-sans text-[#888888] font-light">
                  <span className="tracking-[0.14em] uppercase text-[#C89B3C]">
                    Cover Story &bull; Master Print
                  </span>
                  <span>{spotlightStory.location}</span>
                </div>
              </div>
            </div>

            {/* Right Page: Editorial Narrative & Filmstrip */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-editorial-tag text-[#9c855a] text-[10px] mb-3">
                {spotlightStory.date} &bull; RAJASTHAN
              </span>

              <h3
                onClick={() => onSelectStory(spotlightStory)}
                className="font-serif text-3xl sm:text-4xl md:text-[42px] text-[#1A1A1A] font-normal leading-[1.15] mb-5 cursor-pointer hover:text-[#C89B3C] transition-colors"
              >
                {spotlightStory.couple}
              </h3>

              {/* Sweeping Italic Quote */}
              <blockquote className="font-editorial-italic text-lg sm:text-xl text-[#333333] leading-relaxed mb-6 pl-4 border-l-2 border-[#C89B3C]">
                {spotlightStory.quote}
              </blockquote>

              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#555555] font-light leading-[1.8] mb-8">
                {spotlightStory.description} Every ritual was documented with analog sensitivity—preserving
                not just how the celebrations looked, but how the sacred moments felt.
              </p>

              {/* 4-Photo Contact Filmstrip */}
              <div className="mb-8">
                <span className="font-editorial-tag text-[9px] text-[#888888] block mb-3">
                  Photo Album Highlights
                </span>
                <div className="grid grid-cols-4 gap-2.5">
                  {spotlightStory.images.slice(1, 5).map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectStory(spotlightStory)}
                      className="aspect-square overflow-hidden bg-[#ECE6DC] cursor-pointer group/thumb border border-[#E8E2D8]"
                    >
                      <img
                        src={img}
                        alt="Story thumb"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Full Story Trigger */}
              <button
                onClick={() => onSelectStory(spotlightStory)}
                className="self-start inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] hover:bg-[#C89B3C] text-white text-[11px] font-sans font-medium tracking-[0.18em] uppercase transition-colors duration-300 shadow-xs"
              >
                <span>Read Full Story &bull; 10 Photographs</span>
                <span>&rarr;</span>
              </button>
            </div>

          </div>
        )}

        {/* 
          SECONDARY STORIES: Two Complementary Spreads
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-[#EAE5DE]">
          {secondaryStories.map((story) => (
            <article
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE6DC] mb-5 border border-[#E2DAD0] shadow-xs">
                <img
                  src={story.coverImage}
                  alt={story.couple}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[9px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]">
                  {story.location}
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-editorial-tag text-[#C89B3C] text-[9.5px] mb-1.5">
                  {story.date}
                </span>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal group-hover:text-[#C89B3C] transition-colors mb-2">
                  {story.couple}
                </h4>

                <p className="font-sans text-[13px] text-[#666666] font-light leading-relaxed mb-4">
                  {story.description}
                </p>

                <span className="self-start text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-0.5 group-hover:text-[#C89B3C] group-hover:border-[#C89B3C] transition-colors">
                  Explore Story ({story.images.length} Frames) &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
