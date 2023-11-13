import { BookCard } from ".";
import { endpoints } from "@/constants";

const Book = () => {
  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="font-semibold text-2xl text-[#4f4f4f]">
        Which City Do You Want To Book A Hotel ?
      </h2>
      <p className="text-[#4f4f4f] font-light text-lg">
        7,201 hotels in 1,853 cities / towns in Nigeria
      </p>
      <div className=" border-2 border-[#00aeff] w-[3rem] my-[1.2rem]"></div>
      <div className="grid grid-cols-5 gap-8 lg:max-w-[1050px] mt-4">
        {endpoints.map((endpoint) => (
          <BookCard
            hotels={endpoint.hotels}
            state={endpoint.state}
            reviews={endpoint.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;
