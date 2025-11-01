import { Product, RentalType } from "../types/types";
import modernWarfare from "@/app/assets/images/modernWarfare.jpg";
import eldenRing from "@/app/assets/images/eldenRing.jpeg";
import gow from "@/app/assets/images/gow.jpeg";
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
      "Experience the sprawling open world of Los Santos in one of the best-selling games ever made. Step into the lives of three distinct criminals — Michael, Franklin, and Trevor — as their stories intertwine in a city filled with opportunity, chaos, and betrayal. The seamless switching between characters brings a new level of depth to storytelling and gameplay.\n\nExplore vast urban landscapes, engage in high-speed chases, or just relax and enjoy the dynamic world around you. With its realistic world design, online multiplayer, and endless replayability, GTA V continues to be a benchmark for open-world gaming.",
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
      "Swing through the vibrant city of New York as both Peter Parker and Miles Morales in this highly anticipated sequel. Spider-Man 2 delivers fast-paced action, heartfelt storytelling, and cinematic visuals that redefine superhero games. The combat system has been refined with new symbiote powers and advanced web-slinging mechanics.\n\nBeyond the fights, experience the personal struggles of two heroes balancing their lives and responsibilities. The city feels alive with side missions, emotional moments, and an immersive story that pulls you deep into the Marvel universe.",
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
      "Join Kratos and Atreus on a mythic journey through the Nine Realms as they prepare for Ragnarok — the end of days. The sequel builds upon its predecessor’s success with breathtaking visuals, emotionally rich storytelling, and visceral combat that blends strategy with raw power.\n\nFace gods and monsters of Norse mythology in an epic tale of destiny, love, and redemption. The father-son bond continues to evolve, offering moments of warmth and tension against a backdrop of an impending apocalypse.",
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
      "Venture into the majestic yet perilous Forbidden West with Aloy as she unravels the mysteries of a dying Earth. This open-world masterpiece offers stunning landscapes, from lush jungles to ruined cities reclaimed by nature, filled with mechanical beasts and ancient secrets.\n\nArmed with a bow, spear, and wit, Aloy must unite warring tribes and uncover what threatens the planet’s survival. The story blends technology and mythology in a world that feels both alien and deeply human.",
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
      "Embark on an epic journey through the Lands Between, a vast world crafted by the minds of Hidetaka Miyazaki and George R.R. Martin. Elden Ring redefines the open-world RPG genre with challenging combat, deep lore, and freedom to explore its hauntingly beautiful landscapes.\n\nFrom towering castles to cursed dungeons, each corner of this world tells a story. Forge your own path as a Tarnished warrior, conquer fearsome foes, and uncover the secrets behind the shattered Elden Ring.",
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
      "Experience the emotional journey of Joel and Ellie in this rebuilt version of the acclaimed survival drama. Set in a post-apocalyptic America ravaged by infection, The Last of Us Part I brings stunning visuals, improved controls, and immersive storytelling to a new generation.\n\nThe game explores themes of love, loss, and humanity’s resilience amidst despair. Every encounter, from quiet conversations to brutal battles, leaves a lasting impression that makes this one of the most powerful narratives in gaming history.",
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
      "Join Task Force 141 in the next chapter of the iconic Modern Warfare series. Featuring cinematic storytelling, next-gen visuals, and intense tactical combat, this game pushes the boundaries of military realism. Experience missions across land, sea, and air in a global conflict that demands precision and teamwork.\n\nMultiplayer and co-op modes bring endless replayability, letting players test their skills against the best. With its gripping campaign and cutting-edge gameplay, Modern Warfare II defines the modern first-person shooter.",
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

export const optionsForRental: RentalType[] = ["day", "weekly", "monthly"];
