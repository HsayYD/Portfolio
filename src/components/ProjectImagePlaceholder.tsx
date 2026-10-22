import { images, type ImageKey } from "@/data/images";

type Props = {
  /** Key into src/data/images.ts */
  image: ImageKey;
  /** Override the configured aspect ratio (width / height). */
  ratio?: number;
  className?: string;
};

/**
 * Figure frame for project imagery. Shows a drafted placeholder until the
 * entry in images.ts is marked `ready: true`, then renders the real image in
 * the same reserved space — no layout changes needed.
 */
export function ProjectImagePlaceholder({ image, ratio, className = "" }: Props) {
  const def = images[image];
  const r = ratio ?? def.ratio;

  return (
    <figure className={`fig ${className}`}>
      <div className="frame-img" style={{ aspectRatio: String(r) }}>
        {def.ready ? (
          // Plain <img>: the site is a static export and these are local files.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={def.src} alt={def.alt} loading="lazy" />
        ) : (
          <div className="ph" role="img" aria-label={`Placeholder: ${def.caption.toLowerCase()}`}>
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
            <span className="ph-label">
              {def.fig}
              <br />
              IMAGE TO BE ADDED
            </span>
          </div>
        )}
      </div>
      <figcaption>
        <b>{def.fig}</b>
        <span>{def.caption}</span>
      </figcaption>
    </figure>
  );
}
