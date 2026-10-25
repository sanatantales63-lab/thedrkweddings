export interface WeddingStory {
  id: string;
  title: string;
  couple: string;
  location: string;
  coverImage: string;
  date: string;
  description: string;
  quote: string;
  images: string[];
  category: 'destination' | 'heritage' | 'intimate' | 'pre-wedding';
}

export interface WeddingFilm {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
  badge?: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  location: string;
  category: 'portraits' | 'rituals' | 'royal' | 'candids' | 'pre-wedding';
  aspect: 'landscape' | 'portrait';
}

export const HERO_SLIDES = [
  {
    image: '/assets/photos/hero/hotc-hero-reference.jpg',
    tagline: 'THE ART OF TIMELESS CINEMA & MODERN EDITORIAL PHOTOGRAPHY',
    subtitle: 'Ranbir & Alia — Contemporary Celebrity Nuptials',
  },
  {
    image: '/assets/photos/hero/CROUSEAL-1_01.jpg',
    tagline: 'SACRED TIES & TIMELESS VOWS',
    subtitle: 'Fine Art Wedding Cinema Across India & Worldwide',
  },
  {
    image: '/assets/photos/hero/CROUSEAL-1_02.jpg',
    tagline: 'WHERE EMOTIONS UNFOLD UNSCRIPTED',
    subtitle: 'Capturing Love In Its Rawest, Most Honest Form',
  },
  {
    image: '/assets/photos/hero/CROUSEAL-1_03.jpg',
    tagline: 'ROYAL HERITAGE & GRAND CELEBRATIONS',
    subtitle: 'Cinematic Storytelling Tailored For Generations',
  },
  {
    image: '/assets/photos/hero/CROUSEAL-1_06.jpg',
    tagline: 'THE ART OF INTIMACY',
    subtitle: 'Every Look, Every Whisper, Forever Preserved',
  },
  {
    image: '/assets/photos/hero/CROUSEAL-1_09.jpg',
    tagline: 'MAGICAL DESTINATIONS',
    subtitle: 'Documenting Grandeur From Rajasthan To The World',
  },
];

export const FEATURED_FILMS: WeddingFilm[] = [
  {
    id: 'film-1',
    title: 'The Eternal Promise of Rajasthan',
    couple: 'Mudit & Muskan',
    location: 'Royal Heritage Palace, Rajasthan',
    duration: '04:42',
    youtubeId: 'lzHl-Z0vxHU',
    thumbnail: '/assets/photos/hero/CROUSEAL-1_04.jpg',
    badge: 'Signature Wedding Film',
    description: 'A grand royal union woven with twilight pheras, tearful smiles, and an overwhelming celebration under the desert stars.',
  },
  {
    id: 'film-2',
    title: 'Echoes of Tradition & Splendor',
    couple: 'Rahul & Priyanka',
    location: 'Heritage Haveli & Courtyard',
    duration: '05:18',
    youtubeId: 'lzHl-Z0vxHU',
    thumbnail: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
    badge: 'Cinematic Highlight',
    description: 'An electrifying sangeet followed by Vedic rituals steeped in timeless Rajputana grandeur and familial warmth.',
  },
  {
    id: 'film-3',
    title: 'Whispers In The Golden Hour',
    couple: 'Siddharth & Shamya',
    location: 'Oasis Lake Palace',
    duration: '03:55',
    youtubeId: 'lzHl-Z0vxHU',
    thumbnail: '/assets/photos/gallery/cinematic-wedding-filmmaker-jaipur-palace.jpg',
    badge: 'Pre-Wedding Cinema',
    description: 'An intimate, quiet ode to youthful romance amidst majestic architectural arches and gentle evening breezes.',
  },
];

