import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { WeddingFilm } from '../data/weddingData';
import { STUDIO_DETAILS } from '../data/weddingData';

interface VideoModalProps {
  film: WeddingFilm | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ film, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (film) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-[#FAF8F5] border border-[#E0DBD1] overflow-hidden shadow-2xl flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E3DA] bg-white">
          <div>
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#77726A] block mb-0.5">
              The DRK Wedding Cinema
            </span>
            <h3 className="font-serif text-lg sm:text-2xl text-[#141414] font-normal">
              {film.couple} — <span className="italic font-light text-[#77726A]">{film.title}</span>
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans text-[#141414] hover:text-[#77726A] transition-colors"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-[#D5CFC4] hover:border-[#141414] text-[#141414] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Iframe Container */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Details Bottom */}
        <div className="p-6 sm:p-8 bg-white border-t border-[#E8E3DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#77726A] uppercase block mb-1">
              {film.location} • {film.duration}
            </span>
            <p className="text-xs sm:text-sm font-sans text-[#4A463F] max-w-2xl leading-relaxed font-light">
              {film.description}
            </p>
          </div>

          <div>
            <a
              href={STUDIO_DETAILS.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#141414] hover:bg-[#333333] text-white font-sans text-xs font-medium tracking-[0.16em] uppercase transition-colors whitespace-nowrap block text-center"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
