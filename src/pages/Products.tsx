import Loader from "@/Components/shared/Loader"
import useGetData from "@/hooks/useGetData"
import type { IProduct } from "@/interfaces"
import DesctopProductsSection from "../Components/DesctopHome"
interface ApiResponse {
    success: boolean
    data: IProduct[]
    status: number
    message: string
}
const Products = () => {
    const { data, isLoading } = useGetData<ApiResponse>({ key: "products", url: "/products" })

    if (isLoading) return <div>
        <Loader />
    </div>

    return (
        <>
            <div className="custom-container lg:py-10">
                {data && <DesctopProductsSection title={"كل المنتجات"} data={data?.data} />}
            </div>
       
        </>
    )
}

export default Products