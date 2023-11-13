"use client";
import { useState } from "react";

const Subscribe = () => {
  const [input, setinput] = useState("");
  return (
    <div className="bg-[#f6a26b] text-white rounded-md p-3 w-full mb-5">
      <form
        className="flex flex-col  w-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="text-md mb-3">
          Stay updated with our latest rates
        </label>
        <div>
          <input
            type="text"
            placeholder="Enter email address"
            className="text-xs p-2 font-light rounded-l-md text-black"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#E9640D] text-xs p-2 px-5 rounded-r-md"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
