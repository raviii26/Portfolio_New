import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/animations/Preloader";
import VisitorTracker from "@/components/shared/VisitorTracker";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ravi-sharma-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ravi Sharma | Full-Stack Software Developer",
    template: "%s | Ravi Sharma",
  },
  description:
    "Official portfolio of Ravi Sharma — Full-Stack Developer specializing in React, Next.js, Node.js, modern web architectures, and cloud deployments.",
  keywords: [
    "Ravi Sharma",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Frontend Engineer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Tailwind CSS",
    "Software Engineer Portfolio",
    "Node.js Developer",
  ],
  authors: [{ name: "Ravi Sharma", url: "https://github.com/raviii26" }],
  creator: "Ravi Sharma",
  publisher: "Ravi Sharma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ravi Sharma Portfolio",
    title: "Ravi Sharma | Full-Stack Software Developer",
    description:
      "Explore software projects, interactive showcases, technical skills, and engineering milestones of Ravi Sharma.",
    images: [
      {
        url: "/assets/profile-img.png",
        width: 800,
        height: 800,
        alt: "Ravi Sharma - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Sharma | Full-Stack Software Developer",
    description:
      "Explore software projects, interactive showcases, technical skills, and engineering milestones of Ravi Sharma.",
    creator: "@Ravii2610",
    images: ["/assets/profile-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/dev-icon.png?v=male2", type: "image/png" },
      { url: "/icon.png?v=male2", type: "image/png" },
    ],
    shortcut: "/assets/dev-icon.png?v=male2",
    apple: "/assets/dev-icon.png?v=male2",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ravi Sharma",
      jobTitle: "Full-Stack Software Developer",
      url: siteUrl,
      sameAs: [
        "https://github.com/raviii26",
        "https://linkedin.com/in/ravisharma2610",
        "https://x.com/Ravii2610",
      ],
      description:
        "Full-Stack Software Developer specializing in Next.js, React, Node.js, and modern high-performance web applications.",
      knowsAbout: [
        "Next.js",
        "React",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "MySQL",
        "Full-Stack Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ravi Sharma Portfolio",
      description: "Personal portfolio website of Ravi Sharma",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/dev-icon.png?v=male2" type="image/png" />
        <link rel="shortcut icon" href="/assets/dev-icon.png?v=male2" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/dev-icon.png?v=male2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${ovo.variable} font-Outfit leading-8 dark:bg-black dark:text-white transition-colors duration-500 overflow-x-hidden`}>
        <Preloader />
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
