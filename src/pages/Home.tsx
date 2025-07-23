import CategoryCard from "../Components/CategoryCard";
import { categories, categories2 } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ✅ السلايدر */}
      <div className="px-4 pt-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          {categories2.map((category, i) => (
            <SwiperSlide key={i}>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}


        </Swiper>
      </div>

      {/* ✅ الكروت تحت السلايدر */}
      <div className="columns-2 gap-4 px-4 space-y-4 pt-10">
        {categories.map((category, i) => (
          <Link 
            to={`/category-details/${category.name}`}
            key={category.id}
            className={`block break-inside-avoid ${i === 0 ? "mt-12" : ""}`}
          >
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
