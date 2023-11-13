"use client";
import { useRef, useState } from "react";
import { InputProps } from "@/types";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Input = ({ type, placeholder }: InputProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setisFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type="text"
        ref={ref}
        className={`border ${
          isFocused ? "border-[#00aeff]" : "border-slate-400"
        } w-96 p-2 text-sm font-light rounded-md`}
      />
      <div className="absolute top-0 left-0 z-10 w-full flex items-center">
        <div className="p-2">
          {type === "text" ? (
            <SearchIcon fontSize="small" color="action" />
          ) : (
            <DateRangeIcon fontSize="small" color="action" />
          )}
        </div>
        <input
          type={"text"}
          ref={ref}
          placeholder={placeholder}
          className="w-full p-2 bg-transparent outline-none"
          onFocus={() => {
            if (type === "date" && ref.current) {
              ref.current.type = "date";
            } else if (type === "text" && ref.current) {
              setisFocused(true);
            }
          }}
          onBlur={() => {
            if (type === "date" && ref.current) {
              ref.current.type = "text";
            } else if (type === "text" && ref.current) {
              setisFocused(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Input;
