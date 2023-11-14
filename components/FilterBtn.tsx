import NotesIcon from "@mui/icons-material/Notes"; //for top pics
import RecommendIcon from "@mui/icons-material/Recommend"; //for most popular
import DiamondIcon from "@mui/icons-material/Diamond"; //for best hotels
import BalconyIcon from "@mui/icons-material/Balcony"; // for luxury hotels
import TokenIcon from "@mui/icons-material/Token"; //for cheap hotels

import { FilterCardProps } from "@/types";

const FilterBtn = ({ icon, name, active, onClick }: FilterCardProps) => {
  const conditionalIcon = () => {
    switch (icon) {
      case "stat":
        return <NotesIcon fontSize="small" />;
        break;
      case "luxury":
        return <BalconyIcon fontSize="small" />;
        break;
      case "cheap":
        return <TokenIcon fontSize="small" />;
        break;
      case "best":
        return <DiamondIcon fontSize="small" />;
        break;
      case "popular":
        return <RecommendIcon fontSize="small" />;
        break;
      default:
        console.log("E no work boss");
        return null;
        break;
    }
  };

  return (
    <button
      className={`${
        active
          ? "bg-[#00aeff] text-white border-none"
          : "bg-white text-[#4f4f4f] hover:text-[#00aeff] hover:bg-gray-100 transition duration-300 ease-in-out"
      } py-3 px-2 my-4 w-full border border-slate-400 font-light justify-center flex`}
      onClick={onClick}
    >
      <div className="flex gap-1 items-center">
        {conditionalIcon()}
        <h2>{name}</h2>
      </div>
    </button>
  );
};

export default FilterBtn;
