import { motion } from "framer-motion";

const Card = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">وصف مختصر للكارت.</p>
    </motion.div>
  );
};

const CardsSection = () => {
  const cards = ["خدمة 1", "خدمة 2", "خدمة 3", "خدمة 4"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {cards.map((card, index) => (
        <Card key={index} title={card} />
      ))}
    </div>
  );
};

export default CardsSection;
