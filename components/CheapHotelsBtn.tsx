import { AreaProps } from "@/types";
import React from "react";

const CheapHotelsBtn = ({ place }: AreaProps) => {
  return (
    <button className="font-light border border-[#00aeff] text-[#00aeff] hover:bg-[#00aeff] hover:text-white transition ease-in-out duration-500 text-sm px-3 py-1 rounded-full">
      Cheap Hotels in {place}
    </button>
  );
};

export default CheapHotelsBtn;
