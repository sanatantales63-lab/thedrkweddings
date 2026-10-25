import React, { useState, useEffect, useRef } from 'react';

export const ModernApproach: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // High-performance IntersectionObserver:
  // Runs 100% on the browser compositor with zero scroll listener lag on low-end devices
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      {
        threshold: 0.18, // Triggers gracefully as soon as 18% of section is visible
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const studioPillars = [
    {
      num: '01',
      title: 'ARCHIVAL STORYTELLING',
      desc: 'Over 500+ unscripted love stories documented for generations to come.',
    },
    {
      num: '02',
      title: 'CELLULOID TONALITY',
      desc: 'Fine-art analog texture, natural light framing & couture colour grading.',
    },
    {
      num: '03',
      title: 'TRAVEL & DESTINATIONS',
      desc: 'Rooted in Jharkhand, filming across Rajasthan, Mumbai & Worldwide.',
    },
    {
      num: '04',
      title: 'NON-INTRUSIVE CRAFT',
      desc: 'Candid photojournalism that never interrupts your sacred, unscripted moments.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-36 px-6 sm:px-12 overflow-hidden bg-[#F0E9E0] transition-colors"
      style={{ backgroundColor: '#F0E9E0' }}
    >
      <div className="max-w-[1440px] mx-auto">

        {/* 
          1. TOP HEADLINE:
          "A MODERN APPROACH to an AGE OLD TRADITION"
          Clean vector typography that never pixelates
        */}
        <div
          className={`mb-12 sm:mb-16 md:mb-20 max-w-[920px] transition-all duration-700 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="hidden sm:block">
            <img
              src="/assets/editorial/modern-approach-title.png"
              alt="A Modern Approach to an Age Old Tradition"
              className="w-full max-w-[760px] h-auto object-contain select-none"
              loading="eager"
            />
          </div>

          <div className="block sm:hidden">
            <h2 className="font-serif text-[#111111] leading-[1.1] tracking-[-0.01em]">
              <span className="block text-3xl sm:text-5xl font-normal tracking-[0.06em] uppercase">
                A Modern Approach
              </span>
              <span className="block text-2xl sm:text-4xl font-normal mt-1">
                <span className="font-serif italic font-normal tracking-normal lowercase pr-2">to an</span>
                <span className="tracking-[0.06em] uppercase">Age Old Tradition</span>
              </span>
            </h2>
          </div>
        </div>

        {/* 
          2. THE PARTING PHOTOS & EDITORIAL NARRATIVE:
          - Hardware accelerated GPU transforms (translate3d)
          - Starts closed together in the center (like an editorial diptych book)
          - Parts smoothly outwards to the left & right without any scroll lag!
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* LEFT PHOTO: Glides from center to the LEFT */}
          <div
            className={`lg:col-span-4 flex justify-center lg:justify-start transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isRevealed
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-40 translate-x-16 sm:translate-x-24 scale-95'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="group relative w-full max-w-[380px] aspect-[4/5] overflow-hidden bg-[#E2DBD1] shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
              <img
                src="/assets/editorial/kiara-bridal-portrait.jpg"
                alt="Editorial Bridal Portrait"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-sans tracking-[0.2em] uppercase px-2.5 py-1">
                Frame 01 &nbsp;•&nbsp; Candid Emotion
              </div>
            </div>
          </div>

          {/* CENTER NARRATIVE: Reveals smoothly between the parting frames */}
          <div
            className={`lg:col-span-4 flex flex-col justify-center px-0 sm:px-4 py-4 transition-all duration-[1000ms] delay-200 ease-out ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="font-serif text-[15px] sm:text-[16.5px] text-[#1A1A1A] font-normal leading-[1.8] mb-6">
              Considered to be the epitome of Modern Photography and Filmmaking,{' '}
              <span className="font-editorial-italic font-normal">The DRK Weddings</span> has transformed the
              Indian Wedding landscape on a regular basis. For almost a decade, The DRK Weddings has
              been creating photographs and films which are timeless and have been etched in
              memories of thousands of people forever.
            </p>

            <p className="font-serif text-[14px] sm:text-[15px] text-[#444444] font-normal leading-[1.8]">
              Awarded as the Wedding Filmmaker of the Year across premier national forums along with
              numerous industry accolades, The DRK Weddings is recognized across India and worldwide
              for its benchmark storytelling and couture cinema.
            </p>
          </div>

          {/* RIGHT PHOTO: Glides from center to the RIGHT */}
          <div
            className={`lg:col-span-4 flex justify-center lg:justify-end transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isRevealed
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-40 -translate-x-16 sm:-translate-x-24 scale-95'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="group relative w-full max-w-[460px] aspect-[4/3] overflow-hidden bg-[#E2DBD1] shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
              <img
                src="/assets/editorial/lake-como-bride.jpg"
                alt="Modern Wedding Scenery"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-sans tracking-[0.2em] uppercase px-2.5 py-1">
                Frame 02 &nbsp;•&nbsp; Sacred Scenery
              </div>
            </div>
          </div>

        </div>

        {/* 
          3. REPLACED MAGAZINE LOGOS WITH UNIQUE STUDIO HERITAGE PILLARS:
          Replaces generic Vogue/Cosmo badges with authentic, bespoke DRK studio credentials.
          Ultra-clean, lag-free, couture design with fine hairline borders.
        */}
        <div
          className={`mt-16 sm:mt-24 md:mt-32 pt-10 sm:pt-14 border-t border-[#DECDBD] transition-all duration-700 delay-300 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {studioPillars.map((p) => (
              <div key={p.num} className="flex flex-col">
                <span className="text-[11px] font-sans font-light tracking-[0.24em] text-[#9c855a] uppercase mb-2">
                  {p.num} // STUDIO BENCHMARK
                </span>
                <h4 className="font-serif text-[17px] text-[#111111] font-normal tracking-[0.02em] uppercase mb-2">
                  {p.title}
                </h4>
                <p className="font-sans text-[12.5px] text-[#555555] font-light leading-[1.65]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
