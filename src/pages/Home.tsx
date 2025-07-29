import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DisplayProduct from "../Components/DisplayProduct";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import { productsData } from "../data";
import CurvedSwiper from "../Components/CircularGallery";
import topBg from "../assets/top.png";
import { useState } from "react";
import BottomSheet from "../Components/shared/BottomSheet";
import CategoryDetails from "./CategoryDetails";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleSwitch = () => {
    switch (activeTab) {
      case 0:
        return <div className="absolute top-0 left-[62%] z-10 w-[25vw] h-1/2 bg-[#edb471] rounded-tr-fudll" />;
      case 1:
        return <div className="absolute top-0 left-1/2 w-[25vw] h-1/2 bg-[#edb471]" />;
      case 2:
        return <div className="absolute top-0 left-[38%] w-[25vw] h-1/2 bg-[#edb471]" />;
      case 3:
        return <div className="absolute top-0 left-[26%] z-10 w-[25vw] h-1/2 bg-[#edb471] rounded-tl-fullc" />;
      default:
        return <div className="absolute top-0 left-[26%] z-10 w-[25vw] h-1/2 bg-[#edb471] rounded-tl-fullc" />;
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="custom-container w-full">
        <HomeMainCarousel />
      </div>
      <div className=" mt-4 xxs:mt-6 h-full flex-1"
        style={{
          backgroundImage: `url(${topBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        >

        <div className="relative">
          <div className="top-slider relative z-2 ">
            <CurvedSwiper setActiveTab={setActiveTab} />
          </div>
          <div className="absolute top-0 left-1/2 size-200 -translate-x-1/2 z-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {handleSwitch()}
            </div>
            <div className="absolute top-2 bg-[#faf1d0]  rounded-full z-11 left-1/2 size-200 -translate-x-1/2 z-xxd1"></div>
          </div>
        </div>

        <div onClick={() => setOpen(true)} className="carousel-container relative z-2  ">
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


