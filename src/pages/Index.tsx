import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSlide from "@/components/sections/HeroSlide";
import AboutSlide from "@/components/sections/AboutSlide";
import FeaturesSlide from "@/components/sections/FeaturesSlide";
import VisionSlide from "@/components/sections/VisionSlide";
import CTASlide from "@/components/sections/CTASlide";
import Footer from "@/components/sections/Footer";
import SlideNavigation from "@/components/SlideNavigation";

const TOTAL_SLIDES = 5;

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
        return <HeroSlide onLogoClick={goToNext} />;
      case 1:
        return <AboutSlide />;
      case 2:
        return <FeaturesSlide />;
      case 3:
        return <VisionSlide />;
      case 4:
        return <CTASlide />;
      default:
        return <HeroSlide onLogoClick={goToNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        {/* Show navigation arrows only after first slide */}
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
