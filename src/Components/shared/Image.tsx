import { useState } from "react";
import fallbackImage from "/src/assets/fallback.png";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  loading?: "lazy" | "eager";
}

export default function Image({
  src,
  alt = "image",
  className = "",
  fallbackSrc = fallbackImage, 
  objectFit = "contain",
  loading = "lazy",
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`object-${objectFit} ${className}`}
      onError={handleError}
      loading={loading}
    />
  );
}
