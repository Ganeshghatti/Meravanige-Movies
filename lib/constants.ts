import {
  Film,
  ServiceItem,
  Voice,
  Stat,
  ProcessStep,
  Topic,
  Quote,
  CaseStudy,
  SocialLink,
} from "./types";

export const FILMS: Film[] = [
  {
    id: 1,
    title: "Avane Srimannarayana",
    year: "2019",
    role: "Digital Strategy",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmFlOWIwMzYtMTJkYy00NjhkLWEwOTEtODY0ZjVlMGFmMDg5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 2,
    title: "Bell Bottom",
    year: "2019",
    role: "Marketing Lead",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc4ODA2MjQyMF5BMl5BanBnXkFtZTgwMTY3MDI1NzM@._V1_.jpg",
  },
  {
    id: 3,
    title: "Roberrt",
    year: "2021",
    role: "Social Media",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/fe8b0e8e67d03a7f95cdd7d0034e0d2fef2b5599b42b8027d4569d4e4caf2c04.jpg",
  },
  {
    id: 4,
    title: "Garuda Gamana",
    year: "2021",
    role: "PR & Buzz",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk3ODYzYzgtNzA5NC00NzNmLWI2Y2EtNmY0MjcxZTI3ODNkXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 5,
    title: "Sarkari Hi. Pra. Shaale",
    year: "2018",
    role: "Campaign Design",
    image:
      "https://xstreamcp-assets-msp.streamready.in/assets/SUNNXT/MOVIE/661fb682c7460f6c5c86c81b/images/1000x1500_SarkariHiriyaPrathamikaShaleKasaragodu_80140_c0d430f6-ff52-4de7-81ac-4ddb18eaa6ed.jpg",
  },
  {
    id: 6,
    title: "777 Charlie",
    year: "2022",
    role: "Pan-India Promo",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/37690c1b70566b17065f54427b3209b18ee4b3780f530a7333ef2b73ec1d1917.jpg",
  },
  {
    id: 7,
    title: "Badava Rascal",
    year: "2021",
    role: "Viral Marketing",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/37faf2344e02f0009827dd072e7c26b6ababd03547f47b3dd6067625540e5481.jpg",
  },
  {
    id: 8,
    title: "Love Mocktail 2",
    year: "2022",
    role: "Creative Lead",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTAxZmRjZmUtNmE3Ni00MjZjLWJmNTYtNTczYWM1OTQ4ZTViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 9,
    title: "Ronny",
    year: "2023",
    role: "Launch Strategy",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjYxZDQtZmZhOC00YTJhLWI0MWYtZjg1YzA0NjI1NzkzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 10,
    title: "Toby",
    year: "2023",
    role: "Visual Identity",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjcyYWMwNTUtNTM1Yy00NWNiLTg2NDUtM2Q0MmNjMGYzNjMzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 11,
    title: "Ibbani Tabbida Ileyali",
    year: "2024",
    role: "Digital PR",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDkzNjRiN2ItMzkzMi00M2U5LWI5ZTUtOTM2YTRmMTRiZGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 12,
    title: "The Rise of Ashoka",
    year: "2024",
    role: "Teaser Campaign",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTYxYzIwZWItYWY4Zi00ZTA1LWI0ZDQtNGZlZTg2NDA4NWY0XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 13,
    title: "The Devil",
    year: "2024",
    role: "Full Stack Marketing",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTdiNDdiNzYtNDg2NS00ZGU2LWJkYTEtNWM5NDI0MmE2OTZmXkEyXkFqcGc@._V1_.jpg",
  },
];

export const MERAVANIGE_SERVICES: ServiceItem[] = [
  {
    title: "Film & Trailer Launches",
    description:
      "Orchestrating high-impact launch events and digital countdowns that capture state-wide attention.",
  },
  {
    title: "Influencer & Meme Marketing",
    description:
      "Tapping into the pulse of social media with authentic, humor-driven content that goes viral organically.",
  },
  {
    title: "Celebrity Branding",
    description:
      "Managing public personas and bridging the gap between stars and their fanbases through strategic content.",
  },
  {
    title: "Digital PR & Buzz",
    description:
      "Structuring narratives in the press to ensure your project stays in the headlines for the right reasons.",
  },
  {
    title: "Creative Storytelling",
    description:
      "We don't just sell tickets; we tell stories that audience members want to be a part of.",
  },
];

export const ZEEK_CREATIVES_SERVICES: ServiceItem[] = [
  {
    title: "Campaign design & digital creatives",
    description:
      "Data-backed roadmaps for brand launches that ensure maximum visibility.",
  },
  {
    title: "Influencer-led brand promotions",
    description:
      "Logo, typography, and color systems that define a brand's soul.",
  },
  {
    title: "Reels, graphics & digital storytelling",
    description:
      "High-energy visuals for teasers, reels, and digital billboards.",
  },
  {
    title: "Social media Identity & branding",
    description:
      "Daily curation of content that engages communities, not just followers.",
  },
  {
    title: "Film-focused marketing visuals",
    description:
      "Designing the hero imagery that defines a film or product's market presence.",
  },
];

