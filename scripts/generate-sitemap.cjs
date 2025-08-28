const fs = require("fs");
const path = require("path");

// List your site routes
const routes = ["/", "/about", "/services", "/dashboard", "/contact"];
const domain = "https://www.kreativeweb3d.com";

// Build XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${domain}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>${route === "/" ? "1.0" : "0.8"}</priority>
    </url>`).join("")}
</urlset>`;

// Path to public folder (one level up from scripts)
const publicDir = path.join(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
const filePath = path.join(publicDir, "sitemap.xml");
fs.writeFileSync(filePath, sitemap);

console.log("✅ Sitemap generated at /public/sitemap.xml");