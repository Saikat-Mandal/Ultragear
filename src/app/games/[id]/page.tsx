'use client'

import { fetchProductById, optionsForRental } from "@/app/utils/products";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product, RentalType } from "../../types/types";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import RadioSelector from "@/app/components/RadioSelector";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/app/store/cartStore";
import { MoveRight } from "lucide-react";

const Page = () => {
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [rentalType, setRentalType] = useState<RentalType>("day");
    const id = params.id;

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
        <div className="flex flex-col md:flex-row h-auto md:h-[90vh] gap-6 p-6 myFont">
            {/* Center Section - Image */}
            <div className="order-1 md:order-2 flex-1 flex items-center justify-center p-4  rounded-xl bg-white">
                <Image
                    src={product.imageUrl}
                    alt={`${product.name} Cover`}
                    width={500}
                    height={500}
                    className="object-contain rounded"
                />
            </div>

            {/* Right Section - Product Info */}
            <div className="order-2 md:order-3 flex-1 p-4  rounded-xl">
                <h1 className="text-5xl text-center font-bold mb-4 mt-2">{product?.name}</h1>
                <h1 className="text-2xl text-center font-semibold my-4 text-gray-400">{product?.publisher}</h1>
                <div className="bg-white p-4 rounded-xl ">
                    <div className="my-4">
                        <RadioSelector
                            options={[`Daily price ${product?.dayPrice}/-`, `Weekly price ${product?.weeklyPrice}/-`, `Monthly Price ${product?.monthlyPrice}/-`]}
                            onChange={(index) => setRentalType(optionsForRental[index])}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            if (!rentalType) {
                                alert("Please select a rental type before adding to cart");
                                return;
                            }
                            addToCart(product, rentalType as RentalType);
                        }}
                        variant="outline"
                        className="cursor-pointer rounded-full border-2 border-black hover:bg-[#F18A10] hover:text-white"
                        disabled={product.stockQuantity == 0}
                    >
                        Add to cart
                        <MoveRight />
                    </Button>
                </div>
            </div>

            {/* Left Section - Game Info */}
            <div className="order-3 md:order-1 flex-1 p-4  rounded-xl">
                <h2 className="text-2xl font-semibold mb-2">Game Info</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">Description</AccordionTrigger>
                        <AccordionContent>
                            {product.description}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">Additional information</AccordionTrigger>
                        <div className="flex gap-x-2">
                            <AccordionContent className="font-bold">
                                Publisher :
                            </AccordionContent>
                            <AccordionContent>
                                {product.publisher}
                            </AccordionContent>
                        </div>
                        <div className="flex gap-x-2">
                            <AccordionContent className="font-bold">
                                Genre :
                            </AccordionContent>
                            <AccordionContent>
                                {product.genre}
                            </AccordionContent>
                        </div>
                        <div className="flex gap-x-2">
                            <AccordionContent className="font-bold">
                                Platform :
                            </AccordionContent>
                            <AccordionContent>
                                {product.platform}
                            </AccordionContent>
                        </div>
                        <div className="flex gap-x-2">
                            <AccordionContent className="font-bold">
                                Country of origin :
                            </AccordionContent>
                            <AccordionContent>
                                {product.countryOfOrigin}
                            </AccordionContent>
                        </div>
                        <div className="flex gap-x-2">
                            <AccordionContent className="font-bold">
                                PEGI rating :
                            </AccordionContent>
                            <AccordionContent>
                                {product.pegiRating}
                            </AccordionContent>
                        </div>
                        <div className="flex gap-x-2">
                            <AccordionContent className="font-bold">
                                Internet required :
                            </AccordionContent>
                            <AccordionContent>
                                {product.internetRequired ? 'Yes' : 'No'}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Page;
