"use client";

/* =============================================================================
   VEHICLE HIGHWAY (Desert Hero §5.3 — the signature "racing + flight" feature)
   -----------------------------------------------------------------------------
   A road on the horizon; dark vehicle silhouettes drive across it while
   aircraft streak overhead. Type/direction/speed/timing are randomized so it
   never looks looped. It says "racing today, flight sims tomorrow" with zero
   words — directly serving the sim-agnostic brand position (Blue Ocean #3).

   Mounted INSIDE the hero so it scrolls away naturally (z-index:2, local).

   TO ADD A VEHICLE (e.g. a fighter jet, a rally car):
     1. drop a side-profile silhouette PNG in /public/assets/vehicles/
     2. add an entry to SIL below (ar = width/height of the art)
     3. list its key in `ground` or `air`. Everything else just works.
   Honors prefers-reduced-motion (renders nothing) and pauses on hidden tab.
============================================================================= */
import { useEffect, useRef } from "react";

type Sil = { img: string; ar: number; w: [number, number]; air: boolean; faces: 1 | -1; dur: [number, number] };

const SIL: Record<string, Sil> = {
  f1:   { img: "/assets/vehicles/f1.png",   ar: 4.83, w: [128, 172], air: false, faces: 1,  dur: [2.6, 3.9] },
  gt:   { img: "/assets/vehicles/gt.png",   ar: 3.44, w: [108, 150], air: false, faces: 1,  dur: [4.0, 5.6] },
  heli: { img: "/assets/vehicles/heli.png", ar: 3.66, w: [96, 130],  air: true,  faces: -1, dur: [8.5, 12.0] },
  prop: { img: "/assets/vehicles/prop.png", ar: 3.01, w: [82, 112],  air: true,  faces: -1, dur: [6.0, 8.6] },
};
const ground = ["f1", "gt"];
const air = ["heli", "prop"];

export default function VehicleHighway() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vLayer = layer.current;
    if (!vLayer || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobile = window.innerWidth < 700;
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const live = new Set<HTMLDivElement>();
    let vTimer: ReturnType<typeof setTimeout>;

    function spawn() {
      if (!vLayer) return;
      const pool = Math.random() < 0.55 ? ground : air;        // ~55% cars, ~45% aircraft
      const s = SIL[pool[(Math.random() * pool.length) | 0]];
      const dir = Math.random() < 0.5 ? 1 : -1;                // 1 = L->R, -1 = R->L
      const w = rand(s.w[0], s.w[1]) * (isMobile ? 0.8 : 1);
      const h = w / s.ar;
      const VW = vLayer.clientWidth || window.innerWidth;
      const CH = vLayer.clientHeight || window.innerHeight;
      // Ground vehicles rest on the road at GROUND level (wheels at ~78% of the
      // hero height — must match the .desert-road position in globals.css).
      // Aircraft fly high in the sky (8-34% down) so they never touch the road.
      const top = s.air ? rand(0.08, 0.34) * CH : CH * 0.78 - h + rand(-3, 3);
      const dur = rand(s.dur[0], s.dur[1]);
      const blur = dur < 3.6 ? rand(0.9, 1.6) : rand(0.3, 0.8); // faster => more motion blur
      const op = s.air ? rand(0.62, 0.8) : rand(0.8, 0.94);
      const startX = dir === 1 ? -(w + 24) : VW + 24;
      const endX = dir === 1 ? VW + 24 : -(w + 24);
      const flip = dir !== s.faces;

      const el = document.createElement("div");
      el.style.cssText =
        `position:absolute;top:${top.toFixed(1)}px;left:0;width:${w | 0}px;height:${h | 0}px;` +
        `will-change:transform;filter:blur(${blur.toFixed(2)}px);opacity:${op.toFixed(2)};` +
        `transform:translateX(${startX | 0}px)`;
      el.innerHTML =
        `<img src="${s.img}" alt="" style="display:block;width:100%;height:100%;object-fit:contain;` +
        `${flip ? "transform:scaleX(-1);" : ""}">`;
      vLayer.appendChild(el);
      live.add(el);

      el.getBoundingClientRect(); // force reflow so the transition runs
      requestAnimationFrame(() => {
        el.style.transition = `transform ${dur.toFixed(2)}s linear`;
        el.style.transform = `translateX(${endX | 0}px)`;
      });

      const done = () => { el.remove(); live.delete(el); };
      el.addEventListener("transitionend", done, { once: true });
      setTimeout(done, dur * 1000 + 600); // safety cleanup
    }

    function schedule() {
      const base = isMobile ? 3600 : 1900;
      const span = isMobile ? 4200 : 3000;
      vTimer = setTimeout(() => {
        if (!document.hidden) {
          spawn();
          if (Math.random() < (isMobile ? 0.12 : 0.3))
            setTimeout(() => { if (!document.hidden) spawn(); }, rand(250, 700));
        }
        schedule();
      }, base + Math.random() * span);
    }

    const startTimer = setTimeout(spawn, 900);
    schedule();

    return () => {
      clearTimeout(startTimer);
      clearTimeout(vTimer);
      live.forEach((e) => e.remove());
      live.clear();
    };
  }, []);

  return (
    <div className="vehicle-layer" ref={layer} aria-hidden="true">
      <div className="desert-road">
        <div className="road-surface" />
        <div className="road-edge road-edge--top" />
        <div className="road-dash" />
        <div className="road-edge road-edge--bottom" />
        <div className="road-skirt" />
      </div>
      {/* moving vehicles are injected here by the spawner */}
    </div>
  );
}
