const ColProduct = ({ item }: { item: string }) => {
  return (
    <div className="relative flex flex-col items-center gap-4 bg-white shadow-md rounded-2dxl overflow-hidden hover:shadow-lg transition-all duration-300">

      {/* صورة الخلفية الضبابية */}
      <div className=" inset-0 z-0">
        <img
          src={item}
          alt="background blur"
          className="w-full h-80 object-cover  scale-110"
        />
      </div>

      {/* محتوى المنتج */}
      {/* <div className="relative z-10 p-4 flex flex-col items-center gap-2 h-64"> */}
        {/* معلومات المنتج */}
        {/* <h2 className="text-xl font-semibold text-gray-800 text-center">{item.title}</h2>
        <p className="text-lg text-green-600 font-bold">${item.price}</p> */}
        {/* صورة المنتج */}
        {/* <div className="absolute bottom-0 flex items-center justify-center">
          <img
            src={item.images[0]}
            alt={item.title}
            className="size-36 object-contain scale-[1.2]"
          />
        </div> */}

      {/* </div> */}
    </div>
  );
};

export default ColProduct;
