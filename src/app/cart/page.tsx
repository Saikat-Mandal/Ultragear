'use client';

import { useCartStore } from "../store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty 🛒</h1>
        <p className="text-gray-500">Add some games to start renting!</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <Card key={item.id} className="p-4 flex justify-between items-center">
            <CardContent className="flex w-full justify-between items-center p-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500 capitalize">
                    {item.rentalType} Rental
                  </p>
                  <p className="text-sm font-medium mt-1">
                    ₹{item.price} x {item.quantity} ={" "}
                    <span className="font-bold">
                      ₹{item.price * item.quantity}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value) || 1)
                  }
                  className="w-16 border rounded-md text-center"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-center border-t pt-4">
        <h2 className="text-2xl font-semibold">Total:</h2>
        <p className="text-2xl font-bold">₹{total}</p>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <Button variant="default"
          className="cursor-pointer rounded-full bg-red-500 text-white hover:bg-red-800 hover:text-white">
          Clear Cart
        </Button>
        <Button variant="outline"
          className="cursor-pointer rounded-full bg-green-500 text-white hover:bg-green-800 hover:text-white">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
