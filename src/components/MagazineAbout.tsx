import React from 'react';
import { motion } from 'framer-motion';

export const MagazineAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-48 px-6 md:px-20 bg-[#F5F5F0] overflow-hidden">
      {/* Subtle Natural Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Block matching Shutterday */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24 md:mb-40">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-6"
            >
              Editorial • Volume 01
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] text-stone-900 lowercase italic tracking-tight"
            >
              the <br />
              <span className="not-italic md:ml-24 font-normal">unseen</span> <br />
              <span className="md:ml-48">poetry.</span>
            </motion.h2>
          </div>

          <div className="md:col-span-4 pb-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-stone-500 text-sm md:text-base leading-relaxed font-light"
            >
              In every shared glance and quiet whisper, there lies a story waiting to be told. At The DRK Weddings, we don’t just take photos; we preserve the sacred poetry of your love.
            </motion.p>
          </div>
        </div>

        {/* Philosophy & Editorial Imagery Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left Column: Narrative with Drop-Cap */}
          <div className="md:col-span-5 space-y-10">
            <div className="pr-0 md:pr-8">
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 font-medium italic">
                Our Philosophy
              </h3>

              <div className="text-stone-600 text-sm md:text-base leading-relaxed font-light mb-8">
                <span className="float-left text-7xl md:text-8xl font-serif mr-4 mt-1 leading-[0.75] text-stone-400">
                  W
                </span>
                e believe Indian wedding photography should never be an assembly line of stiff, artificial poses. A wedding is a living, breathing emotional tapestry. We immerse ourselves in your celebrations as silent observers, catching the tear rolling down a father’s cheek, the burst of laughter during pheras, and the untamed energy on the dance floor.
              </div>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light border-l-2 border-stone-300 pl-6 italic">
                "Our cameras are calibrated to capture genuine souls, not synthetic smiles. Every frame we craft is meant to be felt fifty years from now."
              </p>
            </div>

            {/* Studio stats badges */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200">
              <div>
                <span className="font-serif text-4xl text-stone-900 block font-normal">8+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">
                  Years of Legacy
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl text-stone-900 block font-normal">500+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">
                  Weddings Documented
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photography Frames */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-200 shadow-md">
                <img
                  src="/assets/photos/stories/mudit-muskan/01_01.jpg"
                  alt="Royal Couple Portrait"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-baseline text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">
                <span>The Sacred Vows</span>
                <span>Rajasthan</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 sm:pt-16"
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-200 shadow-md">
                <img
                  src="/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg"
                  alt="Editorial Bridal Grace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-baseline text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">
                <span>Heirloom Polki</span>
                <span>Jodhpur</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
