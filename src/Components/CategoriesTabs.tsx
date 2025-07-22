import {
    FaPizzaSlice,
    FaUtensils,
    FaLeaf,
    FaGlassWhiskey,
  } from "react-icons/fa";
  import { useState, useRef, useEffect } from "react";
  
  const categories = [
    { id: 1, name: "Snacks", icon: <FaPizzaSlice size={20} /> },
    { id: 2, name: "Meal", icon: <FaUtensils size={20} /> },
    { id: 3, name: "Vegan", icon: <FaLeaf size={20} /> },
    { id: 5, name: "Drinks", icon: <FaGlassWhiskey size={20} /> },
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
      <div className="relative pt-5 rounded-t-3xl">
        <div className="flex gap-2 w-[96%] relative z-10 px-2">
          {/* ✅ الخلفية المتحركة */}
          <div
            className="absolute -bottom-1 h-[70px] w-200 z-0 transition-all duration-300"
            style={{
              left: offset,
              width: tabWidth+20,
            }}
          >
            <img
              src="/src/assets/tbg2.png"
              alt="curve"
              className="w-full h-full"
            />
          </div>
  
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className="relative w-full z-10"
              ref={(el) => (tabRefs.current[index] = el)}
            >
              <button
                onClick={() => setSelected(cat.id)}
                className={`relative flex flex-col w-full py-2 items-center justify-center  translate-x-2  rounded-2xl transition-all
                  ${selected === cat.id ? "text-orange-500" : "text-white"}
                `}
              >
                <div className="mb-1">{cat.icon}</div>
                <span className="text-xs font-semibold">{cat.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoriesTabs;
  