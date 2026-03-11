import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSlide from "@/components/sections/HeroSlide";
import AboutSlide from "@/components/sections/AboutSlide";
import FeaturesSlide from "@/components/sections/FeaturesSlide";
import VisionSlide from "@/components/sections/VisionSlide";
import CTASlide from "@/components/sections/CTASlide";
import Footer from "@/components/sections/Footer";
import SlideNavigation from "@/components/SlideNavigation";

const TOTAL_SLIDES = 4;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div>
            <HeroSlide onLogoClick={goToNext} />
            <AboutSlide />
          </div>
        );
      case 1:
        return <FeaturesSlide />;
      case 2:
        return <VisionSlide />;
      case 3:
        return <CTASlide />;
      default:
        return (
          <div>
            <HeroSlide onLogoClick={goToNext} />
            <AboutSlide />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentSlide={currentSlide} onNavigate={setCurrentSlide} />
      <main className="relative">
        {currentSlide > 0 && (
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={TOTAL_SLIDES}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />
        )}
        
        <div className="transition-opacity duration-500">
          {renderSlide()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
