import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CurvedSwiper from "../Components/CircularGallery";
import DisplayProduct from "../Components/DisplayProduct";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import BottomSheet from "../Components/shared/BottomSheet";
import { productsData } from "../data";
import useGetData from "../hooks/useGetData";
import CategoryDetails from "./CategoryDetails";
import Loader from "../Components/shared/Loader";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleSwitch = () => {
    switch (activeTab) {
      case 0:
        return <div className="absolute top-0 left-[64%] z-10 w-[27vw] h-1/2 bg-[#edb471] rounded-tr-fudll" />;
      case 1:
        return <div className="absolute top-0 left-1/2 w-[27vw] h-1/2 bg-[#edb471]" />;
      case 2:
        return <div className="absolute top-0 left-[36%] w-[25vw] h-1/2 bg-[#edb471]" />;
      case 3:
        return <div className="absolute top-0 left-[24%] z-10 w-[25vw] xxs:w-[20vw] h-1/2 bg-[#edb471] rounded-tl-fullc" />;
      default:
        return <div className="absolute top-0 left-[62%] z-10 w-[25vw] h-1/2 bg-[#edb471] rounded-tr-fudll" />;
    }
  };
  const { data, isLoading } = useGetData({ key: "home", url: "/home" })
  if (isLoading) return <div>
    <Loader />
  </div>

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="custom-container w-full pt-2">
        <HomeMainCarousel />
      </div>
      <div className=" mt-4 xxs:mt-6 h-full flex-1"
      >
        <div className="relative">
          <div className="top-slider relative z-2 ">
            <CurvedSwiper setActiveTab={setActiveTab} data={data?.data?.categories} />
          </div>
          <div className="absolute top-0 left-1/2 rounded-t-full bg-[#faf1d0] size-200 -translate-x-1/2 z-0">
            {/* orange tap */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {handleSwitch()}
            </div>
            {/* hidden circle yellow */}
            <div className="absolute top-2 bg-[#faf1d0]  rounded-full z-11 left-1/2 size-200 -translate-x-1/2 z-xxd1"></div>
          </div>
        </div>

        <div onClick={() => setOpen(true)} className="h-full carousel-container relative z-2  ">
          <DisplayProduct item={productsData[0]} />
        </div>

        <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
          <CategoryDetails />
        </BottomSheet>
      </div>

    </div >
  );
};

export default Home;


