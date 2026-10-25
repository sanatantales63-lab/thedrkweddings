import React from 'react';
import { motion } from 'framer-motion';
import type { GalleryItem } from '../data/weddingData';

interface SpotlightGridProps {
  onOpenLightbox?: (item: GalleryItem) => void;
}

export const SpotlightGrid: React.FC<SpotlightGridProps> = ({ onOpenLightbox }) => {
  const spotlightItems: GalleryItem[] = [
    {
      id: 'spot-1',
      url: '/assets/photos/stories/mudit-muskan/01_01.jpg',
      title: 'Mudit & Muskan — Royal Rajputana Vows',
      location: 'Palace of Heritage, Rajasthan',
      category: 'royal',
      aspect: 'portrait',
    },
    {
      id: 'spot-2',
      url: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',
      title: 'Sunsets in Thar — Pre-Wedding Odyssey',
      location: 'Golden Dunes, Jaisalmer',
      category: 'pre-wedding',
      aspect: 'landscape',
    },
    {
      id: 'spot-3',
      url: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',
      title: 'The Solitary Silence Before The Mandap',
      location: 'Jodhpur Heritage Suite',
      category: 'portraits',
      aspect: 'portrait',
    },
    {
      id: 'spot-4',
      url: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
      title: 'Architectural Splendor & Grandeur',
      location: 'Umaid Bhawan, Jodhpur',
      category: 'royal',
      aspect: 'landscape',
    },
    {
      id: 'spot-5',
      url: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
      title: 'The Unstoppable Joy of the Royal Baraat',
      location: 'Jaipur Estate',
      category: 'candids',
      aspect: 'landscape',
    },
  ];

  return (
    <section id="spotlight" className="py-32 md:py-48 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-4">
              Curated Spotlight
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-stone-900 tracking-tight leading-none">
              Signature <br />
              <span className="italic font-normal">Moments.</span>
            </h2>
          </div>
          <p className="text-stone-500 text-xs md:text-sm uppercase tracking-[0.25em] font-black max-w-xs">
            Framing unfiltered love across monumental palaces and intimate courtyards.
          </p>
        </div>

        {/* Asymmetric Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Card 1: Large portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 group cursor-pointer"
            onClick={() => onOpenLightbox && onOpenLightbox(spotlightItems[0])}
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 shadow-md">
              <img
                src={spotlightItems[0].url}
                alt={spotlightItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h3 className="font-serif text-xl md:text-2xl text-stone-900 italic">
                {spotlightItems[0].title}
              </h3>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                {spotlightItems[0].location}
              </span>
            </div>
          </motion.div>

          {/* Column 2: Stacked images */}
          <div className="md:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox(spotlightItems[1])}
            >
              <div className="aspect-[16/10] overflow-hidden bg-stone-100 shadow-md">
                <img
                  src={spotlightItems[1].url}
                  alt={spotlightItems[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="font-serif text-lg text-stone-900 italic">
                  {spotlightItems[1].title}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                  {spotlightItems[1].location}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="group cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox(spotlightItems[2])}
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-100 shadow-md">
                <img
                  src={spotlightItems[2].url}
                  alt={spotlightItems[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="font-serif text-lg text-stone-900 italic">
                  {spotlightItems[2].title}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                  {spotlightItems[2].location}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 group cursor-pointer"
            onClick={() => onOpenLightbox && onOpenLightbox(spotlightItems[3])}
          >
            <div className="aspect-[16/10] overflow-hidden bg-stone-100 shadow-md">
              <img
                src={spotlightItems[3].url}
                alt={spotlightItems[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h3 className="font-serif text-lg text-stone-900 italic">
                {spotlightItems[3].title}
              </h3>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                {spotlightItems[3].location}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-6 group cursor-pointer"
            onClick={() => onOpenLightbox && onOpenLightbox(spotlightItems[4])}
          >
            <div className="aspect-[16/10] overflow-hidden bg-stone-100 shadow-md">
              <img
                src={spotlightItems[4].url}
                alt={spotlightItems[4].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h3 className="font-serif text-lg text-stone-900 italic">
                {spotlightItems[4].title}
              </h3>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                {spotlightItems[4].location}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
