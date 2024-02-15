"use client";

import {
  Cross,
  LucideMenuSquare,
  Menu,
  MenuSquare,
  SquareIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-0 w-full max-w-[1366px] min-h-[100px] flex items-center justify-between p-4 sm:p-8">
      <div>
        <Image alt="Logo" src={"/Logo.png"} width={120} height={120} />
      </div>
      <div className="hidden sm:flex gap-6 font-semibold">
        <div>Plans</div>
        <div>FAQ</div>
        <div>About</div>
        <div>Connect</div>
      </div>
      <div className="hidden sm:flex gap-2 sm:gap-6 justify-center items-center">
        <div className="font-bold cursor-pointer">Login</div>
        <div className="bg-text cursor-pointer text-secondary rounded-3xl font-bold text-sm px-3 py-2">
          Signup
        </div>
      </div>
      {!isOpen ? (
        <div className="flex mr-6 sm:hidden" onClick={() => setIsOpen(true)}>
          <MenuSquare height={40} width={40} />
        </div>
      ) : (
        <div className="absolute bg-text text-secondary font-bold right-0 top-0 flex sm:hidden w-[70%] flex-col justify-center items-center gap-6 h-[100vh]">
          <div
            className="absolute top-3 right-0 p-6"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </div>
          <div>Plans</div>
          <div>FAQ</div>
          <div>About</div>
          <div>Connect</div>
          <div>Login</div>
          <div>Signup</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
