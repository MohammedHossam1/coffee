import { useRef } from "react";
import SwiperCore, { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productsData } from "../data";


export default function CurvedSwiper() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const slidesPerView = 4;

  const handleProgress = (swiper: SwiperClass) => {
    if (!swiper.slides || !swiper.slides.length) return;

    const centerStart = swiper.activeIndex + Math.floor(slidesPerView / 2) - 1;
    const centerIndices = [centerStart, centerStart + 1];

    swiper.slides.forEach((slideEl: any, index: number) => {
      const distanceToCenter = Math.min(
        Math.abs(index - centerIndices[0]),
        Math.abs(index - centerIndices[1])
      );
      const translateY =
        distanceToCenter === 0
          ? 0
          : distanceToCenter === 1
            ? 35
            : 20;

      slideEl.style.transform = `translateY(${translateY}px)`;
      slideEl.style.transition = `transform 0.3s ease`;
    });
  };

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        handleProgress(swiper);
      }}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      loop={false}
      onSlideChange={handleProgress}
      onSetTranslate={handleProgress}
      onResize={handleProgress}
    >
      {productsData.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="text-center  rounded-lg"
        >
          <div className="rounded-full size-18 bg-white text-main flex items-center justify-center">
            <img
              src={slide.images[0]}
              alt={slide.title}
              className="size-12 object-contain"
            />
          </div>
            <h3 className="text-xs font-extrabold my-2">{slide.title}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
