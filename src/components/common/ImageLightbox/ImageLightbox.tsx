import { useMemo, useState } from "react";
import Lightbox, { type Slide } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "./ImageLightbox.css";

/**
 * An image that can be displayed by `ImageLightbox`.
 */
export interface ImageLightboxImage {
  /** Image URL used by the thumbnail and lightbox. */
  src: string;
  /** Accessible description of the image. */
  alt: string;
  /** Optional intrinsic width in pixels for lightbox layout and preloading. */
  width?: number;
  /** Optional intrinsic height in pixels for lightbox layout and preloading. */
  height?: number;
}

/**
 * Props for the reusable image lightbox and its thumbnail trigger.
 */
export interface ImageLightboxProps {
  /** Images to show, in navigation order. The first image is the thumbnail by default. */
  images: readonly ImageLightboxImage[];
  /** Image index to use as the visible thumbnail. Defaults to `0`. */
  thumbnailIndex?: number;
  /** Accessible label for the thumbnail button. Defaults to `Open image gallery`. */
  thumbnailLabel?: string;
  /** Optional class name applied to the thumbnail button. */
  className?: string;
}

/**
 * Renders an image thumbnail that opens a keyboard-accessible lightbox.
 *
 * Zoom, pan, touch, trackpad, keyboard, close, and fullscreen interactions
 * are provided by Yet Another React Lightbox and its plugins.
 */
function ImageLightbox({
  images,
  thumbnailIndex = 0,
  thumbnailLabel = "Open image gallery",
  className,
}: ImageLightboxProps) {
  if (images.length === 0) {
    throw new Error("ImageLightbox requires at least one image.");
  }

  if (thumbnailIndex < 0 || thumbnailIndex >= images.length) {
    throw new Error(
      `ImageLightbox thumbnailIndex must be between 0 and ${images.length - 1}.`,
    );
  }

  const [isOpen, setIsOpen] = useState(false);
  const slides = useMemo<readonly Slide[]>(
    () =>
      images.map(({ src, alt, width, height }) => ({
        src,
        alt,
        width,
        height,
      })),
    [images],
  );
  const thumbnail = images[thumbnailIndex];

  return (
    <>
      <button
        aria-label={thumbnailLabel}
        className={`image-lightbox-trigger${className ? ` ${className}` : ""}`}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <img alt={thumbnail.alt} src={thumbnail.src} />
      </button>
      <Lightbox
        carousel={{ imageFit: "contain" }}
        className="image-lightbox"
        close={() => setIsOpen(false)}
        index={thumbnailIndex}
        open={isOpen}
        plugins={[Zoom, Fullscreen]}
        slides={slides}
      />
    </>
  );
}

export default ImageLightbox;
