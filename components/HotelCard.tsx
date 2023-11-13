import { HotelCardProps } from "@/types";
import Image from "next/image";

const HotelCard = ({ hotel, name, address }: HotelCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img src={hotel} alt={name} className="w-full" />
      </div>
      <div className="border-2 px-3 py-1 rounded-b-md">
        <h2 className="text-[#00aeff] font-semibold">{name}</h2>
        <p className="text-[#4f4f4f] text-sm font-light">{address}</p>
      </div>
    </div>
  );
};

export default HotelCard;
