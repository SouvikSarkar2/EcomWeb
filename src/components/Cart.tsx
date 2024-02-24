"use client";

import { ShoppingCart, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/Context/CartContext";
import CartCard from "./CartCard";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const data = useContext(CartContext);
  const cart = data[0];
  const [cost, setCost] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCost(0);
    setCount(0);
    cart.map((item) => {
      setCost((cost) => (cost += item.price * item.count));
      setCount((count) => (count += item.count));
    });
  }, [cart]);

  console.log("data from cart :", cart);

  return (
    <div>
      {!isOpen ? (
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Cart
          <div className="relative">
            <ShoppingCart />
            <div className="absolute -top-3 -right-2 text-xs bg-red-500 text-text rounded-full px-1">
              {count !== 0 && count}
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute overflow-y-scroll right-0 top-0 w-screen sm:w-[30vw] h-screen z-20 bg-text border-4 border-primary rounded-lg">
          <div className="flex flex-row-reverse pt-4 pr-4">
            <X onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
          </div>
          <div className="flex justify-center items-center h-[100px] text-4xl font-dahlia">
            Your Cart
          </div>
          {data[0].length === 0 && (
            <div className="flex justify-center items-center h-[200px] text-xl font-normal">
              Start By Adding Something
            </div>
          )}
          <div className="p-4 flex flex-col gap-4 overflow-y-scroll max-h-[70vh]">
            {cart.map((item) => (
              <CartCard item={item} />
            ))}
          </div>
          <div className="absolute bottom-6 flex justify-around w-full items-center">
            <div> Total Amount : ${parseFloat(cost.toFixed(2))}</div>
            <div
              className={`${
                cost === 0
                  ? "hidden"
                  : "bg-[#7F888F] text-text px-4 py-2 rounded-xl cursor-pointer"
              }`}
              onClick={() => {
                localStorage.setItem("price", `${cost}`);
                router.push("/payment");
              }}
            >
              Checkout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
