import { Input, TextCard, Button } from ".";
import { textCards } from "@/constants";

const Hero = () => {
  return (
    <div className="mb-14">
      <div className="w-full relative flex justify-center items-center ">
        <img
          src="/v7-homepage1.jpg"
          alt="hero image"
          className="object-contain w-full"
        />
        <div className="text-white absolute top-[40%] z-10">
          <div className="text-center ">
            <h1 className="text-[40px] font">
              Find and book hotels in Nigeria.
            </h1>
            <p className="text-2xl font-light">
              Search through 13,244 hotels in Nigeria
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      </div>
      <div className="relative ">
        <div className="flex gap-2 bg-white p-9 shadow-xl lg:max-w-[1050px] mx-auto absolute top-[-3rem] 2xl:left-[25%] xl:left-[16.5%]">
          <Input
            type={"text"}
            placeholder={"Search for a city or particular hotel"}
          />
          <Input type="date" placeholder="Select a date" />
          <Button text="Find Hotels" />
        </div>
      </div>
      <div className="mt-32 flex flex-col items-center">
        <h2 className="text-[#4f4f4f] text-2xl font-semibold">
          Suggested Destinations in Nigeria
        </h2>
        <p className="text-[#4f4f4f] font-light text-lg">
          Below are the most popular travel destinations in Nigeria
        </p>
        <div className=" border-2 border-[#00aeff] w-[3rem] my-[1.2rem]"></div>
        <div className="my-4 flex gap-4">
          {textCards.map((textCard) => (
            <TextCard
              city={textCard.city}
              hotels={textCard.hotels}
              id={textCard.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
