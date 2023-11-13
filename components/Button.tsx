import React from "react";
import { ButtonProps } from "@/types";

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-[#00aeff] hover:bg-[#009dff] transition duration-300 ease-in-out text-white text-sm font-light py-2 px-10 rounded-md">
      {text}
    </button>
  );
};

export default Button;
