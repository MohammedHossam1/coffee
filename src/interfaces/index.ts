export interface IProduct {
  id: number;
  images: string[];
  title: string;
  price: number;
  category: string
  desc: string
}
export interface ICategory {
  id: number;
  image: string;
  text: string;
  name: string;
  price: number;
}



// interfaces/apiResponse.ts

export interface Category {
  id: number;
  name: string;
  image: string;
}
export interface Size { id: number, name: string, currency: string; price: number }

export interface Product {
  id: number;
  name: {
    en: string;
    ar: string;
  }; // حسب اللغة، ممكن يكون name: { en: string, ar: string }
  description: {
    en: string;
    ar: string;
  };
  image: string;
  price: string;
  sizes: Size[];
  category: Category;
}

export interface Slider {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ApiData {
  categories: Category[];
  products: Product[];
  sliders: Slider[];
}

export interface ApiResponse {
  success: boolean;
  data: ApiData;
  status: number;
  message: string;
}
