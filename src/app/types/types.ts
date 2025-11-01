import { StaticImageData } from "next/image";

export type RentalType = "day" | "weekly" | "monthly";

export interface Product {
  id: number;
  name: string;
  publisher: string;
  dayPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  imageUrl: string | StaticImageData;
  description: string;
  genre: string;
  platform: string;
  countryOfOrigin: string;
  pegiRating: string;
  internetRequired: boolean;
  stockQuantity: number
}

export interface CartItem {
  id: string; // unique per product + rentalType
  productId: number; // actual product id
  name: string;
  rentalType: RentalType;
  price: number;
  quantity: number;
}
