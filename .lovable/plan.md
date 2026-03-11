

## Plan: Create a Player Guide Page

Create a new route `/guide` with a comprehensive, structured player guide page. Add it to the header dropdown under "Others" or as its own entry.

### Structure

The guide will be built as a single page component using collapsible accordion sections for each game, with nested expandable sub-sections. This keeps the page scannable while allowing deep dives.

### Page Layout

```text
┌──────────────────────────────────┐
│ Header                           │
├──────────────────────────────────┤
│ CASUAL Player Guide (title)      │
│                                  │
│ ▸ Getting Started                │
│ ▸ Tap Race                       │
│   ▸ Modes                        │
│   ▸ Lobby Rules                  │
│   ▸ Points Rewards               │
│   ▸ How to Play                  │
│   ▸ Challenge Mode               │
│ ▸ Run It                         │
│   ▸ Modes                        │
│   ▸ Free Run Scoring             │
│   ▸ Challenge Mode               │
│ ▸ Wave Battle                    │
│   ▸ Modes                        │
│   ▸ Survival Mechanics           │
│   ▸ Levels Mode                  │
│   ▸ Points                       │
│   ▸ Challenge Mode               │
│ ▸ Staking                        │
│ ▸ Profile                        │
│ ▸ Rank System                    │
│ ▸ Daily Login                    │
│                                  │
│ Footer                           │
└──────────────────────────────────┘
```

### Implementation

1. **Create `src/pages/PlayerGuide.tsx`** — Full guide page using Radix Accordion components (already installed). Top-level sections as primary accordions, with nested accordions for game sub-sections. Challenge lobby info duplicated independently in Run It and Wave Battle sections (no cross-references). Styled consistently with the existing kraft paper theme.

2. **Update `src/App.tsx`** — Add route: `/guide`.

3. **Update `src/components/Header.tsx`** — Replace the disabled "Others" entry with "Player Guide" pointing to `/guide`.

### Key Details

- Uses existing `Accordion` components from `src/components/ui/accordion.tsx`
- Challenge Mode rules written independently in each game section (Run It and Wave Battle) without mentioning the other game
- Rank table rendered as a styled HTML table
- All content from the user's text included, structured under clickable expandable sections

