import { Button, RangeSlider, Subscribe } from ".";
import Link from "next/link";
import { PageProps } from "@/types";
import FilterListIcon from "@mui/icons-material/FilterList";

const LeftPanel = ({ params }: PageProps) => {
  return (
    <div className="flex flex-col  mt-16 min-w-[23%] 2xl:min-w-[23%]">
      <Subscribe />
      <Link
        href="/"
        className="bg-[#00aeff] text-white py-2 text-center text-sm rounded-md hover:bg-[#009dff] transition duration-300 ease-in-out"
      >
        Shortlet Apartments in {params.city}
      </Link>
      <div className="w-full border border-slate-400 mt-9 rounded-sm text-[#4f4f4f]">
        <div className="flex p-3 gap-2 items-center border-slate-400 border-b">
          <FilterListIcon fontSize="small" />
          <h2>Search Filters</h2>
        </div>
        <div className="py-5 px-3 border-b border-slate-400">
          <h2 className="text-sm mb-5">What is your budget per night?</h2>
          <div className="flex justify-between text-sm">
            <p>From #0</p>
            <p>To #40,000</p>
          </div>
          <div className="px-3">
            <RangeSlider />
          </div>
          <div className="w-full mb-3">
            <button className="bg-[#00aeff] w-full rounded-md py-2 text-white hover:bg-[#009dff] transition duration-300 ease-in-out">
              Refine Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
