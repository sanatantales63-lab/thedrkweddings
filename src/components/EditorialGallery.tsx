import React from 'react';
import type { GalleryItem } from '../data/weddingData';
import { GALLERY_ARCHIVE } from '../data/weddingData';

interface EditorialGalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({ onOpenLightbox }) => {
  return (
    <section id="photography" className="w-full bg-white py-24 sm:py-32 border-t border-[#EAE5DE] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

        {/* Section header — Haute Couture Typography */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-editorial-tag text-[#C89B3C] block mb-3">
            The Philosophy &bull; Visual Poetry
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-normal mb-6 tracking-[-0.02em]">
            Photography for the <span className="font-editorial-italic font-normal">Wild Ones</span>
          </h2>
          <p className="font-editorial-italic text-xl sm:text-2xl text-[#1A1A1A] leading-[1.6] mb-4">
            We celebrate the rule breakers, the travellers, the modern couples who are not afraid to feel deeply.
          </p>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#666666] font-light leading-[1.8]">
            We believe the ultimate goal of wedding photography is to justify the vibe of the celebration
            and the personalities of the couple. From intimate terrace gatherings in Hazaribagh to grand
            heritage palaces in Rajasthan and Udaipur — here is a selection from our archive.
          </p>
        </div>

        {/* 3-Column Masonry Photo Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_ARCHIVE.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="break-inside-avoid cursor-pointer group"
            >
              <div className="overflow-hidden bg-[#ECE6DC] shadow-xs">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>
              <div className="pt-3 pb-1 flex items-baseline justify-between border-b border-transparent group-hover:border-[#E8E2D8] transition-colors">
                <span className="font-serif text-[14px] text-[#1A1A1A] font-normal group-hover:text-[#C89B3C] transition-colors">
                  {item.title}
                </span>
                <span className="text-[9.5px] font-sans tracking-[0.16em] uppercase text-[#999999] ml-3 flex-shrink-0">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
