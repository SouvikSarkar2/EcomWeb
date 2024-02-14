"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-0 w-full min-h-[100px] border-2 border-white flex items-center justify-between p-4 sm:p-8">
      <div>Logo</div>
      <div className="hidden sm:flex gap-2 ">
        <div>Plans</div>
        <div>FAQ</div>
        <div>About</div>
        <div>Connect</div>
      </div>
      <div className="hidden sm:flex gap-2">
        <div>Login</div>
        <div>Signup</div>
      </div>
      {!isOpen ? (
        <div className="flex sm:hidden" onClick={() => setIsOpen(true)}>
          HGM
        </div>
      ) : (
        <div className="absolute border-2 right-0 top-0 flex sm:hidden w-[70%] flex-col justify-center items-center gap-6 h-[100vh]">
          <div
            className="absolute top-3 right-0 p-6"
            onClick={() => setIsOpen(false)}
          >
            CROSS
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
