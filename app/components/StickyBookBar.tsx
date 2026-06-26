"use client";

import { useEffect, useState } from "react";

/**
 * Persistent mobile booking affordance — booking is always one thumb-tap away.
 * Hidden on desktop (nav carries the CTA there) and tucked away once the
 * visitor reaches the booking section so it never covers the widget.
 */
export default function StickyBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      const book = document.getElementById("book");
      const atBooking = book
        ? book.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setShow(past && !atBooking);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sand/10 bg-asphalt/90 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="leading-tight">
          <p className="mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">
            From $175
          </p>
          <p className="display text-lg uppercase text-sand">Any sim, anywhere</p>
        </div>
        <a href="#book" className="btn-flame !px-6 !py-3">
          Book
        </a>
      </div>
    </div>
  );
}
