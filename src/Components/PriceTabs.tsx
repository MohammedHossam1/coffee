import { useState } from "react";
import mug from "/src/assets/mug.svg";
import { type Size, type Product } from "../interfaces";
import Image from "./shared/Image";


const getImageSize = (label: string) => {
  switch (label) {
    case "X-Large":
      return 34;
    case "Large":
      return 30;
    case "Medium":
      return 24;
    case "Small":
    default:
      return 20;
  }
};

const PriceTabs = ({ data }: { data: Product }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(data?.sizes[0]);

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* التبويبات */}
      <div className="flex justify-center gap-2 rounded-full p-1 mb-2 xxs:mb-4">
        {data.sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => setSelectedSize(size)}
            className="flex flex-col items-center space-y-1"
          >
            <div
              className={`size-12 xxs:size-16 text-sm font-medium rounded-full transition-all flex items-center justify-center duration-300
              ${selectedSize && selectedSize.id === size?.id
                  ? "bg-main text-white"
                  : "text-gray-600 bg-[#F5F5F5] hover:bg-gray-200"
                }`}
            >
              <Image
                src={mug}
                alt="size icon"
                style={{
                  width: getImageSize(size.name),
                  height: getImageSize(size.name),
                }}
              />
            </div>
            <span className="text-sm font-semibold">{size.name}</span>
          </button>
        ))}
      </div>

      {/* السعر */}
      <div className="text-center mx-auto w-fit text-xl font-extrabold text-black p-3 px-6 rounded-full bg-main">
        {selectedSize?.price} <span className="text-[9px]">ILS</span>
      </div>
    </div>
  );
};

export default PriceTabs;
