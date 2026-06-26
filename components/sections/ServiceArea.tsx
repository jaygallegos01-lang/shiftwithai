/* SERVICE AREA (handoff §6-I / Blue Ocean #1: Sonoran Desert identity).
   City pills (first = filled) + a flame-rimmed "Valley of the Sun" range.
   The SEO line targets consumer search intent (market intel "Website" tab). */
import { copy, serviceCities } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section className="section" id="service" style={{ scrollMarginTop: "var(--nav-h)" }}>
      <div className="container">
        <p className="eyebrow" data-reveal>Service area</p>
        <h2 className="h2" data-reveal style={{ maxWidth: "20ch" }}>{copy.service.h2}</h2>
        <p className="lead body-muted" data-reveal style={{ marginTop: 18 }}>{copy.service.seo}</p>

        <div className="service-panel" data-reveal>
          <div className="service-panel__top">
            <div className="service-label">Valley of the Sun</div>
            <div className="city-pills">
              {serviceCities.map((city, i) => (
                <span key={city} className={`city-pill ${i === 0 ? "city-pill--on" : ""}`}>
                  {city}
                </span>
              ))}
              <span className="city-pill city-pill--more">+ everywhere between</span>
            </div>
          </div>

          {/* "Valley of the Sun" range with a flame rim along the bottom */}
          <svg className="service-range" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="valleyRim" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#FFC247" />
                <stop offset="0.52" stopColor="#FF7A28" />
                <stop offset="1" stopColor="#E22D17" />
              </linearGradient>
            </defs>
            <path d="M0 70 L180 40 L340 75 L520 35 L720 80 L920 45 L1120 78 L1320 50 L1440 72 L1440 120 L0 120 Z" fill="#241019" />
            <polyline points="0,70 180,40 340,75 520,35 720,80 920,45 1120,78 1320,50 1440,72" fill="none" stroke="url(#valleyRim)" strokeWidth="2" opacity="0.8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
