import dynamic from "next/dynamic";
import HeroSlider from "@/components/HeroSlider";
import HeroMarquee from "@/components/HeroMarquee";
import DigitalExperience from "@/components/DigitalExperience";
import FeaturedWork from "@/components/FeaturedWork";

// Below the fold components - Dynamic Import
const OurProcess = dynamic(() => import("@/components/OurProcess"), { 
  loading: () => <div className="h-96 w-full bg-[#060608]" />,
  ssr: true 
});
const WhyChoose = dynamic(() => import("@/components/WhyChoose"), { ssr: true });
const GlobalImpact = dynamic(() => import("@/components/GlobalImpact"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const TeamPreview = dynamic(() => import("@/components/TeamPreview"), { ssr: true });
const LatestInsights = dynamic(() => import("@/components/LatestInsights"), { ssr: true });
const Awards = dynamic(() => import("@/components/Awards"), { ssr: true });

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#060608]">
      {/* Above the fold - High priority */}
      <HeroSlider />
      <HeroMarquee />
      <DigitalExperience />
      <FeaturedWork />
      
      {/* Below the fold - Lazy loaded */}
      <OurProcess />
      <WhyChoose />
      <GlobalImpact />
      <Testimonials />
      <TeamPreview />
      <LatestInsights />
      <Awards />
    </main>
  );
}
