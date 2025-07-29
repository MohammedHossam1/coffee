import "swiper/css";
import { categories } from "../data";
import type { Category } from "../interfaces";

export default function CurvedSwiper({ setActiveTab, data }: { setActiveTab: (p: number) => void, data: Category[]}) {
  const total = categories.length;
  const curveStrength = 40;
  return (
    <div className="flex justify-around relative  translate-y-5  rounded-t-full items-end gap-4 pt-10">
      {data?.slice(0, 4).map((slide, i) => {
        // احسب النسبة من -1 إلى 1
        const t = (i / (total - 1)) * 2 - 1;
        // حرك العنصر لأعلى حسب موقعه على القوس
        const yOffset = -Math.pow(t, 2) * curveStrength + curveStrength;

        return (
          <div
            onClick={() => {
              setActiveTab(i);
            }}
            key={slide.id}
            className="flex flex-col items-center  transition-transform duration-300"
            style={{
              transform: `translateY(-${yOffset}px)`,
            }}
          >

            <div className="rounded-full size-14 bg-white text-main flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.name}
                className="size-9 object-contain"
              />
            </div>
            <h3 className="text-xs font-extrabold mt-2">{slide.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
