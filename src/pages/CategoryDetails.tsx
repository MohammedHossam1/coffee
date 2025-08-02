import PriceTabs from "../Components/PriceTabs";
import Image from "../Components/shared/Image";
import type { Product } from "../interfaces";


const CategoryDetails = ({ selectedProduct }: { selectedProduct: Product }) => {
console.log(selectedProduct,"selectedProduct")
  return (
    <div className="pb-3 space-y-5">
      
      <div className="">
        <div className="relative">

          <Image
            src={selectedProduct.image}
            alt={`Product `}
            className="w-full h-30 xxs:h-44 !object-contain rounded-2xl"
          />
          <div className="size-26 xxs:size-36 bg-[#f7fbe5] absolute rounded-full top-1/2 left-1/2 !-z-1 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="text-center space-y-1 relative z-10">
          <h2 className={`text-xs font-bold mt-2 text-black `}>Flurry oreo</h2>
          <h2 className={`text-base font-extrabold text-black`}>{selectedProduct.name.ar}</h2>


          <p className={`text-xs xxs:text-sm  font-medium xxs:leading-7  text-[#3C3C3C] `}>
            {selectedProduct.description.ar}
          </p>

        </div>
      </div>

      <PriceTabs data={selectedProduct} />
   
    </div>
  );
};

export default CategoryDetails;
