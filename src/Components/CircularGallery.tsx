import { motion } from "framer-motion";
import "swiper/css";
import { categories } from "../data";
import type { Category } from "../interfaces";
import Image from "./shared/Image";

export default function CurvedSwiper({ activeTab, setActiveTab, data }: { activeTab: number, setActiveTab: any, data: Category[] }) {

  const total = categories.length;
  const curveStrength = 40;

  return (
    <div className="flex justify-around relative translate-y-5 rounded-t-full items-end gap-4 pt-10">
      {data?.slice(0, 4).map((slide, i) => {
        const t = (i / (total - 1)) * 2 - 1;
        const yOffset = -Math.pow(t, 2) * curveStrength + curveStrength;
        const isActive = activeTab === slide.id;

        return (
          <motion.div
            key={slide.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActiveTab(slide.id)}
            initial={false}
            animate={{
              scale: isActive ? 1.07 : 1,
              y: isActive ? -yOffset : -yOffset, 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >

            <motion.div
              className={`rounded-full size-14 bg-white text-main flex items-center justify-center border 
                ${isActive ? "border-[#a09180]" : "border-transparent"}`}
              animate={{
                boxShadow: isActive
                  ? "0 0 0 4px rgba(160,145,128,0.2)"
                  : "0 0 0 0px rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={slide.image}
                alt={slide.name}
                className="size-9 object-contain"
              />
            </motion.div>

            <motion.h3
              className={`text-xs font-extrabold mt-2 ${isActive ? "text-d[#a09180]" : ""
                }`}
              animate={{
                color: isActive ? "#a091s80" : "#0000s00",
              }}
              transition={{ duration: 0.3 }}
            >
              {slide.name}
            </motion.h3>
          </motion.div>
        );
      })}
    </div>
  );
}
