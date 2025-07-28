import { useEffect, useRef, useState } from "react";
import  boza  from "../assets/cat-tabs/boza.svg";
import  Capa  from "../assets/cat-tabs/Capa.svg";
import  cafe  from "../assets/cat-tabs/cafe.svg";
import  drinks  from "../assets/cat-tabs/drinks.svg";
const categories = [
  { id: 1, name: "بـوظة", src: boza },
  { id: 2, name: "عصـــائر", src: Capa },
  { id: 3, name: "الكافيهات", src: cafe },
  { id: 5, name: "المشروبات.", src:drinks },
];

const CategoriesTabs = () => {
  const [selected, setSelected] = useState<number>(1);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [tabWidth, setTabWidth] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const index = categories.findIndex((cat) => cat.id === selected);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      setTabWidth(currentTab.offsetWidth);
      setOffset(currentTab.offsetLeft);
    }
  }, [selected]);

  return (
    <div className="relative py-3 custom-container">
      <div className="flex gap-2 w-full relative z-10 ">
        {/* <div
          className="absolute -bottom-1 h-[70px] w-200 z-0 transition-all duration-300"
          style={{
            left: offset,
            width: tabWidth + 20,
          }}
        >
          <img
            src={vector}
            alt="curve"
            className="w-full h-full"
          />
        </div> */}

        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="relative w-full z-10 "
            ref={(el) => {
              tabRefs.current[index] = el;
            }}

          >
            <button
              onClick={() => setSelected(cat.id)}
              className={`relative flex flex-col w-full py-3 items-center justify-center gap-2     rounded-3xl transition-all
                  ${selected === cat.id ? "text-black bg-white " : ""}
                `}
            >
              <div className="mb-1">
                <img src={cat.src} alt={cat.name} className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold">{cat.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesTabs;
