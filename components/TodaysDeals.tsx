import HotelCard from "./HotelCard";
import { hotels } from "@/constants";

const TodaysDeals = () => {
  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="font-semibold text-2xl text-[#4f4f4f]">
        Today's Top Hotel Deals
      </h2>
      <p className="text-[#4f4f4f] font-light text-lg">
        A selection of the best hotel deals, only available today
      </p>
      <div className=" border-2 border-[#00aeff] w-[3rem] my-[1.2rem]"></div>
      <div className="grid grid-cols-3 gap-6 w-1/2">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            name={hotel.name}
            address={hotel.address}
            hotel={hotel.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaysDeals;
