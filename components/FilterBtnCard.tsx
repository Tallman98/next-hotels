"use client";
import { filterBtnData } from "@/constants";
import { useState } from "react";
import { FilterBtn } from ".";

const FilterBtnCard = () => {
  const [activeFilterCard, setActiveFilterCard] = useState("stat");
  return (
    <div className="flex w-full">
      {filterBtnData.map((data) => (
        <FilterBtn
          icon={data.icon}
          name={data.name}
          onClick={() => setActiveFilterCard(data.icon)}
          active={data.icon === activeFilterCard}
        />
      ))}
    </div>
  );
};

export default FilterBtnCard;
