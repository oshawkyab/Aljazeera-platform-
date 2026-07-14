import Footer from "@/components/shared/Footer";
import AboutUsSection from "@/components/visitors/AboutUsSection";
import HeroSection from "@/components/visitors/HeroSection";
import MajorSection from "@/components/visitors/MajorSection";
import NewsSection from "@/components/visitors/NewsSection";
import StatsSection from "@/components/visitors/StatsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutUsSection />
      <MajorSection />
      <NewsSection />
      <Footer />
    </>
  );
}
