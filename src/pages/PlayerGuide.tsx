import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const games = [
  { label: "🏁 Tap Race", description: "Multiplayer speed-tapping race", path: "/guide/tap-race" },
  { label: "🏃 Run It", description: "Endless runner with daily challenges", path: "/guide/run-it" },
  { label: "⚔️ Wave Battle", description: "Top-down wave survival shooter", path: "/guide/wave-battle" },
];

const PlayerGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-kraft mb-4">
              Player Guide
            </h1>
            <p className="text-muted-foreground">Everything you need to know about CASUAL</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <Accordion type="multiple" className="space-y-3">
            {/* Getting Started */}
            <AccordionItem value="getting-started" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                Getting Started
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-4">
                <p>
                  When you open the app, you land on the <strong className="text-primary">Home Screen</strong>. Connect your wallet to access features, or tap <strong>"Play as Guest"</strong> to try some games without a wallet.
                </p>
                <p>From the Home Screen, pick one of three games:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong className="text-primary">Tap Race</strong> — multiplayer speed-tapping race</li>
                  <li><strong className="text-primary">Run It</strong> — endless runner with daily challenges</li>
                  <li><strong className="text-primary">Wave Battle</strong> — top-down wave survival shooter</li>
                </ul>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/30">
                  <p className="text-sm font-semibold text-primary mb-1">📱 Orientation</p>
                  <p className="text-sm">All games require landscape mode. If you're on mobile, rotate your device — the app will prompt you automatically.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Game Links */}
            {games.map((game) => (
              <Link
                key={game.path}
                to={game.path}
                className="flex items-center justify-between border border-border/50 rounded-lg px-6 py-5 bg-card/30 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 group"
              >
                <div>
                  <h2 className="text-lg font-display font-semibold text-primary">{game.label}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{game.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}

            {/* Profile */}
            <AccordionItem value="profile" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                👤 Profile
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm space-y-2">
                <p>Tap your avatar/address on the Home Screen to open your profile:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>View your current rank + progress to next tier</li>
                  <li>See your spendable point balance</li>
                  <li>Upload a custom avatar (Bronze+ rank required)</li>
                  <li>Edit your display name — shortened wallet address is used as default</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Rank System */}
            <AccordionItem value="rank-system" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                🏆 Rank System
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm space-y-4">
                <p>Your rank is based on your <strong className="text-primary">peak points</strong> — the highest total you've ever reached. Ranks are permanent and never drop, even if you spend points.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border/30 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left px-4 py-2 font-semibold text-foreground/90">Rank</th>
                        <th className="text-left px-4 py-2 font-semibold text-foreground/90">Points Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                      <tr><td className="px-4 py-2">Unranked</td><td className="px-4 py-2">0 – 99</td></tr>
                      <tr className="bg-muted/20"><td className="px-4 py-2">🥉 Bronze</td><td className="px-4 py-2">100 – 299</td></tr>
                      <tr><td className="px-4 py-2">🥈 Silver</td><td className="px-4 py-2">300 – 799</td></tr>
                      <tr className="bg-muted/20"><td className="px-4 py-2">🥇 Gold</td><td className="px-4 py-2">800 – 2,999</td></tr>
                      <tr><td className="px-4 py-2">💎 Platinum</td><td className="px-4 py-2">3,000 – 4,999</td></tr>
                      <tr className="bg-muted/20"><td className="px-4 py-2">👑 Diamond</td><td className="px-4 py-2">5,000+</td></tr>
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Daily Login */}
            <AccordionItem value="daily-login" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                📅 Daily Login
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm space-y-2">
                <p>Claim your daily login bonus from the Home Screen. Maintains a streak counter and awards bonus points.</p>
                <p className="font-semibold text-foreground/90">The daily reset also refreshes:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Run It point cap</li>
                  <li>Wave Battle point cap</li>
                  <li>Levels mode daily progression cap (5 new levels)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayerGuide;
