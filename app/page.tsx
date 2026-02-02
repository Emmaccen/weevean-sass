import { AIShowcase } from "@/components/landing/ai-showcase";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { CTASection } from "@/components/landing/cta-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { SocialProof } from "@/components/landing/social-proof";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <AIShowcase />
      <ComparisonSection />
      <HowItWorks />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
