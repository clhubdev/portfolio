import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const mainFont = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "HUBERT Clément - Développeur web fullstack",
  description: "Portfolio HUBERT Clément, développeur web fullstack",
  keywords: ["développeur web", "fullstack", "React", "Next.js", "portfolio", "JavaScript", "Docker", "Symfony", "PHP"],
  authors: [{ name: "Clément Hubert", url: "https://clement-hubert.vercel.app" }],
  creator: "Clément Hubert",
  publisher: "Clément Hubert",
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.clement-hubert.fr'),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${mainFont.className}`} >
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
