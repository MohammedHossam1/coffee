// components/BottomSheet.tsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaX } from "react-icons/fa6";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 z-40"
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  />
);


const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop onClose={onClose} />
          <motion.div
            ref={sheetRef}
            className="fixed  bottom-0 z-70 top-20 left-0 right-0 bg-white rounded-t-2xl shadow-xl p-4"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_event, info) => {
              if (info.offset.y > 100) {
                onClose(); // Close if dragged down over 100px
              }
            }}
          >
            <div className="w-14 h-1 bg-black rounded-full mx-auto " />
            <div className="flex items-center justify-between gap-2 border-b border-b-black/10 pb-2 ">
              <h1 className="text-sm font-extrabold">تفاصيل المنتج</h1>
              <div onClick={onClose}><FaX size={10} /></div>
            </div>
            <div className="overflow-y-auto hide-scrollbar h-full py-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
