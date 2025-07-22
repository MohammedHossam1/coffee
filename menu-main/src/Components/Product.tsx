import type { IProduct } from "../interfaces";

const ProductCard = ({ item, index }: { item: IProduct; index: number }) => {
    const bgColors = [
      "bg-red-100",
      "bg-blue-100",
      "bg-green-100",
      "bg-yellow-100",
      "bg-purple-100",
      "bg-pink-100",
      "bg-teal-100",
    ];
    const bgColor = bgColors[index % bgColors.length];
  
    return (
      <div className="flex items-center gap-4 bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* صورة المنتج بخلفية باهتة */}
        <div className={`w-32 h-32 flex-shrink-0 flex items-center justify-center ${bgColor} `}>
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-24 h-24 object-contain scale-[1.2]"
          />
        </div>
  
        {/* معلومات المنتج */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
          <p className="text-lg text-green-600 font-bold mt-2">${item.price}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  