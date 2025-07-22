import { useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { IProduct } from "../interfaces";

const gradients = [
  "from-red-400 via-pink-500 to-purple-500",
  "from-blue-400 via-cyan-500 to-teal-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-green-400 via-lime-500 to-emerald-500",
];

const DisplayProduct = ({ item }: { item: IProduct }) => {
  const images = item.images;
  const [activeIndex, setActiveIndex] = useState(0);

  const gradientClass = gradients[activeIndex % gradients.length];

  return (
    <div className="max-w-md mx-auto ">
      <div
        className={`bg-gradient-to-r ${gradientClass} rounded-b-full absolute top-0 inset-x-0 h-[200px] scale-125 transition-all duration-500`}
      />

      {/* السلايدر */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2.2}
        centeredSlides={true}
        loop={true}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 2.2, centeredSlides: true },
          768: { slidesPerView: 3, centeredSlides: true },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="rounded-2xl overflow-hidden">
            <img
              src={img}
              alt={`Product ${i}`}
              className="w-full h-64 object-contain rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* معلومات المنتج */}
      <div className="text-center mt-3">
        <h2 className="text-2xl font-bold text-main">{item.title}</h2>
        <p className="text-lg mt-1">${item.price}</p>
      </div>

      {/* وصف المنتج */}
      <div className=" text-gray-800  rounded-2xl p-4 ">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

export default DisplayProduct;
