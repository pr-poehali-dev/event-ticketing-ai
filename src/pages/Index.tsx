import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import AIRecommendations from "@/components/AIRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pb-20 md:pb-8">
        <HeroSection />
        <FeaturedEvents />
        <AIRecommendations />
      </main>
      <Navigation />
    </div>
  );
};

export default Index;
