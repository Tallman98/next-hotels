import { CityCard } from ".";
import { cities } from "@/constants";

const PopularCities = () => {
  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="font-semibold text-2xl text-[#4f4f4f]">
        Popular Cities with Hotels.ng travellers
      </h2>
      <p className="text-[#4f4f4f] font-light text-lg">
        See the top destinations people are travelling to
      </p>
      <div className=" border-2 border-[#00aeff] w-[3rem] my-[1.2rem]"></div>
      <div className="grid grid-cols-3 gap-6 ">
        {cities.map((city) => (
          <CityCard image={city.image} number={city.number} city={city.city} />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
