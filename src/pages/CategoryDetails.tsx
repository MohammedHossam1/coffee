import { useState } from "react";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import ColProduct from "../Components/ColProduct";
import DisplayProduct from "../Components/DisplayProduct";
import ProductCard from "../Components/Product";
import { productsData, productsData2 } from "../data";
import type { IProduct } from "../interfaces";
import CategoriesTabs from "../Components/CategoriesTabs";


const CategoryDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>(productsData[0]);
  const [activeTab, setActiveTab] = useState<"data" | "images">("data");

  return (
    <div className="pb-3">

      {/* المنتج المختار */}
      <DisplayProduct item={selectedProduct} />
      <div className="bg-gradient-to-r rounded-t-2xl from-orange-400 to-orange-300 ">
      <CategoriesTabs />


        {/* Tabs */}
        <div className="custom-container bg-white py-6 rounded-t-2xl">
          <div className="flex gap-2  w-full">
            <button
              className={`px-4 py-2  rounded-sm   font-semibold border ${activeTab === "data"
                ? "bg-main text-white"
                : "bg-white text-main border-gray-300"
                }`}
              onClick={() => setActiveTab("data")}
            >
              <CiGrid2H />
            </button>
            <button
              className={`px-4 py-2  rounded-sm   font-semibold border ${activeTab === "images"
                ? "bg-main text-white"
                : "bg-white text-main border-gray-300"
                }`}
              onClick={() => setActiveTab("images")}
            >
              <CiGrid2V />
            </button>
          </div>
        </div>
        {/* المنتجات */}
        <div className="custom-container bg-white ">
          <div className={`grid ${activeTab == "data" ? "grid-cols-1" : "grid-cols-2"} md:grid-cols-3 gap-4`}>
            {activeTab === "data" &&
              productsData.map((item: IProduct, index: number) => (
                <div
                  key={item.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setSelectedProduct(item);
                  }}
                >
                  <ProductCard item={item} index={index} />
                </div>
              ))}

            {activeTab === "images" &&
              productsData2.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setSelectedProduct(item);
                  }}
                >
                  <ColProduct
                    item={item}
                  />
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryDetails;
