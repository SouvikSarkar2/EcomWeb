"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";

const Main = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data :", data);
  return (
    <section className=" min-h-screen bg-[#F8F1DD]">
      <div className="flex justify-center items-center text-4xl sm:text-6xl py-10 font-cerlions font-bold">
        <div>Products</div>
      </div>
      <div className="flex flex-col sm:flex-row m-4 gap-6 flex-wrap justify-center pb-10">
        {data.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </section>
  );
};

export default Main;
