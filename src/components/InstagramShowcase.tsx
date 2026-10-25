import React from 'react';
import { InstagramIcon } from './Icons';
import { STUDIO_DETAILS, INSTAGRAM_HIGHLIGHTS } from '../data/weddingData';

export const InstagramShowcase: React.FC = () => {
  const instaGrid = [
    {
      img: '/assets/photos/hero/CROUSEAL-1_01.jpg',
      caption: 'When silence speaks louder than words. Royal Rajput wedding in Rajasthan.',
    },
    {
      img: '/assets/photos/stories/mudit-muskan/01_02.jpg',
      caption: 'Mudit & Muskan — A celebration of pure unconditional devotion.',
    },
    {
      img: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',
      caption: 'The solitary breath before the sacred vows. Fine art bridal portraiture.',
    },
    {
      img: '/assets/photos/hero/CROUSEAL-1_07.jpg',
      caption: 'Haldi celebrations drenched in yellow marigold petals and boundless joy!',
    },
    {
      img: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
      caption: 'The royal baraat procession arriving under torchlight.',
    },
    {
      img: '/assets/photos/hero/CROUSEAL-1_10.jpg',
      caption: 'Vedic fire reflections. Eternal moments bottled for generations.',
    },
  ];

  return (
    <section id="community" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Instagram Bio Header */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 mb-12 border-b border-[#E8E3DA] gap-6 text-center md:text-left">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#77726A] block mb-2">
              Social Community
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#141414] font-normal">
              @thedrkweddings
            </h3>
            <p className="text-xs font-sans text-[#77726A] mt-1 tracking-wide">
              9,285 Followers • Award-Winning Photography & Cinema Studio
            </p>
          </div>

          <a
            href={STUDIO_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#FAF8F5] text-xs font-sans font-medium tracking-[0.16em] uppercase transition-all"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Highlights Bar (Exact Screenshot from User) */}
        <div className="flex items-center justify-start sm:justify-center gap-8 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {INSTAGRAM_HIGHLIGHTS.map((hl) => (
            <div key={hl.title} className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 border border-[#D5CFC4] group-hover:border-[#141414] transition-colors bg-[#FAF8F5] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#FFFFFF] border border-[#E8E3DA] flex items-center justify-center p-2 text-center">
                  <span className="text-[10px] font-sans font-medium text-[#141414] tracking-tight leading-tight">
                    {hl.title}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-sans text-[#68645E] group-hover:text-black transition-colors">
                {hl.title}
              </span>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaGrid.map((item, idx) => (
            <a
              key={idx}
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square overflow-hidden bg-[#EAE5DC] border border-[#E0DBD1] block relative"
            >
              <img
                src={item.img}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-[10px] text-white font-sans line-clamp-3">
                  {item.caption}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
