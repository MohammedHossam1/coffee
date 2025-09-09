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
  const [activeTab, setActiveTab] = useState<number>(() => Number(id) || 1);
  const { data, isLoading } = useGetData<ApiResponse>({ key: "category", url: "/home", params: { category_id: activeTab } });
  console.log(data, "data")
  const [sortedCategories, setSortedCategories] = useState<Category[]>([]);
  const [sliders, setSliders] = useState<any[]>([]); // 🟢 state للـ sliders

  const filteredProducts = data?.data?.products.filter(
    (product) => product.category?.id === activeTab
  ) ?? [];

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (!data?.data?.categories) return;
    // 🟢 نخزن الـ sliders أول مرة فقط
    if (sliders.length === 0 && data.data.sliders?.length) {
      setSliders(data.data.sliders);
    }
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

if(!sliders.length) return <Loader  />
  return (
    <div className="flex flex-col gap-5 xxs:gap-16 max-xs:!overflow-hidden  h-[calc(100dvh-64px)]" >
      <div className="custom-container w-full pt-2">
        <HomeMainCarousel data={sliders || []} />
      </div>
      <div
        className="h-full flex flex-col bg-[#faf1d0]  rounded-t-xl "
      >
        <div className="">
          <MobileCategories items={sortedCategories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            initialIndex={2} />
        </div>
        <div
          className="carousel-container relative rounded-t-xl z-2 h-full grid grid-cols-1 items-center bg-[#f8cf5c]"

        >
          {isLoading ? <Loader isSmall /> :

            <DisplayProduct
              products={filteredProducts || []}
              details={false}
              setOpen={setOpen}
              onSelectProduct={setSelectedProduct}
            />}
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
