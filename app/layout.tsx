import type { Metadata } from "next";
import Footer from "@/components/common/Footer";
import { MotionProvider } from "@/components/ui/motion";
import Navbar from "@/components/common/Navbar";
import rawData from "@/data/hair-atelier.json";
import type { HairAtelierTemplateData } from "@/types/hair-atelier.types";
import "./globals.css";

const templateData: HairAtelierTemplateData = rawData;
const sectionData = templateData.categories.HairAtelier.sections;

export const metadata: Metadata = {
  title: "Velour Hair Atelier | Haute Coiffure & Bespoke Grooming",
  description:
    "Manhattan's premier luxury hair atelier and Japanese head-spa sanctuary. Architectural haircuts, dimensional French balayage, and artisan gentleman's grooming.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <Navbar data={sectionData.Header.variants.HairAtelierHeader1} />
          {children}
          <Footer data={sectionData.Footer.variants.HairAtelierFooter1} />
        </MotionProvider>
      </body>
    </html>
  );
}
