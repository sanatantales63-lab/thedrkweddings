import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/weddingData';

export const Praise: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="praise" className="py-20 sm:py-32 bg-[#FAF8F5] border-t border-[#E8E3DA]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
        <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#77726A] block mb-3">
          Testimonials
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141414] tracking-tight mb-16">
          Kind Words
        </h2>

        {/* Testimonial Box */}
        <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#E8E3DA] shadow-sm relative">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141414] font-normal italic leading-relaxed mb-10 max-w-3xl mx-auto">
            “{TESTIMONIALS[currentIndex].quote}”
          </p>

          <div className="flex flex-col items-center">
            <span className="font-sans font-medium text-xs sm:text-sm tracking-[0.2em] uppercase text-[#141414] mb-1">
              {TESTIMONIALS[currentIndex].names}
            </span>
            <span className="text-xs font-sans text-[#77726A] tracking-wider uppercase">
              {TESTIMONIALS[currentIndex].location} • {TESTIMONIALS[currentIndex].year}
            </span>
          </div>

          {/* Prev/Next Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#D5CFC4] hover:border-[#141414] text-[#141414] flex items-center justify-center transition-colors"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-sans text-[#77726A] tracking-widest">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#D5CFC4] hover:border-[#141414] text-[#141414] flex items-center justify-center transition-colors"
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
