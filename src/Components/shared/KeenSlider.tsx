import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useRef, useState } from "react";
import type { ReactNode } from "react";
import type { KeenSliderInstance } from "keen-slider/react";  // استيراد النوع كـ type only
import type { KeenSliderOptions } from "keen-slider/react";  // استيراد النوع كـ type only

interface SimpleSliderProps {
    slides: ReactNode[];
    options?: KeenSliderOptions;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ slides, options }) => {
    const sliderRef = useRef<KeenSliderInstance | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderElementRef] = useKeenSlider({
        mode: "snap",
        slides: {
            perView: 1,
            spacing: 10,
        },
        rtl: false,
        ...options,
        created(s) {
            sliderRef.current = s;
            setCurrentSlide(s.track.details.rel);
            if (options?.created) options.created(s);
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
            if (options?.slideChanged) options.slideChanged(s);
        },
    });

    // دالة للتنقل إلى سلايد معين عند الضغط على dot
    const moveToSlide = (idx: number) => {
        sliderRef.current?.moveToIdx(idx);
    };

    return (
        <div className="relative">
            <div ref={sliderElementRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <div key={index} className="keen-slider__slide">
                        {slide}
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2  absolute bottom-5 right-1/2 translate-x-1/2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => moveToSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${currentSlide === idx ? "bg-white" : "bg-gray-300"
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SimpleSlider;
