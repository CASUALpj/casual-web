

## Plan: Remove All Staking References from Guide Pages

### GuideTapRace.tsx
- **Line 30**: Remove the entire "Online → Stakes" mode line (stake crypto, winner takes pot)
- **Line 31**: Remove "no staking required" from the Points mode description → reword to just "Free-to-play multiplayer. Same lobby rules."
- **Line 46**: Change "All stakers are ready" → "All players are ready"
- **Line 52**: Remove the entire emergency withdraw sentence
- **Line 60**: Rename "Stakes mode" → "Online mode" in Points Rewards

### GuideRunIt.tsx
- **Line 31**: Reword Challenge Mode from "6-player stake-based lobbies" → "6-player competitive lobbies"
- **Line 55**: Change "up to 6 stakers" → "up to 6 players"
- **Lines 66-69**: Delete the entire Staking callout box (the highlighted div with wallet/pot info)

### GuideWaveBattle.tsx
- **Line 32**: Reword Challenge Mode from "6-player stake-based lobbies" → "6-player competitive lobbies"
- **Lines 93-96**: Delete the entire Staking callout box

No sections removed, just staking language stripped out. Everything else stays intact.

