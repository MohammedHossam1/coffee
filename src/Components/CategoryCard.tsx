import type { ICategory } from "../interfaces";

const CategoryCard = ({ category }: { category: ICategory }) => {
    return (
        <div className="bg-white   rounded-xl h-auto shadow-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
            <div className="p-2">

                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-contain"
                />
            </div>

            <div className="p-4 space-y-2 text-center">
                <h2 className="text-xl font-bold text-main">{category.name}</h2>
                <p className="text-main font-semibold text-lg">
                    ${category.price}
                </p>

                {/* <p className="text-sm text-gray-600 line-clamp-2">{category.desc}</p> */}
            </div>
        </div>
    );
};

export default CategoryCard;
