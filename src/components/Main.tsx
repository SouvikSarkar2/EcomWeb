"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface SearchParams {
  q: string;
}

const Main: React.FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  const [query, setQuery] = useState(searchParams.q || "products");
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `${
          searchParams.q
            ? `https://fakestoreapi.com/products/category/${query}`
            : "https://fakestoreapi.com/products"
        }`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    setQuery(searchParams.q || "products");
  }, [searchParams.q]);

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query, refetch]);

  if (isPending)
    return (
      <div className="flex justify-center items-center h-[86vh] sm:h-[84vh] bg-text">
        <Image
          alt=""
          className="bg-text"
          src={"/loader.svg"}
          width={100}
          height={100}
        />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="min-h-[84vh] bg-[#F8F1DD]">
      <div className="flex justify-center items-center text-4xl sm:text-6xl py-10 font-cerlions font-bold">
        <div>Products</div>
      </div>
      <div className="flex flex-col sm:flex-row m-4 gap-6 flex-wrap justify-center pb-10">
        {data.length === 0 && (
          <div className="font-bold text-xl text-red-400 justify-center flex">
            No Products found
          </div>
        )}
        {data.map((data: any) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Main;
