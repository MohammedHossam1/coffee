import type { JSX } from "react";
import type { video } from "../interfaces";

export function getVideoThumbnail(video: video): string {
  const url = video.path;

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const id = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]
      : url.split("v=")[1]?.split("&")[0];

    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  if (url.includes("vimeo.com")) {
    // ⚠️ Vimeo بيحتاج API لجلب الصورة المصغرة
    return "/vimeo-placeholder.jpg";
  }

  // لو فيديو مباشر وموفر thumbnail
  if (video.thumbnail) return video.thumbnail;

  return "/default-poster.jpg";
}

function getVideoEmbedElement(video: video): JSX.Element {
  const url = video.path;

  if (url.includes("youtube.com/watch?v=") || url.includes("youtu.be")) {
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]
      : url.split("v=")[1]?.split("&")[0];

    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  // إذا كان Vimeo
  if (url.includes("vimeo.com")) {
    const vimeoId = url.split("vimeo.com/")[1];
    return (
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        title={video.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  // إذا كان فيديو مباشر (mp4)
  if (url.match(/\.(mp4|webm|ogg)(\?.*)?$/)) {
    return (
      <video
        src={url}
        controls
        className="w-full h-full object-cover"
        title={video.title}
      />
    );
  }

  // نوع غير مدعوم
  return <div className="text-red-500">نوع الفيديو غير مدعوم</div>;
}



export default getVideoEmbedElement;  
