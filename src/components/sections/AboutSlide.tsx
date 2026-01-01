const AboutSlide = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-kraft mb-6">
            What is CASUAL?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90">
          <p className="text-center">
            <span className="text-primary font-semibold">CASUAL</span> is a next-generation GameFi ecosystem designed to empower gamers to make profit off their time, skill and dedication. We're building a vibrant gaming environment where players can have fun, compete and profit while doing what they love — <span className="text-primary font-medium">Playing Games</span>.
          </p>

          <p className="text-center">
            At CASUAL, we bridge the gap between Web2 and Web3 by integrating familiar, easy-to-play Web2-style games with blockchain-powered systems. This approach attracts everyday gamers and gradually introduces them to the world of tokenized rewards, NFT assets, and on-chain progression without the usual complexity of crypto.
          </p>

          <p className="text-center text-muted-foreground">
            Our mission is to create an open, engaging ecosystem where every gamer — from casual players to competitive pros — can connect, play, and grow within a sustainable, player-driven economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSlide;
