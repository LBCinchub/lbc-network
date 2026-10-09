import React from 'react';

// Owner-approved multicolour connected-node radial logo with luminous centre on
// black, derived at 256px from the exact approved PNG (1200x1200). No AI redraw,
// recolour, crop, or substitution.
const LOGO_256 =
  'https://base44.app/api/apps/699cff0a14d0376abefd6bc9/files/mp/public/699cff0a14d0376abefd6bc9/b8b23f0ef_lbc-network-logo-256.png?v=1';

const SIZES = { sm: 36, md: 44, lg: 64, xl: 96 };

export default function LbcLogo({ size = 'md', className = '', priority = false }) {
  const px = SIZES[size] || SIZES.md;
  // Intentional clear space around the mark, scaled with the optical size.
  const clearSpace = Math.max(2, Math.round(px * 0.07));
  return (
    <img
      src={LOGO_256}
      alt="LBC Network"
      width={px}
      height={px}
      decoding={priority ? 'sync' : 'async'}
      loading={priority ? 'eager' : 'lazy'}
      draggable="false"
      className={`object-contain shrink-0 rounded-lg bg-[#0a0a0a] ${className}`}
      style={{ width: px, height: px, padding: clearSpace }}
    />
  );
}