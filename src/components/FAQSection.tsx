import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { FAQS_DATA, STUDIO_DETAILS } from '../data/weddingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleAskQuestion = () => {
    const text = encodeURIComponent(
      'Hello DRK Weddings! I have a question regarding wedding photography & cinema packages. Could you help me with more details?'
    );
    window.open(`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="faq-section" className="relative py-24 md:py-36 px-6 md:px-20 bg-[#F5F5F0] border-t border-stone-200 overflow-hidden select-none">
      {/* Subtle Natural Paper Texture matching Shutterday */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
        }}
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 block mb-6"
        >
          Common Inquiries
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 lowercase italic tracking-tight"
        >
          frequently asked <span className="not-italic font-normal">questions.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-stone-600 text-sm md:text-base leading-relaxed font-light max-w-2xl mb-16 text-center"
        >
          Your wedding day is one of the most important days of your life. We understand that you might have questions about photography choices, travel policies, and timelines. If you don't find the answers you're looking for, our team is always just a message away.
        </motion.p>

        {/* Accordions */}
        <div className="w-full text-left space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-white border border-stone-200 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-stone-900 font-medium pr-4">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-full bg-stone-100 text-stone-700 shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Consultation Button */}
        <motion.button
          onClick={handleAskQuestion}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-14 inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-950 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors"
        >
          <MessageCircle size={15} className="text-emerald-400" />
          <span>Have More Questions? Speak With Our Studio</span>
        </motion.button>
      </div>
    </section>
  );
};
