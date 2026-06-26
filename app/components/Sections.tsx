import Reveal from "./Reveal";
import PhotoSlot from "./PhotoSlot";
import MountainHorizon from "./MountainHorizon";

/* ------------------------------------------------------------------ */
/* 2 · WHY MOBILE  (+ the genuinely-sequential "how it works" readout) */
/* ------------------------------------------------------------------ */

const runSteps = [
  { t: "00:00", label: "We load the rigs", sub: "Direct-drive wheels, pedals, screens, motion platforms" },
  { t: "00:45", label: "Drive to your venue", sub: "Living room, office, backyard — anywhere in the Valley" },
  { t: "01:30", label: "Set up & calibrate", sub: "Triple-screen rigs built and dialed in before guests arrive" },
  { t: "—", label: "Run the whole session", sub: "Staffed and operated by us, start to finish" },
  { t: "END", label: "Pack it out", sub: "We break down and haul away. You just raced." },
];

export function WhyMobile() {
  return (
    <section id="how" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div>
            <p className="eyebrow mb-4">WHY MOBILE</p>
            <h2 className="display text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
              Everyone else makes you{" "}
              <span className="text-ash">drive to them.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-sand/85">
              We load the rigs, drive to your venue, set up triple-screen
              direct-drive simulators, run the whole session, and pack it out.
              You just race.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-sand/70">
              And this isn&apos;t an arcade cabinet from a party-rental
              warehouse — it&apos;s the same direct-drive wheels, load-cell
              pedals, and motion platforms serious sim racers train on, brought
              to your living room, office, or backyard.
            </p>
          </div>
        </Reveal>

        {/* Sequential run-of-show as a telemetry readout, not numbered circles */}
        <Reveal>
          <div className="rounded-xl border border-sand/10 bg-asphalt/70 p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-sand/10 pb-3">
              <span className="mono text-[0.62rem] uppercase tracking-[0.22em] text-ash">
                Run of show
              </span>
              <span className="mono text-[0.62rem] uppercase tracking-[0.22em] text-flame">
                Operated by us
              </span>
            </div>
            <ol className="space-y-1">
              {runSteps.map((s) => (
                <li
                  key={s.label}
                  className="grid grid-cols-[3.4rem_1fr] items-baseline gap-3 border-b border-sand/5 py-3 last:border-0"
                >
                  <span className="mono text-xs tabular-nums text-flame">
                    {s.t}
                  </span>
                  <span>
                    <span className="block font-semibold text-sand">
                      {s.label}
                    </span>
                    <span className="mono mt-0.5 block text-[0.7rem] leading-relaxed text-ash">
                      {s.sub}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · BUILT FOR                                                       */
/* ------------------------------------------------------------------ */

const useCases = [
  {
    title: "Birthday parties",
    body: "Backyard or living room. The hit of the party, set up and run for you.",
    photo: "kids' birthday party, rig in the backyard",
  },
  {
    title: "Corporate team-building",
    body: "A turnkey activity HR and event coordinators can book in minutes — leaderboard included.",
    photo: "corporate team-building event in progress",
  },
  {
    title: "Bachelor / bachelorette",
    body: "Arizona hosts 400+ weddings a week. Give the party something they'll actually remember.",
    photo: "bachelor party group around the sim",
  },
  {
    title: "Brewery & car-club activations",
    body: "Cars & Coffee, local car clubs, taproom nights — a crowd-stopper that pulls people in.",
    photo: "brewery activation, crowd watching the leaderboard",
  },
];

export function BuiltFor() {
  return (
    <section id="built-for" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">BUILT FOR</p>
          <h2 className="display max-w-3xl text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
            Birthday parties to <span className="flame-text">boardrooms.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/85">
            Phoenix throws year-round — no snow, 8+ months of outdoor season,
            and a calendar that never really stops.
          </p>
        </Reveal>

        {/* Editorial blocks — alternating photo / copy, not an emoji card grid */}
        <div className="mt-14 space-y-5">
          {useCases.map((u, i) => (
            <Reveal as="div" key={u.title} delay={(i % 2) * 0.06}>
              <article
                className={`grid items-center gap-6 rounded-xl border border-sand/10 bg-ink/40 p-4 md:grid-cols-2 md:gap-10 md:p-5 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <PhotoSlot label={u.photo} ratio="aspect-[16/10]" />
                <div className="px-2 md:px-4">
                  <h3 className="display text-3xl uppercase text-sand md:text-4xl">
                    {u.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-sand/80">
                    {u.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <p className="mono mt-2 text-sm uppercase tracking-[0.12em] text-ash">
              Also built for — Spring Training &amp; Barrett-Jackson-week
              corporate parties.
            </p>
          </Reveal>
        </div>

        {/* Two featured differentiator callouts */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-xl border border-flame/40 bg-ink p-7 md:p-9">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle,#FF7A28,transparent 70%)" }}
              />
              <p className="eyebrow mb-3">WEEKEND HOME RENTAL</p>
              <h3 className="display text-4xl uppercase text-sand md:text-5xl">
                Drop off Friday.
                <br />
                Pick up Monday.
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-sand/80">
                Your living room is the track all weekend. Nobody else in
                Arizona offers it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-xl border border-sand/10 bg-ink p-7 md:p-9">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle,#E22D17,transparent 70%)" }}
              />
              <p className="eyebrow mb-3">RACE-WEEKEND PACKAGE</p>
              <h3 className="display text-4xl uppercase text-sand md:text-5xl">
                F1 Sunday,
                <br />
                on your couch.
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-sand/80">
                Watch the race, then settle it on the sim. A watch-party-plus-
                simulator combo built for Arizona&apos;s growing F1 crowd.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5 · THE EQUIPMENT                                                   */
/* ------------------------------------------------------------------ */

export function Equipment() {
  return (
    <section id="equipment" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <PhotoSlot
            label="triple-screen direct-drive rig, close-up"
            ratio="aspect-[4/3]"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <div>
            <p className="eyebrow mb-4">THE EQUIPMENT</p>
            <h2 className="display text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
              Direct-drive.
              <br />
              Load-cell.
              <br />
              <span className="flame-text">Full-motion.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand/85">
              Direct-drive wheelbases with real force feedback. Load-cell brake
              pedals that respond to pressure, not position. Triple-monitor
              wraparound or VR. Full-motion platforms that pitch and rumble with
              the track. The gap between this and an arcade game is the entire
              point.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6 · YOUR DATA, AFTER THE RACE                                       */
/* ------------------------------------------------------------------ */

const laps = [
  { pos: "P1", name: "You", time: "1:41.882", gap: "—" },
  { pos: "P2", name: "Marcus", time: "1:42.114", gap: "+0.232" },
  { pos: "P3", name: "Dana", time: "1:43.005", gap: "+1.123" },
  { pos: "P4", name: "Eli", time: "1:43.770", gap: "+1.888" },
];

export function DataHook() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div>
            <p className="eyebrow mb-4">EVERY LAP COUNTS</p>
            <h2 className="display text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
              Leave with your <span className="flame-text">lap times.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand/85">
              Telemetry, best laps, and head-to-head results — emailed to every
              guest after the event. Settle the &ldquo;I was faster&rdquo;
              argument with receipts.
            </p>
          </div>
        </Reveal>

        {/* Mock results card — mono / dashboard aesthetic */}
        <Reveal delay={0.06}>
          <div className="overflow-hidden rounded-xl border border-sand/10 bg-asphalt/80">
            <div className="flex items-center justify-between border-b border-sand/10 px-5 py-3">
              <span className="mono text-[0.62rem] uppercase tracking-[0.22em] text-ash">
                Session results · sent to your inbox
              </span>
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-go"
                style={{ boxShadow: "0 0 10px #37D98B" }}
              />
            </div>
            <div className="px-5 py-2">
              <div className="grid grid-cols-[2.4rem_1fr_auto_auto] gap-3 border-b border-sand/10 py-2 mono text-[0.6rem] uppercase tracking-[0.16em] text-ash">
                <span>Pos</span>
                <span>Driver</span>
                <span className="text-right">Best lap</span>
                <span className="text-right">Gap</span>
              </div>
              {laps.map((l) => (
                <div
                  key={l.pos}
                  className={`grid grid-cols-[2.4rem_1fr_auto_auto] items-baseline gap-3 border-b border-sand/5 py-3 last:border-0 ${
                    l.pos === "P1" ? "text-sand" : "text-sand/75"
                  }`}
                >
                  <span
                    className={`mono text-sm font-semibold ${
                      l.pos === "P1" ? "text-flame" : "text-ash"
                    }`}
                  >
                    {l.pos}
                  </span>
                  <span className="font-medium">{l.name}</span>
                  <span className="mono text-right text-sm tabular-nums">
                    {l.time}
                  </span>
                  <span className="mono text-right text-sm tabular-nums text-ash">
                    {l.gap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7 · REAL EVENTS                                                     */
/* ------------------------------------------------------------------ */

const grid = [
  { label: "backyard party, rig set up at dusk", span: "row-span-2" },
  { label: "corporate event, leaderboard on screen", span: "" },
  { label: "kid in the seat, parents watching", span: "" },
  { label: "triple-screen close-up, hands on wheel", span: "" },
  { label: "brewery activation crowd", span: "row-span-2" },
  { label: "winner with lap-time printout", span: "" },
];

export function RealEvents() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">FROM REAL EVENTS</p>
          <h2 className="display text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
            Real events. <span className="text-ash">Real photos.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 md:auto-rows-[180px] md:grid-cols-3">
            {grid.map((g) => (
              <PhotoSlot
                key={g.label}
                label={g.label}
                ratio=""
                className={`h-full ${g.span}`}
              />
            ))}
          </div>
        </Reveal>

        {/* Google Reviews embed slot — real beats fabricated quotes */}
        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-dashed border-sand/20 bg-ink/50 p-6 text-center md:flex-row md:text-left">
            <div>
              <p className="mono text-[0.62rem] uppercase tracking-[0.22em] text-ash">
                Google Reviews embed
              </p>
              <p className="mt-1 text-sm text-sand/75">
                Live star rating and recent reviews render here at launch.
              </p>
            </div>
            <span className="mono text-sm text-ash">★ ★ ★ ★ ★</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8 · FOR RIG OWNERS                                                  */
/* ------------------------------------------------------------------ */

export function RigOwners() {
  return (
    <section id="rig-owners" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-sand/10 bg-ink p-8 md:p-14">
            <div
              aria-hidden
              className="absolute -left-20 bottom-0 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(circle,#FF7A28,transparent 70%)" }}
            />
            <div className="relative max-w-2xl">
              <p className="eyebrow mb-4">FOR RIG OWNERS</p>
              <h2 className="display text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
                Own a sim rig? <span className="flame-text">Put it to work.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-sand/85">
                We run a consignment fleet. List your rig with us — we book the
                events and handle the logistics, you earn on every booking. No
                marketing, no scheduling, no hauling unless you want to.
                It&apos;s sitting in your garage 90% of the time anyway.
              </p>
              <a href="#book" className="btn-flame mt-8">
                Become a rig partner
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9 · SERVICE AREA                                                    */
/* ------------------------------------------------------------------ */

const cities = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Gilbert",
  "Chandler",
  "Glendale",
];

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow mb-4">THE VALLEY</p>
          <h2 className="display max-w-3xl text-sand text-[clamp(2.4rem,6vw,4.6rem)] uppercase">
            Born in the Sonoran Desert.{" "}
            <span className="text-ash">Serving the whole Valley.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/85">
            Phoenix, Scottsdale, Tempe, Mesa, Gilbert, Chandler, Glendale — and
            everywhere between. If you&apos;re in the Valley of the Sun,
            we&apos;ll bring the track to you.
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-10 flex flex-wrap gap-3">
            {cities.map((c) => (
              <li
                key={c}
                className="mono rounded-full border border-sand/15 px-4 py-2 text-xs uppercase tracking-[0.12em] text-sand/80"
              >
                {c}
              </li>
            ))}
            <li className="mono rounded-full border border-flame/40 px-4 py-2 text-xs uppercase tracking-[0.12em] text-flame">
              + everywhere between
            </li>
          </ul>
        </Reveal>
      </div>

      <MountainHorizon
        variant="flat"
        className="mt-16 h-32 w-full opacity-80 md:h-44"
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9.5 · WHAT'S NEXT — slim band                                       */
/* ------------------------------------------------------------------ */

export function WhatsNext() {
  return (
    <section className="relative border-y border-sand/10 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="md:max-w-xs">
          <p className="eyebrow mb-2">WHAT&apos;S NEXT</p>
          <h2 className="display text-3xl uppercase text-sand md:text-4xl">
            Flight sims are coming.
          </h2>
        </div>
        <p className="max-w-xl leading-relaxed text-sand/70">
          Same model, new horizon. Arizona&apos;s aviation community is huge,
          and nobody offers mobile flight-sim rental anywhere in the state.{" "}
          <span className="mono text-sand/85">&ldquo;Any Sim, Anywhere&rdquo;</span>{" "}
          isn&apos;t a slogan — it&apos;s the plan.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10 · FOOTER                                                         */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="relative bg-asphalt pb-28 pt-20 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div>
              {/* LOGO SLOT — footer */}
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-flame" aria-hidden>
                  <span className="block h-4 w-4 rounded-full bg-asphalt" />
                </span>
                <span className="display text-2xl uppercase text-sand">
                  Sonoran <span className="flame-text">Sims</span>
                </span>
              </div>
              <p className="eyebrow mt-5 !tracking-[0.4em] text-ash">
                ANY SIM · ANYWHERE
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
              <div>
                <p className="mono mb-3 text-[0.62rem] uppercase tracking-[0.2em] text-ash">
                  Contact
                </p>
                <p className="text-sand/85">Julio Gallegos, CEO</p>
                <a
                  href="https://sonoransims.com"
                  className="mt-1 block text-sand/85 transition-colors hover:text-flame"
                >
                  sonoransims.com
                </a>
              </div>
              <div>
                <p className="mono mb-3 text-[0.62rem] uppercase tracking-[0.2em] text-ash">
                  Follow
                </p>
                <a href="#" className="block text-sand/85 transition-colors hover:text-flame">
                  Instagram
                </a>
                <a href="#" className="mt-1 block text-sand/85 transition-colors hover:text-flame">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <hr className="hairline my-10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-ash">
            © {new Date().getFullYear()} Sonoran Sims · Phoenix Valley, Arizona
          </p>
          <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-ash">
            Mobile racing simulator rental · Phoenix · Scottsdale · Tempe · Mesa
          </p>
        </div>
      </div>
    </footer>
  );
}
