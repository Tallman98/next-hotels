import { Button } from ".";

const Features = () => {
  return (
    <div className="lg:max-w-[1050px] flex flex-col items-center mx-auto my-20">
      <h2 className="font-semibold text-2xl text-[#4f4f4f]">
        We've been featured in
      </h2>
      <div className=" border-2 border-[#00aeff] w-[3rem] mt-[1.2rem]"></div>
      <div className="flex gap-20 items-center mb-20">
        <div className="max-w-[215px]">
          <img src="/bbc_logo.png" alt="bbc" className="w-full" />
        </div>
        <div className="max-w-[215px]">
          <img src="/forbes_logo.png" alt="forbes" className="w-full" />
        </div>
        <div className="max-w-[215px]">
          <img src="/newsweek_logo.png" alt="newsweek" className="w-full" />
        </div>
        <div className="max-w-[215px]">
          <img src="/ITWEB_AFRICA.png" alt="itweb" className="w-full" />
        </div>
      </div>
      <h2 className="font-semibold text-2xl text-[#4f4f4f] mb-2">
        Get More Bookings for Your Hotel
      </h2>
      <p className="text-[#4f4f4f] text-lg font-light mb-7">
        Find out why over 13,247 hotel managers trust Hotels.ng
      </p>
      <Button text="Add Your Hotel" />
    </div>
  );
};

export default Features;
