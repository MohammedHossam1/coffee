import type { ICategory, IProduct } from "../interfaces";

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
import img7 from "../assets/7.png";

// بيانات المنتجات
export const productsData: IProduct[] = [
  {
    id: 1,
    title: "إسبريسو",
    images: [img1, img2, img3, img4, img7],
    price: 45,
    category: "إسبريسو",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
  },
  {
    id: 2,
    title: "كابتشينو",
    images: [img7, img1, img2, img3, img4],
    price: 55,
    category: "قهوة بالحليب",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
  },
  {
    id: 3,
    title: "لاتيه",
    images: [img4, img1, img2, img3, img7],
    price: 50,
    category: "قهوة بالحليب",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
  },
  {
    id: 4,
    title: "موكا",
    images: [img3, img1, img2, img4, img7],
    price: 16.99,
    category: "شوكولاتة",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
  },
  {
    id: 5,
    title: "أمريكانو",
    images: [img1, img2, img3, img4, img7],
    price: 16.99,
    category: "قهوة سوداء",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
  },
  {
    id: 6,
    title: "قهوة تركية",
    images: [img1, img2, img3, img4, img7],
    price: 16.99,
    category: "تركي",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
  },
  {
    id: 7,
    title: "قهوة مثلجة",
    images: [img1, img2, img3, img4, img7],
    price: 16.99,
    category: "باردة",
    desc: "اكتشف متعة القهوة كما لم تعشها من قبل. نكهات غنية، روائح تأسر الحواس، وتجربة تُسحر بها من أول فنجان... فهل أنت جاهز؟",
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
