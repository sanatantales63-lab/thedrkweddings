import React, { useState, useRef } from 'react';
import { STUDIO_DETAILS } from '../data/weddingData';

export const InquirySection: React.FC = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    coupleNames: '',
    email: '',
    phone: '',
    weddingDate: '',
    destination: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleToggleForm = () => {
    setShowInquiryForm((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello The DRK Weddings!%0A%0AWe'd like to inquire about your availability for our celebration.%0A%0A*Names:* ${
      formData.coupleNames || 'Celebration Inquirer'
    }%0A*Wedding Date:* ${formData.weddingDate || 'TBD'}%0A*Venue / City:* ${
      formData.destination || 'TBD'
    }%0A*Email:* ${formData.email || '—'}%0A%0A${formData.notes || 'Looking forward to hearing from you!'}`;
    window.open(`https://wa.me/${STUDIO_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  const inputClass =
    'w-full px-0 py-3.5 bg-transparent border-0 border-b border-[#D8D2C8] text-[#1A1A1A] placeholder-[#9E9E9E] focus:outline-none focus:border-[#C89B3C] text-[14px] font-sans transition-colors';
  const labelClass = 'block font-editorial-tag text-[#9c855a] text-[9.5px] mb-1.5';

  return (
    <div id="contact" className="bg-[#fafafa] transition-colors">
      {/* Phase 2: Top Section ("Get In Touch") */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column */}
        <div className="w-full lg:w-5/12 reveal">
          <p className="text-sm tracking-[0.15em] font-medium text-gray-500 mb-4 font-sans">
            CONNECT
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 font-serif text-[#1A1A1A]">
            Get In touch
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-md font-sans">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleToggleForm}
              className="bg-black text-white px-8 py-3.5 rounded-xl text-sm font-medium hover-lift transition-transform duration-300 font-sans cursor-pointer shadow-sm"
            >
              {showInquiryForm ? 'Close Form' : 'Contact'}
            </button>
            <button
              onClick={generateWhatsAppMessage}
              className="px-6 py-3.5 border border-[#CCCCCC] text-[#333333] hover:border-black hover:text-black rounded-xl text-sm font-medium hover-lift transition-all duration-300 font-sans cursor-pointer"
            >
              WhatsApp Direct
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-7/12 reveal delay-200">
          <div className="w-full rounded-[2rem] overflow-hidden shadow-xl bg-[#1A1A1A]">
            <img
              src="/assets/photos/gallery/cinematic-wedding-filmmaker-jaipur-palace.jpg"
              alt="The DRK Weddings - Traditional Royal Indian Bridal Moment"
              className="w-full h-[350px] md:h-[450px] object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Interactive Expandable DRK Inquiry Form Drawer */}
      {showInquiryForm && (
        <div ref={formRef} className="max-w-4xl mx-auto px-6 pb-20 reveal active transition-all duration-500">
          <div className="bg-white rounded-[2rem] p-8 sm:p-14 shadow-lg border border-[#EAE5DE]">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#EAE5DE]">
              <div>
                <span className="font-editorial-tag text-[#C89B3C] block mb-1">
                  DRK Weddings Inquiries &bull; 2026–2027 Season
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
                  Tell Us About Your Celebration
                </h3>
              </div>
              <button
                onClick={() => setShowInquiryForm(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none px-2"
                aria-label="Close form"
              >
                &times;
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <span className="font-editorial-tag text-[#C89B3C] block mb-2">Note Received</span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mb-3">
                  Thank You, We’ve Received Your Message
                </h4>
                <p className="text-[14px] font-sans text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                  Our studio director will check our calendar and get in touch with you shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={generateWhatsAppMessage}
                    className="px-8 py-3.5 bg-black hover:bg-[#C89B3C] text-white text-xs font-sans font-medium tracking-[0.15em] uppercase rounded-xl hover-lift transition-all"
                  >
                    Open WhatsApp Direct &rarr;
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 border border-gray-300 text-gray-700 text-xs font-sans font-medium tracking-[0.15em] uppercase rounded-xl hover:border-black hover-lift transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Your Names *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muskan & Mudit"
                      value={formData.coupleNames}
                      onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Phone &amp; WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99345 04101"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Wedding Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. 18–20 November 2026"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Venue &amp; Destination City</label>
                  <input
                    type="text"
                    placeholder="e.g. Umaid Bhawan Palace, Jodhpur / Jaipur / Hazaribagh"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Celebration Notes &amp; Ideas</label>
                  <textarea
                    rows={3}
                    placeholder="Share your wedding plans, approximate guest count, or vision..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="bg-black hover:bg-[#C89B3C] text-white px-8 py-3.5 rounded-xl text-sm font-medium hover-lift transition-all font-sans text-center cursor-pointer shadow-sm"
                  >
                    Submit Inquiry &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={generateWhatsAppMessage}
                    className="border border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white px-8 py-3.5 rounded-xl text-sm font-medium hover-lift transition-all font-sans text-center cursor-pointer"
                  >
                    WhatsApp Studio Directly
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
