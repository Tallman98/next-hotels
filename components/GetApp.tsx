const GetApp = () => {
  return (
    <>
      <div className="bg-[#eff8fb] pt-20">
        <div className="flex gap-10 items-center lg:max-w-[1000px] 2xl:max-w-[1300px] mx-auto ">
          <div className="w-[100%]">
            <img
              src="https://static.hotels.ng/v7/img/footer/get-app-image-international.png"
              alt="phone image"
              className="w-full"
            />
          </div>
          <div className="flex flex-col pl-5 w-full">
            <h1 className="text-[#00aeff] font-semibold text-[55px] leading-tight">
              Get the <br /> Hotels.ng app
            </h1>
            <h2 className="font-semibold text-2xl text-[#4f4f4f]">
              Download the hotels.ng app and <br /> book a hotel instantly
            </h2>
            <p className="text-[#4f4f4f] font-light text-lg">
              Book your hotel instantly with our Android app.
            </p>
            <button>
              <img
                src="https://static.hotels.ng/v7/img/google-play-min.png"
                alt="download btn"
                className="mt-5"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#084482] ">
        <div className="lg:max-w-[1050px] mx-auto flex gap-10 py-5 ">
          <div className="flex gap-3">
            <div className="bg-white rounded-full max-w-[45px] flex justify-center p-3">
              <img src="/padlock.png" alt="padlock" className="w-full" />
            </div>
            <div>
              <h2 className="text-white text-lg">
                Enter your email address to unlock hotel deals
              </h2>
              <p className="text-[#00aeff] text-sm font-extralight">
                Sign up to start receiving exclusive offers
              </p>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-96 p-2 text-sm font-light rounded-md rounded-r-none"
            />
            <button className="bg-[#00aeff] hover:bg-[#009dff] transition duration-300 ease-in-out text-white text-sm font-light py-2 px-16 rounded-md rounded-l-none">
              Unlock
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetApp;
