import { motion } from "framer-motion";
import { useState } from "react";
import type { ApiData } from "../../interfaces";
import SectionHeader from "../shared/SectionHeader";
import Image from "../shared/Image";
import currencyIC from "/src/assets/currency.svg";

interface Props {
  data: ApiData ;
}

const HomeDesktopCategories = ({ data }: Props) => {
  const { products } = data;
  const categories = data.categories.filter(cat =>
    products.some(product => product.category?.id === cat.id)
  );

  const [activeCategoryId, setActiveCategoryId] = useState<number>(categories[0]?.id);
  const activeCategory = categories.find((cat) => cat?.id === activeCategoryId);
  const filteredProducts = products.filter(
    (product) => product.category?.id === activeCategoryId
  );

  return (
    <div className=" custom-container pb-6">
      <SectionHeader reverse title={activeCategory?.name || ""} description={"نقدّم لك مجموعة مشروبات شهية."} />

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={`pb-2 px-4 text-sm overflow-auto font-medium transition duration-200 border-b-2 ${cat.id === activeCategoryId
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 && filteredProducts.map((product, ind) => (
          <motion.div
            key={product.id}
            className="flex bg-white  rounded-lg  items-center w-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 * ind }}
          >
            {/* Image */}
            <div className="w-1/4 h-20 bg-white rounded-[30px]">
              <img
                src={product.image}
                alt={product.name.en}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="w-3/4 p-2 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-[#999999]">{product.name.en}</h3>
              <div className="flex gap-2 items-center">
                <h3 className="text-sm xl:text-xl font-semibold text-black">{product.name.ar} ............ </h3>
                <div className="flex gap-2 items-center">
                  <p className="text-sm xl:text-lg text-green-main font-extrabold">{product.price}</p>
                  <Image src={currencyIC} alt={product.name.ar || "img"} className="size-3 object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeDesktopCategories;
