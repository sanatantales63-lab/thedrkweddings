import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="backyard" className="py-24 sm:py-32 bg-[#F9F8F6] border-t border-[#EAE5DE] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* Left: Master Signature Portrait Frame */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative p-3 sm:p-4 bg-white border border-[#E2DAD0] shadow-[0_12px_40px_rgba(0,0,0,0.04)] max-w-lg w-full">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ECE6DC]">
                <img
                  src="/assets/photos/gallery/editorial-wedding-photography-rajasthan.jpg"
                  alt="The DRK Signature Fine Art Editorial"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[10.5px] font-sans text-[#888888] font-light px-1">
                <span className="tracking-[0.16em] uppercase text-[#C89B3C]">
                  DRK Signature Offering
                </span>
                <span>Samode Palace, Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Right: Studio Philosophy & Atelier Craft */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-editorial-tag text-[#C89B3C] block mb-3">
              The Signature Collective
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal mb-6 leading-[1.1] tracking-[-0.02em]">
              The DRK <span className="font-editorial-italic font-normal">Signature</span>
            </h2>

            <p className="font-editorial-italic text-xl sm:text-2xl text-[#1A1A1A] leading-[1.5] mb-6">
              Our finest bespoke offering — fine-art editorial photography &amp; couture cinema.
            </p>

            <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] font-light leading-[1.8] mb-5">
              The essence of The DRK Signature is to create photographs that stand the test of time.
              A classic, non-intrusive approach to documenting the most important day of your life
              with bright, airy, and emotive images that take you back in time.
            </p>

            <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] font-light leading-[1.8] mb-10">
              This is an exclusive collective experience offered to a strictly limited number of
              celebrations each season across India, Rajasthan palaces, and international destinations.
            </p>

            {/* Studio Metrics Strip */}
            <div className="border-t border-[#E8E2D8] pt-8 grid grid-cols-3 gap-6">
              <div>
                <span className="block font-serif text-[2.2rem] text-[#1A1A1A] leading-tight">500+</span>
                <span className="font-editorial-tag text-[#888888] text-[9.5px]">Stories Documented</span>
              </div>
              <div>
                <span className="block font-serif text-[2.2rem] text-[#1A1A1A] leading-tight">10+</span>
                <span className="font-editorial-tag text-[#888888] text-[9.5px]">Years of Craft</span>
              </div>
              <div>
                <span className="block font-serif text-[2.2rem] text-[#C89B3C] leading-tight">100%</span>
                <span className="font-editorial-tag text-[#888888] text-[9.5px]">Unscripted &amp; Real</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
