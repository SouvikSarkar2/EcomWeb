"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";

const Main = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data :", data);
  return (
    <section className=" min-h-screen">
      <div>
        {data.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </section>
  );
};

export default Main;
