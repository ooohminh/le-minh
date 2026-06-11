import MacOSWindow from "@/components/macos-window";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import CaseStudiesSection from "@/components/case-studies-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <MacOSWindow>
      <div className="space-y-0">
        <HeroSection />
        <div className="section-sep" />
        <AboutSection />
        <div className="section-sep" />
        <ServicesSection />
        <div className="section-sep" />
        <CaseStudiesSection />
        <div className="section-sep" />
        <ContactSection />
      </div>
    </MacOSWindow>
  );
}