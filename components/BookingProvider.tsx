"use client";

/* =============================================================================
   BOOKING CONTEXT (handoff F4)
   -----------------------------------------------------------------------------
   Lets any "Book" button anywhere on the page open the booking modal,
   preselecting a tier or switching to partner (rig-owner) mode.
   The modal itself lives in BookingModal.tsx.
============================================================================= */
import { createContext, useCallback, useContext, useState } from "react";
import type { Tier } from "@/lib/content";
import { config } from "@/lib/content";
import BookingModal from "./BookingModal";

type TierId = Tier["id"];

type BookingCtx = {
  openBooking: (opts?: { tier?: TierId; partner?: boolean }) => void;
};

const Ctx = createContext<BookingCtx | null>(null);

export function useBooking(): BookingCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [tier, setTier] = useState<TierId>(config.recommendedTier);
  const [partner, setPartner] = useState(false);

  const openBooking = useCallback<BookingCtx["openBooking"]>((opts) => {
    // If a real booking URL is configured, skip the modal and send them there.
    if (config.bookingUrl !== "modal") {
      window.open(config.bookingUrl, "_blank", "noopener");
      return;
    }
    setPartner(!!opts?.partner);
    if (opts?.tier) setTier(opts.tier);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <Ctx.Provider value={{ openBooking }}>
      {children}
      {open && (
        <BookingModal
          initialTier={tier}
          partner={partner}
          onClose={close}
        />
      )}
    </Ctx.Provider>
  );
}
