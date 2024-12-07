import ChooseUs from "@/components/home/ChooseUs";
import ConsultationBanner from "@/components/home/ContactForm";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import HomeLogosScroller from "@/components/home/HomeLogosScroller";
// import ServicesNavigation from "@/components/home/HomeServices";
import MissionSection from "@/components/home/MissionSection";
import ServicesSec from "@/components/home/ServicesSec";
import StatsSection from "@/components/home/Statstitics";
import Testimonial from "@/components/home/Testimonial";
import TrustedPartners from "@/components/home/TrustedPartners";
import OurSolutions from "@/components/home/OurSolutions";
import TechnologiesTabs from "@/components/solutions/TechnologiesTabs";
import ImageScroller from "@/components/home/ImageScroller";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeLogosScroller />
      <ServicesSec />
      <ImageScroller />
      <OurSolutions />
      <StatsSection />
      <TechnologiesTabs />
      <MissionSection />
      <Testimonial />
      <TrustedPartners />
      <ChooseUs />
      <FAQ />
      <ConsultationBanner />
    </div>
  );
}
