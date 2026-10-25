import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/weddingData';

export const ContactSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Also prepare WhatsApp redirection
    const msg = encodeURIComponent(
      `Hello DRK Weddings!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Wedding Date:* ${formData.date}%0A*Venue/City:* ${formData.venue}%0A%0A*Notes:* ${formData.message || 'Looking forward to hearing from you!'}`
    );
    window.open(`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=${msg}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello The DRK Weddings! We would love to check your availability and package details for our upcoming celebration.'
    );
    window.open(`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="bg-white relative select-none">
      {/* Cinematic Wedding Bride Background matching Shutterday */}
      <div
        className="min-h-[80vh] md:min-h-[70vh] px-6 md:px-20 relative overflow-hidden flex flex-col justify-center items-center py-20 md:py-28"
        style={{
          backgroundImage: "url('/assets/photos/stories/mudit-muskan/01_01.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-stone-950/65 backdrop-blur-[2px] z-0" />

        {/* Content Box */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-stone-300 mb-6 block"
          >
            Ready to create something timeless?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl italic text-white leading-[1.05] tracking-tight mb-8"
          >
            Let's Begin Your <br />
            <span className="not-italic font-normal">Forever.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-stone-300 text-sm md:text-base max-w-xl font-light leading-relaxed mb-10"
          >
            We take a limited number of celebrations each season to provide every couple with undivided creative focus and heirloom excellence.
          </motion.p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDirectWhatsApp}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-3 shadow-xl hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>Inquire On WhatsApp</span>
            </button>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all"
            >
              {showForm ? 'Hide Inquiry Form' : 'Fill Consultation Form'}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Inquiry Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#F5F5F0] border-t border-stone-200"
          >
            <div className="max-w-3xl mx-auto px-6 py-20">
              <div className="text-center mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 block mb-2">
                  Direct Studio Dispatch
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 italic">
                  Tell Us About Your Celebration
                </h3>
              </div>

              {submitted ? (
                <div className="bg-white p-10 text-center border border-stone-200">
                  <CheckCircle2 size={44} className="text-emerald-600 mx-auto mb-4" />
                  <h4 className="font-serif text-2xl text-stone-900 mb-2">Thank you!</h4>
                  <p className="text-stone-600 text-sm font-light">
                    Your inquiry has been prepared and forwarded. Our creative team will connect with you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 bg-white p-8 md:p-12 border border-stone-200 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
                        Couple's Names *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Mudit & Muskan"
                        className="w-full bg-[#FAF9F5] border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
                        WhatsApp Contact *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99345 04101"
                        className="w-full bg-[#FAF9F5] border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@email.com"
                        className="w-full bg-[#FAF9F5] border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
                        Wedding Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-[#FAF9F5] border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
                      Venue / Destination Location *
                    </label>
                    <input
                      type="text"
                      name="venue"
                      required
                      value={formData.venue}
                      onChange={handleInputChange}
                      placeholder="e.g. Umaid Bhawan, Jodhpur / Hazaribagh"
                      className="w-full bg-[#FAF9F5] border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
                      Tell Us About Your Vision &amp; Ceremonies
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what matters most to you, number of days, guest count, and your story..."
                      className="w-full bg-[#FAF9F5] border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-stone-900 hover:bg-stone-950 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Submit &amp; Open WhatsApp Confirmation</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
