import SectionHeader from "./shared/SectionHeader"
import secIc from "../assets/home/green.svg"
import type { ApiData } from "../interfaces"
import ProductCard from "./ProductCard"
const DesctopProductsSection = ({ data }: { data: ApiData }) => {
    return (
        <div className="">
            <SectionHeader icon={secIc} title={"إستكشـــف أحدث منتجـــاتنا"} description={"نقدّم لك مجموعة مشروبات شهية تشمل إسبرسو كلاسيكي، وصفات خاصة بالمقهى، سموذي فواكه، وأصناف مثلجة لانتعاش فريد."} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.products.length > 0 && data.products.map((item, index) => <ProductCard key={index} item={item} />)}
            </div>
        </div>
    )
}

export default DesctopProductsSection