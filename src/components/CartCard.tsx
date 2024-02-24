"use client";

import { CartContext } from "@/Context/CartContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

const CartCard = ({ item }) => {
  console.log(item);
  const cartData = useContext(CartContext);
  const setFunc = cartData[1];

  const increment = () => {
    setFunc((prevCartData) => {
      const updatedData = prevCartData.map((el) => {
        if (el.id === item.id) {
          return { ...el, count: el.count + 1 };
        }
        return el;
      });
      return updatedData;
    });
  };

  const decrement = () => {
    setFunc((prevCartData) => {
      const updatedData = prevCartData
        .map((el) => {
          if (el.id === item.id && el.count > 0) {
            return { ...el, count: el.count - 1 };
          }
          return el;
        })
        .filter((el) => el.count !== 0);
      return updatedData;
    });
  };

  return (
    <div className="w-full min-h-[100px] bg-[#7F888F] flex justify-around items-center rounded-2xl text-text">
      <div className="flex justify-center items-center w-1/3 overflow-hidden">
        <Image src={item.image} height={50} width={50} />
      </div>
      <div className="w-2/3 flex justify-around">
        <div className="flex gap-2 ">
          <Plus
            className="bg-primary rounded-full text-black"
            onClick={() => increment()}
          />
          <div className="text-text">{item.count}</div>
          <Minus
            className="bg-primary rounded-full text-black"
            onClick={() => decrement()}
          />
        </div>
        <div>${parseFloat((item.price * item.count).toFixed(2))}</div>
      </div>
    </div>
  );
};

export default CartCard;
