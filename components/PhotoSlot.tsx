/* =============================================================================
   PHOTO SLOT (handoff §10.1) — the future-proof image placeholder.
   -----------------------------------------------------------------------------
   While `src` is empty, shows an on-brand diagonal-hatch placeholder with a
   "Real Photo" badge + caption describing the intended shot.
   TO MAKE REAL: just pass a `src` (set it in lib/content.ts). The badge and
   hatch disappear automatically and the image fills the frame (object-fit:cover).
   The opaque, isolated frame means the sky backdrop can never tint the photo
   (Desert Hero media-safety rule §3).
============================================================================= */
type Props = {
  src?: string;
  alt: string;
  caption?: string;
  minHeight?: number;
  className?: string;
};

export default function PhotoSlot({ src, alt, caption, minHeight, className = "" }: Props) {
  const style = minHeight ? { minHeight } : undefined;
  if (src) {
    return (
      <figure className={`photo ${className}`} style={style}>
        <img src={src} alt={alt} loading="lazy" />
      </figure>
    );
  }
  return (
    <figure className={`photo photo--hatch ${className}`} style={style}>
      <span className="photo__badge">Real Photo</span>
      <figcaption className="photo__caption">{caption ?? alt}</figcaption>
    </figure>
  );
}
