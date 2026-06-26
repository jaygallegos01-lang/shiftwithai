/**
 * Clearly-labeled placeholder the client swaps with real event photography.
 * Never filled with stock or AI imagery — it announces itself as a slot.
 */
export default function PhotoSlot({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-dashed border-sand/20 bg-ink/60 ${ratio} ${className}`}
    >
      {/* faint flame corner so empty slots still feel on-brand */}
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-30 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, #FF7A28 0%, rgba(255,122,40,0) 70%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <span className="mono text-center text-[0.7rem] uppercase leading-relaxed tracking-[0.18em] text-ash">
          REAL PHOTO
          <span className="mt-1 block text-ash/70 normal-case tracking-normal">
            {label}
          </span>
        </span>
      </div>
    </div>
  );
}
