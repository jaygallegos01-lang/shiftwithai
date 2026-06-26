"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-asphalt/80 backdrop-blur-md border-b border-sand/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        {/* LOGO SLOT — client supplies final phoenix / desert-sun SVG */}
        <a href="#top" className="flex items-center gap-3" aria-label="Sonoran Sims — home">
          <span
            className="grid h-9 w-9 place-items-center rounded-full bg-flame"
            aria-hidden
          >
            {/* placeholder sun mark until the real SVG lands */}
            <span className="block h-4 w-4 rounded-full bg-asphalt" />
          </span>
          <span className="display text-xl uppercase tracking-tight text-sand">
            Sonoran <span className="flame-text">Sims</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a href="#pricing" className="mono text-xs uppercase tracking-wider text-ash transition-colors hover:text-sand">
            Pricing
          </a>
          <a href="#built-for" className="mono text-xs uppercase tracking-wider text-ash transition-colors hover:text-sand">
            Events
          </a>
          <a href="#equipment" className="mono text-xs uppercase tracking-wider text-ash transition-colors hover:text-sand">
            The Rigs
          </a>
          <a href="#rig-owners" className="mono text-xs uppercase tracking-wider text-ash transition-colors hover:text-sand">
            Rig Owners
          </a>
          <a href="#book" className="btn-flame !py-2.5 !px-5 !text-xs">
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
}
