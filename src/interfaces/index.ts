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
  
  export interface Product {
    id: number;
    name: string | Record<string, string>; // حسب اللغة، ممكن يكون name: { en: string, ar: string }
    description: string | Record<string, string>;
    image: string;
    price: string;
    // ممكن تضيف خصائص تانية حسب الحاجة
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
  