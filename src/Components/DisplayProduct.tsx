import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "../interfaces";
import Image from "./shared/Image";

interface DisplayProductProps {
  products: Product[]
  details?: boolean;
  onSelectProduct?: (product: Product) => void
}

const DisplayProduct: React.FC<DisplayProductProps> = ({ products, details = false, onSelectProduct }) => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  console.log("products", products)
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
  if (products.length === 0) return <h2 className="text-2xl font-bold text-center">لا يوجد منتجات</h2>
  return (
    <>
      <AnimatePresence>
        <div className="relative bottom-slider rounded-t-full">
          <div className="relative z-22">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={2.2}
              centeredSlides={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {products.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="rounded-2xl overflow-hidden relative"
                  onClick={() => onSelectProduct && onSelectProduct(item)} // هنا تضيف onClick
                >
                  {/* المحتوى كما هو */}
                  <div className="size-34 xxs:size-38 bg-[#FFFFFF1A] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <Image
                    src={item.image}
                    alt={`Product ${i}`}
                    className="w-full h-38 xxs:h-56 !object-contain rounded-2xl"
                  />
                  <div className="text-center space-y-1 -translate-s-2 xxs:-translate-y-8 relative z-10">
                    <h2 className={`text-sm xxs:text-base font-bold xxs:mt-2 ${details ? "text-black" : "text-white"}`}>Flurry oreo</h2>
                    <h2 className={`text-lg xxs:text-xl font-extrabold ${details ? "text-black" : "text-white"}`}>{item.name.ar}</h2>
                    {!details && (
                      <p className="xxs:!text-2xl font-extrabold text-black">
                        <span className="text-[9px] mr-1">ILS</span>
                        {item.price}
                      </p>
                    )}
                    {details && (
                      <p className={`text-sm font-medium leading-9 ${details ? "text-black" : "text-white"}`}>
                        {item.description.ar}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
              {!details && <div ref={paginationRef} className="flex justify-center gap-2"></div>}
            </Swiper>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default DisplayProduct;
