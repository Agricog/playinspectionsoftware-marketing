/**
 * Site-wide constants and metadata.
 *
 * Single source of truth for SEO, structured data, CTAs, and site identity.
 * Update here, propagates everywhere.
 */

export const SITE = {
  name: "Play Inspection Software",
  tagline: "Professional BS EN 1176 inspection reports — dictated by voice",
  description:
    "Professional playground inspection software for UK RPII inspectors and inspection companies. Dictate your inspection by voice, generate compliant BS EN 1176 PDF reports in minutes. Works offline. 30-day free trial.",
  url: "https://playinspectionsoftware.co.uk",
  locale: "en_GB",
  language: "en-GB",
  twitterHandle: "", // add when we create the account
} as const;

export const ORGANISATION = {
  legalName: "Autaimate",
  url: SITE.url,
  email: "mick@autaimate.com",
  address: {
    streetAddress: "45 Vicarage Road",
    postalCode: "PL24 2PH",
    addressCountry: "GB",
  },
  // Placeholder — replace with the real logo URL when we have one
  logo: `${SITE.url}/logo.png`,
} as const;

export const DEFAULT_OG_IMAGE = `${SITE.url}/og-default.png`;

/**
 * Call-to-action destinations.
 *
 * The product itself lives at inspectvoice.co.uk. This site (the marketing site)
 * funnels traffic there for trial sign-ups and demos.
 */
export const CTA = {
  // Primary CTA — start a free trial. Points to the InspectVoice sign-up flow.
  // If the product's sign-up route changes, update this single value.
  signUp: "https://inspectvoice.co.uk/sign-up",

  // Secondary CTA — book a demo.
  // Temporary: mailto fallback. Replace with a real Google Calendar Appointment Schedule
  // or Cal.com link when ready (one-line change here).
  bookDemo: "mailto:mick@autaimate.com?subject=Demo%20request%20-%20Play%20Inspection%20Software&body=Hi%20Mick%2C%0A%0AI%27d%20like%20to%20book%20a%2015-minute%20demo%20of%20InspectVoice.%0A%0AName%3A%0ACompany%3A%0APreferred%20day%2Ftime%3A%0A%0AThanks",

  // The product's homepage — used in the header logo link / footer
  product: "https://inspectvoice.co.uk",

  // Enterprise contact — for councils & large organisations
  enterpriseContact: "mailto:mick@autaimate.com?subject=Enterprise%20enquiry%20-%20Play%20Inspection%20Software",
} as const;

/**
 * Trial details — surfaced in copy. Keep in sync with the actual product offering.
 */
export const TRIAL = {
  durationDays: 30,
  requiresCard: false,
  pricingNote: "Monthly subscription. No annual lock-in.",
} as const;

/**
 * Pricing — surfaced on the marketing site to build trust and filter intent.
 *
 * Single source of truth. Update here when the price changes (e.g. £99 → £149)
 * and every reference across the site updates automatically.
 */
export const PRICING = {
  team: {
    name: "Team",
    price: 99,
    currency: "£",
    cadence: "month",
    audience: "For independent inspectors and inspection companies",
    inspectorLimit: 5,
  },
  enterprise: {
    name: "Enterprise",
    price: null, // bespoke
    audience: "For local authorities and large organisations",
  },
} as const;
