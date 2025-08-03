import type { HTMLAttributes } from "react";
import Image from "./shared/Image";
import type { IProduct } from "../interfaces";
import currencyIC from "/src/assets/currency.svg";
interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
    item: IProduct;
}

const ProductCard = ({ item, ...props }: ProductCardProps) => {
    return (
        <div
            className="flex flex-col gap-2  rounded-3xl"
            {...props}
        >
            <div className="rounded-3xl overflow-hidden h-70 xl:h-92 w-full">
                <Image src={item.image} alt={item.name.ar || "img"} className="w-full h-full object-cover" />
            </div>
            <div className="px-5 p-2 space-y-3">
                <div className="">
                    <h3 className="text-xs font-bold text-[#999999]">{item.category.name}</h3>
                    <h2 className="text-2xl font-extrabold">{item.name.ar}</h2>
                </div>
                <div className="flex gap-2 items-center">

                    <p className="text-sm text-green-main font-extrabold">{item.price}</p>
                    <Image src={currencyIC} alt={item.name.ar || "img"} className="size-3 object-cover" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard