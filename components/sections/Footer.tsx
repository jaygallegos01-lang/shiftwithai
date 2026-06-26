/* FOOTER (handoff §6-J). Big closing CTA + contact/follow columns + legal. */
import { copy, contact, socials, legalLine, brand } from "@/lib/content";
import BookButton from "../BookButton";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-cta" data-reveal>
        <h2 className="h2 h2--closing">
          {copy.footer.h2line1}<br />{copy.footer.h2line2}
        </h2>
        <div style={{ marginTop: 30 }}>
          <BookButton>Book your session</BookButton>
        </div>
      </div>

      <div className="footer-cols">
        <div>
          {/* client supplies final SVG */}
          <Logo />
          <p className="body-muted mono" style={{ marginTop: 14, fontSize: ".74rem", letterSpacing: ".1em" }}>
            {brand.tagline}
          </p>
        </div>

        <div>
          <div className="footer-h">Contact</div>
          <span className="footer-link">{contact.person}</span>
          <a className="footer-link" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="footer-link" href={`https://${contact.site}`}>{contact.site}</a>
        </div>

        <div>
          <div className="footer-h">Follow</div>
          {socials.map((s) => (
            <a className="footer-link" key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="legal">{legalLine}</div>
    </footer>
  );
}
