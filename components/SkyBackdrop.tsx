"use client";

/* =============================================================================
   SKY BACKDROP — the scroll-driven Sonoran sunset (handoff F1 + §8)
   -----------------------------------------------------------------------------
   A fixed, full-viewport backdrop behind all content (z-index:0). As you
   scroll the WHOLE page, the sky color interpolates warm-dusk -> night across
   4 keyframes; the sun sinks behind the mountain range and fades; the range
   rim fades out; stars fade in; the hero heat-haze fades out. A corner
   tachometer doubles as a "setting sun" page-progress gauge.

   PERFORMANCE CONTRACT (handoff §8 / §11):
   - ONE rAF-throttled scroll+resize handler writes a handful of inline styles
     directly to refs. We never drive this through React state (it must run at
     frame rate). Editing content NEVER requires touching this file.
   - Honors prefers-reduced-motion: renders one static warm frame, no motion.

   This file is intentionally the ONLY complex/animated piece. Everything the
   client edits lives in lib/content.ts.
============================================================================= */
import { useEffect, useRef } from "react";
import { config } from "@/lib/content";

/* 4 sky keyframes (handoff §5), each a 4-stop vertical gradient. */
const KEYS = [
  { at: 0.0, c: ["#26121f", "#451b15", "#642611", "#7c3413"] },
  { at: 0.45, c: ["#1d1430", "#3a1a26", "#54201a", "#6c2a16"] },
  { at: 0.72, c: ["#161634", "#2a1842", "#3c1c46", "#48203c"] },
  { at: 1.0, c: ["#0E0E11", "#111016", "#131119", "#15131c"] },
];

const hex2rgb = (h: string) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];
const mix = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));

/* Interpolate the 4 palettes at page progress p -> a 4-stop CSS gradient. */
function skyGradient(p: number) {
  let lo = KEYS[0], hi = KEYS[KEYS.length - 1];
  for (let i = 0; i < KEYS.length - 1; i++) {
    if (p >= KEYS[i].at && p <= KEYS[i + 1].at) { lo = KEYS[i]; hi = KEYS[i + 1]; break; }
  }
  const t = hi.at === lo.at ? 0 : (p - lo.at) / (hi.at - lo.at);
  const stops = lo.c.map((c, i) => {
    const a = hex2rgb(c), b = hex2rgb(hi.c[i]);
    return `rgb(${mix(a[0], b[0], t)},${mix(a[1], b[1], t)},${mix(a[2], b[2], t)})`;
  });
  return `linear-gradient(180deg, ${stops[0]} 0%, ${stops[1]} 40%, ${stops[2]} 72%, ${stops[3]} 100%)`;
}

function motionCfg() {
  switch (config.motion) {
    case "Off": return { stat: true, drama: 1 };
    case "Restrained": return { stat: false, drama: 0.72 };
    case "Dramatic": return { stat: false, drama: 1.18 };
    default: return { stat: false, drama: 1 };
  }
}

