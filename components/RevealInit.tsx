"use client";

/* Scroll-reveal system (handoff F5). Any element with `data-reveal` fades +
   rises into place once when it enters the viewport. One tiny reusable
   mechanism used site-wide. Honors prefers-reduced-motion (shows immediately,
   handled in CSS). Renders nothing. */
import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
