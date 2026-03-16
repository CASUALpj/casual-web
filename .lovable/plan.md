

## Plan: Install Vercel Analytics

Install `@vercel/analytics` and `@vercel/speed-insights` packages and add them to your app's root component. This is a minimal, safe change.

### Steps

1. **Add dependencies** to `package.json`: `@vercel/analytics` and `@vercel/speed-insights`

2. **Update `src/App.tsx`** — Import and render both components:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   import { SpeedInsights } from '@vercel/speed-insights/react';
   ```
   Add `<Analytics />` and `<SpeedInsights />` alongside your existing app content.

That's it — two lines of imports and two self-closing components. After deploying to Vercel, analytics will appear in your Vercel dashboard automatically.

