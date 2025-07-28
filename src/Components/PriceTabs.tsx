import { useState } from "react";
import mug from "/src/assets/mug.svg";
const sizes = [
  { label: "X-Large", price: 50 },
  { label: "Large", price: 40 },
  { label: "Medium", price: 30 },
  { label: "Small", price: 20 },
];

const getImageSize = (label: string) => {
  switch (label) {
    case "X-Large":
      return 38;
    case "Large":
      return 33;
    case "Medium":
      return 27;
    case "Small":
    default:
      return 24;
  }
};

const PriceTabs = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* التبويبات */}
      <div className="flex justify-between rounded-full p-1 mb-4">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => setSelectedSize(size)}
            className="flex flex-col items-center space-y-1"
          >
            <div
              className={`size-16 text-sm font-medium rounded-full transition-all flex items-center justify-center duration-300
              ${
                selectedSize.label === size.label
                  ? "bg-main text-white"
                  : "text-gray-600 bg-[#F5F5F5] hover:bg-gray-200"
              }`}
            >
              <img
                src={mug}
                alt="size icon"
                style={{
                  width: getImageSize(size.label),
                  height: getImageSize(size.label),
                }}
              />
            </div>
            <span className="text-sm font-semibold">{size.label}</span>
          </button>
        ))}
      </div>

      {/* السعر */}
      <div className="text-center mx-auto w-fit text-xl font-extrabold text-black p-3 px-6 rounded-full bg-main">
        {selectedSize.price} <span className="text-[9px]">ILS</span>
      </div>
    </div>
  );
};

export default PriceTabs;