export const WEDDING_STORIES: WeddingStory[] = [
  {
    id: 'mudit-muskan',
    title: 'A Royal Rajput Symphony',
    couple: 'Mudit & Muskan',
    location: 'Palace of Heritage, Rajasthan',
    coverImage: '/assets/photos/stories/mudit-muskan/01_01.jpg',
    date: 'Winter Celebration',
    category: 'heritage',
    description: 'From vibrant crimson lehengas to the electric beats of traditional nagadas, Mudit and Muskan’s wedding was a celebration of timeless royalty and boundless laughter.',
    quote: '"The DRK team did not just photograph our wedding; they breathed life into every single fleeting second we were too overwhelmed to notice."',
    images: [
      '/assets/photos/stories/mudit-muskan/01_01.jpg',
      '/assets/photos/stories/mudit-muskan/01_02.jpg',
      '/assets/photos/stories/mudit-muskan/01_03.jpg',
      '/assets/photos/stories/mudit-muskan/01_04.jpg',
      '/assets/photos/stories/mudit-muskan/01_05.jpg',
      '/assets/photos/stories/mudit-muskan/01_06.jpg',
      '/assets/photos/stories/mudit-muskan/02_01.jpg',
      '/assets/photos/stories/mudit-muskan/02_02.jpg',
      '/assets/photos/stories/mudit-muskan/02_03.jpg',
      '/assets/photos/stories/mudit-muskan/02_04.jpg',
    ],
  },
  {
    id: 'rahul-priyanka',
    title: 'A Dance of Stars & Vedic Fire',
    couple: 'Rahul & Priyanka',
    location: 'Jaipur Grand Estate',
    coverImage: '/assets/photos/stories/rahul-priyanka/destination-wedding-photographer-jodhpur.jpg',
    date: 'Autumn Solstice',
    category: 'destination',
    description: 'A multi-day fiesta starting with a neon-lit sangeet where no foot stopped tapping, culminating in an emotionally profound dawn ceremony.',
    quote: '"Watching our wedding teaser brought our entire family to tears. The colors, the sound design, the sheer editorial finesse is unmatched."',
    images: [
      '/assets/photos/stories/rahul-priyanka/destination-wedding-photographer-jodhpur.jpg',
      '/assets/photos/stories/rahul-priyanka/luxury-wedding-destination-udaipur-rajasthan.jpg',
      '/assets/photos/stories/rahul-priyanka/heritage-wedding-shoot-jaisalmer-rfm.jpg',
      '/assets/photos/stories/rahul-priyanka/wedding-venues-jaipur-photography-rfm.jpg',
      '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
      '/assets/photos/hero/CROUSEAL-1_08.jpg',
    ],
  },
  {
    id: 'siddharth-shamya',
    title: 'Poetry in Architecture & Light',
    couple: 'Siddharth & Shamya',
    location: 'Lake Pichola Pavilion, Udaipur',
    coverImage: '/assets/photos/stories/siddharth-shamya/01_01.jpg',
    date: 'Spring Blossom',
    category: 'intimate',
    description: 'An intimate gathering of 120 closest souls against the backdrop of mirrored waters, marble arches, and jasmine-scented courtyards.',
    quote: '"Every photo looks like it belongs on the cover of an international Vogue wedding edition. Truly the masters of candid light."',
    images: [
      '/assets/photos/stories/siddharth-shamya/01_01.jpg',
      '/assets/photos/stories/siddharth-shamya/01_02.jpg',
      '/assets/photos/stories/siddharth-shamya/01_03.jpg',
      '/assets/photos/stories/siddharth-shamya/01_04.jpg',
      '/assets/photos/stories/siddharth-shamya/01_05.jpg',
      '/assets/photos/stories/siddharth-shamya/02_01.jpg',
    ],
  },
];

export const GALLERY_ARCHIVE: GalleryItem[] = [
  {
    id: 'g-1',
    url: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
    title: 'Grand Palace Vows',
    location: 'Umaid Bhawan, Rajasthan',
    category: 'royal',
    aspect: 'landscape',
  },
  {
    id: 'g-2',
    url: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',
    title: 'The Solitary Moment Before The Aisle',
    location: 'Jodhpur Heritage Suite',
    category: 'portraits',
    aspect: 'portrait',
  },
  {
    id: 'g-3',
    url: '/assets/photos/gallery/editorial-wedding-photography-rajasthan.jpg',
    title: 'Heritage Couture in Sepia & Gold',
    location: 'Samode Palace',
    category: 'portraits',
    aspect: 'portrait',
  },
  {
    id: 'g-4',
    url: '/assets/photos/gallery/cinematic-wedding-filmmaker-jaipur-palace.jpg',
    title: 'Illuminated Courtyard Procession',
    location: 'Jaipur Palace',
    category: 'royal',
    aspect: 'landscape',
  },
  {
    id: 'g-5',
    url: '/assets/photos/gallery/traditional-indian-wedding-photography-udaipur.jpg',
    title: 'Sacred Seven Steps (Saptapadi)',
    location: 'Udaipur Lakeside',
    category: 'rituals',
    aspect: 'landscape',
  },
  {
    id: 'g-6',
    url: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
    title: 'The Royal Baraat Revelry',
    location: 'Jodhpur Fort View',
    category: 'candids',
    aspect: 'landscape',
  },
  {
    id: 'g-7',
    url: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',
    title: 'Golden Sunset Silhouette',
    location: 'Thar Dunes, Jaisalmer',
    category: 'pre-wedding',
    aspect: 'landscape',
  },
  {
    id: 'g-8',
    url: '/assets/photos/gallery/candid-wedding-photographer-pali-rajasthan.jpg',
    title: 'Raw Emotion & Laughter',
    location: 'Pali Royal Camp',
    category: 'candids',
    aspect: 'landscape',
  },
  {
    id: 'g-9',
    url: '/assets/photos/hero/CROUSEAL-1_05.jpg',
    title: 'Bridal Grace & Handcrafted Zardozi',
    location: 'Grand Ballroom',
    category: 'portraits',
    aspect: 'landscape',
  },
  {
    id: 'g-10',
    url: '/assets/photos/hero/CROUSEAL-1_07.jpg',
    title: 'The Haldi Euphoria',
    location: 'Marigold Courtyard',
    category: 'rituals',
    aspect: 'landscape',
  },
  {
    id: 'g-11',
    url: '/assets/photos/hero/CROUSEAL-1_10.jpg',
    title: 'Gaze Across The Mandap',
    location: 'Vedic Sanctum',
    category: 'candids',
    aspect: 'landscape',
  },
  {
    id: 'g-12',
    url: '/assets/photos/hero/CROUSEAL-1_11.jpg',
    title: 'Under A Million Fairy Lights',
    location: 'Open Amphitheatre',
    category: 'royal',
    aspect: 'landscape',
  },
  {
    id: 'g-13',
    url: '/assets/photos/gallery/rfm-cinematic-storytelling-rajasthan-weddings.jpg',
    title: 'Cinematic Storytelling',
    location: 'Rajasthan',
    category: 'candids',
    aspect: 'landscape',
  },
  {
    id: 'g-14',
    url: '/assets/photos/gallery/royal-groom-portrait-jaipur-rfm.jpg',
    title: 'The Groom\'s Portrait',
    location: 'Jaipur Palace',
    category: 'portraits',
    aspect: 'portrait',
  },
  {
    id: 'g-15',
    url: '/assets/photos/gallery/timeless-wedding-rituals-photography-rajasthan.jpg',
    title: 'Timeless Rituals',
    location: 'Rajasthan Heritage',
    category: 'rituals',
    aspect: 'landscape',
  },
];