export default function SkyBackdrop() {
  const sky = useRef<HTMLDivElement>(null);
  const stars = useRef<HTMLDivElement>(null);
  const sun = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const range = useRef<SVGSVGElement>(null);
  const haze = useRef<HTMLDivElement>(null);
  // Tachometer refs
  const needle = useRef<HTMLDivElement>(null);
  const tachSun = useRef<HTMLDivElement>(null);
  const tachRpm = useRef<HTMLDivElement>(null);
  const tachFill = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cfg = motionCfg();
    const stat = cfg.stat || reduce;

    // --- generate the star field (46 dots) ---
    const starLayer = stars.current;
    if (starLayer && !starLayer.childElementCount) {
      for (let i = 0; i < 46; i++) {
        const s = document.createElement("div");
        s.className = "backdrop__star";
        const size = Math.random() * 2 + 1;
        s.style.cssText =
          `left:${Math.random() * 100}%;top:${Math.random() * 70}%;` +
          `width:${size}px;height:${size}px;` +
          (reduce ? "opacity:.6;" : `animation:twk ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 4}s infinite;`);
        starLayer.appendChild(s);
      }
    }

    let ticking = false;
    function render() {
      ticking = false;
      const sy = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pColor = stat ? 0 : clamp(max > 0 ? sy / max : 0);
      const pHero = stat ? 0 : clamp(sy / (window.innerHeight * 0.9));

      // 1. SKY COLOR
      if (sky.current) sky.current.style.background = skyGradient(pColor);

      // 2. SUN descends behind the range + fades
      const tv = window.innerHeight * 0.52 * pHero * cfg.drama;
      if (sun.current) {
        sun.current.style.transform = `translate(-50%, ${tv}px)`;
        sun.current.style.opacity = String(1 - 0.15 * pHero);
      }
      if (glow.current) {
        glow.current.style.transform = `translate(-50%, ${tv}px)`;
        glow.current.style.opacity = String(Math.max(0, 1 - 0.9 * pHero));
      }

      // 3. MOUNTAIN RIM fades as the sun finishes setting
      if (range.current) range.current.style.opacity = String(clamp(1 - (pHero - 0.6) / 0.4));

      // 4. STARS fade in for the night half
      if (stars.current) stars.current.style.opacity = String(clamp((pColor - 0.4) / 0.42));

      // 5. HEAT HAZE fades out over the hero
      if (haze.current) haze.current.style.opacity = String(stat ? 0 : Math.max(0, 1 - pHero / 0.8) * 0.4);

      // 6. TACHOMETER (page-progress gauge / setting sun)
      const p = pColor;
      const redline = p > 0.82;
      const col = redline ? "#E22D17" : "#FFC247";
      if (needle.current) {
        needle.current.style.transform = `translate(-50%,-100%) rotate(${-130 + p * 260}deg)`;
        needle.current.style.background = `linear-gradient(${col}, rgba(0,0,0,0))`;
      }
      if (tachSun.current) {
        tachSun.current.style.background = redline
          ? "radial-gradient(circle,#FFB199,#E22D17 55%,#7c1a0c)"
          : "radial-gradient(circle,#FFE3A8,#FFC247 55%,#FF7A28)";
        tachSun.current.style.boxShadow = `0 0 12px ${col}`;
      }
      if (tachRpm.current) {
        tachRpm.current.textContent = (p * 8).toFixed(1);
        tachRpm.current.style.color = redline ? "#FF9A6B" : "#F5F2EC";
      }
      if (tachFill.current) tachFill.current.style.strokeDashoffset = String(207 - p * 207);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(render);
    }

    render();
    if (!stat) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop__sky" ref={sky} />
        <div className="backdrop__stars" ref={stars} />

        <div className="backdrop__sunwrap">
          <div className="backdrop__godrays" />
          <div className="backdrop__glow" ref={glow} />
          <div className="backdrop__sun" ref={sun} />
        </div>

        {/* Angular SVG mountain range pinned to the bottom (handoff F7) */}
        <svg
          className="backdrop__range"
          ref={range}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rangeRim" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FFC247" />
              <stop offset="0.52" stopColor="#FF7A28" />
              <stop offset="1" stopColor="#E22D17" />
            </linearGradient>
          </defs>
          {/* far silhouette */}
          <path
            d="M0 250 L160 150 L300 220 L470 120 L640 210 L820 110 L1000 200 L1180 130 L1320 210 L1440 160 L1440 320 L0 320 Z"
            fill="#120a10"
          />
          {/* near silhouette */}
          <path
            d="M0 290 L200 210 L380 270 L560 200 L760 275 L980 215 L1180 280 L1380 230 L1440 270 L1440 320 L0 320 Z"
            fill="#241019"
          />
          {/* flame rim along the near ridge */}
          <polyline
            points="0,290 200,210 380,270 560,200 760,275 980,215 1180,280 1380,230 1440,270"
            fill="none"
            stroke="url(#rangeRim)"
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>

        <div className="backdrop__haze" ref={haze} />
      </div>

      {/* engineering-grid texture (separate fixed layer, also behind content) */}
      <div className="tex-grid" aria-hidden="true" />

      {/* Setting-sun tachometer (page-progress gauge) — hidden on phones */}
      <div className="tach" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <defs>
            <linearGradient id="tachArc" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FFC247" />
              <stop offset=".6" stopColor="#FF7A28" />
              <stop offset="1" stopColor="#E22D17" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="55" fill="rgba(14,14,17,.72)" stroke="rgba(245,242,236,.16)" />
          <path d="M60 60 m-44 0 a44 44 0 1 1 88 0" fill="none" stroke="rgba(245,242,236,.12)" strokeWidth="7" strokeLinecap="round" transform="rotate(135 60 60)" />
          <path ref={tachFill} d="M60 60 m-44 0 a44 44 0 1 1 88 0" fill="none" stroke="url(#tachArc)" strokeWidth="7" strokeLinecap="round" transform="rotate(135 60 60)" strokeDasharray="207" strokeDashoffset="207" />
        </svg>
        <div className="tach__needle" ref={needle}><div className="tach__sun" ref={tachSun} /></div>
        <div className="tach__rpm" ref={tachRpm}>0.0</div>
        <div className="tach__unit">×1000&nbsp;rpm</div>
      </div>
    </>
  );
}
