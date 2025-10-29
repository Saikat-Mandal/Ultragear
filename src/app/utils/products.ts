import { Product } from "../types/types";

export const mockProducts: Product[] = [
  { id: 1, name: "GTA V", dayPrice: 199, weeklyPrice: 399, monthlyPrice: 899 },
  { id: 2, name: "Spider-Man 2", dayPrice: 249, weeklyPrice: 499, monthlyPrice: 999 },
  { id: 3, name: "God of War Ragnarok", dayPrice: 299, weeklyPrice: 599, monthlyPrice: 1199 },
  { id: 4, name: "Horizon Forbidden West", dayPrice: 199, weeklyPrice: 449, monthlyPrice: 899 },
  { id: 5, name: "Elden Ring", dayPrice: 249, weeklyPrice: 499, monthlyPrice: 999 },
  { id: 6, name: "The Last of Us Part I", dayPrice: 299, weeklyPrice: 599, monthlyPrice: 1099 },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 1000); // 1 second delay
  });
};