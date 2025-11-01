import { Product } from "../types/types";
import modernWarfare from "@/app/assets/images/modernWarfare.jpg";
import eldenRing from "@/app/assets/images/eldenRing.jpeg";
import gow from "@/app/assets/images/eldenRing.jpeg";
import lou from "@/app/assets/images/lou.jpeg";
import gta from "@/app/assets/images/gta.jpeg";
import horizon from "@/app/assets/images/horizon.png";
import spiderman from "@/app/assets/images/spiderman.png";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "GTA V",
    publisher: "Rockstar Games",
    dayPrice: 199,
    weeklyPrice: 399,
    monthlyPrice: 899,
    imageUrl: gta,
    description:
      "Experience the sprawling open world of Los Santos in one of the best-selling games ever made.",
    genre: "Action-Adventure",
    platform: "PS5",
    countryOfOrigin: "USA",
    pegiRating: "18+",
    internetRequired: false,
    stockQuantity: 4
  },
  {
    id: 2,
    name: "Spider-Man 2",
    publisher: "Insomniac Games",
    dayPrice: 249,
    weeklyPrice: 499,
    monthlyPrice: 999,
    imageUrl: spiderman,
    description:
      "Swing through New York City as Peter Parker and Miles Morales in an epic superhero adventure.",
    genre: "Action",
    platform: "PS5",
    countryOfOrigin: "USA",
    pegiRating: "16+",
    internetRequired: false,
    stockQuantity: 3
  },
  {
    id: 3,
    name: "God of War Ragnarok",
    publisher: "Santa Monica Studio",
    dayPrice: 299,
    weeklyPrice: 599,
    monthlyPrice: 1199,
    imageUrl: gow,
    description:
      "Join Kratos and Atreus on a mythic journey through the Nine Realms as Ragnarok approaches.",
    genre: "Action-Adventure",
    platform: "PS5",
    countryOfOrigin: "USA",
    pegiRating: "18+",
    internetRequired: false,
    stockQuantity: 2
  },
  {
    id: 4,
    name: "Horizon Forbidden West",
    publisher: "Guerrilla Games",
    dayPrice: 199,
    weeklyPrice: 449,
    monthlyPrice: 899,
    imageUrl: horizon,
    description:
      "Venture into the Forbidden West with Aloy and uncover the mysteries of a dying world.",
    genre: "Open World / RPG",
    platform: "PS5",
    countryOfOrigin: "Netherlands",
    pegiRating: "16+",
    internetRequired: false,
    stockQuantity: 5
  },
  {
    id: 5,
    name: "Elden Ring",
    publisher: "FromSoftware",
    dayPrice: 249,
    weeklyPrice: 499,
    monthlyPrice: 999,
    imageUrl: eldenRing,
    description:
      "Embark on an epic adventure in the Lands Between in this dark fantasy masterpiece.",
    genre: "RPG / Open World",
    platform: "PS5",
    countryOfOrigin: "Japan",
    pegiRating: "16+",
    internetRequired: false,
    stockQuantity: 6
  },
  {
    id: 6,
    name: "The Last of Us Part I",
    publisher: "Naughty Dog",
    dayPrice: 299,
    weeklyPrice: 599,
    monthlyPrice: 1099,
    imageUrl: lou,
    description:
      "Experience Joel and Ellie's story with modern graphics and gameplay enhancements.",
    genre: "Action / Survival",
    platform: "PS5",
    countryOfOrigin: "USA",
    pegiRating: "18+",
    internetRequired: false,
    stockQuantity: 0
  },
  {
    id: 7,
    name: "COD Modern Warfare II",
    publisher: "Activision",
    dayPrice: 299,
    weeklyPrice: 599,
    monthlyPrice: 1099,
    imageUrl: modernWarfare,
    description:
      "Join Task Force 141 in the ultimate modern warfare experience with tactical combat and multiplayer action.",
    genre: "FPS / Action",
    platform: "PS5",
    countryOfOrigin: "USA",
    pegiRating: "18+",
    internetRequired: true,
    stockQuantity: 4
  }
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 1000);
  });
};

export const fetchProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === Number(id));
      resolve(product);
    }, 1000);
  });
};

export const optionsForRental = ["day", "weekly", "monthly"];
