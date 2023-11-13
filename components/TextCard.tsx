"use client";
import React from "react";
import { TextCardProps } from "@/types";
import { useRouter } from "next/navigation";

const TextCard = ({ city, hotels, id }: TextCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${city}`);
  };
  return (
    <button
      className="border-2 border-[#00aeff] py-2 px-6 rounded-md text-center hover:bg-[#00aeff] transition duration-300 ease-in-out text-[#00aeff] hover:text-white"
      onClick={handleClick}
    >
      <h2 className="leading-3">Hotels in</h2>
      <h2>{city}</h2>
      <span className="text-[#4f4f4f] mt-2 font-thin">{hotels} hotels</span>
    </button>
  );
};

export default TextCard;
