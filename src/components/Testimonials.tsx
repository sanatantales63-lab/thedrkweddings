import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/weddingData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#FBFBFA] relative overflow-hidden border-t border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-4">
              Section 06 • Real Stories
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-stone-900 tracking-tight leading-none">
              Client Praise <br />
              <span className="italic font-normal">&amp; Kind Words.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">
              5.0 Star Rated Across 100+ Reviews
            </span>
          </div>
        </div>

        {/* 3 Review Cards matching Shutterday */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white p-8 md:p-10 border border-stone-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-stone-300 mb-6" />
                <p className="text-stone-700 text-sm md:text-base leading-relaxed font-light italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-medium">
                    {t.names}
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    {t.location}
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-300">
                  {t.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
