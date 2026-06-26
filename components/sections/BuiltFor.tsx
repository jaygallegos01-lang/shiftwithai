/* BUILT FOR (handoff §6-C). Photo + vertical use-case index, then the
   weekend-rental band (Blue Ocean #6 — a category nobody else offers). */
import { copy, useCases } from "@/lib/content";
import PhotoSlot from "../PhotoSlot";
import BookButton from "../BookButton";

export default function BuiltFor() {
  return (
    <section className="section" id="built">
      <div className="container">
        <p className="eyebrow" data-reveal>Use cases</p>
        <h2 className="h2" data-reveal>{copy.built.h2}</h2>

        <div className="two-col" style={{ marginTop: 36 }} data-reveal>
          <PhotoSlot
            alt="Corporate team-building tournament around a Pro rig"
            caption="Wide shot — a corporate crowd around the rigs"
            minHeight={360}
          />
          <ul className="usecases" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {useCases.map((u) => (
              <li className="usecase" key={u.title}>
                <span className="usecase__title">{u.title}</span>
                <span className="usecase__note">{u.note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weekend home rental band */}
        <div className="weekend" data-reveal>
          <div>
            <div className="weekend__big">{copy.built.weekendBig}</div>
            <h3 className="h3" style={{ margin: "10px 0 8px", fontSize: "clamp(1.6rem,4vw,2.4rem)" }}>
              {copy.built.weekendTitle}
            </h3>
            <p className="body-muted" style={{ maxWidth: "44ch" }}>{copy.built.weekendBody}</p>
          </div>
          <BookButton>Book the weekend</BookButton>
        </div>
      </div>
    </section>
  );
}
