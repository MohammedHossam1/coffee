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

  return (
    <div className="">
      <div className="px-4 pt-4">
        <HomeMainCarousel />
      </div>
      <div className=" mt-10"
        style={{
          backgroundImage: `url(${topBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}>

        <div className="relative">
          <div className="top-slider ">
            <CurvedSwiper />
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


