import {
  Heart, Store, Sparkles, Wrench, Wallet, Car, Cpu, Plane, Smartphone, Coins, Globe, LifeBuoy,
  BarChart3, Megaphone, BookOpen, Camera, PenLine, Monitor,
} from 'lucide-react';

// Canonical verified LBC-owned product data. Single source of truth for cards,
// counts, and live/now sections. Clients/partners live in `partners` below and
// must NEVER be treated as LBC-owned products.
export const PORTAL = 'https://LBC-HUB.COM';
export const MINT_ADDRESS = '2UoettzUUevYNNMhLYACqxjbvkpS4dnCZhbV6xFkuKkT';
export const SOLSCAN_URL = `https://solscan.io/token/${MINT_ADDRESS}`;
export const GITHUB_URL = 'https://github.com/LBCinchub';

export const CONTACT = {
  email: 'Tarek-Samara@LBC-HUB.COM',
  phone: '+1 613-314-1994',
  phoneHref: 'tel:+16133141994',
  portal: 'https://LBC-HUB.COM',
};

export const SOCIAL = {
  x: 'https://x.com/LBC_FOUNDER',
  telegram: 'https://t.me/LBCHUBofficial',
  github: 'https://github.com/LBCinchub',
  portal: 'https://LBC-HUB.COM',
};

export const products = [
  { name: 'LBC Hub', domain: 'LBC-HUB.COM', href: 'https://LBC-HUB.COM', role: 'Platform', status: 'LIVE', category: 'Community & Commerce', icon: Store, description: 'Social marketplace and travel planner for the LBC community.' },
  { name: 'LBC AI', domain: 'lbchub.site', href: 'https://lbchub.site', role: 'Platform', status: 'LIVE', category: 'AI', icon: Sparkles, description: 'AI builder and research workspace for the LBC ecosystem.' },
  { name: 'LBC Auto', domain: 'lbchub.tech', href: 'https://lbchub.tech', role: 'Platform', status: 'LIVE', category: 'Operations', icon: Wrench, description: 'Shop management platform — $2,999 setup (incl. four training days); plans from $199/month.' },
  { name: 'LBC Charity', domain: 'lbchub.org', href: 'https://lbchub.org', role: 'Platform', status: 'LIVE', category: 'Payments', icon: Heart, description: 'Direct wallet donations with transparent on-chain records.' },
  { name: 'LBC Support', domain: 'lbchub.support', href: 'https://lbchub.support', role: 'Platform', status: 'LIVE', category: 'Support', icon: LifeBuoy, description: 'Help, documentation, and customer support across the LBC ecosystem.' },
  { name: '$LBC Token', domain: 'Solana', href: '#protocol', role: 'Asset', status: 'LIVE', category: 'On-chain', icon: Coins, description: 'Native utility token on Solana for the LBC ecosystem.' },
  { name: 'LBC Wallet', domain: 'lumina-blockchain.com', href: 'https://lumina-blockchain.com', role: 'Emerging', status: 'BUILDING', category: 'Payments', icon: Wallet, description: 'Solana-native payments and $LBC token layer — in development.' },
  { name: 'LBC Live', domain: 'lbchub.live', href: 'https://lbchub.live', role: 'Emerging', status: 'BUILDING', category: 'Creator', icon: Globe, description: 'Creator economy and streaming — in development.' },
  { name: 'LBCOS', domain: 'In development', href: '#ecosystem', role: 'Emerging', status: 'BUILDING', category: 'OS', icon: Cpu, description: 'Core operating system being engineered — in development.' },
  { name: 'Driver Portal', domain: 'In development', href: '#ecosystem', role: 'Emerging', status: 'BUILDING', category: 'Operations', icon: Car, description: 'Driver earnings and management platform — in development.' },
  { name: 'LBC Travel', domain: 'Planned', href: '#ecosystem', role: 'Planned', status: 'NEXT', category: 'Travel', icon: Plane, description: 'Full-service travel booking — planned.' },
  { name: 'LBC Hardware', domain: 'Planned', href: '#ecosystem', role: 'Planned', status: 'NEXT', category: 'Hardware', icon: Smartphone, description: 'LBC-native devices — planned after LBCOS.' },
];

export const liveProducts = products.filter((p) => p.status === 'LIVE' && p.role !== 'Asset');
export const buildingProducts = products.filter((p) => p.status === 'BUILDING');
export const nextProducts = products.filter((p) => p.status === 'NEXT');
export const liveProductCount = liveProducts.length;

// Partners / clients — appear ONLY here, never in Family Tree or product counts.
// Colosseum intentionally removed per owner instruction.
export const partners = [
  { name: 'Haj Rims & Tires', tag: 'Active Profile', description: 'Automotive rims & tires — part of the LBC Network active roster.', href: null, color: 'blue' },
  { name: 'Belal Auto Services', tag: 'Active Client', description: 'Automotive service client of LBC Network.', href: null, color: 'green' },
  { name: 'AKA Auto Group', tag: 'Active Client', description: 'Automotive group client of LBC Network.', href: null, color: 'violet' },
  { name: 'Terry Fox Auto', tag: 'Active Client', description: 'Automotive service client of LBC Network.', href: null, color: 'violet' },
  { name: 'Al Radi Home', tag: 'Active Client', description: 'Luxury furniture and home lifestyle client of LBC Network.', href: 'https://alradihome.ca', color: 'blue' },
];

export const activeClientCount = partners.filter((p) => p.tag === 'Active Client').length;

export const services = [
  { icon: Store, title: 'Marketplace & Storefronts', description: 'Commerce, listings, and storefront capabilities delivered through LBC Hub.' },
  { icon: Wrench, title: 'Operations Software', description: 'Shop and fleet management tooling, including LBC Auto for automotive businesses.' },
  { icon: Sparkles, title: 'AI Tooling', description: 'AI-assisted building and research workflows via the LBC AI workspace.' },
  { icon: Globe, title: 'Web & Product Builds', description: 'Custom websites and product builds for clients across industries.' },
  { icon: BarChart3, title: 'Business Consultancy', description: 'Strategic guidance to scale operations and unlock new revenue.' },
  { icon: Megaphone, title: 'Marketing & Growth', description: 'Data-informed campaigns and content to grow brands across channels.' },
  { icon: BookOpen, title: 'Education & Training', description: 'Workshops and mentorship to upskill teams on LBC tooling.' },
  { icon: Camera, title: 'Creative Production', description: 'Photo, video, and design production for brand and product work.' },
  { icon: PenLine, title: 'Freelance Talent', description: 'Curated freelance skills available through LBC Hub.' },
  { icon: Monitor, title: 'Tech Support', description: 'Hands-on help with software, hardware, and IT infrastructure.' },
  { icon: LifeBuoy, title: 'Support & Documentation', description: 'Help, docs, and customer support across LBC products.' },
  { icon: Sparkles, title: 'Compliance Navigation', description: 'Guidance connecting teams with trusted advisors for contracts and compliance — not direct regulated legal services.' },
];