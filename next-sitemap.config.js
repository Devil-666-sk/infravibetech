/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://infravibetech.com", // ✅ Live domain
  generateRobotsTxt: true,              // Robots.txt auto-generate karega
  generateIndexSitemap: false,          // ❌ Single sitemap.xml (no sitemap-0.xml)
  sitemapSize: 5000,
  outDir: "public",                     // Sitemap generate hoga yahi
  changefreq: "weekly",
  priority: 0.8,

  // ✅ Extra options (important)
  exclude: ["/404", "/_error", "/server-sitemap.xml"], // Unwanted pages exclude
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://infravibetech.com/sitemap.xml", // Explicit sitemap reference
    ],
  },
};

export default config;
