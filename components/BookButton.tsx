"use client";

/* Reusable "Book" button — opens the booking modal (or a configured booking
   URL). Use anywhere: <BookButton tier="PRO">Book Pro</BookButton>. */
import { useBooking } from "./BookingProvider";
import type { Tier } from "@/lib/content";

export default function BookButton({
  children,
  tier,
  partner,
  variant = "flame",
  className = "",
}: {
  children: React.ReactNode;
  tier?: Tier["id"];
  partner?: boolean;
  variant?: "flame" | "outline";
  className?: string;
}) {
  const { openBooking } = useBooking();
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      onClick={() => openBooking({ tier, partner })}
    >
      {children}
    </button>
  );
}
