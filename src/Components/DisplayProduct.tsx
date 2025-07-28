import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imgBg from "../assets/bot.png";
import type { IProduct } from "../interfaces";

interface DisplayProductProps {
  item: IProduct;
  details?: boolean;
}

const DisplayProduct: React.FC<DisplayProductProps> = ({ item, details = false }) => {
  const images = item.images;
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (paginationRef.current && swiperRef.current) {
      if (swiperRef.current.params.pagination) {
        swiperRef.current.params.pagination.el = paginationRef.current;
        swiperRef.current.pagination.init();
        swiperRef.current.pagination.render();
        swiperRef.current.pagination.update();
      }
    }
  }, []);

  return (
    <>
      <div  className="relative bottom-slider">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2.2}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((img: string, i: number) => (
            <SwiperSlide key={i} className="rounded-2xl overflow-hidden relative">
              <div className="w-44 h-44 bg-[#FFFFFF1A] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src={img}
                alt={`Product ${i}`}
                className="w-full h-64 !object-contain rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {!details && (
          <div className="absolute top-0 inset-0  rounded-full ">
            <img
              src={imgBg}
              alt={`Product `}
              className="w-full object-cover object-top   h-full"
            />
          </div>
        )}
        <div className="text-center space-y-1 -translate-y-6 relative z-10">
          <h2 className={`text-xs font-bold mt-2 ${details ? "text-black" : "text-white"}`}>Flurry oreo</h2>
          <h2 className={`text-base font-extrabold  ${details ? "text-black" : "text-white"}`}>{item.title}</h2>
          {!details && (
            <p className="!text-2xl  font-extrabold text-black">
              <span className="text-[9px] mr-1">ILS</span>
              {item.price}
            </p>
          )}
          {details && (
            <p className={`text-sm  font-medium leading-9  ${details ? "text-black" : "text-white"}`}>
              {item.desc}
            </p>
          )}
        </div>
        {!details && <div ref={paginationRef} className="pb-10 pt-5 flex justify-center gap-2"></div>}
      </div>


    </>
  );
};

export default DisplayProduct;
