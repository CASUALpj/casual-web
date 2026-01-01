import { Gamepad2, Coins, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Web2 Games, Web3 Rewards",
    description: "Play familiar games you love while earning blockchain-powered rewards and assets."
  },
  {
    icon: Coins,
    title: "Tokenized Economy",
    description: "Profit from your time and skill through our sustainable play-to-earn ecosystem."
  },
  {
    icon: Users,
    title: "Player-Driven",
    description: "A community-first approach where every gamer has a voice in shaping the future."
  },
  {
    icon: Shield,
    title: "True Ownership",
    description: "Own your in-game assets as NFTs with real value you can trade or sell."
  }
];

const FeaturesSlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-kraft mb-6">
            Key Features
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-secondary/50 rounded-2xl border border-border/50 transition-all duration-500 hover:bg-secondary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSlide;
