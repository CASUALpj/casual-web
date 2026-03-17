import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

const OnePager = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-kraft mb-6">
              One Pager
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-10 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p className="text-center">
              <span className="text-primary font-semibold">CASUAL</span> is a GameFi platform merging addictive classic gameplay with seamless Web3 integrations.
            </p>

            <p className="text-center">
              We're focused on creating a sustainable gaming platform for all users, from the gamers to developers and all participants alike.
            </p>

            <p className="text-center">
              At CASUAL we work for the best, creating good games, listening to our high value community members and polishing our games to the taste of our players. We put the interest of our supporters first and strive for the benefit of all.
            </p>

            <p className="text-center">
              We don't push tokens before fun—we focus on real player engagement first— friendly games, low learning curve and absolutely no blockchain friction during gameplay, ensuring the fun sticks.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnePager;
