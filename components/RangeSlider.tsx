"use client";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value: number) {
  return `#${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([0, 40000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => "Budget range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
