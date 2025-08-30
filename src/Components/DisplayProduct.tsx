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
  setOpen: (open: boolean) => void
}

const DisplayProduct: React.FC<DisplayProductProps> = ({ products, details = false, onSelectProduct, setOpen }) => {
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



  if (products.length === 0) return <h2 className="text-2xl font-bold text-center py-10">لا يوجد منتجات</h2>
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="relative bottom-slider ">
          <motion.div className="relative z-22 ">
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
                  onClick={() => {
                    setOpen(true);
                    onSelectProduct?.(item);

                  }}
                  key={item.id}
                  className="rounded-2xl cursor-pointer  relative"
                >
                  <div className="size-34 xxs:size-38 md:size-50 bg-[#FFFFFF1A] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>

                  <Image
                    src={item.image}
                    alt={`Product ${i}`}
                    className="w-full h-34 xxs:h-44 md:h-60 !object-contain rounded-2xl"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center space-y-1  relative z-2">
                      <motion.h2
                        className={`text-sm xxs:text-base md:text-xl font-bold xxs:mt-2 ${details ? "text-black" : "text-white"} 
                           scale-95 
                          `}
                      >
                        {item.name.en}
                      </motion.h2>

                      <motion.h2
                        className={`text-lg xxs:text-xl md:text-2xl font-extrabold ${details ? "text-black" : "text-white"}
                        scale-95 
                          `}
                      >
                        {item.name.ar}
                      </motion.h2>

                      {!details && (
                        <motion.p


                          whileTap={{ scale: .9 }}
                          className={`xxs:!text-2xl rounded-full px-2 py-1 border  border-black w-fit m-auto font-extrabold text-black relative z-31 hover:bg-black hover:text-white   scale-95  cursor-pointer duration-200 transition-all `}
                        >
                          <span className="text-[9px] mr-1  ">ILS</span>
                          {item.price}
                        </motion.p>
                      )}

                      {details && (
                        <motion.p
                          layout
                          className={`text-sm font-medium leading-9 ${details ? "text-black" : "text-white"}  "opacity-0 scale-95 " : ""
                              }`}
                        >
                          {item.description.ar}
                        </motion.p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}

              {/* {!details && <div ref={paginationRef} className="flex justify-center gap-2 pt-1"></div>} */}
            </Swiper>
          </motion.div>
        </div>
      </AnimatePresence >
    </>
  );
};

export default memo(DisplayProduct);
