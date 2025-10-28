export type RentalType = 'day' | 'weekly' | 'monthly';

export interface Product {
  name: string;
  dayPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
}

export interface CartItem {
  id: string;
  name: string;
  rentalType: RentalType;
  price: number;
  quantity: number;
}