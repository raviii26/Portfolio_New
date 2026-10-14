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

export const metadata = {
  title: "Ravi Sharma | Portfolio",
  description:
    "Ravi Sharma is a passionate web developer with expertise in creating dynamic and user-friendly applications.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Outfit leading-8 dark:bg-black dark:text-white transition-colors duration-500 overflow-x-hidden">
        <Preloader />
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
