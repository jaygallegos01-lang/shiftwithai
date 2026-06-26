/* FOR RIG OWNERS (handoff §6-H / Blue Ocean #2 & #7). Consignment-fleet
   recruitment — a unique channel no competitor offers on their site. Opens
   the booking modal in PARTNER mode. */
import { owners } from "@/lib/content";
import BookButton from "../BookButton";

export default function RigOwners() {
  return (
    <section className="section" id="owners">
      <div className="container">
        <div className="owners" data-reveal>
          <p className="eyebrow">Rig Partner Program</p>
          <h2 className="h2" style={{ maxWidth: "16ch" }}>{owners.heading}</h2>
          <p className="lead body-muted" style={{ margin: "20px 0 28px", maxWidth: "60ch" }}>
            {owners.body}
          </p>
          <BookButton partner>Become a rig partner</BookButton>
        </div>
      </div>
    </section>
  );
}
