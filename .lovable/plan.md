
## Auto-Fade Navigation Buttons

### What's changing
The previous/next arrow buttons (and the slide dot indicators at the bottom) will automatically fade to near-invisible after 3 seconds of no interaction on the current page. Touching/clicking anywhere on the screen brings them back to full opacity, and the 3-second timer resets.

### How it works

**In `src/components/SlideNavigation.tsx`:**

1. Add a `visible` state (boolean), starting as `true`.
2. Add a `useEffect` that:
   - Sets `visible = true` immediately whenever `currentSlide` changes (i.e. you just navigated to a new page).
   - Starts a 3-second timer that sets `visible = false`.
   - Clears the previous timer on every slide change.
3. Add a `handleInteraction` function that:
   - Sets `visible = true`.
   - Resets the 3-second timer.
4. Attach `onMouseMove`, `onTouchStart`, and `onClick` listeners to the `document` (via `useEffect`) to call `handleInteraction` on any screen activity.
5. Apply `opacity` and `transition` classes to the buttons and dot indicators:
   - `opacity-100` when `visible = true`
   - `opacity-0` when `visible = false`
   - `transition-opacity duration-700` for a smooth fade

### Technical details

- The fade-out transition will use `duration-700` (0.7s) for a smooth, gradual disappear.
- Fade-in on touch/mouse will use a shorter `duration-200` feel by keeping the same class but opacity snapping back immediately.
- The dot indicators at the bottom will also fade out together with the buttons since they are part of the same component.
- Cleanup: all event listeners and timers are properly removed on component unmount to avoid memory leaks.
- The buttons remain fully functional even when faded (they are transparent, not hidden), so any accidental tap will both trigger the action and restore visibility.

### Files to edit
- `src/components/SlideNavigation.tsx` — only file that needs changes.
