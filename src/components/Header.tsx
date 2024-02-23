import { ShoppingCart } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <>
      <section className=" min-h-[120px] max-w-[1920px] overflow-hidden flex justify-center items-center relative bg-[#F8F1DD]  text-black">
        <div className="min-w-[90vw] absolute top-0 flex justify-between sm:min-w-[85vw] bg-primary min-h-[10px] items-center font-bold p-6 mt-4 rounded-3xl">
          <div className=" font-bold text-3xl font-canopee">EW</div>
          <div className="hidden sm:flex gap-6 font-bold font-confillia text-3xl uppercase">
            <div>All</div>
            <div>Fashion</div>
            <div>Jewelry</div>
            <div>Electronics</div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            Cart
            <ShoppingCart />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
