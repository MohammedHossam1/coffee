import { motion } from "framer-motion";
import { GoArrowUpLeft } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeDesctopCategories from "../Components/HomeDesctopCategories";
import DesctopProductsSection from "../Components/DesctopProductsSection";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import Social from "../Components/Social";
import Testimonials from "../Components/Testimonials";
import Loader from "../Components/shared/Loader";
import useGetData from "../hooks/useGetData";
import type { ApiResponse } from "../interfaces";

import VideosCarousel from "../Components/VideosCarousel";
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { transition: { straggerChildren: 0.1 }, opacity: 1, y: 0 },
}
const MobileSectionHeader = ({ title, icon }: { title: string, icon?: boolean }) => {
  return (
    <div className="flex gap-2 items-center my-4">
      <h2 className="text-sm font-extrabold ">{title}:</h2>
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
    <div className="flex flex-col max-md:justify-between  w-full max-md:gap-3 min-h-[calc(100dvh-124px)] ">
      {/* top slider */}
      <div className="w-full pt-2 max-lg:custom-container lg:p-10 ">
        <HomeMainCarousel data={data?.data?.sliders || []} />
      </div>
      {/* Mobile */}
      <div className=" lg:hidden custom-container  ">
        <MobileSectionHeader icon={true} title={"القائمه"} />
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 w-full gap-4"
        >
          {data?.data?.categories?.slice(0, 5).map((item, index) => (
            <Link
              to={`/categories/${item.id}`}
              className={`rounded-[40px] relative p-5 min-h-34 flex flex-col justify-end overflow-hidden ${index == 1 && "row-span-2"
                }`}
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* التدرج الأسود */}
              <div className="absolute bottom-0 left-0 w-full h-[100%] bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0" />

              {/* السهم */}
              <div className="absolute top-5 end-5 z-0">
                <GoArrowUpLeft className="text-white font-extrabold size-6" />
              </div>

              {/* النص */}
              <div className="mt-2 pt-4 space-y-2 z-0 relative">
                <h3 className="text-sm font-extrabold text-white whitespace-nowrap">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </motion.div>

      </div>

      <div className="lg:hidden custom-container  max-md:space-y-3 block  w-full pb-7">
        {/* vedios */}
        <MobileSectionHeader title={"دايلي دوز"} />
        <VideosCarousel data={data?.data?.videos || []} />
        {/* social */}
        <MobileSectionHeader title={"تـــــــابعنا "} />
        <Social />
      </div>

      {/* Desctop  */}
      {data?.data &&
        <div className="max-lg:hidden ">
          <div className="space-y-10 pt-10 xl:space-y-10 xl:pt-10">
            <div className="px-10">
              <div id="categories" className="bg-white rounded-4xl px-5 ">
                <HomeDesctopCategories  data={data.data} />
              </div>
            </div>
            <div className="custom-container ">
              <DesctopProductsSection title={"إستكشـــف أحدث منتجـــاتنا"} data={data?.data?.products} />
            </div>
            <div className="custom-container pb-15" >
              <Testimonials data={data?.data?.sucess_stories || []} />
            </div>
          </div>
     
        </div>}
    </div >
  );
};

export default Home;