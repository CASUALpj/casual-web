import { Sparkles } from "lucide-react";

const VisionSlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-secondary/80 to-card border border-primary/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-primary/10 border border-primary/20">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-kraft mb-8">
              Our Vision
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
              To gradually build the future of GameFi by empowering both creators and players — enabling a <span className="text-primary font-semibold">profitable edge</span> for active contribution, creativity and engagements within a truly connected ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSlide;
