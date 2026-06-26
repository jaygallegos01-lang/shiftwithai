/* YOUR DATA (handoff §6-F / F3 / Blue Ocean #8). The faux session-results
   dashboard sells the "leave with your lap times" hook. Data is in
   results{} in lib/content.ts — swap for real telemetry later. */
import { copy, results } from "@/lib/content";

export default function YourData() {
  return (
    <section className="section" id="data">
      <div className="container two-col" data-reveal>
        <div>
          <p className="eyebrow">Post-event telemetry</p>
          <h2 className="h2">{copy.data.h2}</h2>
          <p className="lead body-muted" style={{ marginTop: 22 }}>{copy.data.body}</p>
        </div>

        <div className="results" role="img" aria-label="Sample session results card">
          <div className="results__head">
            <span className="results__title">Session Results</span>
            <span className="pill-go"><span className="dot-go" /> Emailed</span>
          </div>
          <div className="results__meta">{results.meta}</div>

          <table className="lb">
            <thead>
              <tr><th>Pos</th><th>Driver</th><th>Best lap</th><th>Gap</th></tr>
            </thead>
            <tbody>
              {results.leaderboard.map((r, i) => (
                <tr key={r.pos} className={i === 0 ? "p1" : ""}>
                  <td>{r.pos}</td>
                  <td>{r.driver}</td>
                  <td>{r.best}</td>
                  <td className="gap">{r.gap || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {results.sectors.map((s) => (
            <div className="sector" key={s.label}>
              <div className="sector__top"><span>{s.label}</span><span>{s.time}</span></div>
              <div className="sector__bar"><div className="sector__fill" style={{ width: `${s.pct}%` }} /></div>
            </div>
          ))}

          <div className="results__foot">Full results emailed to every driver after the session.</div>
        </div>
      </div>
    </section>
  );
}
