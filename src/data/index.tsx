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
