
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

export interface IProduct {
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
export interface video {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  path: string;

}
export interface ApiData {
  categories: Category[];
  products: IProduct[];
  sliders: Slider[];
  sucess_stories: []
  videos: video[]
}

export interface ApiResponse {
  success: boolean;
  data: ApiData;
  status: number;
  message: string;
}
export interface SuccessStories {
  id: number,
  owner_name: string,
  rate: number,
  description: string

}
