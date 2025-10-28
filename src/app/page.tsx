'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Funnel, Heart, Menu, Plus, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import mainImage from "@/app/assets/gta.jpeg";
import { useState } from "react";

export default function Home() {

 const [sidebarOpen, setSidebarOpen] = useState(false);
 
 return (
    <div className="p-4 bg-[#f4f5fc] relative min-h-screen overflow-hidden">
        {/* HEADER */}
    <header className="py-4 flex justify-between items-center">
      <Button
         onClick={() => setSidebarOpen(true)}
         className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl"
          >
        <Menu />
      </Button>
              <h1 className="text-3xl font-semibold">Ultragear</h1>
      <Button className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl">
              <ShoppingCart />
      </Button>
      </header>
     {/* SIDEBAR + BACKDROP */}
      <div
       className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
         sidebarOpen
           ? "visible opacity-100"
           : "invisible opacity-0"
       }`}
>
       {/* BACKDROP */}
        <div
         onClick={() => setSidebarOpen(false)}
         className={`absolute inset-0 bg-black transition-opacity duration-300 ${
           sidebarOpen ? "opacity-40" : "opacity-0"
         }`}
        ></div>
       {/* SIDEBAR PANEL */}
      <div
         className={`absolute top-0 left-0 h-full w-64 bg-white shadow-2xl rounded-r-2xl
           transform transition-transform duration-300 ease-in-out
           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
         `}
        >
        <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Menu</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(false)}
        >
            <X />
</Button>
</div>
      <nav className="flex flex-col p-4 gap-4 text-lg">
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
                  🏠 Home
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
                  🎮 Catalogue
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
                  🛒 Orders
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
                  ❤️ Wishlist
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
                  ⚙️ Settings
      </button>
      </nav>
</div>
</div>
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
      <div className="flex flex-col items-center py-3">
          <p className="font-semibold">GTA V</p>
    <p className="text-sm text-gray-500">from ₹299/-</p>
    </div>
        </Card>
      </div>
  </div>
  </div>
 );
}