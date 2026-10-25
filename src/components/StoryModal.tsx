import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import type { WeddingStory } from '../data/weddingData';

interface StoryModalProps {
  story: WeddingStory | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(0);
  }, [story]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!story) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    if (story) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, photoIndex]);

  if (!story) return null;

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % story.images.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + story.images.length) % story.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-6xl max-h-[95vh] bg-[#FAF8F5] border border-[#E0DBD1] overflow-hidden shadow-2xl flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E3DA] bg-white">
          <div>
            <h3 className="font-serif text-lg sm:text-2xl text-[#141414] font-normal">
              {story.couple} — <span className="italic font-light text-[#77726A]">{story.title}</span>
            </h3>
            <div className="flex items-center gap-2 text-[10px] font-sans tracking-widest uppercase text-[#77726A]">
              <MapPin className="w-3 h-3 text-[#141414]" />
              <span>{story.location}</span>
              <span>•</span>
              <span>Photograph {photoIndex + 1} of {story.images.length}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#D5CFC4] hover:border-[#141414] text-[#141414] hover:text-black transition-colors rounded-full"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Main Photo Frame */}
        <div className="relative flex-1 min-h-[400px] sm:min-h-[500px] bg-[#141414] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <img
            src={story.images[photoIndex]}
            alt={`${story.couple} frame ${photoIndex + 1}`}
            className="max-h-[65vh] w-auto max-w-full object-contain shadow-2xl transition-all duration-300"
          />

          <button
            onClick={prevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#141414] flex items-center justify-center transition-all shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#141414] flex items-center justify-center transition-all shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Filmstrip & Story Quote */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif italic text-xs sm:text-sm text-[#68645E] max-w-xl text-center sm:text-left">
            {story.quote}
          </p>

          <div className="flex items-center gap-2 overflow-x-auto max-w-full sm:max-w-md pb-1 scrollbar-none">
            {story.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setPhotoIndex(idx)}
                className={`w-12 h-12 overflow-hidden flex-shrink-0 border-2 transition-all ${
                  idx === photoIndex ? 'border-[#141414] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
