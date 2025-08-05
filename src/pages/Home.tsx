import { motion } from "framer-motion";
import { GoArrowUpLeft } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeDesctopCategories from "../Components/Desctop/HomeDesctopCategories";
import DesctopProductsSection from "../Components/DesctopHome";
import Footer from "../Components/Footer";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import MapSection from "../Components/MapSection";
import Social from "../Components/Social";
import Testimonials from "../Components/Testimonials";
import Image from "../Components/shared/Image";
import Loader from "../Components/shared/Loader";
import playIC from "../assets/home/play.svg";
import slide1 from "../assets/home/slide1.png";
import useGetData from "../hooks/useGetData";
import type { ApiResponse } from "../interfaces";
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { transition: { straggerChildren: 0.1 }, opacity: 1, y: 0 },
}
const MobileSectionHeader = ({ title, icon }: { title: string, icon?: boolean }) => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <h4 className="text-sm font-extrabold ">{title}:</h4>
      {icon && <TbMenu3 />}
    </div>
  )
}
const Home = () => {
  const { data, isLoading } = useGetData<ApiResponse>({ key: "home", url: "/home" })
  if (isLoading) return <div>
    <Loader />
  </div>

  return (
    <div className="flex flex-col max-md:justify-between  w-full max-md:gap-3 h-full">
      {/* top slider */}
      <div className="w-full pt-2 max-lg:custom-container ">
        <HomeMainCarousel data={data?.data?.sliders || []} />
      </div>
      {/* Mobile */}
      <div className=" lg:hidden custom-container  ">
        <MobileSectionHeader icon={true} title={"المينيــو بين يديـــك "} />
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2  w-full gap-4">
          {data?.data?.categories?.slice(0, 5).map((item, index) => (
            <Link to={`/categories/${item.id}`}
              className={`bg-white rounded-[40px] relative p-5 ${index == 1 && "row-span-2 flex flex-col justify-end"}`} key={index}>
              <div className="absolute top-5 end-5 ">
                <GoArrowUpLeft className="text-main size-6" />
              </div>
              <div className="rounded-full flex items-center justify-center size-12 relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]">
                <Image src={item.image} alt="img1" className="rounded-full" />
              </div>
              <div className="mt-2 pt-4 space-y-2">
                <h2 className="text-xs font-bold text-[#878787]">Ice Cream</h2>
                <h2 className="text-sm font-extrabold  text-nowrap">{item.name}</h2>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="lg:hidden custom-container  max-md:space-y-3 block  w-full pb-7">

        {/* vedios */}
        <MobileSectionHeader title={"نـــــــاس كــانو مثلك "} />
        <div className="">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="rounded-[40px] ">
                  <div className="absolute inset-0 bg-black-10 flex items-center justify-center">
                    <Image src={playIC} alt="img1" className=" size-10" />
                  </div>
                  <Image src={slide1} alt="img1" className="h-full w-full" />
                </motion.div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>

        {/* social */}
        <MobileSectionHeader title={"تـــــــابعنا "} />
        <Social />
      </div>

      {/* Desctop  */}
      {data?.data &&
        <div className="max-lg:hidden ">
          <div className="space-y-10 pt-10 xl:space-y-20 xl:pt-10">

            <div className="custom-container ">
              <DesctopProductsSection data={data?.data} />
            </div>
         

            <div className="w-full  bg-white ">
              <HomeDesctopCategories data={data.data} />
            </div>
            <div className="custom-container">
              <Testimonials />
            </div>
            <div className="">
              <MapSection />
            </div>
          </div>
          <div className="max-lg:hidden">
            <Footer />
          </div>
        </div>}
    </div >
  );
};

export default Home;