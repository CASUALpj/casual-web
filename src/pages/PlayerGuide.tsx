import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

            {/* Tap Race */}
            <AccordionItem value="tap-race" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                🏁 Tap Race
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="space-y-2">
                  <AccordionItem value="tap-modes" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Modes</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <p><strong className="text-primary">Online → Stakes:</strong> Stake crypto on-chain. Race 6 players. Winner takes the pot.</p>
                      <p><strong className="text-primary">Online → Points:</strong> Free-to-play multiplayer. Same lobby rules, no staking required.</p>
                      <p><strong className="text-primary">Practice:</strong> Race against bots locally. No rewards.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tap-lobby" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Lobby Rules</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
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
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tap-points" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Points Rewards</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <p><strong>Stakes mode:</strong> 1st = 3 pts, 2nd = 2 pts, 3rd = 1 pt</p>
                      <p><strong>Points mode:</strong> 1st = 2 pts, 2nd = 1 pt, 3rd = 1 pt</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tap-howto" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">How to Play</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm">
                      <p>Tap the screen (or press Space/Enter) as fast as possible to move your racer forward. First to the finish line wins!</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Run It */}
            <AccordionItem value="run-it" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                🏃 Run It
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="space-y-2">
                  <AccordionItem value="run-modes" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Modes</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <p><strong className="text-primary">Free Run:</strong> Solo endless runner. Earn points based on how far you run vs. the daily target distance.</p>
                      <p><strong className="text-primary">Challenge Mode:</strong> 6-player stake-based lobbies. Compete for the longest distance.</p>
                      <p><strong className="text-primary">Leaderboard:</strong> View global rankings.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="run-scoring" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Free Run Scoring</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>A daily target distance is generated each day (55m–70m).</li>
                        <li>You earn +1 point per target milestone reached (e.g., run 2× the target = 2 pts).</li>
                        <li>Daily cap: 5 points.</li>
                        <li>High scores require a minimum 10m distance to qualify.</li>
                        <li>Personal bests are displayed on the results screen.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="run-challenge" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Challenge Mode</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Lobbies last 6 hours with up to 6 stakers.</li>
                        <li>New players cannot join within the last 5 minutes.</li>
                      </ul>
                      <p className="font-semibold text-foreground/90">Rankings determined by:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-2">
                        <li>Longest distance</li>
                        <li>Best jump-to-distance ratio (tiebreaker)</li>
                        <li>Earliest finish time (second tiebreaker)</li>
                      </ol>
                      <p>Winner gets 3 points + distance recorded on the challenge leaderboard.</p>
                      <p>Winner determination triggers when all 6 players finish, or when the timer expires.</p>
                      <div className="mt-3 p-3 bg-muted/50 rounded-lg border border-border/30">
                        <p className="text-sm font-semibold text-primary mb-1">💰 Staking</p>
                        <p className="text-sm">Challenge lobbies require an on-chain stake to enter. Join a lobby (or one is auto-created), stake crypto via your connected wallet, and play when ready. Winner receives the pot minus platform fees. Pending (unstaked) players are filtered from active lobby views and final rankings.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Wave Battle */}
            <AccordionItem value="wave-battle" className="border border-border/50 rounded-lg px-4 bg-card/30">
              <AccordionTrigger className="text-lg font-display font-semibold text-primary hover:no-underline">
                ⚔️ Wave Battle
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="space-y-2">
                  <AccordionItem value="wave-modes" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Modes</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <p><strong className="text-primary">Survival:</strong> Endless waves. See how far you can go. Points for boss kills and new personal best waves.</p>
                      <p><strong className="text-primary">Levels:</strong> 50 discrete arenas with sequential progression. Pick 1 of 3 permanent powerups per level.</p>
                      <p><strong className="text-primary">Challenge Mode:</strong> 6-player stake-based lobbies.</p>
                      <p><strong className="text-primary">Leaderboard:</strong> Global rankings by best wave/kills.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wave-survival" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Survival Mechanics</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Each wave throws more enemies at you than the last.</li>
                        <li>In later waves, slower enemies get even slower and fast enemies appear less often.</li>
                        <li>Most upgrades expire after 2 waves (exceptions: Extra Life, Burn, Faster Shots are permanent).</li>
                        <li>Upgrade screen has an 8-second auto-select timer.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wave-levels" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Levels Mode</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>50 levels with gated progression.</li>
                        <li>Difficulty scales every 10 levels.</li>
                        <li>Bosses every 10 levels.</li>
                        <li>All powerups are permanent within a level.</li>
                        <li>Progress capped at 5 new levels per day (resets with daily login).</li>
                        <li>Level completion = save point.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wave-points" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Points</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>+1 point per boss kill (Survival) / +2 points per boss kill (Levels).</li>
                        <li>Bonus for new personal best wave.</li>
                        <li>Daily cap: 5 points (tracked separately for Wave Battle).</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="wave-challenge" className="border-b-0 border border-border/30 rounded-md px-3 bg-muted/20">
                    <AccordionTrigger className="text-sm font-semibold text-foreground/90 hover:no-underline py-3">Challenge Mode</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-sm space-y-3">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

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
