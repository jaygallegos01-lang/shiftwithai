/* REAL EVENTS (handoff §6-G / §10.1 / §10.3). CSS masonry of event photos +
   a reviews surface. Brand rule: REAL photos & reviews only — no stock, no
   invented testimonials. Photos come from events[]; reviews from reviews[].
   While reviews[] is empty, a "connect Google" placeholder card shows. */
import { copy, events, reviews } from "@/lib/content";
import PhotoSlot from "../PhotoSlot";

function Stars({ n }: { n: number }) {
  return <div className="review__stars" aria-label={`${n} out of 5 stars`}>{"★".repeat(n)}{"☆".repeat(5 - n)}</div>;
}

export default function RealEvents() {
  return (
    <section className="section" id="events">
      <div className="container">
        <p className="eyebrow" data-reveal>The proof</p>
        <h2 className="h2" data-reveal>{copy.events.h2}</h2>
        <p className="lead body-muted" data-reveal style={{ marginTop: 18 }}>{copy.events.body}</p>

        <div className="masonry">
          {events.map((e, i) => (
            <PhotoSlot key={i} src={e.src} alt={e.alt} caption={e.alt} minHeight={e.h} />
          ))}

          {/* Reviews: render real ones if present; otherwise the Google placeholder. */}
          {reviews.length > 0
            ? reviews.map((r, i) => (
                <div className="review" key={`rev-${i}`}>
                  <Stars n={r.rating} />
                  <p className="review__quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="review__meta">
                    <span className="review__avatar">{r.author.charAt(0)}</span>
                    <span>{r.author} · {r.date}</span>
                  </div>
                </div>
              ))
            : (
              <div className="review review--google">
                <div className="review__title">Google Reviews</div>
                <Stars n={5} />
                <div style={{ margin: "14px 0" }}>
                  <div className="skeleton-row" />
                  <div className="skeleton-row short" />
                </div>
                <div style={{ margin: "14px 0" }}>
                  <div className="skeleton-row" />
                  <div className="skeleton-row short" />
                </div>
                {/* TO MAKE REAL (handoff §10.3): drop a Google reviews widget
                    (Elfsight / Trustindex / Places API) here, or add entries to
                    `reviews` in lib/content.ts. */}
                <p className="review__meta" style={{ marginTop: 8 }}>
                  Live embed — connect Google Business listing.
                </p>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
