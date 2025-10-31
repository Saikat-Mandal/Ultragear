'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Funnel, Heart, Plus } from "lucide-react";
import Image from "next/image";
import mainImage from "@/app/assets/images/gta.jpeg";
import { useCartStore } from "./store/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProducts } from "./utils/products";
import { Product } from "./types/types";
import Loader from "./components/Loader";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(); // ✅ mock API call
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div className="p-4 relative min-h-screen overflow-hidden myFont md:mx-auto md:w-3/4">
      <h1 className="text-2xl mt-4 font-semibold">Catalogue</h1>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center gap-2 md:flex-row mt-6">
        <Button className="bg-[#ffffff] text-black hover:bg-[#f18a10] hover:text-white rounded-xl">
          <Funnel /> Filter
        </Button>
        <Button className=" shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl text-[#ffffff] bg-[#f18a10] hover:bg-orange-400">
          PS5
        </Button>
        <Button className=" shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl text-[#ffffff] bg-[#f18a10] hover:bg-orange-400">
          PS4
        </Button>
        <Button className=" shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl bg-[#ffffff] text-black hover:bg-orange-400 hover:text-white">Xbox</Button>
      </div>

      {/* GAME CARDS */}
      <div className="mt-6 min-h-screen overflow-x-auto cursor-pointer p-6">
        {loading ? (
          <div className="text-center text-gray-600 mt-10 w-full flex justify-center">
            <Loader />
          </div>
        ) : (
          <div
            className="
              grid grid-cols-2 gap-4
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              min-w-max md:min-w-0
            "
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="
                shadow-[0_8px_30px_rgb(0,0,0,0.10)]
                w-46 md:w-56 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-4 bg-[#ffffff]"
              >
                <div className="flex justify-between mb-2">
                  <Heart className="text-gray-600 hover:text-red-500 transition-colors" />
                  <span
                    onClick={() => addToCart(product, "day")}
                    className="cursor-pointer"
                  >
                    <Plus className="text-amber-500" />
                  </span>
                </div>

                <Link href={`/games/${product.id}`}>
                  <div className="relative w-full overflow-hidden rounded-lg">
                    <Image
                      src={product.imageUrl || mainImage}
                      alt={`${product.name} Cover`}
                      width={800}
                      height={600}
                      className="object-contain md:object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center py-3">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      from ₹{product.dayPrice}/-
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
