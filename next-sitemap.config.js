/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://infravibetech.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true, // ✅ allow index sitemap
  sitemapSize: 5000,
  outDir: "public",
  changefreq: "weekly",
  priority: 0.8,
  autoLastmod: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;
