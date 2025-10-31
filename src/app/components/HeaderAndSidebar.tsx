'use client'

import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";

const HeaderAndSidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();


  const [noOfItems, setNoOfItems] = useState(0);
  const cart = useCartStore(state => state.cart);

  
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);


  useEffect(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setNoOfItems(totalItems);
  }, [cart]);


  return (
    <div className="myFont">
      {/* HEADER */}
      <header className="p-4 flex justify-between items-center bg-[#ffffff]">
        <Button
          onClick={() => setSidebarOpen(true)}
          className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl"
        >
          <Menu />
        </Button>
        <h1 className="text-3xl font-semibold">Ultragear</h1>
        <div className="relative">
          <Button
            onClick={() => router.push('/cart')}
            className="bg-[#ffffff] text-black hover:bg-[#f18a10] rounded-xl relative"
          >
            <ShoppingCart />
            {noOfItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#f18a10] text-white text-xs font-bold rounded-full px-2 py-0.5">
                {noOfItems}
              </div>
            )}
          </Button>
        </div>
      </header>
      {/* SIDEBAR + BACKDROP */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${sidebarOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${sidebarOpen ? "opacity-40" : "opacity-0"
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
            <Link href="/" className="text-left hover:text-[#f18a10] transition-colors duration-200">
              Home
            </Link>
            <Link href="/orders" className="text-left hover:text-[#f18a10] transition-colors duration-200">
              Orders
            </Link>
            <Link href="/wishlist" className="text-left hover:text-[#f18a10] transition-colors duration-200">
              Wishlist
            </Link>
            <Link href="/account" className="text-left hover:text-[#f18a10] transition-colors duration-200">
              Account
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HeaderAndSidebar