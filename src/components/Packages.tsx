import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { PACKAGES_DATA, STUDIO_DETAILS } from '../data/weddingData';

interface PackageItem {
  id: string;
  tag: string;
  title: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
  color: string;
  dark: boolean;
  featured: boolean;
}

export const Packages: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<PackageItem | null>(null);

  const handleBookOnWhatsApp = (pkgTitle: string) => {
    const text = encodeURIComponent(
      `Hello DRK Weddings! I am interested in inquiring about the "${pkgTitle}" package for our upcoming wedding. Could you share available dates and pricing details?`
    );
    window.open(`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="relative py-32 md:py-48 px-6 bg-[#F5F5F0] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header matching Shutterday */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-4">
              Section 07 • Investment
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-none tracking-tighter text-stone-900">
              Collections <br />
              <span className="italic font-normal">&amp; Investment.</span>
            </h2>
          </div>

          <p className="max-w-xs text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-stone-500 leading-relaxed">
            Choose a path that resonates with your vision. Every session is an editorial journey tailored to your story.
          </p>
        </div>

        {/* Big Watermark "WORTH" */}
        <div className="relative">
          <div className="absolute -top-40 -left-6 opacity-[0.04] pointer-events-none select-none hidden lg:block">
            <span className="text-[25vw] font-serif font-black leading-none text-stone-900">
              WORTH
            </span>
          </div>

          {/* Staggered 3-Card Grid matching Shutterday */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
            {PACKAGES_DATA.map((pkg, idx) => {
              // Stagger offsets: card 0: md:mt-24, card 1: centerpiece (z-10), card 2: md:mt-36
              const staggerClass =
                idx === 0 ? 'md:mt-20' : idx === 1 ? 'relative z-10 md:-mt-4' : 'md:mt-32';

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`md:col-span-4 ${staggerClass}`}
                >
                  <div
                    className={`p-8 md:p-10 border transition-all duration-300 ${
                      pkg.dark
                        ? 'bg-stone-950 text-stone-100 border-stone-800 shadow-xl'
                        : pkg.featured
                        ? 'bg-white text-stone-900 border-stone-300 shadow-2xl ring-1 ring-stone-900/10'
                        : 'bg-[#FBFBFA] text-stone-900 border-stone-200 shadow-md'
                    }`}
                  >
                    {/* Header badge */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200/20">
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.3em] ${
                          pkg.dark ? 'text-stone-400' : 'text-stone-500'
                        }`}
                      >
                        {pkg.tag}
                      </span>
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 ${
                          pkg.dark
                            ? 'bg-stone-800 text-stone-300'
                            : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl md:text-4xl italic tracking-tight mb-4">
                      {pkg.title}
                    </h3>

                    {/* Pricing */}
                    <div className="mb-8">
                      <span className="font-serif text-2xl md:text-3xl font-normal block">
                        {pkg.price}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">
                        Customized for your itinerary
                      </span>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-3.5 mb-10 text-xs md:text-sm leading-relaxed">
                      {pkg.features.slice(0, 5).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                              pkg.dark ? 'bg-stone-400' : 'bg-stone-800'
                            }`}
                          />
                          <span className={pkg.dark ? 'text-stone-300' : 'text-stone-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Action buttons */}
                    <div className="space-y-3 pt-4 border-t border-stone-200/20">
                      <button
                        onClick={() => setSelectedPkg(pkg as PackageItem)}
                        className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 ${
                          pkg.dark
                            ? 'bg-white text-stone-950 hover:bg-stone-200'
                            : 'bg-stone-900 text-white hover:bg-stone-950'
                        }`}
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </button>

                      <button
                        onClick={() => handleBookOnWhatsApp(pkg.title)}
                        className={`w-full py-3 text-[9px] font-black uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 border ${
                          pkg.dark
                            ? 'border-stone-800 text-stone-400 hover:text-white hover:border-stone-600'
                            : 'border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400'
                        }`}
                      >
                        <MessageCircle size={13} className="text-emerald-500" />
                        <span>Book On WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Package Detail Modal matching Shutterday */}
      <AnimatePresence>
        {selectedPkg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedPkg(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative z-10 w-full max-w-lg p-8 md:p-12 shadow-2xl ${
                selectedPkg.dark ? 'bg-stone-950 text-stone-100' : 'bg-white text-stone-900'
              }`}
            >
              <button
                onClick={() => setSelectedPkg(null)}
                className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
                  selectedPkg.dark ? 'hover:bg-white/10 text-stone-300' : 'hover:bg-stone-100 text-stone-600'
                }`}
              >
                <X size={20} />
              </button>

              <span
                className={`text-[10px] font-black uppercase tracking-[0.4em] block mb-2 ${
                  selectedPkg.dark ? 'text-stone-400' : 'text-stone-500'
                }`}
              >
                {selectedPkg.tag}
              </span>

              <h3 className="font-serif text-3xl md:text-5xl italic tracking-tight mb-3">
                {selectedPkg.title}
              </h3>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-2xl md:text-3xl">{selectedPkg.price}</span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                  / {selectedPkg.duration}
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-4">
                  Full Deliverables &amp; Inclusions:
                </h4>
                <ul className="space-y-3 text-xs md:text-sm">
                  {selectedPkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className={selectedPkg.dark ? 'text-stone-300' : 'text-stone-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  const pkgName = selectedPkg.title;
                  setSelectedPkg(null);
                  handleBookOnWhatsApp(pkgName);
                }}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>Inquire About This Collection on WhatsApp</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
