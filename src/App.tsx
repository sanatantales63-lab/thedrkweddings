import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
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

  // IntersectionObserver for staggered .reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayHeroReel = () => {
    if (FEATURED_FILMS.length > 0) {
      setSelectedFilm(FEATURED_FILMS[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-stone-900 selection:bg-stone-900 selection:text-stone-100 overflow-x-hidden font-sans">
      {/* 1. Header Navigation matching Shutterday */}
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* 2. Slide-out Drawer Navigation */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Experience Stream */}
      <main>
        {/* Hero Fullscreen Cinema Banner */}
        <Hero onPlayFilm={handlePlayHeroReel} />

        {/* The DRK Manifesto */}
        <TheManifesto />

        {/* Seamless Horizontal Visual Flow Strip */}
        <HorizontalSlider />

        {/* Magazine About: Editorial • Volume 01 ("the unseen poetry.") */}
        <MagazineAbout />

        {/* Spotlight Grid: Asymmetric Signature Moments */}
        <SpotlightGrid onOpenLightbox={setSelectedGalleryItem} />

        {/* The Lookbook: Curated Portfolio 2026 */}
        <Lookbook
          onSelectCategory={() => {
            const el = document.getElementById('spotlight');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Real Client Praise & Testimonials */}
        <Testimonials />

        {/* Cinematic Video Showcase ("WATCH Magic.") */}
        <VideoSection onPlayFilm={(film) => setSelectedFilm(film)} />

        {/* Collections & Investment (Packages) */}
        <Packages />

        {/* Common Inquiries FAQ Section */}
        <FAQSection />

        {/* Contact & Date Reservation Hero */}
        <ContactSection />
      </main>

      {/* Shutterday Minimalist Stone Footer */}
      <Footer />

      {/* Floating WhatsApp Quick-Chat Widget */}
      <FloatingWhatsApp />

      {/* Video Modal Player (YouTube @thedrkstudio) */}
      <VideoModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />

      {/* Gallery Photo Lightbox */}
      <GalleryLightbox
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}

export default App;
