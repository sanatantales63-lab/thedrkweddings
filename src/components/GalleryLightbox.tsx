import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import type { GalleryItem } from '../data/weddingData';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-5xl max-h-[92vh] flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="self-end mb-3 p-2 rounded-full border border-white/20 hover:border-white text-white transition-colors bg-black/50"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative overflow-hidden border border-[#E0DBD1] bg-black shadow-2xl">
          <img
            src={item.url}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />

          {/* Bottom Title Bar */}
          <div className="p-4 sm:p-5 bg-white border-t border-[#E8E3DA] flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-[#77726A] text-[10px] font-sans tracking-[0.2em] uppercase mb-0.5">
                <MapPin className="w-3 h-3 text-[#141414]" />
                <span>{item.location}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl text-[#141414] font-normal">
                {item.title}
              </h3>
            </div>

            <span className="px-3 py-1 bg-[#FAF8F5] text-[#141414] text-[10px] font-sans font-medium tracking-widest uppercase border border-[#E0DBD1]">
              {item.category.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