export const TESTIMONIALS = [
  {
    names: 'Mudit & Muskan',
    location: 'Palace of Heritage, Rajasthan',
    quote: 'Choosing The DRK Weddings was effortlessly the best investment we made for our wedding. When we watched our film, it didn’t feel like standard wedding documentation—it felt like a high-production romantic drama from Cannes. They captured every stolen glance and teardrop with pure poetic elegance.',
    year: '2024 Celebration',
  },
  {
    names: 'Rahul & Priyanka',
    location: 'Jaipur Grand Estate',
    quote: 'The team moved like ninjas throughout our 3-day wedding. Never once did they ask us to pose awkwardly or hold fake smiles. Everything felt so natural, and the result is a photographic masterpiece that our children will cherish decades from now.',
    year: '2024 Celebration',
  },
  {
    names: 'Kavya & Anirudh',
    location: 'Lakeside Palace, Udaipur',
    quote: 'House On The Clouds aesthetic was our dream benchmark, and The DRK Weddings exceeded every single expectation. Their sense of framing, natural lighting, and sound mixing is simply world-class. Words fail to convey how thankful we are.',
    year: '2023 Celebration',
  },
];

export const INSTAGRAM_HIGHLIGHTS = [
  { title: '2026 BTS', count: '48 Stories', tag: 'Behind The Scenes' },
  { title: 'Happy Clients', count: '120+ Reviews', tag: 'Client Love' },
  { title: "Venues", count: 'Palaces & Haveli', tag: 'Locations' },
  { title: 'BTS 🎬', count: 'Cinema Gear', tag: 'Filmmaking' },
  { title: 'Client Reviews', count: '5.0 ★ Rated', tag: 'Testimonials' },
];

export const STUDIO_DETAILS = {
  name: 'THE DRK WEDDINGS',
  tagline: 'DRK Production | Award-Winning Photography Studio',
  instagramHandle: '@thedrkweddings',
  instagramUrl: 'https://www.instagram.com/thedrkweddings/',
  youtubeHandle: '@thedrkstudio',
  youtubeUrl: 'https://www.youtube.com/@thedrkstudio?si=fET_T4Lh7kZIXH_h',
  location: 'Dipugarha, Hazaribagh, Jharkhand & Traveling Worldwide',
  phone: '+91 91223 34455', // Placeholder studio hotline
  whatsapp: '919122334455',
  email: 'thedrkweddings@gmail.com',
  specializations: [
    'Fine Art Wedding Cinema',
    'Destination Wedding Photography',
    'Editorial Couple Portraits',
    'Pre-Wedding Films',
    'Royal Heritage Celebrations',
    'Candid Photojournalism',
  ],
  stats: [
    { label: 'Love Stories Documented', value: '500+' },
    { label: 'Destination Palaces & Cities', value: '45+' },
    { label: 'Instagram Admirers', value: '9.2K+' },
    { label: 'Excellence & Industry Awards', value: '18+' },
  ]
};
