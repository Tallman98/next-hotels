import { CityCardProps } from "@/types";

const CityCard = ({ image, number, city }: CityCardProps) => {
  return (
    <div className="relative w-full group overflow-hidden rounded-lg">
      <div>
        <img src={image} alt={`${city} city`} className="w-full " />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className="absolute top-[40%] text-center text-white w-full ">
        <p className="text-xl">{number}</p>
        <h2 className="text-2xl">{city} Hotels</h2>
      </div>
      <div className="absolute bottom-[-100%] bg-[rgba(0,0,0,0.5)] w-full py-4 flex justify-center group-hover:bottom-0 transition-all duration-500">
        <button className="bg-[transparent] border border-white rounded-md text-white p-2 hover:bg-[#00aeff] hover:border-none hover:font-extralight transition duration-500">
          {`Book Hotels in ${city}`}
        </button>
      </div>
    </div>
  );
};

export default CityCard;
