import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModernApproach } from './components/ModernApproach';
import { CuratedPortfolio } from './components/CuratedPortfolio';
import { CuratedStories } from './components/CuratedStories';
import { FeaturedFilms } from './components/FeaturedFilms';
import { EditorialGallery } from './components/EditorialGallery';
import { Philosophy } from './components/Philosophy';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { StoryModal } from './components/StoryModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import type { WeddingFilm, WeddingStory, GalleryItem } from './data/weddingData';
import { FEATURED_FILMS } from './data/weddingData';

export function App() {
  const [selectedFilm, setSelectedFilm] = useState<WeddingFilm | null>(null);
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Phase 1: IntersectionObserver for .reveal elements
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
    <div className="min-h-screen bg-white text-[#1A1A1A] antialiased selection:bg-[#F0EBE3] selection:text-[#1A1A1A]">
      {/* 1. Header Navigation (Exact House On The Clouds Layout) */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* 2. Hero Full-Bleed 100vh Banner (HOTC Section 1) */}
      <Hero onPlayFilm={handlePlayHeroReel} />

      {/* 3. A Modern Approach to an Age Old Tradition (HOTC Section 2 with Unique Parting Photos) */}
      <ModernApproach />

      {/* 4. The Portfolios & Stories Gallery (Human Editorial Showcase) */}
      <CuratedPortfolio onOpenLightbox={setSelectedGalleryItem} />

      {/* 5. Featured Stories (HOTC Section 4: Featured) */}
      <CuratedStories onSelectStory={setSelectedStory} />

      {/* 6. Award Winning Films (HOTC Sections 5 & 6: Award Winning Films) */}
      <FeaturedFilms onSelectFilm={setSelectedFilm} />

      {/* 7. Photography (HOTC Section 7: The Wild Ones & Curated Archive) */}
      <EditorialGallery onOpenLightbox={setSelectedGalleryItem} />

      {/* 8. The DRK Signature (HOTC Section 8: Signature Editorial Offering) */}
      <Philosophy />

      {/* 9. Contact Us / Get In Touch (HOTC Section 9: Inquiries) */}
      <InquirySection />

      {/* 10. Minimalist Editorial Footer (HOTC Footer) */}
      <Footer />

      {/* Video Modal Player (YouTube @thedrkstudio) */}
      <VideoModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />

      {/* Story Photo Reader Modal */}
      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* Gallery Single Photo Lightbox */}
      <GalleryLightbox
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}

export default App;
