'use client'

import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const HeaderAndSidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

  return (
    <div className="myFont">
    {/* HEADER */}
    <header className="p-4 flex justify-between items-center">
      <Button
         onClick={() => setSidebarOpen(true)}
         className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl"
          >
        <Menu />
      </Button>
              <h1 className="text-3xl font-semibold">Ultragear</h1>
      <Button
      onClick={() => router.push('/cart')}
       className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl">
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
      <nav className="flex flex-col items-center p-4 gap-4 text-lg">
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
        Home
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
        Catalogue
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
        Orders
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
        Wishlist
      </button>
      <button className="text-left hover:text-[#f18a10] transition-colors duration-200">
        Settings
      </button>
      </nav>
</div>
</div>
    </div>
  )
}

export default HeaderAndSidebar