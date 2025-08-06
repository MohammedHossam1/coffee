import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DisplayProduct from "../Components/DisplayProduct";
import HomeMainCarousel from "../Components/HomeMainCarousel";
import BottomSheet from "../Components/shared/BottomSheet";
import useGetData from "../hooks/useGetData";
import CategoryDetails from "./CategoryDetails";

import MobileCategories from "@/Components/MobileCategories";
import { useParams } from "react-router-dom";
import Loader from "../Components/shared/Loader";
import type { ApiResponse, Category, IProduct } from "../interfaces";

const CategoriesPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetData<ApiResponse>({ key: "home", url: "/home" });

  const [sortedCategories, setSortedCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<number>(() => Number(id) || 1);

  const filteredProducts = data?.data?.products.filter(
    (product) => product.category?.id === activeTab
  ) ?? [];

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (!data?.data?.categories) return;

    const categories = [...data.data.categories];
    const paramId = Number(id);

    if (paramId) {
      const index = categories.findIndex((c) => c.id === paramId);
      if (index !== -1) {
        const [matchedCategory] = categories.splice(index, 1);
        categories.splice(2, 0, matchedCategory);
      }
    }

    setSortedCategories(categories);
  }, [data, id]);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-12 xxs:gap-16 h-full max-xs:!overflow-hidden">
      <div className="custom-container w-full pt-2">
        <HomeMainCarousel data={data?.data?.sliders || []} />
      </div>
      <div
        className="h-full flex flex-col bg-[#faf1d0]"
        // style={{
        //   background: `url(${topBg}) top / cover no-repeat`,
        // }}
      >
        {/* <div className="top-slider relative z-">
          <CurvedCarousel
            items={sortedCategories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            initialIndex={2}

          />
        </div> */}
        <div className="">
          <MobileCategories items={sortedCategories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            initialIndex={2} />
        </div>
        <div
          onClick={() => setOpen(filteredProducts.length > 0)}
          className="carousel-container relative z-2 h-full grid grid-cols-1 items-center bg-[#f8cf5c]"

        >
          <DisplayProduct
            products={filteredProducts || []}
            details={false}
            onSelectProduct={setSelectedProduct}
          />
        </div>

        {filteredProducts.length > 0 && selectedProduct && (
          <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
            <CategoryDetails selectedProduct={selectedProduct} />
          </BottomSheet>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
