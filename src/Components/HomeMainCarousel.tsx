import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { categories2 } from "../data";
import type { Slider } from "../interfaces";

export default function HomeMainCarousel({ data }: { data: Slider[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleBulletClick = (index: number) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="w-full  mx-auto relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={false}
        autoplay={{ delay: 2500 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="rounded-xl overflow-hidden"
        ref={swiperRef}
      >
        {data.map((item, i: number) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-46 xxs:h-52">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center space-x-1 mt-4 absolute bottom-2 z-10 left-1/2 -translate-x-1/2">
        {categories2.map((_, i) => (
          <button
            key={i}
            onClick={() => handleBulletClick(i)}
            className={`transition-all duration-300 ${i === activeIndex
              ? "bg-main w-5 h-[5px] rounded-sm"
              : "bg-white/20 size-[5px] rounded-full"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
