"use client";

import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import CartCard from "@/components/CartCard";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("cart"));
  console.log("data from cart :", data);
  return (
    <div>
      {!isOpen ? (
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Cart
          <ShoppingCart />
        </div>
      ) : (
        <div className="absolute right-0 top-0 w-screen sm:w-[30vw] h-screen overflow-scroll z-10 bg-text border-4 border-primary rounded-lg">
          <div className="flex flex-row-reverse pt-4 pr-4">
            <X onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
          </div>
          <div className="flex justify-center items-center h-[100px] text-4xl font-dahlia">
            Your Cart
          </div>
          {!data && (
            <div className="flex justify-center items-center h-[200px] text-xl font-normal">
              Start By Adding Something
            </div>
          )}
          <div>
            {data?.objects.map((item) => (
              <div>
                <CartCard item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
