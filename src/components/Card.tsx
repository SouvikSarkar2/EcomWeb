import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-[#7F888F] h-[200px] w-[screen] sm:w-[400px] flex rounded-lg items-center gap-6 p-4 mt-1 relative">
      <div className=" h-[150px] w-1/3 overflow-hidden rounded-lg">
        <Image src={data?.image} height={150} width={150} />
      </div>
      <div className="w-2/3 text-text font-semibold flex flex-col gap-10">
        <div>{data?.title}</div>
        <div className="font-bold text-primary">${data?.price}</div>
      </div>
      <div className="absolute right-4 bottom-4 bg-primary rounded-full text-secondary cursor-pointer">
        <Plus />
      </div>
    </div>
  );
};

export default Card;
