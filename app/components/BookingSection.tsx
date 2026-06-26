"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/**
 * Instant-booking affordance. The real deploy drops an embedded Calendly or
 * Square booking widget into the labeled slot; the success state (Go Green,
 * the only place the brand uses it) confirms instantly. The toggle below
 * previews that confirmed state for the client without faking a transaction.
 */
export default function BookingSection() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section id="book" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4 text-center">RESERVE YOUR DATE</p>
          <h2 className="display text-center text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
            Ready to race? <span className="flame-text">Pick a date.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-sand/80">
            Book online with a deposit in under two minutes. We confirm
            instantly — no quote forms, no waiting on a callback.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            {confirmed ? (
              <div
                className="rounded-xl border p-8 text-center md:p-12"
                style={{
                  borderColor: "rgba(55,217,139,0.5)",
                  background: "rgba(55,217,139,0.06)",
                }}
              >
                <span
                  className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full"
                  style={{ background: "rgba(55,217,139,0.15)" }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#37D98B"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="mono text-sm uppercase tracking-[0.2em]" style={{ color: "#37D98B" }}>
                  Booking confirmed
                </p>
                <p className="mt-3 text-sand/85">
                  You&apos;re on the grid. A confirmation and your operator&apos;s
                  details are on the way.
                </p>
                <button
                  onClick={() => setConfirmed(false)}
                  className="btn-ghost mt-7"
                >
                  Reset preview
                </button>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-flame/40 bg-ink/60 p-6 md:p-8">
                {/* BOOKING WIDGET SLOT — embed Calendly / Square here */}
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-5 rounded-lg border border-sand/10 bg-asphalt/60 p-8 text-center">
                  <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-ash">
                    Embedded booking widget · Calendly / Square
                  </p>
                  <p className="max-w-sm text-sm text-sand/70">
                    Live date picker, tier selection, and deposit checkout drop
                    in here. The button below previews the instant-confirm
                    state.
                  </p>
                  <button onClick={() => setConfirmed(true)} className="btn-flame">
                    Preview instant confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
