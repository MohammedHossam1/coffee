import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import playIC from "../assets/home/play.svg";
import type { video } from "../interfaces";
import getVideoEmbedElement, { getVideoThumbnail } from "../lib";
import Image from "./shared/Image";

const VideosCarousel = ({ data }: { data: video[] }) => {
    const [activeVideo, setActiveVideo] = useState<video | null>(null);

    return (
        <div>
            <div className="">
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {data?.map((video, index) => (
                        <SwiperSlide key={video.id}>
                            <motion.div
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileTap={{ scale: 0.95 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="rounded-[30px] overflow-hidden relative aspect-video cursor-pointer group"
                                onClick={() => setActiveVideo(video)}
                            >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 z-10 flex items-center justify-center transition">
                                    <Image src={playIC} alt="play" className="size-10" />
                                </div>
                                <Image
                                    src={getVideoThumbnail(video)}
                                    alt={video.title}
                                    className="h-full w-full object-cover"
                                />

                            </motion.div>
                        </SwiperSlide>
                    ))}
                    {activeVideo && (
                        <div className="fixed inset-0 z-150 bg-black/80 flex items-center justify-center">
                            <div className="relative w-[90vw] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="absolute top-2 right-2 text-white text-3xl z-50"
                                >
                                    &times;
                                </button>
                                {getVideoEmbedElement(activeVideo)}
                            </div>
                        </div>
                    )}


                </Swiper>
            </div>

        </div>
    )
}

export default VideosCarousel