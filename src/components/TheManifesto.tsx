import React from 'react';
import { motion } from 'framer-motion';

export const TheManifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative py-40 md:py-60 px-6 bg-center bg-cover bg-fixed overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 10, 9, 0.65), rgba(12, 10, 9, 0.75)), url('/assets/photos/stories/mudit-muskan/01_03.jpg')`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-stone-400 block mb-8"
        >
          The DRK Manifesto
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.15] text-stone-100 tracking-tight"
        >
          We capture the <span className="italic text-stone-300 font-normal">quiet glances</span>, the{' '}
          <span className="italic text-white font-normal">loud celebrations</span>, and the{' '}
          <span className="underline decoration-stone-500 underline-offset-8">forever promises</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto text-stone-400 text-xs md:text-sm uppercase font-black tracking-[0.3em]"
        >
          Documenting Indian Weddings with Uncompromising Editorial Craft
        </motion.p>
      </div>
    </section>
  );
};
