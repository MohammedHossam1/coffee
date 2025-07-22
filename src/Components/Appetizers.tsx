import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { appetizersData } from "../data";
import SectionHead from "./shared/SectionHead";
import type { IProduct } from "../interfaces";
import Product from "./Product";
import { breakpoints } from "../constant";
const Appetizers: React.FC = () => {
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
            <SectionHead title="المقبلات" link="/appetizers" />
            <div ref={sliderRef} className="keen-slider !overflow-visible mt-5">
                {appetizersData.map((item: IProduct) => (
                    <div
                        key={item.id}
                        className="keen-slider__slide rounded-xl"
                        style={{ cursor: "grab" }}
                    >
                        <Product item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appetizers;
