// Products.tsx
import type { IProduct } from "../interfaces";
import Product from "./Product";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // تأخير بين ظهور كل عنصر
        },
    },
};

const Products = ({ data }: { data: IProduct[] }) => {
    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 min-h-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {data.length ? data?.map((item: IProduct) => (
                <Product key={item.id} item={item} />
            )) : <h1 className="text-center my-2 mx-auto col-span-6 text-base lg:text-xl font-bold">لا يوجد منتجات</h1>}
        </motion.div>
    );
};

export default Products;
