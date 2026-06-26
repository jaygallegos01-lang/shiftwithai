/* =============================================================================
   BOOKING ENDPOINT  —  POST /api/book
   -----------------------------------------------------------------------------
   Receives a booking (or rig-partner inquiry) from the modal and emails it to
   the business inbox. Uses Resend's REST API directly (no npm dependency) so it
   works on any runtime with `fetch`.

   >>> TO GO LIVE (2 minutes) <<<
     1. Create a free account at https://resend.com and grab an API key.
     2. In your host (Vercel → Project → Settings → Environment Variables) add:
          RESEND_API_KEY        = re_xxxxxxxx           (required to send mail)
          BOOKING_NOTIFY_EMAIL  = hello@sonoransims.com (where leads are sent)
          BOOKING_FROM          = Sonoran Sims <bookings@sonoransims.com>
     3. Verify your domain in Resend so BOOKING_FROM can use @sonoransims.com.
        (Until then you can test with the default "onboarding@resend.dev", which
        only delivers to the email on your own Resend account.)

   If RESEND_API_KEY is NOT set, the route still returns ok and logs the booking
   to the server console (so the deployed site keeps working as a demo) — but it
   reports delivered:false so you know mail isn't actually going out yet.
============================================================================= */
import { NextResponse } from "next/server";

type BookingBody = {
  tier?: string | null;
  dur?: string | null;
  quote?: string | null;
  fDate?: string;
  fType?: string;
  fName?: string;
  fContact?: string;
};

const looksLikeEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
const esc = (s = "") =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(req: Request) {
  let body: BookingBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { tier, dur, quote, fDate = "", fType = "", fName = "", fContact = "" } = body;
  const isPartner = fType === "Rig partner inquiry";

  // Server-side validation (never trust the client).
  const missing: string[] = [];
  if (!fName.trim()) missing.push("name");
  if (!fContact.trim()) missing.push("contact");
  if (!isPartner && !fDate.trim()) missing.push("date");
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing required field(s): ${missing.join(", ")}.` },
      { status: 422 }
    );
  }

  const subject = isPartner
    ? `New rig partner inquiry — ${fName}`
    : `New booking — ${fName} · ${tier ?? "?"} ${dur ?? ""} ${quote ?? ""}`.trim();

  const rows: [string, string][] = isPartner
    ? [["Type", "Rig partner inquiry"], ["Name", fName], ["Contact", fContact]]
    : [
        ["Package", String(tier ?? "")],
        ["Duration", String(dur ?? "")],
        ["Estimated total", String(quote ?? "")],
        ["Event type", fType],
        ["Event date", fDate],
        ["Name", fName],
        ["Contact", fContact],
      ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nReceived: ${new Date().toISOString()}`;
  const html =
    `<h2 style="font-family:Arial,sans-serif">${esc(subject)}</h2>` +
    `<table style="font-family:Arial,sans-serif;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 14px 6px 0;color:#666">${esc(k)}</td>` +
          `<td style="padding:6px 0"><b>${esc(v) || "—"}</b></td></tr>`
      )
      .join("") +
    `</table><p style="font-family:Arial,sans-serif;color:#999;font-size:12px">Received ${new Date().toLocaleString()}</p>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL || "hello@sonoransims.com";
  const from = process.env.BOOKING_FROM || "Sonoran Sims <onboarding@resend.dev>";

  // No key configured yet → log and succeed (keeps the demo functional).
  if (!apiKey) {
    // eslint-disable-next-line no-console
    console.warn("[Sonoran Sims] RESEND_API_KEY not set — booking NOT emailed:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        text,
        // Let the business reply straight to the customer when they gave an email.
        ...(looksLikeEmail(fContact) ? { reply_to: fContact } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      // eslint-disable-next-line no-console
      console.error("[Sonoran Sims] Resend error:", res.status, detail);
      return NextResponse.json({ ok: false, error: "Could not send. Try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[Sonoran Sims] booking send failed:", err);
    return NextResponse.json({ ok: false, error: "Could not send. Try again." }, { status: 502 });
  }
}
