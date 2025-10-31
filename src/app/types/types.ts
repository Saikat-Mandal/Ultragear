export type RentalType = 'day' | 'weekly' | 'monthly';

export interface Product {
  id: number;
  name: string;
  publisher:string;
  dayPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  imageUrl : string;
}

export interface CartItem {
  id: string; // unique per product + rentalType
  productId: number; // actual product id
  name: string;
  rentalType: RentalType;
  price: number;
  quantity: number;
}