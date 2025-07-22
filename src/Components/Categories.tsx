import { useState, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { categories } from "../data";

const CategorySidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const catRef = useRef(null)

    return (
        <div
            ref={catRef}
            className={` rounded-sxl p-1 shadow-md sticky h-screen end-0 inset-y-0 z-100 transition-all duration-300  flex flex-col items-center gap-4 
${isOpen ? "w-32 bg-white" : "w-10 bg-gradient-to-b from-[#4b3621] via-[#d4bca5] to-[#4b3621]"}
`}        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-xl  my-4 p-1 rounded-full bg-main border-white border text-white hover:bg-gray-200"
            >
                {isOpen ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
            </button>

            {categories.map((cat) => (
                <div
                    key={cat.id}
                    className={`flex items-center justify-between gap-2 cursor-pointer text-white hover:bg-gray-100 bg-main  ${isOpen ? "w-full" : ""}  rounded-full p-1 `}
                >
                    <img src={cat.image} alt={cat.name} className=" object-contain size-7" />

                    {isOpen && <span className="text-sm font-medium px-2">{cat.name}</span>}
                </div>
            ))}
        </div>
    );
};

export default CategorySidebar;
