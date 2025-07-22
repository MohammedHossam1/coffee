import type { IProduct } from "../interfaces";

const ColProduct = ({ item }: { item: IProduct }) => {
  return (
    <div className="relative   bg-white  hover:shadow-lg transition-all duration-300">

        <img
          src={item.images[0]}
          alt="background blur"
          className="w-full h-60 !object-cover  "
        />
    </div>
  );
};

export default ColProduct;
