import type { MetadataRoute } from "next";

const BASE_URL = "https://soundstudio.uk";

// All public routes, mirroring the app/ directory structure.
const routes = [
  "",
  "/about",
  "/all-services",
  "/services",
  "/group-sound-baths",
  "/private-healing-sessions",
  "/tarot-readings",
  "/corporate-events",
  "/gallery",
  "/contact",
  "/gdpr",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}
