import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HUBERT Clément - développeur web",
  description: "Portfolio HUBERT Clément, développeur web fullstack",
  keywords: ["développeur web", "fullstack", "React", "Next.js", "portfolio", "JavaScript", "Docker", "Symfony", "PHP"],
  authors: [{ name: "Clément Hubert", url: "https://clement-hubert.vercel.app" }],
  creator: "Clément Hubert",
  publisher: "Clément Hubert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
