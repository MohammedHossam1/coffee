import { useState } from "react";
import PriceTabs from "../Components/PriceTabs";
import { productsData } from "../data";
import type { IProduct } from "../interfaces";


const CategoryDetails = () => {
  const [selectedProduct] = useState<IProduct>(productsData[0]);

  return (
    <div className="pb-3 space-y-5">
      {/* <div className="absolute top-4 left-4 cursor-pointer text-black bg-[#F6F6F6] z-100" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div> */}
      {/* المنتج المختار */}
      <div className="">
        <div className="relative">

          <img
            src={selectedProduct.images[0]}
            alt={`Product `}
            className="w-full h-64 !object-contain rounded-2xl"
          />
          <div className="w-44 h-44 bg-[#f7fbe5] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="text-center space-y-1 relative z-10">
          <h2 className={`text-xs font-bold mt-2 text-black `}>Flurry oreo</h2>
          <h2 className={`text-base font-extrabold text-black`}>{selectedProduct.title}</h2>


          <p className={`text-sm  font-medium leading-9  text-[#3C3C3C] `}>
            {selectedProduct.desc}
          </p>

        </div>
      </div>

      <PriceTabs />
      {/* <div className=" space-y-5 "> */}
      {/* <div className="bg-main">
          <CategoriesTabs />
        </div>
       */}
      {/* المنتجات */}
      {/* <div className="custom-container bg-body ">
          <div className={`grid grid-cols-1  md:grid-cols-3 gap-2`}>
            {productsData.map((item: IProduct, index: number) => (
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

           
          </div>
        </div> */}

      {/* </div> */}
    </div>
  );
};

export default CategoryDetails;
