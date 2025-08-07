import { useEffect, useState } from "react"
import secIc from "../assets/home/green.svg"
import type { IProduct, Size } from "../interfaces"
import ProductCard from "./ProductCard"
import Image from "./shared/Image"
import SectionHeader from "./shared/SectionHeader"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"
import mug from "/src/assets/mug.svg"
import { Link } from "react-router-dom"

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
const DesctopProductsSection = ({ data, title }: { data: IProduct[], title: string }) => {
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const [selectedSize, setSelectedSize] = useState<Size | null>(selectedProduct?.sizes[0] || null);
    const [itemsToShow, setItemsToShow] = useState(12); 
    const handleShowMore = () => {
        if (isProductsPath) {
            setItemsToShow((prev) => prev + 12); 
        }
    };

    const path = window.location.pathname
    const isProductsPath = path.includes("products")
    const shownData = isProductsPath ? data.slice(0, itemsToShow) : data.slice(0, 8);

    useEffect(() => {
        setSelectedSize(selectedProduct?.sizes[0] || null)
    }, [selectedProduct])
    return (
        <>
            <div className="">
                <SectionHeader
                    icon={secIc}
                    title={title}
                    description={
                        "نقدّم لك مجموعة مشروبات شهية لانتعاش فريد."
                    }
                />
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {shownData.length > 0 &&
                        shownData.map((item, index) => (
                            <div key={index} onClick={() => setSelectedProduct(item)}>
                                <ProductCard item={item} />
                            </div>
                        ))}
                </div>
                {data.length > shownData.length && (
                    <div className="flex justify-center my-5">
                        {isProductsPath ? (
                            <button
                                onClick={handleShowMore}
                                className="bg-black text-white dark:bg-white dark:text-black w-fit rounded-full m-auto hover:bg-main hover:text-white duration-300 transition-all py-3 px-4"
                            >
                                عرض المزيد
                            </button>
                        ) : (
                            <Link
                                to="/products"
                                className="bg-black text-white dark:bg-white dark:text-black w-fit rounded-full m-auto hover:bg-main hover:text-white duration-300 transition-all py-3 px-4"
                            >
                                عرض المزيد
                            </Link>
                        )}
                    </div>
                )}

            </div>

            <Sheet open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
                <SheetContent dir="rtl" side="right" className="p-6 bg-white dark:bg-gray-900   overflow-y-auto">
                    <SheetHeader className="mb-6">
                        <SheetTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                            {selectedProduct?.name.ar}
                        </SheetTitle>
                        <SheetDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {selectedProduct?.description.ar}
                        </SheetDescription>
                    </SheetHeader>

                    {/* صورة المنتج */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src={selectedProduct?.image || ""}
                            alt={selectedProduct?.name.ar}
                            className="w-1/3 mx-auto rounded-lg object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex gap-2 items-center justify-center">

                        {selectedProduct?.sizes.map((size) => (
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

                    {/* تفاصيل إضافية */}
                    <div className="mb-2 text-gray-800 dark:text-gray-200 space-y-2">
                        <div className="text-center mx-auto w-fit text-xl font-extrabold text-black p-3 px-6 rounded-full bg-main">
                            {selectedSize?.price || selectedProduct?.price} <span className="text-[9px]">ILS</span>
                        </div>

                    </div>


                </SheetContent>
            </Sheet>

        </>
    )
}

export default DesctopProductsSection
