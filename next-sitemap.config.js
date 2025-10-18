/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://infravibetech.com", // 🔹 apni live domain
  generateRobotsTxt: true, // Robots.txt auto generate karega
  generateIndexSitemap: false, // ❌ index sitemap (sitemap-0.xml) disable
  sitemapSize: 5000,
  outDir: "public", // sitemap yahi generate karega
  changefreq: "weekly",
  priority: 0.8,
};

export default config;
