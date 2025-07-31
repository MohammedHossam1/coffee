import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"; // Fa6 فيها أحدث أيقونات
import { GoArrowUpLeft } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import Image from "../Components/shared/Image";
import Loader from "../Components/shared/Loader";
import playIC from "../assets/home/play.svg";
import slide1 from "../assets/home/slide1.png";
import useGetData from "../hooks/useGetData";
import type { ApiResponse } from "../interfaces";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { transition: { straggerChildren: 0.1 }, opacity: 1, y: 0 },
}
const Home = () => {
  const { data, isLoading } = useGetData<ApiResponse>({ key: "home", url: "/home" })
  if (isLoading) return <div>
    <Loader />
  </div>
  console.log(data, "data");

  return (
    <div className="flex flex-col custom-container   justifdy-between gap-6 h-full">
      {/* top slider */}
      <div className="w-full pt-2">
        <HomeMainCarousel data={data?.data?.sliders || []} />
      </div>

      <div className=" space-y-4 pb-5">
        <div className=" flex gap-2 ">
          <TbMenu3 />
          <h4 className="text-sm font-extrabold">المينيــو بين يديـــك :</h4>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4">
          {data?.data?.categories?.slice(0, 5).map((item, index) => (
            <Link to={`/categories-page/${item.id}`}
              className={`bg-white rounded-[40px] relative p-5 ${index == 1 && "row-span-2 flex flex-col justify-end"}`} key={index}>
              <div className="absolute top-5 end-5 ">
                <GoArrowUpLeft className="text-main size-6" />
              </div>
              <div className="bg-red-100 rounded-full flex items-center relative justify-center size-12">
                <Image src={item.image} alt="img1" className="rounded-full" />
              </div>

              <div className="mt-2 pt-4 space-y-2">
                <h2 className="text-xs font-bold text-[#878787]">Ice Cream</h2>
                <h2 className="text-sm font-extrabold text-nowrap">{item.name}</h2>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* vedios */}
        <h4 className="text-sm font-extrabold">نـــــــاس كــانو مثلك :</h4>
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
        <h4 className="text-sm font-extrabold">تـــــــابعنا :</h4>
        <div className="flex gap-2 items-center">
          <div className="bg-black text-white rounded-full flex items-center justify-center size-12">
            <FaFacebookF className="w-6 h-6" />
          </div>
          <div className="bg-black text-white rounded-full flex items-center justify-center size-12">
            <FaInstagram className="w-6 h-6" />
          </div>
          <div className="bg-black text-white rounded-full flex items-center justify-center size-12">
            <FaXTwitter className="w-6 h-6" />
          </div>
          <div className="bg-black text-white rounded-full flex items-center justify-center size-12">
            <FaYoutube className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;


