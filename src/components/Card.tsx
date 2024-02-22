import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const image = data.images[0];
  let url = image;
  if (url.startsWith("[")) {
    // Link starts with brackets, use substring
    url = url.substring(2, url.length - 2);
  }
  if (url.startsWith("1")) {
    return <>none</>;
  }
  console.log("url from card :", url);
  return (
    <div className="bg-[#F8F1DD] h-[300px] w-[screen] sm:w-[200px] flex">
      <div className="">
        <Image src={url} width={200} height={200} />
      </div>
      <div className="">
        <div>{data.title}</div>
        <div>{data.price}</div>
      </div>
    </div>
  );
};

export default Card;
