'use client'

import { fetchProductById } from "@/app/utils/products";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../../types/types";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import demo from "../../assets/modernWarfare.jpg";
import RadioSelector from "@/app/components/RadioSelector";

const Page = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const id = params.id;

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
          src={demo}
          alt={`${product.name} Cover`}
          width={500}
          height={500}
          className="object-contain rounded"
        />
      </div>

      {/* Right Section - Product Info */}
      <div className="order-2 md:order-3 flex-1 bg-gray-100 p-4 rounded bg-white shadow-[0_8px_30px_rgb(0,0,0,0.10)] rounded-xl">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <RadioSelector
          options={[`Daily price ${product?.dayPrice}/-`, `Weekly price ${product?.weeklyPrice}/-`, `Monthly Price ${product?.monthlyPrice}/-`]}
        //   buttonWidth={400} // Each button will be 150px wide
          onChange={(index) => console.log('Selected:', index)}
          />

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
