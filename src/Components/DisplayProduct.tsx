import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
      <div className="relative bottom-slider rounded-t-full">
        {/* float big circle */}
        <div className="absolute top-2 bg-[#f7cd57]  rounded-full z-11 left-1/2 size-200 -translate-x-1/2 z-xxd1"></div>
        <div className="relative h-full z-22">
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
                {/* the circle bg */}
                <div className="size-34 xxs:size-44 bg-[#FFFFFF1A] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img
                  src={img}
                  alt={`Product ${i}`}
                  className="w-full h-38 xxs:h-56 !object-contain rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center space-y-1 -translate-y-6 xxs:-translate-y-10 relative z-10">
            <h2 className={`text-sm xxs:text-base font-bold xxs:mt-2 ${details ? "text-black" : "text-white"}`}>Flurry oreo</h2>
            <h2 className={`text-lg xxs:text-xl font-extrabold  ${details ? "text-black" : "text-white"}`}>{item.title}</h2>
            {!details && (
              <p className="xxs:!text-2xl  font-extrabold text-black">
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
          {!details && <div ref={paginationRef} className="  flex justify-center  gap-2"></div>}
        </div>
      </div>


    </>
  );
};

export default DisplayProduct;
