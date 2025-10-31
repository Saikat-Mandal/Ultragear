import { Product } from "../types/types";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "GTA V",
    publisher: "Rockstar Games",
    dayPrice: 199,
    weeklyPrice: 399,
    monthlyPrice: 899,
    imageUrl: "/assets/images/gta.jpeg"
  },
  {
    id: 2,
    name: "Spider-Man 2",
    publisher: "Insomniac Games",
    dayPrice: 249,
    weeklyPrice: 499,
    monthlyPrice: 999,
    imageUrl: "/assets/images/gta.jpeg"
  },
  {
    id: 3,
    name: "God of War Ragnarok",
    publisher: "Santa Monica Studio",
    dayPrice: 299,
    weeklyPrice: 599,
    monthlyPrice: 1199,
    imageUrl: "/assets/images/gta.jpeg"
  },
  {
    id: 4,
    name: "Horizon Forbidden West",
    publisher: "Guerrilla Games",
    dayPrice: 199,
    weeklyPrice: 449,
    monthlyPrice: 899,
    imageUrl: "/assets/images/gta.jpeg"
  },
  {
    id: 5,
    name: "Elden Ring",
    publisher: "FromSoftware",
    dayPrice: 249,
    weeklyPrice: 499,
    monthlyPrice: 999,
    imageUrl: "/assets/images/gta.jpeg"
  },
  {
    id: 6,
    name: "The Last of Us Part I",
    publisher: "Naughty Dog",
    dayPrice: 299,
    weeklyPrice: 599,
    monthlyPrice: 1099,
    imageUrl: "/assets/images/gta.jpeg"
  },
  {
    id: 7,
    name: "COD modern warfare II",
    publisher: "Activision",
    dayPrice: 299,
    weeklyPrice: 599,
    monthlyPrice: 1099,
    imageUrl: "/assets/images/modernWarfare.jpg"
  }
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 1000); // 1 second delay
  });
};

export const fetchProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === Number(id));
      resolve(product);
    }, 1000); // 1 second delay
  });
};

export const optionsForRental = [
  'day' , 'weekly' , 'monthly'
]