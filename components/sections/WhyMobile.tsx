/* WHY MOBILE (handoff §6-B). Market intel: "we deliver TO you; competitors
   make you come to them" + the anti-template "What we handle" manifest. */
import { copy, weHandle } from "@/lib/content";

export default function WhyMobile() {
  return (
    <section className="section" id="why">
      <div className="container two-col" data-reveal>
        <div>
          <p className="eyebrow">The mobile difference</p>
          <h2 className="h2">{copy.why.h2}</h2>
          <p className="lead body-muted" style={{ marginTop: 22 }}>{copy.why.body}</p>
        </div>

        <div className="handle-card">
          <div className="handle-card__title">What we handle</div>
          {weHandle.map((step) => (
            <div className="handle-row" key={step}>
              <span className="handle-dot" />
              <span>{step}</span>
            </div>
          ))}
          <div className="handle-final">You just race.</div>
        </div>
      </div>
    </section>
  );
}
