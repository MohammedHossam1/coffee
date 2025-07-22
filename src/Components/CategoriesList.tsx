import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import humburger from "../assets/burger.svg";
import line from "../assets/Line.svg";
// d
import { categoriesData } from "../data";
import { breakpoints } from "../constant";

interface Props {
    onSelectCategory: (category: string) => void;
    selected: string;
}
const CategoriesList = ({ onSelectCategory, selected = "برجر" }: Props) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        slides: {
            perView: 5.5,
            spacing: 15,
        },
        rtl: true,
        breakpoints: breakpoints

    });

    return (
        <div>
            <div className="space-y-2">

                <h1 className="text-main text-base lg:text-2xl font-bold text-center">قائمة الطعام</h1>
                <img
                    src={line}
                    alt={""}
                    className="w-20 m-auto  object-cover rounded-xl  select-none"
                    draggable={false}
                />
            </div>
            <div ref={sliderRef} className="keen-slider !overflow-visible mt-5">
                {categoriesData.map((category) => (
                    <button
                        key={category.id}
                        style={{ cursor: "grab" }}
                        onClick={() => onSelectCategory(category.name)}
                        className={`px-4 keen-slider__slide py-2 rounded-xl  flex items-center justify-center gap-2  whitespace-nowrap ${selected === category.name
                            ? "bg-main text-white"
                            : "bg-white text-gray-800"
                            }`}
                    >
                        <h2 className="text-center  my-2 text-base lg:text-xl font-bold  ">{category.name}</h2>
                        <div className="g-yellow-500 w-7 h-fit lg:w-10 ">
                            <img
                                src={humburger}
                                alt={"burger"}
                                className=" m-auto  object-cover rounded-xl  select-none"
                                draggable={false}
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;





