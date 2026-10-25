import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LOOKBOOK_DATA } from '../data/weddingData';

interface LookbookProps {
  onSelectCategory?: (category: string) => void;
}

export const Lookbook: React.FC<LookbookProps> = ({ onSelectCategory }) => {
  return (
    <section id="lookbook" className="relative py-32 md:py-48 bg-stone-950 text-stone-100 overflow-hidden select-none">
      {/* Huge subtle PORTFOLIO watermark in background */}
      <div className="absolute top-12 left-6 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[25vw] font-serif font-black leading-none text-white whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-20">
          <div className="md:col-span-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-6">
              Curated Work • 2026
            </span>
            <h2 className="font-serif text-6xl sm:text-7xl md:text-9xl text-stone-100 leading-none tracking-tight">
              The <br />
              <span className="italic font-normal">Look</span> <br />
              book.
            </h2>
          </div>

          <div className="md:col-span-4 pb-4">
            <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
              A curated anthology of love stories, sacred rites, and unscripted intimacy documented with cinematic elegance.
            </p>
          </div>
        </div>

        {/* Lookbook Horizontal Cards Carousel */}
        <div className="flex gap-8 overflow-x-auto pb-8 pt-4 scrollbar-none snap-x snap-mandatory">
          {LOOKBOOK_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="shrink-0 w-[85vw] sm:w-[50vw] md:w-[32vw] group cursor-pointer snap-start"
              onClick={() => onSelectCategory && onSelectCategory(item.category)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-900 border border-stone-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                  <span>0{idx + 1}</span>
                  <span className="border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-2.5 py-1 text-stone-300">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl italic mb-2 text-stone-100 group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-200 transition-colors">
                <span>View Portfolio Series</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
