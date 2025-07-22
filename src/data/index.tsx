import type { IProduct } from "../interfaces";

// استيراد الصور
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img7 from "../assets/7.png";
import img11 from "../assets/11.png";
import img22 from "../assets/22.png";
import img33 from "../assets/33.png";

// بيانات المنتجات
export const productsData: IProduct[] = [
  {
    id: 1,
    title: "Espresso",
    images: [img1, img2, img3, img4, img7],
    price: 45,
    category: "Espresso",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 2,
    title: "Cappuccino",
    images: [img7, img1, img2, img3, img4],
    price: 55,
    category: "Milk Coffee",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 3,
    title: "Latte",
    images: [img4, img1, img2, img3, img7],
    price: 50,
    category: "Milk Coffee",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 4,
    title: "Mocha",
    images: [img3, img1, img2, img4, img7],
    price: 60,
    category: "Chocolate",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 5,
    title: "Americano",
    images: [img1, img2, img3, img4, img7],
    price: 40,
    category: "Black Coffee",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 6,
    title: "Turkish Coffee",
    images: [img1, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 7,
    title: "Iced Coffee",
    images: [img1, img2, img3, img4, img7],
    price: 48,
    category: "Cold",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
];

export const productsData2: IProduct[] = [
  {
    id: 8,
    title: "Turkish Coffee",
    images: [img11, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 9,
    title: "Turkish Coffee",
    images: [img22, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 10,
    title: "Turkish Coffee",
    images: [img33, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 11,
    title: "Turkish Coffee",
    images: [img11, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 12,
    title: "Turkish Coffee",
    images: [img22, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
  {
    id: 13,
    title: "Turkish Coffee",
    images: [img33, img2, img3, img4, img7],
    price: 35,
    category: "Turkish",
    desc: "A rich and bold espresso, perfectly concentrated and served in a small cup for an intense coffee experience.",
  },
];

// كاتيجوري متعددة
export const categoriesData = [
  { id: 1, name: "برجر" },
  { id: 2, name: "بيتزا" },
  { id: 3, name: "سوشي" },
  { id: 4, name: "حلويات" },
  { id: 5, name: "فراخ" },
  { id: 6, name: "باستا" },
  { id: 7, name: "آسيوي" },
  { id: 8, name: "برجر" },
  { id: 9, name: "بيتزا" },
  { id: 10, name: "سوشي" },
  { id: 11, name: "حلويات" },
  { id: 12, name: "فراخ" },
];

// كاتيجوري بالك صور
export const categories = [
  { id: 1, name: "قهوة", image: img2 },
  { id: 2, name: "شاي", image: img3 },
  { id: 3, name: "عصير", image: img4 },
];
