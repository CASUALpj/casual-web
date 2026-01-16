import { Gamepad2, ArrowRight } from "lucide-react";

const CTASlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-6">
          Join the Movement
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Be part of the CASUAL community. Connect with gamers, get updates, and shape the future of GameFi together.
        </p>

        <a
          href="https://casual-gamefi.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="streamline-glow group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
        >
          <Gamepad2 className="w-6 h-6" />
          Beta Test
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default CTASlide;
