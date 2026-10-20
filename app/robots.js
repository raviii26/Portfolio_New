export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ravi-sharma-portfolio.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/admin/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
