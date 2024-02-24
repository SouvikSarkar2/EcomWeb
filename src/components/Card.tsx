import { CartContext } from "@/Context/CartContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";

const Card = ({ data }) => {
  const cartData = useContext(CartContext);
  const setFunc = cartData[1];
  let present = false;
  let count = 0;
  const presentCheck = () => {
    cartData[0].map((item) => {
      if (data.id === item.id) {
        present = true;
        count = item.count;
      }
    });
  };
  presentCheck();

  // console.log(present);

  const handleAdd = () => {
    setFunc([...cartData[0], { ...data, count: 1 }]);
  };

  const increment = () => {
    setFunc((prevCartData) => {
      const updatedData = prevCartData.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return updatedData;
    });
  };

  const decrement = () => {
    setFunc((prevCartData) => {
      const updatedData = prevCartData
        .map((item) => {
          if (item.id === data.id && item.count > 0) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
        .filter((item) => item.count !== 0);
      return updatedData;
    });
  };

  return (
    <div className="bg-[#7F888F] h-[200px] w-[screen] sm:w-[400px] flex rounded-lg items-center gap-6 p-4 mt-1 relative">
      <div className=" h-[150px] w-1/3 overflow-hidden rounded-lg">
        <Image alt="" src={data?.image} height={150} width={150} />
      </div>
      <div className="w-2/3 text-text font-semibold flex flex-col gap-10">
        <div>{data?.title}</div>
        <div className="font-bold text-primary">${data?.price}</div>
      </div>

      {!present ? (
        <div className="absolute right-4 bottom-4 bg-primary rounded-full text-secondary cursor-pointer font-bold px-2 py-1">
          <div
            onClick={() => {
              handleAdd();
            }}
          >
            ADD
          </div>
        </div>
      ) : (
        <div className="flex gap-2 font-bold absolute right-4 bottom-4">
          <Plus
            className="bg-primary rounded-full"
            onClick={() => increment()}
          />
          <div className="text-text">{count}</div>
          <Minus
            className="bg-primary rounded-full"
            onClick={() => decrement()}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
