import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DisplayProduct from "../Components/DisplayProduct";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import BottomSheet from "../Components/shared/BottomSheet";
import botBg from "../assets/bot.png";
import topBg from "../assets/top.png";
import useGetData from "../hooks/useGetData";
import CategoryDetails from "./CategoryDetails";

import { useParams } from "react-router-dom";
import CurvedCarousel from "../Components/CircularGallery";
import Loader from "../Components/shared/Loader";
import type { ApiResponse, IProduct } from "../interfaces";
const CategoriesPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetData<ApiResponse>({ key: "home", url: "/home" })
  const [activeTab, setActiveTab] = useState(Number(id) || data?.data?.categories[0]?.id || 1);
  const filteredProducts = data?.data?.products.filter((product) => product.category?.id === activeTab) ?? [];
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);


  if (isLoading) return <div>
    <Loader />
  </div>

  return (
    <div className="flex flex-col  justifdy-between gap-14 xxs:gap-26 h-full !overflow-hidden">
      {/* top slider */}
      <div className="custom-container w-full pt-2">
        <HomeMainCarousel data={data?.data?.sliders || []} />
      </div>
      <div className=" h-full flex flex-col"
        style={{
          background: `url(${topBg}) top / cover no-repeat`
        }}
      >
        <div className="top-slider relative z-2 ">
          {/* <CurvedSwiper activeTab={activeTab} setActiveTab={setActiveTab} data={data?.data?.categories || []} /> */}
          <CurvedCarousel items={data?.data?.categories || []} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div onClick={() => setOpen(filteredProducts.length > 0 ? true : false)} className=" carousel-container relative z-2 h-full grid grid-cols-1 items-center "
          style={{
            background: `url(${botBg}) top / cover no-repeat`
          }}
        >
          <div className="">
            <DisplayProduct products={filteredProducts || []} details={false} onSelectProduct={setSelectedProduct} />
          </div>
        </div>
        {filteredProducts?.length > 0 && selectedProduct && <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
          <CategoryDetails selectedProduct={selectedProduct} />
        </BottomSheet>}
      </div>

    </div >
  );
};

export default CategoriesPage;


