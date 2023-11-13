import { BookCardProps } from "@/types";

const BookCard = ({ hotels, state, reviews }: BookCardProps) => {
  return (
    <div>
      <h2 className="text-[#00aeff] text-lg font-semibold">
        Hotels in {state}
      </h2>
      <p className="text-[#4f4f4f] font-light text-sm">
        {hotels} hotels in Abia with over {reviews} hotel reviews
      </p>
    </div>
  );
};

export default BookCard;
