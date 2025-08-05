import React, { useEffect, useRef, useState } from 'react';
import type { Category } from '../interfaces';
import Image from './shared/Image';

interface CurvedCarouselProps {
    items: Category[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    initialIndex?: number;
}


const CurvedCarousel: React.FC<CurvedCarouselProps> = ({ items, activeTab, setActiveTab, initialIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(() =>
        initialIndex ?? items.findIndex((item) => item.id === activeTab)
    );

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    // const [curveAngle, setCurveAngle] = useState(20); 
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDragOffset(0);
    };
    // useEffect(() => {
    //     const currentItem = items[currentIndex];
    //     if (currentItem) {
    //         setActiveTab(currentItem.id);
    //     }
    // }, [currentIndex, items]);
    console.log(items, "items");


    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const diff = e.clientX - startX;
        setDragOffset(diff);
    };

    const handleMouseUp = () => {
        if (isDragging) {
            const threshold = 20;
            if (dragOffset > threshold && currentIndex > 1) {
                prevSlide();
            } else if (dragOffset < -threshold && currentIndex < items.length - 2) {
                nextSlide();
            }
            setDragOffset(0);
            setIsDragging(false);
        }
    };



    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setDragOffset(0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const diff = e.touches[0].clientX - startX;
        setDragOffset(diff);
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            const threshold = 20;
            if (dragOffset > threshold && currentIndex > 1) {
                prevSlide();
            } else if (dragOffset < -threshold && currentIndex < items.length - 2) {
                nextSlide();
            }
            setDragOffset(0);
            setIsDragging(false);
        }
    };


    const nextSlide = () => {
        setCurrentIndex((prev) => {
            if (prev <= 2) return prev;
            return prev - 1;
        });
    };


    const prevSlide = () => {
        setCurrentIndex((prev) => {
            if (prev >= items.length - 3) return prev;
            return prev + 1;
        });
    };


    const handleItemClick = (item: Category) => {
        // setCurrentIndex(items.findIndex((i) => i.id === item.id));
        setActiveTab(item.id);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                setDragOffset(0);
            }
        };
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const diff = e.clientX - startX;
            setDragOffset(diff);
        };

        document.addEventListener('mouseup', handleGlobalMouseUp);
        document.addEventListener('mousemove', handleGlobalMouseMove);

        return () => {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [isDragging, startX]);

    const getItemTransform = (index: number) => {
        const totalItems = items.length;
        const isMobile = window.innerWidth < 768;

        const screenWidth = window.innerWidth;
        const itemWidth =
            screenWidth < 380 ? 70 : 80;
        const spacing = isMobile ? 5 : 15;

        const visibleCount = 5;
        const activeIndex = currentIndex;

        const basePosition = (activeIndex - index) * (itemWidth + spacing);

        const adjustedPosition = basePosition + dragOffset;

        const distanceFromCenter = Math.abs(adjustedPosition) / (itemWidth + spacing);
        const curveBase = screenWidth > 740 ? 10 : screenWidth < 380 ? 15 : 20;
        const curveOffset = Math.pow(distanceFromCenter, 1.5) * curveBase;

        const yOffset = adjustedPosition !== 0 ? curveOffset : 0;

        const maxVisibleDistance = (visibleCount - 1) / 2;

        return {
            transform: `translateX(${adjustedPosition}px) translateY(${yOffset}px)`,
            zIndex: totalItems - Math.abs(index - activeIndex),
            opacity: distanceFromCenter <= maxVisibleDistance + 0.5 ? 1 : 0,
            pointerEvents: distanceFromCenter <= maxVisibleDistance + 0.5 ? 'auto' as const : 'none' as const,
            transition: isDragging ? 'none' : 'all 0.5s ease-out',
        };
    };

    return (
        <div className="relative w-full  overflow-hsidden">
            <div className="flex flex-col items-center justify-center h-full">
                {/* Carousel wrapper */}
                <div className="relative w-full h-30 xxs:h-40 overflow-hisdden">
                    <div
                        ref={carouselRef}
                        className="relative w-full h-full cursor-grab active:cursor-grabbing select-none px-10 md:px-24"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Carousel track */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {items?.map((item, index) => {
                                const itemStyle = getItemTransform(index);
                                const isActive = item.id === activeTab;

                                return (
                                    <div
                                        key={item.id}
                                        className={`absolute transition-all duration-500 ease-out ${isDragging ? 'transition-none' : ''}`}
                                        style={itemStyle}
                                    >
                                        <button
                                            onClick={() => handleItemClick(item)}
                                            className={`group relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25`}
                                        >
                                            <div className="flex flex-col items-center justify-center space-y-2 p-2">
                                                {/* صورة دائرية صغيرة */}
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    className={`size-14 xxs:size-16 rounded-full object-cover border-2 border-white shadow-md ${isActive ? ' outline-2 outline-offset-2 outline-black' : ''}`}
                                                    draggable={false}
                                                />
                                                {/* عنوان صغير */}
                                                <h3 className="text-xs md:text-sm text-black font-medium text-center">
                                                    {item.name}
                                                </h3>
                                            </div>


                                            {/* Hover effect */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CurvedCarousel;