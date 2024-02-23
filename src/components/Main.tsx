"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

const Main = ({ searchParams }) => {
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
    refetch();
  }, [searchParams.q, refetch]);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="min-h-screen bg-[#F8F1DD]">
      <div className="flex justify-center items-center text-4xl sm:text-6xl py-10 font-cerlions font-bold">
        <div>Products</div>
      </div>
      <div className="flex flex-col sm:flex-row m-4 gap-6 flex-wrap justify-center pb-10">
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Main;
