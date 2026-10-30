import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/weddingData';

export const Packages: React.FC = () => {
  const handleInquire = () => {
    const text = encodeURIComponent(
      `Hello DRK Weddings! I'd love to know more about your photography and film packages for our upcoming wedding. Could you share the details?`
    );
    window.open(`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  const pillars = [
    {
      num: '01',
      title: 'Photography',
      desc: 'Fine-art editorial stills that freeze every whispered vow and joyful tear into heirlooms.',
    },
    {
      num: '02',
      title: 'Cinematic Films',
      desc: 'Feature-length films and short reels crafted with a director\'s eye and a poet\'s heart.',
    },
    {
      num: '03',
      title: 'Destination Coverage',
      desc: 'We travel wherever your love story unfolds — Rajasthan, the Himalayas, or beyond.',
    },
  ];

  return (
    <section
      id="packages"
      className="relative py-28 md:py-40 px-6 bg-stone-950 text-stone-100 overflow-hidden select-none"
    >
      {/* Subtle watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <span className="font-serif text-[20vw] font-black leading-none text-white whitespace-nowrap">
          DRK
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-500 block mb-6"
        >
          Section 07 · Collections
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl leading-none tracking-tight text-stone-100 mb-8"
        >
          Let's Create
          <br />
          <em className="font-normal text-stone-400">Something.</em>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-stone-400 text-sm md:text-base max-w-xl leading-relaxed mb-20 font-light"
        >
          Every wedding is a universe of its own. We don't believe in fixed price-lists —
          we believe in conversations. Reach out and let's craft something tailored to your story.
        </motion.p>

        {/* Three service pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-stone-800 mb-16">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-stone-800 last:border-0 group hover:bg-stone-900/50 transition-colors duration-300"
            >
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-600 block mb-5">
                {p.num}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl italic text-stone-100 mb-4 group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <button
            onClick={handleInquire}
            className="group flex items-center gap-4 bg-white text-stone-950 px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-100 transition-colors duration-200"
          >
            <MessageCircle size={15} className="text-emerald-600" />
            <span>Inquire on WhatsApp</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 hover:text-stone-200 transition-colors underline underline-offset-4"
          >
            Or fill the inquiry form ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
};
