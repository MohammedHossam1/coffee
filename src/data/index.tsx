import type { ICategory } from "../interfaces";

// استيراد الصور
import img111 from "/src/assets/slide-main.png"
import img222 from "/src/assets/slide-main.png"
import img333 from "/src/assets/slide-main.png"
import img444 from "/src/assets/slide-main.png"
import img555 from "/src/assets/slide-main.png"
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";




// كاتيجوري بالك صور
export const categories: ICategory[] = [
  { id: 1, price: 16.99, name: "قهوه", text: "Mo", image: img2 },
  { id: 2, price: 16.99, name: "شاي", text: "Mo", image: img3 },
  { id: 3, price: 16.99, name: "عصير", text: "Mo", image: img4 },
  { id: 4, price: 16.99, name: "عصير", text: "Mo", image: img1 },
];
export const categories2: ICategory[] = [
  { id: 1, price: 16.99, name: "قهوه", text: "Mo", image: img111 },
  { id: 2, price: 16.99, name: "شاي", text: "Mo", image: img333 },
  { id: 3, price: 16.99, name: "عصير", text: "Mo", image: img222 },
  { id: 4, price: 16.99, name: "عصير", text: "Mo", image: img333 },
  { id: 5, price: 16.99, name: "عصير", text: "Mo", image: img444 },
  { id: 6, price: 16.99, name: "عصير", text: "Mo", image: img555 },

];
export const defaultItems = [
  {
    image: `https://picsum.photos/seed/1/800/600?grayscale`,
    text: "Bridge",
  },
  {
    image: `https://picsum.photos/seed/2/800/600?grayscale`,
    text: "Desk Setup",
  },
  {
    image: `https://picsum.photos/seed/3/800/600?grayscale`,
    text: "Waterfall",
  },
  {
    image: `https://picsum.photos/seed/4/800/600?grayscale`,
    text: "Strawberries",
  },
  {
    image: `https://picsum.photos/seed/5/800/600?grayscale`,
    text: "Deep Diving",
  },
  {
    image: `https://picsum.photos/seed/16/800/600?grayscale`,
    text: "Train Track",
  },
  {
    image: `https://picsum.photos/seed/17/800/600?grayscale`,
    text: "Santorini",
  },
  {
    image: `https://picsum.photos/seed/8/800/600?grayscale`,
    text: "Blurry Lights",
  },
  {
    image: `https://picsum.photos/seed/9/800/600?grayscale`,
    text: "New York",
  },
  {
    image: `https://picsum.photos/seed/10/800/600?grayscale`,
    text: "Good Boy",
  },
  {
    image: `https://picsum.photos/seed/21/800/600?grayscale`,
    text: "Coastline",
  },
  {
    image: `https://picsum.photos/seed/12/800/600?grayscale`,
    text: "Palm Trees",
  },
];