'use client'

import { fetchProductById } from "@/app/utils/products";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../../types/types"
import Loader from "@/app/components/Loader";

const Page = () => {

    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const id = params.id

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
        return <div className="p-6 text-gray-500 flex w-full items-center justify-center  "><Loader /></div>;
    }

    if (!product) {
        return <div className="p-6 text-red-500">Product not found.</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="font-semibold mt-2">Price: ₹{product.dayPrice}</p>
        </div>
    )
}

export default Page