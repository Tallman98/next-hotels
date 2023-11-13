import { Input, Button } from ".";

const Deals = () => {
  return (
    <div className="flex flex-col items-center bg-[#fafafa] py-10">
      <h2 className="font-semibold text-2xl text-[#4f4f4f]">
        Special Hotel Deals and Offers
      </h2>
      <p className="text-[#4f4f4f] font-light text-lg">
        Enter your email address to receive secret hotel deals
      </p>
      <div className="flex gap-3 mt-7">
        <Input type="text" placeholder="Enter your email address" />
        <Button text={"Subscribe"} />
      </div>
    </div>
  );
};

export default Deals;
