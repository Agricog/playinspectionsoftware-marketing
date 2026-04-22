/**
 * Site-wide constants and metadata.
 *
 * Single source of truth for SEO, structured data, and site identity.
 * Update here, propagates everywhere.
 */

export const SITE = {
  name: "Play Inspection Software",
  tagline:
    "RPII-aligned inspection software for independent playground and public space inspectors",
  description:
    "Professional voice-dictation inspection software for UK playground, MUGA, skate park, outdoor gym and public space inspectors. BS EN 1176 compliant. Built for independent RPII inspectors.",
  url: "https://playinspectionsoftware.co.uk",
  locale: "en_GB",
  language: "en-GB",
  twitterHandle: "", // add when the account is created
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
  // Placeholder path — replace with a real image URL when brand assets exist
  logo: `${SITE.url}/logo.png`,
} as const;

// Default Open Graph / Twitter card image.
// Placeholder path — will 404 until we add public/og-default.png (Step 5+).
// Not harmful; link-unfurlers just show no image in the meantime.
export const DEFAULT_OG_IMAGE = `${SITE.url}/og-default.png`;
