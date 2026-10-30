import React, { useRef, useEffect } from 'react';

export const HorizontalSlider: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      const wrapper = wrapperRef.current;
      const strip = stripRef.current;
      if (!wrapper || !strip) {
        ticking = false;
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const wrapperH = wrapper.offsetHeight;
      const viewportH = window.innerHeight;
      const totalScrollable = wrapperH - viewportH;

      if (totalScrollable <= 0) {
        ticking = false;
        return;
      }

      // Distance scrolled into the wrapper:
      // rect.top is 0 when wrapper hits the top of the viewport.
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Distance the strip needs to slide
      const maxTravel = Math.max(0, strip.scrollWidth - window.innerWidth + 40);
      const currentX = progress * maxTravel;

      strip.style.transform = `translate3d(-${currentX}px, 0, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const images = [
    { src: '/assets/photos/hero/CROUSEAL-1_01.jpg',                                        label: 'Bridal Veil',             location: 'Hazaribagh' },
    { src: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',   label: 'Grand Palace Vows',       location: 'Rajasthan' },
    { src: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',                 label: 'The Solitary Moment',     location: 'Jodhpur' },
    { src: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',            label: 'Sunset Silhouettes',      location: 'Thar Desert' },
    { src: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',       label: 'The Royal Revelry',       location: 'Heritage Haveli' },
    { src: '/assets/photos/gallery/cinematic-wedding-filmmaker-jaipur-palace.jpg',          label: 'Illuminated Procession',  location: 'Jaipur' },
    { src: '/assets/photos/gallery/editorial-wedding-photography-rajasthan.jpg',            label: 'Heirloom Polki',          location: 'Heritage Estate' },
    { src: '/assets/photos/gallery/traditional-indian-wedding-photography-udaipur.jpg',     label: 'Lakeside Vows',           location: 'Udaipur' },
    { src: '/assets/photos/hero/CROUSEAL-1_03.jpg',                                        label: 'Sacred Rituals',          location: 'Jharkhand' },
  ];

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: '280vh' }}
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full bg-[#F5F5F0] border-y border-stone-200/60 overflow-hidden select-none flex flex-col justify-center gap-6 z-10">
        {/* Top Header Labels */}
        <div className="flex items-center justify-between px-6 md:px-12 shrink-0">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">
            The Visual Flow · Unstaged Emotion
          </span>
          <span className="hidden sm:block text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">
            500+ Celebrations Documented
          </span>
        </div>

        {/* Sliding Images Track */}
        <div className="overflow-hidden w-full">
          <div
            ref={stripRef}
            className="flex gap-5 md:gap-7 px-6 md:px-12 w-max"
            style={{
              willChange: 'transform',
            }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative shrink-0 overflow-hidden bg-stone-200 shadow-sm"
                style={{ width: 'clamp(200px, 20vw, 320px)', aspectRatio: '3 / 4' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             flex flex-col justify-end p-5 text-white"
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-300 mb-1">
                    {img.location}
                  </span>
                  <h4 className="font-serif text-base italic">{img.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
