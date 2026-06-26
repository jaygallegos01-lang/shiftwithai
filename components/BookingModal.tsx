"use client";

/* =============================================================================
   BOOKING MODAL (handoff F4)
   -----------------------------------------------------------------------------
   - Customer mode: package + duration -> live quote from PRICES, plus
     event-type / date / name / contact -> submit -> "You're on the grid".
   - Partner mode: same shell, rig-owner consignment copy, no price.
   - Body scroll locks while open; Esc + scrim click close it.

   >>> TO WIRE REAL BOOKING (handoff §10.5) <<<
   Replace the body of `submit()` below with ONE of:
     (a) Calendly  : open Calendly popup with prefilled package, OR embed an
                     iframe where the form fields are (see EMBED SLOT comment).
     (b) Square    : redirect to a Square Appointments / deposit checkout URL.
     (c) Backend   : await fetch('/api/book', { method:'POST', body: payload })
                     then show the success state on 200.
   The `payload` object is already assembled for you.
============================================================================= */
import { useEffect, useRef, useState } from "react";
import { PRICES, tiers, type Tier } from "@/lib/content";
import { IconClose, IconCheck } from "./icons";

type TierId = Tier["id"];
type Dur = "Half day" | "Full day";

export default function BookingModal({
  initialTier,
  partner,
  onClose,
}: {
  initialTier: TierId;
  partner: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [tier, setTier] = useState<TierId>(initialTier);
  const [dur, setDur] = useState<Dur>("Full day");
  const [fDate, setFDate] = useState("");
  const [fType, setFType] = useState("Birthday party");
  const [fName, setFName] = useState("");
  const [fContact, setFContact] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const panelRef = useRef<HTMLDivElement>(null);

  const quote = "$" + (dur === "Half day" ? PRICES[tier].half : PRICES[tier].full);

  // Body scroll-lock while open; restore on unmount (handoff §11 #3).
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function validate() {
    const e: Record<string, string> = {};
    if (!partner && !fDate) e.fDate = "Pick a date.";
    if (!fName.trim()) e.fName = "Your name, please.";
    if (!fContact.trim()) e.fContact = "Phone or email so we can confirm.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    // This is the shape to POST to your booking endpoint / Calendly prefill.
    const payload = {
      tier: partner ? null : tier,
      dur: partner ? null : dur,
      quote: partner ? null : quote,
      fDate,
      fType: partner ? "Rig partner inquiry" : fType,
      fName,
      fContact,
    };
    // eslint-disable-next-line no-console
    console.log("[Sonoran Sims] booking payload →", payload); // replace with real call
    setStep("success");
  }

  const tierName = tiers.find((t) => t.id === tier)?.name ?? tier;

  return (
    <div className="modal-scrim" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" ref={panelRef} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close booking">
          <IconClose />
        </button>

        {step === "form" ? (
          <form onSubmit={submit} noValidate>
            <div className="modal__eyebrow">
              {partner ? "Rig Partner Program" : "Book your session"}
            </div>
            <h2 className="modal__title">
              {partner ? "Put your rig to work." : "Lock in your date."}
            </h2>
            <p className="modal__sub">
              {partner
                ? "Tell us about your rig and we'll be in touch about joining the consignment fleet."
                : "Two minutes to book. We deliver, set up, run it, and pack out."}
            </p>

            {/* ===== EMBED SLOT =====================================================
                To embed Calendly/Square instead of this form, delete the fields
                below and drop your widget here, e.g.:
                <div className="calendly-inline-widget" data-url="https://calendly.com/sonoransims/booking" />
               ==================================================================== */}

            {!partner && (
              <>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="bk-tier">Package</label>
                    <select id="bk-tier" value={tier} onChange={(e) => setTier(e.target.value as TierId)}>
                      {tiers.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — ${t.half}/${t.full}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="bk-dur">Duration</label>
                    <select id="bk-dur" value={dur} onChange={(e) => setDur(e.target.value as Dur)}>
                      <option>Half day</option>
                      <option>Full day</option>
                    </select>
                  </div>
                </div>

                <div className="quote">
                  <span className="quote__label">Estimated total</span>
                  <span className="quote__amount">{quote}</span>
                </div>

                <div className="field">
                  <label htmlFor="bk-type">Event type</label>
                  <select id="bk-type" value={fType} onChange={(e) => setFType(e.target.value)}>
                    <option>Birthday party</option>
                    <option>Corporate / team-building</option>
                    <option>Bachelor / bachelorette</option>
                    <option>Brewery / car-club activation</option>
                    <option>F1 watch party</option>
                    <option>Weekend home rental</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="bk-date">Event date</label>
                  <input id="bk-date" type="date" value={fDate} onChange={(e) => setFDate(e.target.value)} />
                  {errors.fDate && <div className="field-error">{errors.fDate}</div>}
                </div>
              </>
            )}

            <div className="field">
              <label htmlFor="bk-name">Name</label>
              <input id="bk-name" type="text" placeholder="Your name" value={fName} onChange={(e) => setFName(e.target.value)} />
              {errors.fName && <div className="field-error">{errors.fName}</div>}
            </div>

            <div className="field">
              <label htmlFor="bk-contact">Phone or email</label>
              <input id="bk-contact" type="text" placeholder="How we reach you" value={fContact} onChange={(e) => setFContact(e.target.value)} />
              {errors.fContact && <div className="field-error">{errors.fContact}</div>}
            </div>

            <button type="submit" className="btn btn--flame">
              {partner ? "Send rig inquiry" : `Reserve for ${quote}`}
            </button>
            <p className="modal__embed-note">
              No charge yet — we confirm availability, then take a deposit to lock it in.
            </p>
          </form>
        ) : (
          <div className="success">
            <div className="success__check"><IconCheck /></div>
            <h2 className="success__title">
              {partner ? "Inquiry received." : "You're on the grid."}
            </h2>
            <p className="success__summary">
              {partner ? (
                <>
                  Thanks, <b>{fName}</b>. We'll reach out at <b>{fContact}</b> about
                  joining the Sonoran Sims fleet.
                </>
              ) : (
                <>
                  <b>{tierName}</b> · <b>{dur}</b>
                  <br />
                  {fDate && (<><b>{fDate}</b><br /></>)}
                  Estimated total <b>{quote}</b>
                  <br />
                  We'll confirm at <b>{fContact}</b>.
                </>
              )}
            </p>
            <button className="btn btn--outline" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}
