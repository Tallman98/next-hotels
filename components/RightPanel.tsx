import { areas } from "@/constants";
import { PageProps } from "@/types";
import React from "react";
import { CheapHotelsBtn, FilterBtnCard } from ".";
import Link from "next/link";

const RightPanel = ({ params }: PageProps) => {
  return (
    <div className="flex flex-col flex-wrap max-w-full">
      <h1 className="text-[#084482] text-xl font-semibold mb-3">
        3,454 Hotels in {params.city}
      </h1>
      <h2 className="text-[#4f4f4f] text-[18px]">
        Select & book from 3,454 Hotel near {params.city}
      </h2>
      <p className="text-[#4f4f4f] font-light text-md my-3">
        Book a great hotel in {params.city}. Hotels.ng has luxury hotels, cheap
        hotels, lodges, airbnbs in {params.city}, short-let apartments and more.
        All at the best rates that are only available online!
      </p>
      <div className="flex justify-between mt-2 text-sm text-[#4f4f4f] items-center font-light">
        <h2>Only show hotels in area</h2>
        <div className="flex gap-8">
          {areas.map((area) => (
            <Link
              href="/"
              className="text-[#084482] hover:border-b hover:border-[#084482]"
            >
              {area.place}
            </Link>
          ))}
        </div>
        <button className="border p-2 pr-10 rounded-md text-[#4f4f4f]">
          Choose another area
        </button>
      </div>
      <FilterBtnCard />
      <div className="text-sm w-full flex items-center gap-4 mb-5">
        <h2 className="text-[#4f4f4f] font-light">Only show</h2>
        <div className="flex gap-4">
          {areas.map((area) => (
            <CheapHotelsBtn place={area.place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
