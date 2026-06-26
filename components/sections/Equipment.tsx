/* EQUIPMENT (handoff §6-E). Copy + spec tags + a photo slot. */
import { copy, equipmentTags } from "@/lib/content";
import PhotoSlot from "../PhotoSlot";

export default function Equipment() {
  return (
    <section className="section" id="equipment" style={{ scrollMarginTop: "var(--nav-h)" }}>
      <div className="container two-col" data-reveal>
        <div>
          <p className="eyebrow">The gear</p>
          <h2 className="h2">{copy.equipment.h2}</h2>
          <p className="lead body-muted" style={{ marginTop: 22 }}>{copy.equipment.body}</p>
          <div className="spec-tags">
            {equipmentTags.map((tag) => (
              <span className="spec-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <PhotoSlot
          alt="Triple-screen Pro rig close-up"
          caption="Close-up — triple screens, direct-drive wheel"
          minHeight={360}
        />
      </div>
    </section>
  );
}
