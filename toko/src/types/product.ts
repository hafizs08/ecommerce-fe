export interface ProductImage {
  id: number;
  imageUrl: string;
  publicId: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  categoryId: number;
  category: Category;
  name: string;
  description: string;
  price: string;
  stock: number;
  isActive: number;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}