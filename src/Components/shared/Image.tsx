import { useState, type ImgHTMLAttributes } from "react";
import fallbackImage from "/src/assets/fallback.png";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  loading?: "lazy" | "eager";
  style?: React.CSSProperties;
}

export default function Image({
  src,
  alt = "image",
  className = "",
  fallbackSrc = fallbackImage,
  objectFit = "contain",
  loading = "lazy",
  style,
  ...rest
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
      style={style}
      {...rest}
    />
  );
}
