import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HorizontalSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  const reelImages = [
    {
      src: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
      label: 'Grand Palace Vows',
      location: 'Rajasthan',
    },
    {
      src: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',
      label: 'The Solitary Moment',
      location: 'Jodhpur',
    },
    {
      src: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',
      label: 'Sunset Silhouettes',
      location: 'Thar Desert',
    },
    {
      src: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
      label: 'The Royal Revelry',
      location: 'Heritage Haveli',
    },
    {
      src: '/assets/photos/stories/mudit-muskan/01_02.jpg',
      label: 'Vedic Sanctum',
      location: 'Palace Courtyard',
    },
    {
      src: '/assets/photos/gallery/cinematic-wedding-filmmaker-jaipur-palace.jpg',
      label: 'Illuminated Procession',
      location: 'Jaipur',
    },
    {
      src: '/assets/photos/stories/rahul-priyanka/destination-wedding-photographer-jodhpur.jpg',
      label: 'Pure Euphoria',
      location: 'Udaipur',
    },
    {
      src: '/assets/photos/gallery/editorial-wedding-photography-rajasthan.jpg',
      label: 'Heirloom Polki',
      location: 'Heritage Estate',
    },
  ];

  return (
    <div ref={containerRef} className="py-20 md:py-28 bg-[#F5F5F0] overflow-hidden border-y border-stone-200/60 select-none">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">
          The Visual Flow • Unstaged Emotion
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 hidden sm:inline">
          500+ Celebrations Documented
        </span>
      </div>

      <motion.div style={{ x: xTranslate }} className="flex gap-6 md:gap-8 px-6 w-max">
        {reelImages.map((img, idx) => (
          <div
            key={idx}
            className="group relative w-72 sm:w-80 md:w-96 aspect-[3/4] overflow-hidden bg-stone-200 shrink-0 shadow-sm"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-300">
                {img.location}
              </span>
              <h4 className="font-serif text-lg italic text-white">{img.label}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
