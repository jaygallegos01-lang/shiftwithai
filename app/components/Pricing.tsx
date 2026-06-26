import Reveal from "./Reveal";

type Tier = {
  name: string;
  half: string;
  full: string;
  spec: string;
  best: string;
  recommended?: boolean;
};

const tiers: Tier[] = [
  {
    name: "STARTER",
    half: "175",
    full: "299",
    spec: "PS5 + racing wheel + pedals + monitor, delivered and set up.",
    best: "Best for first-timers, kids' parties, casual fun.",
  },
  {
    name: "PRO",
    half: "299",
    full: "499",
    spec: "PC + direct-drive wheel + load-cell pedals + triple screens + live tournament leaderboard.",
    best: "Best for corporate events, serious racers, competitions.",
    recommended: true,
  },
  {
    name: "MOTION",
    half: "449",
    full: "799",
    spec: "Everything in Pro + a full-motion platform + a dedicated operator for your entire event.",
    best: "Best for premium events, brand activations, the full experience.",
  },
];

function PriceLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-sand/10 py-2.5">
      <span className="mono text-[0.68rem] uppercase tracking-[0.2em] text-ash">
        {label}
      </span>
      <span className="mono text-2xl font-semibold tabular-nums text-sand">
        <span className="text-ash">$</span>
        {value}
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">PRICING · NO QUOTES, NO GAMES</p>
          <h2 className="display max-w-3xl text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
            Here&apos;s the price.{" "}
            <span className="text-ash">
              Most of our competitors won&apos;t show you theirs.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal as="div" delay={i * 0.08} key={t.name}>
              <div
                className={`relative flex h-full flex-col rounded-xl border p-6 ${
                  t.recommended
                    ? "border-flame/70 bg-ink"
                    : "border-sand/10 bg-ink/60"
                }`}
                style={
                  t.recommended
                    ? { boxShadow: "0 0 0 1px rgba(255,122,40,0.35), 0 30px 60px -30px rgba(255,122,40,0.5)" }
                    : undefined
                }
              >
                {t.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-flame px-3 py-1 mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-asphalt">
                    Most popular
                  </span>
                )}

                <div className="mb-5 flex items-center justify-between">
                  <h3 className="display text-3xl uppercase text-sand">
                    {t.name}
                  </h3>
                  <span
                    aria-hidden
                    className={`h-2.5 w-2.5 rounded-full ${
                      t.recommended ? "bg-go" : "bg-ash/40"
                    }`}
                  />
                </div>

                <div className="mb-5">
                  <PriceLine label="Half day" value={t.half} />
                  <PriceLine label="Full day" value={t.full} />
                </div>

                <p className="mb-4 text-sm leading-relaxed text-sand/80">
                  {t.spec}
                </p>
                <p className="mt-auto mb-5 text-xs italic leading-relaxed text-ash">
                  {t.best}
                </p>

                <a
                  href="#book"
                  className={t.recommended ? "btn-flame w-full" : "btn-ghost w-full"}
                >
                  Book {t.name.charAt(0) + t.name.slice(1).toLowerCase()}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Price-anchor — a quiet, confident dashboard strip, not a banner */}
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-xl border border-sand/10 bg-asphalt/70">
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex flex-wrap items-stretch gap-6 md:gap-10">
                <div>
                  <p className="mono text-[0.62rem] uppercase tracking-[0.22em] text-ash">
                    Our full day, tops out at
                  </p>
                  <p className="mono mt-1 text-4xl font-semibold tabular-nums text-sand">
                    $799
                  </p>
                </div>
                <div className="hidden w-px self-stretch bg-sand/10 md:block" />
                <div>
                  <p className="mono text-[0.62rem] uppercase tracking-[0.22em] text-ash">
                    vs. most mobile competitors
                  </p>
                  <p className="mono mt-1 text-4xl font-semibold tabular-nums text-ash">
                    50–85%
                    <span className="ml-1 text-base text-ash/70">less</span>
                  </p>
                </div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-sand/85">
                A full day with us costs less than{" "}
                <span className="font-semibold text-flame">three hours</span>{" "}
                with most mobile competitors — and 50–85% less than comparable
                premium rentals. We just don&apos;t make you email us to find
                that out.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mono mt-6 text-center text-xs uppercase tracking-[0.16em] text-ash">
            Add VR · an extra rig · extended hours · a sunset night-race package
          </p>
          <p className="mt-3 text-center text-sm text-sand/80">
            Book online with a deposit in under two minutes. We confirm
            instantly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