export const ZEEK_CREATIVES_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Dissect",
    description:
      "We break down the brief to understand the core emotion and the target subculture.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We build visual languages that are distinct, bold, and impossible to ignore.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We execute across platforms, optimizing assets for mobile, web, and print.",
  },
];

export const ZEEK_CREATIVES_CASES: CaseStudy[] = [
  {
    title: "The Viral Countdown",
    category: "Movie Marketing",
    metric: "15M+ Views",
    description: "Orchestrating a digital countdown that stopped the state.",
  },
  {
    title: "Star Reborn",
    category: "Personal Branding",
    metric: "3x Engagement",
    description: "Repositioning a veteran actor for a Gen-Z audience.",
  },
  {
    title: "Meme Culture Wave",
    category: "Organic Growth",
    metric: "50k Shares",
    description: "Leveraging humor to drive serious box office numbers.",
  },
];

export const ZEEK_REALITIES_OFFERINGS: ServiceItem[] = [
  {
    title: "Project branding & identity design",
    description:
      "Crafting distinctive brand identities that position your real estate project as a landmark, not just a location.",
  },
  {
    title: "Lifestyle-driven campaign creatives",
    description:
      "Designing aspirational campaigns that showcase not just properties, but the life your buyers dream of living.",
  },
  {
    title: "Social media promotions & digital outreach",
    description:
      "Strategic digital campaigns that engage, inspire, and convert your target audience across platforms.",
  },
  {
    title: "Visual storytelling for real estate marketing",
    description:
      "Transforming floor plans and elevations into compelling visual narratives that make buyers imagine home.",
  },
  {
    title: "Turning spaces into stories that sell",
    description:
      "Every property has a story waiting to be told. We craft narratives that resonate with aspirations, turning cold concrete into warm possibilities.",
  },
];

export const ZEEK_REALITIES_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "The Vision",
    description:
      "Understanding the architect's intent and the builder's legacy.",
  },
  {
    number: "02",
    title: "The Narrative",
    description:
      "Crafting a lifestyle story—who lives here, and how does it feel?",
  },
  {
    number: "03",
    title: "The Experience",
    description:
      "Delivering assets that bridge the gap between blueprint and reality.",
  },
];

export const ZEEK_REALITIES_CASES: CaseStudy[] = [
  {
    title: "Urban Oasis",
    category: "Luxury Branding",
    metric: "100% Sold",
    description: "Crafting a narrative of serenity in the heart of the city.",
  },
  {
    title: "The Vertical Village",
    category: "Community Living",
    metric: "Design Award",
    description:
      "Defining the future of co-living spaces through visual storytelling.",
  },
  {
    title: "Heritage Homes",
    category: "Restoration",
    metric: "Record Footfall",
    description:
      "Blending history with modern luxury in a seamless brand identity.",
  },
];

export const KADAKK_VOICES: Voice[] = [
  {
    name: "IAS Officer Rajeshwari",
    role: "Bureaucracy & Governance",
    url: "https://www.youtube.com/watch?v=GwLW7ZA4TlI",
  },
  {
    name: "Reena Philips",
    role: "Wildlife Conservation",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Ramya Sulekha",
    role: "Mysticism & Tarot",
    url: "https://www.youtube.com/watch?v=ompVpgwIvho",
  },
  {
    name: "Shashank",
    role: "Filmmaking",
    url: "https://www.youtube.com/watch?v=JpCNQugfqic",
  },
  {
    name: "Kishore",
    role: "Activism & Agriculture",
    url: "https://www.youtube.com/watch?v=Kh8HoQdDm3g",
  },
  {
    name: "Dr. Suresh Kammar",
    role: "Human Rights",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const KADAKK_STATS: Stat[] = [
  { label: "Total Views", value: "196K+" },
  { label: "Monthly Reach", value: "83K+" },
  { label: "Youth Audience", value: "65%" },
];

export const KADAKK_TOPICS: Topic[] = [
  { id: 1, name: "Cinema" },
  { id: 2, name: "Politics" },
  { id: 3, name: "Mental Health" },
  { id: 4, name: "Environment" },
  { id: 5, name: "Spirituality" },
  { id: 6, name: "Technology" },
  { id: 7, name: "Culture" },
  { id: 8, name: "Social Justice" },
];

export const SPEAKS_QUOTES: Quote[] = [
  {
    text: "Cinema is the only language that doesn't need translation. It is felt before it is understood.",
    author: "Shashank",
    role: "Filmmaker",
  },
  {
    text: "True governance isn't about ruling; it's about reaching the last person in the line.",
    author: "IAS Officer Rajeshwari",
    role: "Bureaucrat",
  },
  {
    text: "We don't inherit the earth from our ancestors; we borrow it from our children.",
    author: "Reena Philips",
    role: "Conservationist",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://www.instagram.com/meravanigemovies/?hl=en",
    ariaLabel: "Visit our Instagram",
  },
  {
    name: "X",
    icon: "Twitter",
    url: "https://x.com/MeravanigeMovie",
    ariaLabel: "Visit our Twitter",
  },
  {
    name: "Youtube",
    icon: "Youtube",
    url: "https://www.youtube.com/@KadakkTalks",
    ariaLabel: "Visit our Youtube",
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:meravanigeenterprises@gmail.com",
    ariaLabel: "Send us an email",
  },
];
