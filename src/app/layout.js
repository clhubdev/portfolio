import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

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
      <head>
        {/* START Iubenda Cookie Solution */}
        <Script id="iubenda-init" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "siteId": 4224730,
              "cookiePolicyId": 66818419,
              "lang": "fr",
              "storage": {"useSiteId": true}
            };
          `}
        </Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/4224730.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
          strategy="beforeInteractive"
        />
        {/* END Iubenda Cookie Solution */}
        {/* START Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-P9SRWNLR25`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9SRWNLR25');
          `}
        </Script>
        {/* END Google Analytics */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
