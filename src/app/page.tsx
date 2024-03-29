import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-secondary text-text flex justify-center items-center h-full flex-col gap-4 overflow-hidden">
      <Navbar />
      <div className="text-5xl sm:text-7xl font-bold text-center">
        <div className="font-ageya sm:text-[100px]">Welcome To Ecomweb</div>
      </div>
      <div className="p-7">
        &quot;Discover endless possibilities at your premier online shopping
        destination.&quot;
      </div>
      <Image
        className="absolute right-10 bottom-2 hidden 2xl:flex"
        alt="dooodle image"
        src={"/png/DoogieDoodle.png"}
        width={300}
        height={300}
      />
      <Link href={"/main"}>
        <div className="bg-tertiary px-7 py-2 sm:px-10 sm:py-4 rounded-full cursor-pointer text-text">
          Enter
        </div>
      </Link>
    </div>
  );
}
