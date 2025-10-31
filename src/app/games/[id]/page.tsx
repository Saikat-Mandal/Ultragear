'use client'

import { fetchProductById, optionsForRental } from "@/app/utils/products";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product, RentalType } from "../../types/types";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import demo from "../../assets/images/modernWarfare.jpg";
import RadioSelector from "@/app/components/RadioSelector";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/app/store/cartStore";
import { ShoppingCart } from "lucide-react";

const Page = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [rentalType , setRentalType] = useState<string | null>(null)
  const id = params.id;
  console.log(rentalType);
  
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await fetchProductById(id);
      console.log(data);
      setProduct(data || null);
      setLoading(false);
    };

    if (id) loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-gray-500 flex w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[90vh] gap-6 p-6 ">
      {/* Center Section - Image */}
      <div className="order-1 md:order-2 flex-1 flex items-center justify-center p-4 rounded bg-white shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl">
        <Image
          src={ product.imageUrl || demo}
          alt={`${product.name} Cover`}
          width={500}
          height={500}
          className="object-contain rounded"
        />
      </div>

      {/* Right Section - Product Info */}
      <div className="order-2 md:order-3 flex-1 bg-gray-100 p-4 rounded bg-white shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl">
        <h1 className="text-5xl text-center font-bold mb-4 mt-2">{product?.name}</h1>
        <h1 className="text-2xl text-center font-bold my-4">{product?.publisher}</h1>
        <div className="my-4 flex justify-center">
          <RadioSelector
          options={[`Daily price ${product?.dayPrice}/-`, `Weekly price ${product?.weeklyPrice}/-`, `Monthly Price ${product?.monthlyPrice}/-`]}
          onChange={(index) => setRentalType(optionsForRental[index])}
          />
        </div>
         <Button
            onClick={() => addToCart(product, rentalType as RentalType)}
            className="cursor-pointer"
          >
            <ShoppingCart/> Add to cart
          </Button>
      </div>

      {/* Left Section - Game Info */}
      <div className="order-3 md:order-1 flex-1 bg-gray-100 p-4 rounded bg-white shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Game Info</h2>
        <p>This is a AAA game.</p>
        <p>Highly rated and popular among gamers.</p>
      </div>
    </div>
  );
};

export default Page;
