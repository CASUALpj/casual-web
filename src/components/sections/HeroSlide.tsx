import { Twitter } from "lucide-react";
import { useState } from "react";

interface HeroSlideProps {
  onLogoClick: () => void;
}

const HeroSlide = ({ onLogoClick }: HeroSlideProps) => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleLogoClick = () => {
    setIsGlowing(true);
    setTimeout(() => {
      setIsGlowing(false);
      onLogoClick();
    }, 400);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo - Clickable with glow animation */}
        <div className="animate-fade-up mb-8">
          <button
            onClick={handleLogoClick}
            className="focus:outline-none cursor-pointer group"
            aria-label="Navigate to next section"
          >
            <img 
              src="https://i.imgur.com/L73RkZr.png" 
              alt="CASUAL Logo" 
              className={`w-32 h-32 md:w-40 md:h-40 mx-auto animate-float rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 ${
                isGlowing ? "animate-logo-glow shadow-primary/50" : ""
              }`}
            />
          </button>
          <p className="text-xs text-muted-foreground mt-4 animate-pulse">Click logo to continue</p>
        </div>

        {/* Brand name */}
        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-gradient-kraft mb-6">
          CASUAL
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up-delay-2 font-display text-lg md:text-xl lg:text-2xl text-primary tracking-wide mb-8">
          Bridging the gap between Web2 games and Web3 ownership.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up-delay-3">
          <a
            href="https://x.com/casualpj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            <Twitter className="w-5 h-5" />
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
