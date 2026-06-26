"use client";

/* Fixed nav (handoff §6-A). Text links >=820px, a flame Book button always,
   hamburger dropdown <820px. Smooth-scroll handled by CSS scroll-behavior +
   scroll-margin-top on sections (set in page markup) so the -58px nav offset
   is honored without JS. */
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { IconMenu, IconClose } from "./icons";
import Logo from "./Logo";
import BookButton from "./BookButton";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#hero" aria-label="Sonoran Sims home"><Logo /></a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </nav>

        <div className="nav__right">
          <BookButton>Book</BookButton>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__drop">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
