import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import { ContactFormSection } from "@/components/contact/ContactSections";
import rawData from "@/data/hair-atelier.json";
import type { HairAtelierTemplateData } from "@/types/hair-atelier.types";

const templateData: HairAtelierTemplateData = rawData;
const sectionData = templateData.categories.HairAtelier.sections;
const contactPage = sectionData.ContactPage.variants.HairAtelierContactPage1;

export default function Home() {
  return (
    <main className="flex-1 bg-black">
      <div id="home" className="scroll-mt-24">
        <HeroSection data={sectionData.HeroBanner.variants.HairAtelierHeroBanner1} />
      </div>

      <div id="about" className="scroll-mt-24">
        <AboutSection data={sectionData.AboutUs.variants.HairAtelierAboutUs1} />
      </div>

      <div id="why-choose-us" className="scroll-mt-24">
        <WhyChooseSection data={sectionData.WhyChooseUs.variants.HairAtelierWhyChooseUs1} />
      </div>

      <div id="stats" className="scroll-mt-24">
        <StatsSection data={sectionData.Stats.variants.HairAtelierStats1} />
      </div>

      <div id="services" className="scroll-mt-24">
        <ServicesSection data={sectionData.Services.variants.HairAtelierServices1} />
      </div>

      <div id="gallery" className="scroll-mt-24">
        <GallerySection data={sectionData.Gallery.variants.HairAtelierGallery1} />
      </div>

      <div id="testimonials" className="scroll-mt-24">
        <TestimonialsSection data={sectionData.Testimonials.variants.HairAtelierTestimonials1} />
      </div>

      <div id="contact" className="scroll-mt-24">
        <ContactFormSection data={contactPage.form} />
      </div>
    </main>
  );
}
