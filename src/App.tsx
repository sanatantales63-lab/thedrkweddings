import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Loader } from './components/Loader';
import { TheManifesto } from './components/TheManifesto';
import { HorizontalSlider } from './components/HorizontalSlider';
import { MagazineAbout } from './components/MagazineAbout';
import { SpotlightGrid } from './components/SpotlightGrid';
import { Lookbook } from './components/Lookbook';
import { Testimonials } from './components/Testimonials';
import { VideoSection } from './components/VideoSection';
import { Packages } from './components/Packages';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VideoModal } from './components/VideoModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import type { WeddingFilm, GalleryItem } from './data/weddingData';
import { FEATURED_FILMS } from './data/weddingData';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<WeddingFilm | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // ── Lenis smooth scroll setup ──
  useEffect(() => {
    // Disable on touch devices to avoid interference with native swipe/touch gestures
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Freeze smooth-scroll while the loader curtain is down
  useEffect(() => {
    if (loading) lenisRef.current?.stop();
    else lenisRef.current?.start();
  }, [loading]);

  // Always land on the hero after a refresh
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);

  // ── IntersectionObserver for .reveal animations ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayHeroReel = () => {
    if (FEATURED_FILMS.length > 0) setSelectedFilm(FEATURED_FILMS[0]);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-stone-900 selection:bg-stone-900 selection:text-stone-100 font-sans">
      {loading && <Loader onReveal={() => setHeroReady(true)} onDone={() => setLoading(false)} />}

      {/* Navbar */}
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Slide-out Drawer */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main>
        {/* 1 — Hero fullscreen */}
        <Hero onPlayFilm={handlePlayHeroReel} ready={heroReady} />

        {/* 2 — The DRK Manifesto */}
        <TheManifesto />

        {/* 3 — Horizontal sticky photo reel */}
        <HorizontalSlider />

        {/* 4 — Magazine About */}
        <MagazineAbout />

        {/* 5 — Spotlight Grid */}
        <SpotlightGrid onOpenLightbox={setSelectedGalleryItem} />

        {/* 6 — Lookbook (sticky horizontal) */}
        <Lookbook
          onSelectCategory={() => {
            const el = document.getElementById('spotlight');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7 — Testimonials */}
        <Testimonials />

        {/* 8 — Video Showcase */}
        <VideoSection onPlayFilm={(film) => setSelectedFilm(film)} />

        {/* 9 — Collections / Inquiry CTA */}
        <Packages />

        {/* 10 — FAQ */}
        <FAQSection />

        {/* 11 — Contact */}
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
      <GalleryLightbox item={selectedGalleryItem} onClose={() => setSelectedGalleryItem(null)} />
    </div>
  );
}

export default App;
