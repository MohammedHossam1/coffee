import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import secIc from "../assets/home/green.svg"
import type { IProduct, Size } from "../interfaces"
import ProductCard from "./ProductCard"
import SectionHeader from "./shared/SectionHeader"
import ProductSheet from "./ProductSheet"


const DesctopProductsSection = ({ data, title }: { data: IProduct[], title?: string }) => {
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
                {title &&
                    <SectionHeader
                        icon={secIc}
                        title={title}
                        description={
                            "نقدّم لك مجموعة مشروبات شهية لانتعاش فريد."
                        }
                    />
                }
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
            <ProductSheet selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />

        </>
    )
}

export default DesctopProductsSection
