import type { IProduct } from "../interfaces";

const Product = ({ item }: { item: IProduct; index: number }) => {


  return (
    <div className="flex items-center gap-4 bg-white  rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* صورة المنتج بخلفية باهتة */}
      <div className="flex gap-1 items-center ">
        <div className={`w-32 h-32 flex-shrink-0 flex items-center justify-center relative`}>
          <img
            src={item.image}
            alt={item.name.ar || "img"}
            className="w-24 h-24 object-contain scale-[1.2] relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 size-16 rounded-full bg-[#f7fbe5] z-0"></div>
        </div>
        {/* معلومات المنتج */}
        <div className="">
          <h2 className="text-xs  font-bold  text-[#878787]">{"Flurry oreo"}</h2>
          <p className="text-sm text-black font-extrabold mt-2">{item.name.ar}</p>
        </div>
      </div>
      {/* السعر */}
      <div className="text-center mx-auto w-fit text-[22px] font-extrabold text-main p-3 px-6 rounded-full ">
        {item.price} <span className="text-[9px]">ILS</span>
      </div>

    </div>
  );
};

export default Product;
