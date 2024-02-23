import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const handleAdd = () => {
    const storageData = localStorage.getItem("cart");
    if (!storageData) {
      const initialObject = { objects: [] };
      const initialData = JSON.stringify(initialObject);
      localStorage.setItem("cart", `${initialData}`);
    }
    const jsonData = JSON.parse(storageData);
    // console.log("jsonData :", jsonData);
    const newData = (jsonData, data) => {
      jsonData?.objects.push(data);
      return jsonData;
    };
    const updatedData = newData(jsonData, data);
    localStorage.setItem("cart", `${JSON.stringify(updatedData)}`);
    console.log("updatedData :", updatedData);
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
      <div className="absolute right-4 bottom-4 bg-primary rounded-full text-secondary cursor-pointer">
        <Plus
          onClick={() => {
            handleAdd();
          }}
        />
      </div>
    </div>
  );
};

export default Card;
