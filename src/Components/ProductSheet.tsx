import type { IProduct, Size } from "@/interfaces";
import Image from "./shared/Image"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"
import mug from "/src/assets/mug.svg"

interface ProductSheetProps {
    selectedProduct: IProduct | null;
    setSelectedProduct: (product: IProduct | null) => void;
    selectedSize: Size | null;
    setSelectedSize: (size: Size | null) => void;
}
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
const ProductSheet = ({ selectedProduct, setSelectedProduct, selectedSize, setSelectedSize }: ProductSheetProps) => {
    return (

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
    )
}

export default ProductSheet