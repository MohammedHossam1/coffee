import Loader from "@/Components/shared/Loader"
import useGetData from "@/hooks/useGetData"
import type { ApiResponse, IProduct } from "@/interfaces"
import { useMemo, useState } from "react"
import DesctopProductsSection from "../Components/DesctopProductsSection"
import SectionHeader from "@/Components/shared/SectionHeader"

interface IProductsProps {
    success: boolean
    data: IProduct[]
    status: number
    message: string
}

const Products = () => {
    const { data, isLoading } = useGetData<IProductsProps>({ key: "products", url: "/products" })
    const { data: homeData } = useGetData<ApiResponse>({ key: "home", url: "/home" })

    const categories = useMemo(() => homeData?.data?.categories?.filter(cat =>
        data?.data.some(product => product.category?.id === cat.id)
    ) ?? [], [data, homeData])

    const [activeCategoryId, setActiveCategoryId] = useState<number | "all">("all")



    // لو All => رجع كل المنتجات، غير كده فلتر
    const filteredProducts = activeCategoryId === "all"
        ? (data?.data ?? [])
        : (data?.data.filter(product => product.category?.id === activeCategoryId))??[]

    if (isLoading) return (
        <div>
            <Loader />
        </div>
    )

    return (
        <div className="custom-container lg:py-5">
            <SectionHeader
                title={"كل المنتجات"}
                description={
                    "نقدّم لك مجموعة مشروبات شهية لانتعاش فريد."
                }
            />
            {/* Tabs */}
            <div className="flex gap-4 mb-6 overflow-auto">
                {/*  All Products */}
                <button
                    onClick={() => setActiveCategoryId("all")}
                    className={`pb-2 px-2 lg:px-4 text-base lg:text-xl !text-nowrap cursor-pointer transition duration-200 border-b-2 ${activeCategoryId === "all"
                            ? "border-black text-black dark:text-white font-bold"
                            : "border-transparent text-gray-500 hover:text-main"
                        }`}
                >
                    كل المنتجات
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategoryId(cat.id)}
                        className={`pb-2 px-2 lg:px-4 text-base lg:text-xl !text-nowrap    cursor-pointer transition duration-200 border-b-2 ${cat.id === activeCategoryId
                                ? "border-black text-black dark:text-white font-bold"
                                : "border-transparent text-gray-500 hover:text-main"
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {data && <DesctopProductsSection data={filteredProducts} />}
        </div>
    )
}

export default Products
