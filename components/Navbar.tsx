import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#00aeff]">
      <div className="flex  xl:max-w-[1350px] 2xl:max-w-[1780px] py-3 mx-auto justify-between">
        <div className="text-white">
          <Link href="/">
            <h1 className="text-3xl">Hotels.ng</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <div className="object-contain w-[40px]">
            <Link href="/">
              <Image
                src="/whatsapp_logo.png"
                width={40}
                height={40}
                alt="whatsapp"
              />
            </Link>
          </div>
          <div className="flex bg-[#1f4e66] rounded-3xl">
            <div className="object-contain w-[40px] ">
              <img
                src="https://static.hotels.ng/v7/img/navbar-contact-min.jpg"
                alt="phone picture"
                className="rounded-full"
              />
            </div>
            <div className="mx-2 mr-5 flex flex-col">
              <p className="text-[#00aeff] text-[10px]">
                You can call us to book your hotel
              </p>
              <p className="text-white font-light text-[14px]">
                +234 708 331 6900
              </p>
            </div>
          </div>
          <div className="w-[40px] object-contain flex gap-[2px]">
            <Link href="/">
              <Image src="/naija_flag.png" width={40} height={40} alt="flag" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[35px] flex ">
              <Link href="/">
                <Image
                  src="/account-icon.png"
                  width={35}
                  height={35}
                  alt="account pic"
                  className="rounded-full"
                />
              </Link>
            </div>
            <p className="text-white font-light">Account</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
