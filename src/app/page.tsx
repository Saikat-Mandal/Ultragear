'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Funnel, Heart,Plus} from "lucide-react";
import Image from "next/image";
import mainImage from "@/app/assets/gta.jpeg";

export default function Home() {



 return (
    <div className="p-4 bg-[#f4f5fc] relative min-h-screen overflow-hidden myFont">
     
     {/* MAIN CONTENT */}
<h1 className="text-2xl mt-4 font-semibold">Catalogue</h1>
     {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center gap-2 md:flex-row mt-6">
            <Button className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl">
            <Funnel /> Filter
            </Button>
            <Button className="rounded-xl text-[#ffffff] bg-[#f18a10] hover:bg-orange-400" variant="secondary">
                    PS5
            </Button>
            <Button className="rounded-xl text-[#ffffff] bg-[#f18a10] hover:bg-orange-400" variant="secondary">
                    PS4
            </Button>
            <Button className="rounded-xl bg-[#ffffff]" variant="secondary">
                    Xbox
            </Button>
       </div>
     {/* GAME CARDS */}
    <div className="mt-6 min-h-screen overflow-x-auto cursor-pointer p-4">
      <div
         className="
           grid grid-cols-2 gap-4
           sm:grid-cols-2
           md:grid-cols-3
           lg:grid-cols-4
           min-w-max md:min-w-0
         "
        >
         {/* Example Card */}
      <Card className="w-46 md:w-auto border-2 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-4 bg-[#ffffff]">
      <div className="flex justify-between mb-2">
          <Heart className="text-gray-600 hover:text-red-500 transition-colors" />
          <Plus className="text-amber-500" />
      </div>
    <div className="relative w-full md:aspect-[4/5] overflow-hidden rounded-lg">
            <Image
               src={mainImage}
               alt="GTA V Cover"
               width={800}
               height={600}
               className="object-contain md:object-cover"
             />
      </div>
      <div className="flex flex-col items-center py-3 ">
          <p className="font-semibold ">GTA V</p>
    <p className="text-sm text-gray-500">from ₹299/-</p>
    </div>
        </Card>
      </div>
  </div>
  </div>
 );
}