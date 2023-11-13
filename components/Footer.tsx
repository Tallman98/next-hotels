import React from "react";
const companies = [
  "Visa",
  "Blog",
  "About Us",
  "Press Page",
  "Job Openings",
  "Privacy Policy",
  "Terms of Service",
  "How It Works",
];
const communities = [
  "Twitter",
  "Facebook",
  "Instagram",
  "Travel Blog",
  "Tourist Attractions",
  "Travel Guide",
  "Top Hotels in Nigeria",
  "Top Places in Nigeria",
  "Cars in Nigeria",
];
const top_cities = [
  "Hotels in Lagos",
  "Hotels in Calabar",
  "Hotels in Abuja",
  "Hotels in Ikoyi",
  "Hotels in Port Harcourt",
  "Hotels in Owerri",
  "Hotels in Maryland",
  "Hotels in Abia",
  "Hotels in Jos",
];
const top_destinations = [
  "Abuja",
  "Calabar",
  "Lagos",
  "Enugu",
  "Port Harcourt",
  "Benin city",
  "Ibadan",
  "Abeokuta",
];
const top_hotels = [
  "Ibis Lagos Airport",
  "Hotel Ibis Lagos Ikeja",
  "Beni Apartments",
  "Beni Gold Hotel and Apartments",
  "Beni Hotels",
  "Grand Ibro Hotel",
  "Choice Suits (Formerly Chantella Suites)",
  "Silver Grandeur Hotel",
  "Integrity Hotel and Suites",
  "Jeromes Garden and Suits",
];

const Footer = () => {
  return (
    <div className="mt-7 ">
      <div className="grid grid-cols-5 lg:max-w-[1000px] 2xl:max-w-[1300px] mx-auto justify-between text-gray-400 border-b pb-1">
        <h2>Company</h2>
        <h2>Community</h2>
        <h2>Top Cities</h2>
        <h2>Top Destinations</h2>
        <h2>Top Hotels</h2>
      </div>
      <div className="grid grid-cols-5 lg:max-w-[1000px] 2xl:max-w-[1300px] mx-auto justify-between text-[#00aeff] text-sm font-extralight mt-2 pb-5 border-b">
        <div>
          {companies.map((company) => (
            <p>{company}</p>
          ))}
        </div>
        <div>
          {communities.map((community) => (
            <p>{community}</p>
          ))}
        </div>
        <div>
          {top_cities.map((city) => (
            <p>{city}</p>
          ))}
        </div>
        <div>
          {top_destinations.map((destination) => (
            <p>{destination}</p>
          ))}
        </div>
        <div>
          {top_hotels.map((hotel) => (
            <p>{hotel}</p>
          ))}
        </div>
      </div>
      <div className="flex lg:max-w-[1000px] 2xl:max-w-[1300px] mx-auto justify-between text-gray-500 mt-5 mb-10">
        <div className="flex">
          <div>
            <p>Copyright &copy; 2023 TallmanTek🚀</p>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
