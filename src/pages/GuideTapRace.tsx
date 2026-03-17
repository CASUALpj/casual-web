import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GuideTapRace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/guide" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Player Guide
          </Link>

          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-kraft mb-4">
              🏁 Tap Race
            </h1>
            <p className="text-muted-foreground">Multiplayer speed-tapping race</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-8">
            {/* Modes */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Modes</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <p><strong className="text-primary">Online → Stakes:</strong> Stake crypto on-chain. Race 6 players. Winner takes the pot.</p>
                <p><strong className="text-primary">Online → Points:</strong> Free-to-play multiplayer. Same lobby rules, no staking required.</p>
                <p><strong className="text-primary">Practice:</strong> Race against bots locally. No rewards.</p>
              </div>
            </section>

            {/* Lobby Rules */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Lobby Rules</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Max 6 players per lobby.</li>
                  <li>All players must mark themselves <strong>Ready</strong> to start.</li>
                </ul>
                <p className="font-semibold text-foreground/90 mt-2">Auto-start triggers when:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>All stakers are ready (10s countdown)</li>
                  <li>Max players reached</li>
                  <li>50% ready after 2 minutes</li>
                  <li>10-minute timeout (force start)</li>
                </ul>
                <p>Lobby force-closes at 11 minutes.</p>
                <p>If you're the only staker, you can emergency withdraw your stake at the 10th minute.</p>
              </div>
            </section>

            {/* Points Rewards */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Points Rewards</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <p><strong>Stakes mode:</strong> 1st = 3 pts, 2nd = 2 pts, 3rd = 1 pt</p>
                <p><strong>Points mode:</strong> 1st = 2 pts, 2nd = 1 pt, 3rd = 1 pt</p>
              </div>
            </section>

            {/* How to Play */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">How to Play</h2>
              <p className="text-foreground/80 text-sm">Tap the screen (or press Space/Enter) as fast as possible to move your racer forward. First to the finish line wins!</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideTapRace;
