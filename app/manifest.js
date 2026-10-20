export default function manifest() {
  return {
    name: "Ravi Sharma | Full-Stack Software Developer",
    short_name: "Ravi Portfolio",
    description: "Official portfolio of Ravi Sharma — Full-Stack Developer specializing in Next.js, React, Node.js, and modern web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/assets/dev-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
    ],
  };
}
