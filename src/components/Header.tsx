"use client";
import Cart from "@/components/Cart";
import { useRouter } from "next/navigation";
import { useState, SetStateAction, Dispatch } from "react";

type StateType = null | number;
type SetStateType = Dispatch<SetStateAction<StateType>>;

function Header() {
  const router = useRouter();
  const [isActive, setIsActive]: [StateType, SetStateType] =
    useState<StateType>(null);

  const menu = [
    { category: "electronics", link: "electronics" },
    { category: "jewelery", link: "jewelery" },
    { category: "men's clothing", link: "men%27s%20clothing" },
    { category: "women's clothing", link: "women%27s%20clothing" },
  ];
  return (
    <>
      <section className="sticky top-0 z-10 min-h-[120px] max-w-[1920px] overflow-visible flex justify-center items-center bg-[#F8F1DD]  text-black">
        <div className="min-w-[90vw] top-0 flex justify-between sm:min-w-[85vw] bg-primary min-h-[10px] items-center font-bold p-6 mt-4 rounded-3xl">
          <div
            className=" font-bold text-3xl font-canopee cursor-pointer"
            onClick={() => router.push("/")}
          >
            EW
          </div>
          <div className="hidden sm:flex gap-6 font-bold font-confillia text-2xl uppercase">
            {menu.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsActive(index);
                  router.push(`/main?q=${item.link}`);
                  router.refresh();
                }}
                className={
                  isActive === index
                    ? "border-black border-b-4 cursor-pointer"
                    : "cursor-pointer"
                }
              >
                {item.category}
              </div>
            ))}
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
