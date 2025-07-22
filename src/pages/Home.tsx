import { useState } from "react";
import DisplayProduct from "../Components/DisplayProduct";
import { productsData } from "../data";
import type { IProduct } from "../interfaces";
import ProductCard from "../Components/Product";
import ColProduct from "../Components/ColProduct";


const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>(productsData[0]);
  const [activeTab, setActiveTab] = useState<"data" | "images">("data");
  const item2 = [
    "/src/assets/11.png",
    "/src/assets/22.png",
    "/src/assets/33.png",
    "/src/assets/11.png",
    "/src/assets/22.png",
    "/src/assets/33.png",
    "/src/assets/11.png",
    "/src/assets/22.png",
    "/src/assets/33.png",
  ];


  return (
    <div className="pb-6">
      {/* المنتج المختار */}
      <DisplayProduct item={selectedProduct} />

      {/* Tabs */}
      <div className="custom-container mb-6">
        <div className="flex gap-4 w-full">
          <button
            className={`px-4 py-2 rounded-full  w-full font-semibold border ${activeTab === "data"
              ? "bg-main text-white"
              : "bg-white text-main border-gray-300"
              }`}
            onClick={() => setActiveTab("data")}
          >
            Tab 1
          </button>
          <button
            className={`px-4 py-2 rounded-full  w-full font-semibold border ${activeTab === "images"
              ? "bg-main text-white"
              : "bg-white text-main border-gray-300"
              }`}
            onClick={() => setActiveTab("images")}
          >
            Tab 2
          </button>
        </div>
      </div>

      {/* المنتجات */}
      <div className="custom-container">
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
            item2.map((img, idx) => (
              <div key={idx}>
                <ColProduct
                  item={img}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
