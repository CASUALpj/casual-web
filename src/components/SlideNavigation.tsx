import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
}: SlideNavigationProps) => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 3000);
  }, []);

  // Reset visibility on slide change
  useEffect(() => {
    resetTimer();
  }, [currentSlide, resetTimer]);

  // Attach interaction listeners
  useEffect(() => {
    const handleInteraction = () => resetTimer();
    document.addEventListener("mousemove", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  const visibilityClass = `transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`;

  return (
    <>
      {showPrevious && currentSlide > 0 && (
        <button
          onClick={onPrevious}
          className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-300 hover:scale-110 group ${visibilityClass}`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-primary group-hover:animate-pulse" />
        </button>
      )}

      {showNext && currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-300 hover:scale-110 group ${visibilityClass}`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-primary group-hover:animate-pulse" />
        </button>
      )}

      {/* Slide indicators */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 ${visibilityClass}`}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-6"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default SlideNavigation;
