import { motion } from "framer-motion";
import { useState } from "react";



const CardsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      initial={{ borderRadius: 50 }}
      animate={{ borderRadius:isOpen ? 0 : 100 }}
      className="flex h-[100px] w-[100px] items-center justify-center bg-black data-[expanded=true]:h-[200px] data-[expanded=true]:w-[400px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="h-10 w-10 rounded-full bg-white" />
    </motion.div>
  );
};

export default CardsSection;
