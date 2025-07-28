import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories2 = [
  { name: "صنف 1", image: "/src/assets/slide-main.png" },
  { name: "صنف 2", image: "/src/assets/slide-main.png" },
  { name: "صنف 3", image: "/src/assets/slide-main.png" },
  { name: "صنف 4", image: "/src/assets/slide-main.png" },
  { name: "صنف 5", image: "/src/assets/slide-main.png" },
];



export default function HomeMainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleBulletClick = (index: number) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="max-w-xl mx-auto relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={false}
        autoplay={{ delay: 2500 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="rounded-xl overflow-hidden"
        ref={swiperRef}
      >
        {categories2.map((category, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-48">
              {/* الصورة */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* طبقة سوداء فوق الصورة فقط */}
              <div className="absolute inset-0 bg-black/70 rounded-xl z-10" />

              {/* النص فوق الطبقة السوداء */}
              <div className="absolute z-20 top-4 start-4 inset-x-0 text-white ">
                <div >
                  <div className="font-extrabold text-2xl">
                    <h2 className="">أطلــق <span className="text-main">حواســك</span>،</h2>
                    <h2 className="">فنجـــان بعــد فنجــان !.</h2>
                  </div>
                  <p className="text-xs my-2">اكتشف متعة القهوة كما لم تعشها من قبل...</p>
                  <div className=" w-full flex -space-x-1 px-5 py-3 justify-end items-center">
                    <div className="size-10 rounded-full  border border-main">
                      <img
                        src="/src/assets/avatar1.jpg"
                        alt={category.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="size-10 rounded-full  border border-main">
                      <img
                        src="/src/assets/avatar2.jpg"
                        alt={category.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="size-10 rounded-full  border border-main">
                      <img
                        src="/src/assets/avatar3.jpg"
                        alt={category.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="mx-2">
                      <p className="text-xs font-bold">+1k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* Simple bullets */}
      <div className="flex justify-center space-x-1 mt-4 absolute bottom-2 z-10 left-1/2 -translate-x-1/2">
        {categories2.map((_, i) => (
          <button
            key={i}
            onClick={() => handleBulletClick(i)}
            className={`transition-all duration-300 ${i === activeIndex
              ? "bg-main w-5 h-[5px] rounded-sm"
              : "bg-white/20 size-[5px] rounded-full"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
