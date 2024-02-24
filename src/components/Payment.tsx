"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Payment = () => {
  const totalAmount = localStorage.getItem("price");
  const router = useRouter();
  return (
    <div className="bg-text h-screen flex flex-col p-6 text-3xl font-bold">
      <div className="">Payment</div>
      <div className="min-h-[300px] flex justify-center items-center">
        You have to Pay : ${totalAmount}
      </div>
      <div className="min-h-[200px] flex justify-center items-center">
        Pay Option Coming Soon!!!
      </div>
      <div
        className="bg-primary w-[200px] flex justify-center items-center px-2 py-2 rounded-xl text-xl"
        onClick={() => router.push("/")}
      >
        <ArrowLeft size={30} />
        Go Back
      </div>
    </div>
  );
};

export default Payment;
