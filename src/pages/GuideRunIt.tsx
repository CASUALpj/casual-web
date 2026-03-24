import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GuideRunIt = () => {
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
              🏃 Run It
            </h1>
            <p className="text-muted-foreground">Endless runner with daily challenges</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-8">
            {/* Modes */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Modes</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <p><strong className="text-primary">Free Run:</strong> Solo endless runner. Earn points based on how far you run vs. the daily target distance.</p>
                <p><strong className="text-primary">Challenge Mode:</strong> 10-player competitive lobbies. Compete for the longest distance.</p>
                <p><strong className="text-primary">Leaderboard:</strong> View global rankings.</p>
              </div>
            </section>

            {/* Free Run Scoring */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Free Run Scoring</h2>
              <div className="text-foreground/80 text-sm space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>A daily target distance is generated each day (55m–70m).</li>
                  <li>You earn +1 point per target milestone reached (e.g., run 2× the target = 2 pts).</li>
                  <li>Daily cap: 5 points.</li>
                  <li>High scores require a minimum 10m distance to qualify.</li>
                  <li>Personal bests are displayed on the results screen.</li>
                </ul>
              </div>
            </section>

            {/* Challenge Mode */}
            <section className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h2 className="text-lg font-display font-semibold text-primary mb-4">Challenge Mode</h2>
              <div className="text-foreground/80 text-sm space-y-3">
                <ul className="list-disc list-inside space-y-1">
                  <li>Lobbies last 6 hours with up to 10 players.</li>
                  <li>New players cannot join within the last 30 minutes.</li>
                </ul>
                <p className="font-semibold text-foreground/90">Rankings determined by:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Longest distance</li>
                  <li>Best jump-to-distance ratio (tiebreaker)</li>
                  <li>Earliest finish time (second tiebreaker)</li>
                </ol>
                <p>Winner gets 3 points + distance recorded on the challenge leaderboard.</p>
                <p>Winner determination triggers when all 10 players finish, or when the timer expires.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideRunIt;
