/* MOBILE STICKY BOOK BAR (handoff F6). Shown <820px only (CSS). High-intent
   conversion affordance for the 60%+ phone traffic from IG/TikTok. The Book
   button is thumb-reachable at the bottom of the screen. */
import { brand, config } from "@/lib/content";
import BookButton from "./BookButton";

export default function StickyBar() {
  if (!config.showStickyBar) return null;
  return (
    <div className="sticky-bar">
      <span className="sticky-bar__from">
        From <b>${brand.startingPrice}</b><br />delivered &amp; set up
      </span>
      <BookButton>Book</BookButton>
    </div>
  );
}
