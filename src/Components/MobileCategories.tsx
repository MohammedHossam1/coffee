import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import type { Category } from '../interfaces';
import Image from './shared/Image';

interface MobileCategoriesProps {
    items: Category[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    initialIndex?: number;
}

const MobileCategories: React.FC<MobileCategoriesProps> = ({
    items,
    activeTab,
    setActiveTab,
}) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            modules={[Navigation]}
            className="w-full "
        >
            {items.map((item) => (
                <SwiperSlide
                    key={item.id}
                    style={{ width: 'auto' }}
                    className="!w-auto py-3"
                >
                    <div
                        onClick={() => setActiveTab(item.id)}
                        className={`transition-all duration-300 ${activeTab === item.id ? 'scale-105' : 'opacity-70'
                            }`}
                    >
                        <button
                         
                        >
                            <div className="flex flex-col items-center justify-center space-y-2 p-2">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className={`size-14 xxs:size-16  xs:size-20  md:size-28  rounded-full object-cover border-2 border-white shadow-md `}
                                    draggable={false}
                                />
                                <h3 className={`text-xs md:text-base  text-black font-medium text-center ${activeTab === item.id ? 
                                    '!font-extrabold ' : '' }`}>
                                    {item.name}
                                </h3>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MobileCategories;
