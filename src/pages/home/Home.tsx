import Header from "@/components/home/Header";
import HowToUse from "@/components/home/howToUse/HowToUse";
import MeetTheExperts from "@/components/home/meetTheExperts/MeetTheExperts";
import PriceSection from "@/components/home/price/PriceSection";
import WhyEliteSyncSection from "@/components/home/whyEliteSync/WhyEliteSyncSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import CTASection from "@/components/home/cta/CTASection";

export const Home = () => {
  return (
    <>
      <Header />
      <HowToUse />
      <MeetTheExperts />
      <PriceSection />
      <WhyEliteSyncSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};
