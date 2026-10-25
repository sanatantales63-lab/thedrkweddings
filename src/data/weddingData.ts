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

export const PACKAGES_DATA = [
  {
    id: 'pkg-prewedding',
    tag: 'Collection 01',
    title: 'Pre-Wedding & Romance',
    price: 'Bespoke Quote',
    duration: '1 Day Shoot',
    features: [
      'Full Day Location Shoot (Sunrise to Sunset)',
      '50+ High-Resolution Specially Retouched Pictures',
      '1:30 - 2:00 min 4K Cinematic Teaser Film',
      'One Premium Editorial Couple Reel for Instagram',
      'Drone Aerial Perspectives & Scenic Framing',
      'Private High-Speed Online Gallery Delivery',
    ],
    image: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',
    color: 'bg-stone-900',
    dark: true,
    featured: true,
    starred: true,
  },
  {
    id: 'pkg-standard',
    tag: 'Collection 02 • Most Loved',
    title: 'DRK Standard Collection',
    price: 'Bespoke Quote',
    duration: '3 Days Shoot',
    features: [
      'Coverage for Mehendi, Sangeet, Wedding & Reception',
      'Unlimited High-Resolution Pictures Captured as per Events',
      '70 Fine-Art Masterpieces Specially Hand-Retouched',
      '30-35 mins Full Cinematic Heirloom Documentary Film',
      'One Cinematic 4K Teaser (2-3 mins) & 2 Social Reels',
      'Two 20 Sheets (40 Pages) Handcrafted Canvera Albums',
      'All Raw + Color-Graded Files Delivered via Private Cloud',
    ],
    image: '/assets/photos/stories/mudit-muskan/01_01.jpg',
    color: 'bg-white',
    dark: false,
    featured: true,
    starred: true,
  },
  {
    id: 'pkg-classic',
    tag: 'Collection 03 • Royal Luxury',
    title: 'DRK Royal Classic',
    price: 'Bespoke Quote',
    duration: '4-5 Days Shoot',
    features: [
      'Complete Multi-Day Royal Destination Wedding Coverage',
      'Dual 4K Drone Operators (Wedding, Haldi & Reception)',
      '80 Specially Hand-Retouched Fine-Art Gallery Prints',
      '35-40 mins Grand Cinema Feature Film with Dolby Audio',
      'One Cinematic Trailer (2-3 mins) + 3 High-Energy Reels',
      'Two 20 Sheets (40 Pages) Handcrafted Leather Canvera Albums',
      'Custom Hard Drive with All Raw 4K Footage & Master Edits',
    ],
    image: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
    color: 'bg-[#FBFBFA]',
    dark: false,
    featured: false,
    starred: true,
  },
];

export const FAQS_DATA = [
  {
    id: 'faq-1',
    question: 'Are we willing to travel for your wedding?',
    answer: 'Absolutely. While rooted in Hazaribagh & Jharkhand, our cinema and photography team travels across the globe—from royal heritage palaces in Rajasthan (Jaipur, Udaipur, Jodhpur) to beach destinations in Goa, Kerala, and international venues. We document love wherever your journey unfolds.',
  },
  {
    id: 'faq-2',
    question: 'What are the main deliverables you provide?',
    answer: 'Photos: You receive all color-corrected high-resolution images in a private online cloud gallery, along with 70–80 hand-retouched fine-art portraits and two bespoke 40-page Canvera heirloom albums. Videos: A 2–3 minute cinematic trailer, 30–45 second Instagram reels, and a 30–40 minute full documentary wedding film with master studio sound design.',
  },
  {
    id: 'faq-3',
    question: 'How many types of packages do you offer?',
    answer: 'We offer flexible collections tailored to your celebration scale: Pre-Wedding, Standard (3-Day), Classic Royal (4-5 Day), and Bespoke Destination Collections. Every collection can be adapted to your unique rituals and venue requirements.',
  },
  {
    id: 'faq-4',
    question: 'When can we expect the final delivery?',
    answer: 'Cinematic storytelling and fine-art color grading are deeply creative, meticulous processes. We deliver a high-energy teaser and social highlight reels within 2 to 3 weeks of the wedding. The complete documentary heirloom film and handcrafted physical albums are perfected and delivered within 8 to 12 weeks.',
  },
  {
    id: 'faq-5',
    question: 'How far in advance should we reserve our dates?',
    answer: 'Because we only accept a limited number of weddings each season to preserve our uncompromising craftsmanship and personal dedication, prime wedding dates frequently book 6 to 10 months in advance. We recommend contacting us as soon as your wedding dates and venue are set.',
  },
];

export const LOOKBOOK_DATA = [
  {
    id: 'look-1',
    category: 'The Vows & Mandap',
    title: 'Royal Heritage Weddings',
    tag: 'Sacred Rituals',
    image: '/assets/photos/stories/mudit-muskan/01_01.jpg',
    subtitle: 'Crimson silks, Vedic fire, and tears of joy under palace arches.',
  },
  {
    id: 'look-2',
    category: 'Fine Art Chemistry',
    title: 'Pre-Wedding Escapes',
    tag: 'Raw Romance',
    image: '/assets/photos/gallery/luxury-wedding-moments-jaisalmer-desert.jpg',
    subtitle: 'Golden hour silhouettes and candid smiles across sweeping landscapes.',
  },
  {
    id: 'look-3',
    category: 'Cinematic Glory',
    title: 'The Royal Baraat & Sangeet',
    tag: 'Electric Euphoria',
    image: '/assets/photos/gallery/rfm-wedding-photography-jodhpur-royal-baraat.jpg',
    subtitle: 'Thumping dhol beats, dancing barefoot, and unforgettable celebration energy.',
  },
  {
    id: 'look-4',
    category: 'Bridal Elegance',
    title: 'Handcrafted Heirlooms',
    tag: 'Editorial Portraits',
    image: '/assets/photos/gallery/indian-bride-candid-shots-jodhpur.jpeg',
    subtitle: 'Quiet solitude, heirloom polki jewellery, and the serene gaze before the aisle.',
  },
  {
    id: 'look-5',
    category: 'Architectural Poetry',
    title: 'Destination Grandeur',
    tag: 'Timeless Palaces',
    image: '/assets/photos/gallery/best-wedding-photographer-rajasthan-umaid-bhawan.jpg',
    subtitle: 'Monumental architecture framing unscripted, deeply personal moments.',
  },
];

export const STUDIO_DETAILS = {
  name: 'THE DRK WEDDINGS',
  tagline: 'DRK Production | Award-Winning Photography & Cinema Studio',
  instagramHandle: '@thedrkweddings',
  instagramUrl: 'https://www.instagram.com/thedrkweddings/',
  youtubeHandle: '@thedrkstudio',
  youtubeUrl: 'https://www.youtube.com/@thedrkstudio?si=fET_T4Lh7kZIXH_h',
  location: 'Dipugarha, Hazaribagh, Jharkhand & Traveling Worldwide',
  phone: '+91 99345 04101',
  whatsapp: '919934504101',
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
