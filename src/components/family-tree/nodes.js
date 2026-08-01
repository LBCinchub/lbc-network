import {
  Brain, Globe, Store, Sparkles, Wrench, Heart, LifeBuoy, Radio, Wallet, Cpu, Car,
} from 'lucide-react';

// Single source of truth for the LBC ecosystem map.
// Each property appears exactly once. No client/partner data lives here.
// Status values are preserved from the prior component (LIVE / BUILDING).
export const nodes = [
  {
    id: 'lbc-network',
    parentId: null,
    level: 1,
    publicName: 'LBC Network',
    domain: 'lbc.network',
    href: 'https://lbc.network',
    role: 'Foundation',
    description:
      'Ecosystem foundation and governance — the parent root connecting every LBC property.',
    status: 'LIVE',
    icon: Brain,
  },
  {
    id: 'lbc-protocol',
    parentId: 'lbc-network',
    level: 2,
    publicName: 'LBC Protocol',
    domain: 'lbchub.io',
    href: 'https://lbchub.io',
    role: 'Protocol',
    description:
      'DeFi protocol, $LBC token, and liquidity layer powering the LBC ecosystem.',
    status: 'LIVE',
    icon: Globe,
  },
  // Level 3 — Active Platforms (verified LBC-owned public platforms)
  {
    id: 'lbc-hub',
    parentId: 'lbc-protocol',
    level: 3,
    publicName: 'LBC Hub',
    domain: 'lbc-hub.com',
    href: 'https://lbc-hub.com',
    role: 'Platform',
    description: 'Social marketplace and travel planner for the LBC community.',
    status: 'LIVE',
    icon: Store,
  },
  {
    id: 'lbc-ai',
    parentId: 'lbc-protocol',
    level: 3,
    publicName: 'LBC AI',
    domain: 'lbchub.site',
    href: 'https://lbchub.site',
    role: 'Platform',
    description: 'AI builder and intelligence platform for the LBC ecosystem.',
    status: 'LIVE',
    icon: Sparkles,
  },
  {
    id: 'lbc-auto',
    parentId: 'lbc-protocol',
    level: 3,
    publicName: 'LBC Auto',
    domain: 'lbchub.tech',
    href: 'https://lbchub.tech',
    role: 'Platform',
    description: 'Intelligence-driven floor software for automotive shops.',
    status: 'LIVE',
    icon: Wrench,
  },
  {
    id: 'lbc-charity',
    parentId: 'lbc-protocol',
    level: 3,
    publicName: 'LBC Charity',
    domain: 'lbchub.org',
    href: 'https://lbchub.org',
    role: 'Platform',
    description:
      'Zero fees, zero middleman — on-chain $LBC donations direct to recipient wallets.',
    status: 'LIVE',
    icon: Heart,
  },
  {
    id: 'lbc-support',
    parentId: 'lbc-protocol',
    level: 3,
    publicName: 'LBC Support',
    domain: 'lbchub.support',
    href: 'https://lbchub.support',
    role: 'Platform',
    description: 'Help, documentation, and customer support for the LBC ecosystem.',
    status: 'LIVE',
    icon: LifeBuoy,
  },
  // Level 4 — Emerging Products (LBC-owned, in progress)
  {
    id: 'lbc-live',
    parentId: 'lbc-protocol',
    level: 4,
    publicName: 'LBC Live',
    domain: 'lbchub.live',
    href: 'https://lbchub.live',
    role: 'Emerging',
    description: 'Creator economy, NFT tickets, and streaming.',
    status: 'BUILDING',
    icon: Radio,
  },
  {
    id: 'lbc-wallet',
    parentId: 'lbc-protocol',
    level: 4,
    publicName: 'LBC Wallet',
    domain: 'lumina-blockchain.com',
    href: 'https://lumina-blockchain.com',
    role: 'Emerging',
    description:
      'Solana-native payments, $LBC token, and frictionless finance layer.',
    status: 'BUILDING',
    icon: Wallet,
  },
  {
    id: 'lbcos',
    parentId: 'lbc-protocol',
    level: 4,
    publicName: 'LBCOS',
    domain: 'In development',
    href: '#lbcos',
    role: 'Emerging',
    description:
      'The core OS being engineered — once live, it unlocks LBC\u2019s hardware era.',
    status: 'BUILDING',
    icon: Cpu,
  },
  {
    id: 'driver-portal',
    parentId: 'lbc-protocol',
    level: 4,
    publicName: 'Driver Portal',
    domain: 'In development',
    href: '#driver',
    role: 'Emerging',
    description: 'Driver earnings and management platform.',
    status: 'BUILDING',
    icon: Car,
  },
];

export const getNode = (id) => nodes.find((n) => n.id === id);
export const getChildren = (id) => nodes.filter((n) => n.parentId === id);
export const byLevel = (level) => nodes.filter((n) => n.level === level);

export const getAncestors = (id) => {
  const out = [];
  let cur = getNode(id);
  while (cur && cur.parentId) {
    const p = getNode(cur.parentId);
    if (!p) break;
    out.push(p);
    cur = p;
  }
  return out;
};

export const getDescendants = (id) => {
  const out = [];
  const walk = (pid) => {
    getChildren(pid).forEach((c) => {
      out.push(c);
      walk(c.id);
    });
  };
  walk(id);
  return out;
};

export const LEVELS = [
  { level: 1, label: 'Foundation' },
  { level: 2, label: 'Protocol' },
  { level: 3, label: 'Active Platforms' },
  { level: 4, label: 'Emerging Products' },
];