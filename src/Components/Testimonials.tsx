import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaStar } from "react-icons/fa";
import Image from "./shared/Image";
import SectionHeader from "./shared/SectionHeader";
import imgQuote from "/src/assets/home/quote.svg";
import { FaArrowLeftLong } from "react-icons/fa6";

const TestimonialCard = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center flex-col gap-1">
                    <h4 className="text-sm font-extrabold">عبدالله. م</h4>
                    <h4 className="text-sm text-[#4D4D4D]">الرياض</h4>
                </div>
                <div className="flex items-center gap-2">
                    <FaStar className="size-3" />
                    <span>4.5</span>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl xl:text-3xl font-bold xl:leading-[50px] text-[#CFBDA8]">
                    ‘’ من أروع تجاربي! القهوة طازجة والمذاق متوازن بشكل مثالي! ‘’
                </h2>
                <p className="text-base xl:text-lg font-semibold my-2 xl:my-5 text-[#4D4D4D]">
                    المكان مريح والخدمة راقية. بالتأكيد سأعود مرة أخرى!
                </p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    

    return (
        <div>
            <SectionHeader
                title="ماذا يقول عملاؤنا عنا !."
                description="آراء عملائنا هي انعكاس حقيقي لجودة خدماتنا."
            />
            <div className="border rounded-3xl grid grid-cols-12 gap-10 p-10 relative">
                <div className="col-span-12 lg:col-span-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">قصص عملائنا</h2>
                        <div className="w-10 xl:w-14">
                            <Image src={imgQuote} alt="img" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className="text-xl xl:leading-9 font-light w-3/4">
                        هكذا يصف عملاؤنا تجربتهم معنا. مواقف حقيقية، نتائج ملموسة، وآراء تعبّر عن الثقة.
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-7">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        onInit={(swiper) => {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {Array.from({ length: 10 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* الأسهم */}
                    <div className="flex gap-1 mt-5 xl:mt-7 z-10">
                        <button
                            className="size-8 custom-prev rounded-full bg-main text-white dark:bg-white dark:text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
                        >
                            <FaArrowLeftLong className="rotate-180" size={15} />

                        </button>
                        <button
                            className="size-8 custom-next rounded-full bg-main text-white dark:bg-white dark:text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
                        >
                            <FaArrowLeftLong  size={15} />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
