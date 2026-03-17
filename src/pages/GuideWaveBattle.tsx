import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GuideWaveBattle = () => {
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
              ⚔️ Wave Battle
            </h1>
            <p className="text-muted-foreground">Top-down wave survival shooter</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-8">
            {/* Modes */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Modes</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <p><strong className="text-primary">Survival:</strong> Endless waves. See how far you can go. Points for boss kills and new personal best waves.</p>
                <p><strong className="text-primary">Levels:</strong> 50 discrete arenas with sequential progression. Pick 1 of 3 permanent powerups per level.</p>
                <p><strong className="text-primary">Challenge Mode:</strong> 6-player stake-based lobbies.</p>
                <p><strong className="text-primary">Leaderboard:</strong> Global rankings by best wave/kills.</p>
              </div>
            </section>

            {/* Survival Mechanics */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Survival Mechanics</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Each wave throws more enemies at you than the last.</li>
                  <li>In later waves, slower enemies get even slower and fast enemies appear less often.</li>
                  <li>Most upgrades expire after 2 waves (exceptions: Extra Life, Burn, Faster Shots are permanent).</li>
                  <li>Upgrade screen has an 8-second auto-select timer.</li>
                </ul>
              </div>
            </section>

            {/* Levels Mode */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Levels Mode</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>50 levels with gated progression.</li>
                  <li>Difficulty scales every 10 levels.</li>
                  <li>Bosses every 10 levels.</li>
                  <li>All powerups are permanent within a level.</li>
                  <li>Progress capped at 5 new levels per day (resets with daily login).</li>
                  <li>Level completion = save point.</li>
                </ul>
              </div>
            </section>

            {/* Points */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Points</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>+1 point per boss kill (Survival) / +2 points per boss kill (Levels).</li>
                  <li>Bonus for new personal best wave.</li>
                  <li>Daily cap: 5 points (tracked separately for Wave Battle).</li>
                </ul>
              </div>
            </section>

            {/* Challenge Mode */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Challenge Mode</h2>
              <div className="text-foreground/80 text-sm space-y-3">
                <ul className="list-disc list-inside space-y-1">
                  <li>6-player, 6-hour lobby structure.</li>
                  <li>New players cannot join within the last 5 minutes.</li>
                </ul>
                <p className="font-semibold text-foreground/90">Rankings determined by:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Highest wave reached</li>
                  <li>Most kills (tiebreaker)</li>
                  <li>Earliest finish time (second tiebreaker)</li>
                </ol>
                <p>Top 3 earn points: 3 / 2 / 1.</p>
                <p>Winner determination triggers when all 6 players finish, or when the timer expires.</p>
                <div className="mt-3 p-3 bg-muted/50 rounded-lg border border-border/30">
                  <p className="text-sm font-semibold text-primary mb-1">💰 Staking</p>
                  <p className="text-sm">Challenge lobbies require an on-chain stake to enter. Join a lobby (or one is auto-created), stake crypto via your connected wallet, and play when ready. Winner receives the pot minus platform fees. Pending (unstaked) players are filtered from active lobby views and final rankings.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideWaveBattle;
