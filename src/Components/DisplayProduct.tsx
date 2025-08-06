import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { IProduct } from "../interfaces";
import Image from "./shared/Image";

interface DisplayProductProps {
  products: IProduct[]
  details?: boolean;
  onSelectProduct?: (product: IProduct) => void
}

const DisplayProduct: React.FC<DisplayProductProps> = ({ products, details = false, onSelectProduct }) => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (swiperRef.current && paginationRef.current) {
        const swiper = swiperRef.current;
        if (swiper.params.pagination) {
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.destroy();
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }
        swiper.update();
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [products]);


  // useEffect(()=>{},[])

  if (products.length === 0) return <h2 className="text-2xl font-bold text-center py-10">لا يوجد منتجات</h2>
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="relative bottom-slider rounded-t-full">
          <motion.div layout className="relative z-22">
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
                  key={item.id}
                  className="rounded-2xl overflow-hidden relative"
                  onClick={() => onSelectProduct && onSelectProduct(item)}
                >
                  <div className="size-34 xxs:size-38 md:size-50 bg-[#FFFFFF1A] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>

                  <Image
                    src={item.image}
                    alt={`Product ${i}`}
                    className="w-full h-34 xxs:h-56 md:h-60 !object-contain rounded-2xl"
                  />

                  {/* فقط المنتج النشط يظهر له التفاصيل */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center space-y-1  sm:-translate-y-0  relative z-10">
                      <motion.h2
                        layout
                        className={`text-sm xxs:text-base md:text-xl font-bold xxs:mt-2 ${details ? "text-black" : "text-white"} 
                           scale-95 pointer-events-none
                          `}
                      >
                        Flurry oreo
                      </motion.h2>

                      <motion.h2
                        layout
                        className={`text-lg xxs:text-xl md:text-2xl font-extrabold ${details ? "text-black" : "text-white"}
                        scale-95 pointer-events-none
                          `}
                      >
                        {item.name.ar}
                      </motion.h2>

                      {!details && (
                        <motion.p
                          layout
                          className={`xxs:!text-2xl  font-extrabold text-black  scale-95 pointer-events-none `}
                        >
                          <span className="text-[9px] mr-1">ILS</span>
                          {item.price}
                        </motion.p>
                      )}

                      {details && (
                        <motion.p
                          layout
                          className={`text-sm font-medium leading-9 ${details ? "text-black" : "text-white"}  "opacity-0 scale-95 pointer-events-none" : ""
                              }`}
                        >
                          {item.description.ar}
                        </motion.p>
                      )}
                    </motion.div>

                  </AnimatePresence>

                </SwiperSlide>

              ))}

              {!details && <div ref={paginationRef} className="flex justify-center gap-2 pt-3"></div>}
            </Swiper>
          </motion.div>
        </div>
      </AnimatePresence >
    </>
  );
};

export default memo(DisplayProduct);
