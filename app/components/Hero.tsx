"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MountainHorizon from "./MountainHorizon";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Tie the sun's descent to scrolling out of the hero — it "sets" behind
  // the range as the visitor begins their descent into night.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // The sun sinks (not just fades) behind the range as the descent begins.
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.82, 0.4]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
    >
      {/* Sun — flame gradient, sits behind the peaks and sets on scroll */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[18%] -z-0 h-[58vw] max-h-[460px] w-[58vw] max-w-[460px] -translate-x-1/2 rounded-full md:bottom-[20%]"
        style={{
          y: reduce ? "30%" : sunY,
          opacity: reduce ? 0.85 : sunOpacity,
          scale: reduce ? 0.92 : sunScale,
          background:
            "radial-gradient(circle at 50% 50%, #FFD46A 0%, #FF9A3D 38%, #FF7A28 58%, rgba(226,45,23,0) 72%)",
        }}
      />

      {/* Heat-haze shimmer — hero only, sits just above the horizon */}
      {!reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[14%] h-40 animate-haze"
          style={{
            background:
              "linear-gradient(0deg, rgba(255,154,61,0.18), transparent)",
            filter: "blur(8px)",
          }}
        />
      )}

      {/* Copy — left-aligned editorial thesis, not dead-centered */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-[26vh] md:px-8 md:pb-[24vh]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-5">PHOENIX VALLEY · MOBILE SIM RENTAL</p>

          <h1 className="display text-sand text-[clamp(3.4rem,12vw,8.5rem)] uppercase">
            We bring the
            <br />
            <span className="flame-text">track</span> to you.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/85 md:text-xl">
            Pro-grade racing simulators — delivered, set up, and run by us —
            anywhere in the Valley. Racing today. Flight sims tomorrow.{" "}
            <span className="font-semibold text-sand">Starting at $175.</span>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#pricing" className="btn-flame">
              See pricing &amp; book
            </a>
            <a href="#how" className="btn-ghost">
              How it works
            </a>
          </div>

          <p className="eyebrow mt-10 !tracking-[0.45em] text-ash">
            ANY SIM · ANYWHERE
          </p>
        </motion.div>
      </div>

      {/* The horizon, anchored to the bottom of the hero */}
      <MountainHorizon
        variant="hero"
        className="absolute inset-x-0 bottom-0 z-[5] h-[34vh] w-full"
      />
    </section>
  );
}
